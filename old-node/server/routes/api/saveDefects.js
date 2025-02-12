import { writeLog } from "../../dataBase/writeLog.js";
import fs from "fs";
import { timeStamp } from "../../utils/timeStamp.js";

export const SaveDefects = (req, res) => {
    if (!req.body) {
        res.sendStatus(400);
      }
    
      const defectsChanging = {
        status: `Список дефектов не изменен. Ошибка.`,
        boolean: false,
        login: req.body.login,
        timeStamp: timeStamp(),
      };
    
      fs.writeFileSync("../../appData/defects.json", JSON.stringify(req.body.defects, null, 2));
    
      defectsChanging.status = `Список дефектов успешно изменен.`;
      defectsChanging.boolean = true;
    
      writeLog(defectsChanging, "Change defects list");
    
      res.send({ Success: true }).end();
}