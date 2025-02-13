import { useState } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import { validateEmail, validatePassword } from '../utils/validation';
import { apiRequest } from '../utils/api';
import { API_ROUTES } from '../api.config';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [formDisabled, setFormDisabled] = useState(true);
  const [status, setStatus] = useState<'start' | 'success' | 'fail'>('start');

  // Проверяем валидность формы
  function checkFormValidity() {
    setFormDisabled(!(validateEmail(login) && validatePassword(password)));
  }

  // Отправка формы входа
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      await apiRequest(API_ROUTES.auth.login, 'POST', { data: { login: login, password: password } });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('fail');
    }
  }

  return (
    <div className="page">
      <Header />
      <main className="main">
        <h1 className="h1-title h1-title_center">Вход в аккаунт</h1>

        <section className="section section_grid">
          {status === 'start' && (
            <Form
              className={`form_authorization ${formDisabled ? 'form_disabled' : ''}`}
              inputs={[
                {
                  type: 'email',
                  placeholder: 'E-mail',
                  id: 'login',
                  required: true,
                  errorMessage: 'Не валидный E-mail',
                  value: login,
                  onChange: (value) => {
                    setLogin(value);
                    checkFormValidity();
                  },
                },
                {
                  type: 'password',
                  placeholder: 'Пароль',
                  id: 'password',
                  minLength: 8,
                  required: true,
                  errorMessage: 'Слабый пароль',
                  value: password,
                  onChange: (value) => {
                    setPassword(value);
                    checkFormValidity();
                  },
                },
              ]}
              buttonText="Войти"
              buttonId="login-btn"
              onSubmit={handleLogin}
            />
          )}

          {status === 'fail' && (
            <div className="result result_fail">
              <h2 className="h2-title">Ошибка входа</h2>
              <div className="result__text-wrapper">
                <p className="result__text">Неверный E-mail или пароль</p>
                <br />
                <a href="../registration" className="header__text">
                  Нет аккаунта?
                </a>
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="result result_success">
              <h2 className="h2-title">Успешный вход!</h2>
              <div className="result__text-wrapper">
                <p className="result__text">Вы будете перенаправлены в личный кабинет</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
