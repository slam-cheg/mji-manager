Установка зависимостей: npm install

# Сервер работает в 2х режимах: dev и production
# Запуск dev mode: npm run dev
# Запуск production mode: npm start

Для работы фронтовой части расширения необдимо установить расширение по ссылке https://github.com/eternumart/Chrome-App/raw/dev/App/Chrome-App.exe

Чтобы расширение включало свежий билд необходимо:
* На сервере запустить npm run build. В результате будет создан файл appBuild.js, который используется в расширении.


На доработку:
1. activeFunctions - необходимо перенести в БД
2. defects - необходимо перенести в БД
3. rates - необходимо перенести в БД
4. representatives - необходимо перенести в БД