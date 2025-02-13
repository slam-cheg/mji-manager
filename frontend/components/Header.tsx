import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type User = {
    isAdmin: boolean;
};

export default function Header() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    // Симуляция загрузки пользователя (в реальном проекте данные могут приходить из API или `localStorage`)
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
        setUser(storedUser);
    }, []);

    // Определяем текущую страницу
    const currentPage = router.pathname;

    // Генерируем ссылки в зависимости от страницы и роли пользователя
    const getLinks = () => {
        if (currentPage === '/lk') {
            return (
                <>
                    {user?.isAdmin ? (
                        <>
                            <Link href="/admin-panel" className="header__text">Админ-панель</Link>
                            <Link href="/user-management" className="header__text">Управление пользователями</Link>
                        </>
                    ) : (
                        <Link href="/profile-settings" className="header__text">Настройки профиля</Link>
                    )}
                </>
            );
        }
        return null;
    };

    return (
        <header className="header">
            <div className="header__left">
                <img src="/images/logo.svg" alt="Логотип" className="logo" />
            </div>
            <div className="header__right">
                {getLinks()}
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
    );
}
