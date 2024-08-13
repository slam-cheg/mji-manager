import { dataBase } from "../../server.js";

export const writeLog = async (data, flow) => {
    console.log(`Запись логирования процесса {${flow}} в БД начата`);
    const sql = `INSERT INTO "logs" ("flow", "log") VALUES ('${flow}', '${JSON.stringify(data)}')`;
    console.log(`Запись логирования процесса {${flow}} в БД завершена`);
    return dataBase.query(sql);
}