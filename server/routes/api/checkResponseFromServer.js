import { timeStamp } from "../../utils/timeStamp.js";

export const CheckResponseFromServer = (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  }
  console.log("Проверка ответа сервера", timeStamp());
  res.sendStatus(200).end();
};
