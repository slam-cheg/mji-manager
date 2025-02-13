export async function apiRequest<T>(url: string, method: string, body?: any): Promise<T> {
    const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }

    return response.json() as Promise<T>;
}