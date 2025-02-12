import { timeStamp } from "../../utils/timeStamp.js";

export const CheckResponseFromServer = (req, res) => {
  if (!req.body) {
    res.send({"status": "400", "message": "Not responding"});
  }
  console.log("Проверка ответа сервера", timeStamp());
  res.send({"status": "200", "message": "OK"}).end();
};
