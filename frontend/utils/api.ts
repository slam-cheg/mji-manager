const BASE_URL = 'http://mjimanager.ru:3000';

export async function apiRequest(endpoint: string, method = 'GET', body?: any) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

  return response.json();
}