import { useState, useEffect } from 'react';
import Header from '../components/Header';
import GroupComponent from '../components/GroupComponent';
import { apiRequest } from '../utils/api';
import { IUserData } from '../types';
import { API_ROUTES } from '../api.config';

interface IAppDataResponse {
  defectsData: Record<string, any>;
}

export default function DefectEditor() {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [defectsData, setDefectsData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data: IUserData = await apiRequest(API_ROUTES.users.getUserData, 'POST', { login: sessionStorage.getItem('user') });
        setUserData(data);

        if (!data.isAdmin) {
          setHasPermission(false);
          return;
        }

        await fetchDefectsData(data.login);
      } catch (error) {
        console.error('Ошибка загрузки данных пользователя:', error);
        setHasPermission(false);
      }
    }

    async function fetchDefectsData(login: string) {
      try {
        const response: IAppDataResponse = await apiRequest(API_ROUTES.app.getAppData, 'POST', { login });
        setDefectsData(response.defectsData || {}); // Если `defectsData` нет, подставляем пустой объект
      } catch (error) {
        console.error('Ошибка загрузки дефектов:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserData();
  }, []);

  async function handleSave() {
    if (!userData) return;

    setIsSaving(true);
    try {
      await apiRequest(API_ROUTES.app.updateDefects, 'PATCH', {
        defects: defectsData,
        login: userData.login,
      });
      alert('Дефекты успешно сохранены!');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      alert('Ошибка при сохранении данных');
    } finally {
      setIsSaving(false);
    }
  }

  if (!hasPermission) {
    return (
      <div className="page">
        <Header />
        <main className="main">
          <h1 className="h1-title">У вас недостаточно прав для просмотра этой страницы</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="h1-title">Редактирование типовых дефектов</h1>
          {isLoading ? (
            <p>Загрузка данных...</p>
          ) : (
            <>
              <form className="form">
                {Object.keys(defectsData).map((groupName) => (
                  <GroupComponent
                    key={groupName}
                    groupName={groupName}
                    groupData={defectsData[groupName]}
                    onUpdate={(updatedData) => {
                      setDefectsData((prevData) => ({
                        ...prevData,
                        [groupName]: updatedData,
                      }));
                    }}
                  />
                ))}
              </form>
              <button className="button" type="button" onClick={handleSave} disabled={isSaving}>
                {isSaving ? 'Сохранение...' : 'Сохранить'}
              </button>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
