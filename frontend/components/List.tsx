import React from 'react';

interface ListProps {
    title: string;
    items: any[];
    itemType: 'staff' | 'functions';
}

export default function List({ title, items, itemType }: ListProps) {
    return (
        <div className="list-container">
            <h2 className="h2-title">{title}</h2>
            <ul className="list">
                {items.length === 0 ? (
                    <p>Нет данных</p>
                ) : (
                    items.map((item, index) => (
                        <li key={index} className="list__item">
                            {itemType === 'staff' ? (
                                <>
                                    <h3 className="h3-title">{item.fio}</h3>
                                    <p className="text text__email">{item.login}</p>
                                    <p className="text text__activation">
                                        {item.activated ? 'Активирован' : 'Не активирован'}
                                    </p>
                                    <button className="button button_isAdmin" title="Выдать/снять права админа">
                                        {item.isAdmin ? 'Снять админку' : 'Выдать админку'}
                                    </button>
                                    <button className="button button_delete" title="Деактивировать аккаунт">
                                        X
                                    </button>
                                </>
                            ) : (
                                <label className="label">
                                    <span>{item[0]}</span>
                                    <input type="checkbox" defaultChecked={item[1]} />
                                </label>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
