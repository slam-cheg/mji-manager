import "../styles/lk/index.module.css"
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Form from '../components/Form';
import List from '../components/List';
import { apiRequest } from '../utils/api';
import { validateEmail, validateFio, validatePassword } from '../utils/validation';
import { IUserData } from '../types';
import { API_ROUTES } from '../api.config';

export default function LKPage() {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [fio, setFio] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [staffList, setStaffList] = useState<IUserData[]>([]);
  const [functionsList, setFunctionsList] = useState<Record<string, boolean>>({});  
  const [formDisabled, setFormDisabled] = useState(true);

  // Загружаем данные о пользователе
  useEffect(() => {
    async function fetchUserData() {
        try {
            const data: IUserData = await apiRequest('/api/userdata', 'GET');
            setUserData(data);
            setFio(data.fio);
            setLogin(data.login);
            setIsAdmin(data.isAdmin);
        } catch (error) {
            console.error('Ошибка загрузки данных пользователя:', error);
        }
    }

    fetchUserData();
}, []);

  // Загружаем данные для админа
  useEffect(() => {
    if (userData?.isAdmin) {
        async function fetchAdminData() {
            try {
                // Задаем четкую типизацию
                const response: { staffList: IUserData[]; functionsList: Record<string, boolean> } =
                    await apiRequest('/api/allusersdata', 'POST', { login: userData.login });

                setStaffList(response.staffList || []);
                setFunctionsList(response.functionsList || {});
            } catch (error) {
                console.error('Ошибка загрузки данных администратора:', error);
            }
        }

        fetchAdminData();
    }
}, [userData]);


  // Включаем/отключаем кнопку формы
  useEffect(() => {
    setFormDisabled(!(validateFio(fio) && validateEmail(login) && validatePassword(password)));
}, [fio, login, password]);

  // Функция для изменения профиля
  async function handleProfileUpdate(e: React.FormEvent) {
    e.preventDefault();
    try {
        await apiRequest(API_ROUTES.users.changeAccount, 'PATCH', { fio, login, password });
        alert('Данные успешно обновлены');
    } catch (error) {
        console.error('Ошибка обновления данных:', error);
        alert('Ошибка при обновлении данных');
    }
}

  return (
    <div className="page">
      <Header />
      <main className="main">
        <h1 className="h1-title h1-title_center">
          Профиль {isAdmin && <span>(Администратор)</span>}
        </h1>

        <section className="section section_grid">
          <Form
            className={`form_authorization ${formDisabled ? 'form_disabled' : ''}`}
            inputs={[
              {
                type: 'text',
                placeholder: 'И. О. Фамилия',
                id: 'fio',
                minLength: 4,
                required: true,
                errorMessage: 'Не валидное имя',
                value: fio,
                onChange: (value) => setFio(value),
                preview: true,
                withEditIcon: true,
              },
              {
                type: 'email',
                placeholder: 'E-mail',
                id: 'login',
                required: true,
                errorMessage: 'Не валидный E-mail',
                value: login,
                onChange: (value) => setLogin(value),
                preview: true,
                withEditIcon: true,
              },
              {
                type: 'password',
                placeholder: 'Пароль',
                id: 'password',
                minLength: 8,
                required: true,
                errorMessage: 'Слабый пароль',
                value: password,
                onChange: (value) => setPassword(value),
                preview: true,
                withEditIcon: true,
              },
            ]}
            buttonText="Сохранить изменения"
            buttonId="update-profile-btn"
            onSubmit={handleProfileUpdate}
          />
          <div className="result result_start">
            <h2 className="h2-title">Можно изменить данные о себе</h2>
            <Card title="Информация" children="Ваши данные можно обновить в форме выше." />
          </div>
        </section>

        {/* Блок для админов */}
        {isAdmin && (
          <section className="section section_grid" id="admin">
            <List title="Список сотрудников" items={staffList} itemType="staff" />
            <List title="Функции системы" items={Object.entries(functionsList)} itemType="functions" />
          </section>
        )}
      </main>
    </div>
  );
}
