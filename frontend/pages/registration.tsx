import { useState, useEffect } from 'react';
import { validateEmail, validateFio, validatePassword } from '../utils/validation';
import { formatFio } from '../utils/formatting';
import { apiRequest } from '../utils/api';
import Form from '../components/Form';
import { IApiResponse } from '../types';

export default function RegistrationPage() {
  const [fio, setFio] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [formDisabled, setFormDisabled] = useState(true);
  const [status, setStatus] = useState<'start' | 'success' | 'fail'>('start');
  const [registrationKey, setRegistrationKey] = useState('');



  useEffect(() => {
    setFormDisabled(!(validateFio(fio) && validateEmail(login) && validatePassword(password)));
  }, [fio, login, password]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data: IApiResponse = await apiRequest('auth/registration', 'POST', { fio, login, password });
      setRegistrationKey(data.key || 'Ключ не получен');
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('fail');
    }
  }

  return (
<div className="page">
      <header className="header">
        <div className="header__left">
          <img src="../public/images/logo.svg" alt="Логотип" className="logo" />
        </div>
        <div className="header__right">
          <a
            href="https://github.com/eternumart/Chrome-App/archive/refs/heads/dev.zip"
            target="_blank"
            rel="nofollow noopener"
            className="header__text"
          >
            Скачать расширение
          </a>
        </div>
      </header>

      <main className="main">
        <h1 className="h1-title h1-title_center">Регистрация нового аккаунта</h1>

        <section className="section section_grid">
          {status === 'start' && (
            <Form
              className="form_registration"
              inputs={[
                {
                  type: 'text',
                  placeholder: 'И. О. Фамилия',
                  id: 'fio',
                  minLength: 4,
                  required: true,
                  errorMessage: 'Не валидное имя',
                  value: fio,
                  onChange: setFio,
                },
                {
                  type: 'email',
                  placeholder: 'E-mail',
                  id: 'login',
                  required: true,
                  errorMessage: 'Не валидный E-mail',
                  value: login,
                  onChange: setLogin,
                },
                {
                  type: 'password',
                  placeholder: 'Пароль',
                  id: 'password',
                  minLength: 8,
                  required: true,
                  errorMessage: 'Слабый пароль',
                  value: password,
                  onChange: setPassword,
                },
              ]}
              buttonText="Зарегистрироваться"
              buttonId="registration-btn"
              onSubmit={handleSubmit}
            />
          )}

          {status === 'success' && (
            <div className="result result_success">
              <h2 className="h2-title">Регистрация прошла успешно!</h2>
              <div className="result__text-wrapper">
                <p className="result__text">Ваш ключ активации: <strong>{registrationKey}</strong></p>
                <br />
                <a href="../login" className="header__text">
                  Войти в аккаунт
                </a>
              </div>
            </div>
          )}

          {status === 'fail' && (
            <div className="result result_fail">
              <h2 className="h2-title">Ошибка регистрации</h2>
              <div className="result__text-wrapper">
                <p className="result__text">Попробуйте перезагрузить страницу</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
