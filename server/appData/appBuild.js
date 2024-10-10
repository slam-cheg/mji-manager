/******/// webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  launchApp: () => (/* binding */ launchApp)
});

;// ./server/appComponents/constants.js
let appData = {};
// Хранилище всех переменных приложения
const constants_appVariables = {};
const constants_resultsDefectsInputs = {
  empty: true,
  inputs: []
};
const constants_representativesInputs = {
  empty: true
};
const allRatesPercentsInputs = {};

;// ./server/appComponents/minimizeApp.js
const minimizeApp_minimizeApp = () => {
  appVariables.app.style.transition = "0.5s";
  appVariables.app.classList.toggle("app_minimized");
  setTimeout(() => {
    appVariables.app.style.transition = null;
  }, 500);
};
const minimizeAppByEscape = evt => {
  if (evt.key === "Escape") {
    minimizeApp_minimizeApp();
  }
};
;// ./server/appComponents/dragApp.js

const dragApp_startDraggingDiv = event => {
  constants_appVariables.dragIco.style.cursor = "grabbing";
  let shiftX = event.clientX - constants_appVariables.app.getBoundingClientRect().left;
  constants_appVariables.html.addEventListener("mousemove", onMouseMove);
  constants_appVariables.html.addEventListener("mouseup", () => {
    constants_appVariables.html.removeEventListener("mousemove", onMouseMove);
    constants_appVariables.dragIco.style.cursor = "grab";
    constants_appVariables.dragIco.onmouseup = null;
  });
  function moveAt(screenX, screenY) {
    constants_appVariables.app.style.left = screenX - 255 + "px";
    constants_appVariables.app.style.top = screenY - 142 + "px";
  }
  function onMouseMove(event) {
    moveAt(event.screenX, event.screenY);
  }
  moveAt(event.screenX, event.screenY);
};
const removeDefaultDrag = () => {
  return false;
};
;// ./server/appComponents/clearCache.js

const clearCache_clearCache = () => {
  constants_appVariables.cleanButton.firstElementChild.firstElementChild.classList.add("animation");
  localStorage.removeItem("MJIDATA");
  localStorage.removeItem("DataLoaded");
  setTimeout(() => {
    constants_appVariables.cleanButton.firstElementChild.firstElementChild.classList.remove("animation");
  }, 1100);
};
;// ./server/appComponents/setToStorage.js
const setToStorage = (layout, init, authorized, uid) => {
  let status;
  if (localStorage.getItem("status")) {
    status = JSON.parse(localStorage.getItem("status"));
    if (layout !== null) {
      status.layout = layout;
    }
    if (init !== null) {
      status.init = init;
    }
    if (authorized !== null) {
      status.authorized = authorized;
    }
    if (uid !== null) {
      status.uid = uid;
    }
  } else {
    status = {};
    if (layout !== null) {
      status.layout = layout;
    }
    if (init !== null) {
      status.init = init;
    }
    if (authorized !== null) {
      status.authorized = authorized;
    }
    if (uid !== null) {
      status.uid = uid;
    }
  }
  localStorage.setItem("status", JSON.stringify(status));
};
;// ./server/appComponents/closeApp.js


const closeApp = () => {
  constants_appVariables.cleanButton.removeEventListener("click", clearCache);
  constants_appVariables.minimizeButton.removeEventListener("click", minimizeApp);
  constants_appVariables.closeButton.removeEventListener("click", closeApp);
  constants_appVariables.dragIco.removeEventListener("mousedown", startDraggingDiv);
  setToStorage(false, false, null, null);
  constants_appVariables.app.remove();
  constants_appVariables.htmlHead.querySelector("style").remove();
  constants_appVariables.htmlBody.querySelectorAll(".fakeSelect").forEach(select => {
    select.remove();
  });
  constants_appVariables.htmlBody.querySelectorAll(".fakeSelect__selector").forEach(selector => {
    selector.remove();
  });
};
;// ./server/appComponents/searchAllInputs.js

const searchAllInputs = () => {
  if (!appData.availableFunctions.searchAllInputs) {
    return;
  }
  constants_appVariables.area = constants_appVariables.wholeAddress.split(",")[0];
  constants_appVariables.district = constants_appVariables.wholeAddress.split(",")[1];
  constants_appVariables.address = constants_appVariables.htmlBody.querySelector("#comboboxTextcomp_12339").value;
  constants_appVariables.repairProjectsTable = constants_appVariables.form.querySelector("#group_22130");
  constants_appVariables.repairProjectsTableRows = constants_appVariables.repairProjectsTable.querySelectorAll("tr");
  constants_appVariables.conclusionsPrevSurvey = constants_appVariables.form.querySelector("#gridSql_22131").querySelector(".data");
  constants_appVariables.conclusionsPrevSurveyRows = constants_appVariables.conclusionsPrevSurvey.querySelectorAll("tr");
  constants_appVariables.recomendationsDone = constants_appVariables.form.querySelector("#group_22127");
  constants_appVariables.recomendationsRoofBlock = constants_appVariables.recomendationsDone.querySelector("#group_22193");
  constants_appVariables.roofTable = constants_appVariables.recomendationsRoofBlock.querySelector("tbody");
  constants_appVariables.roofRows = constants_appVariables.roofTable.querySelectorAll("tr");
  constants_appVariables.balconyBlock = constants_appVariables.recomendationsDone.querySelector("#group_22196");
  constants_appVariables.balconyTable = constants_appVariables.balconyBlock.querySelector("tbody");
  constants_appVariables.balconyRows = constants_appVariables.balconyTable.querySelectorAll("tr");
  constants_appVariables.mopBlock = constants_appVariables.recomendationsDone.querySelector("#group_22201");
  constants_appVariables.mopTable = constants_appVariables.mopBlock.querySelector("tbody");
  constants_appVariables.mopRows = constants_appVariables.mopTable.querySelectorAll("tr");
  constants_appVariables.heatSystemBlock = constants_appVariables.recomendationsDone.querySelector("#group_22204");
  constants_appVariables.heatSystemTable = constants_appVariables.heatSystemBlock.querySelector("tbody");
  constants_appVariables.heatSystemRows = constants_appVariables.heatSystemTable.querySelectorAll("tr");
  constants_appVariables.gvsBlock = constants_appVariables.recomendationsDone.querySelector("#group_22205");
  constants_appVariables.gvsTable = constants_appVariables.gvsBlock.querySelector("tbody");
  constants_appVariables.gvsRows = constants_appVariables.gvsTable.querySelectorAll("tr");
  constants_appVariables.hvsBlock = constants_appVariables.recomendationsDone.querySelector("#group_22206");
  constants_appVariables.hvsTable = constants_appVariables.hvsBlock.querySelector("tbody");
  constants_appVariables.hvsRows = constants_appVariables.hvsTable.querySelectorAll("tr");
  constants_appVariables.sewerBlock = constants_appVariables.recomendationsDone.querySelector("#group_22207");
  constants_appVariables.sewerTable = constants_appVariables.sewerBlock.querySelector("tbody");
  constants_appVariables.sewerRows = constants_appVariables.sewerTable.querySelector("tr");
  constants_appVariables.results = constants_appVariables.form.querySelector("#group_22125");
  constants_appVariables.resultsRoofBlock = constants_appVariables.results.querySelector("#group_22243");
  constants_appVariables.resultsRoofTable = constants_appVariables.resultsRoofBlock.querySelector("tbody");
  constants_appVariables.resultsRoofRows = constants_appVariables.resultsRoofTable.querySelectorAll("tr");
  constants_appVariables.resultsBalconyBlock = constants_appVariables.results.querySelector("#group_22264");
  constants_appVariables.resultsBalconyTable = constants_appVariables.resultsBalconyBlock.querySelector("tbody");
  constants_appVariables.resultsBalconyRows = constants_appVariables.resultsBalconyTable.querySelectorAll("tr");
  constants_appVariables.resultsMopBlock = constants_appVariables.results.querySelector("#group_22268");
  constants_appVariables.resultsMopTable = constants_appVariables.resultsMopBlock.querySelector("tbody");
  constants_appVariables.resultsMopRows = constants_appVariables.resultsMopTable.querySelectorAll("tr");
  constants_appVariables.resultHeatSystemBlock = constants_appVariables.results.querySelector("#group_22271");
  constants_appVariables.resultsHeatSystemTable = constants_appVariables.resultHeatSystemBlock.querySelector("tbody");
  constants_appVariables.resultsHeatSystemRows = constants_appVariables.resultsHeatSystemTable.querySelectorAll("tr");
  constants_appVariables.resultsGvsBlock = constants_appVariables.results.querySelector("#group_22272");
  constants_appVariables.resultsGvsTable = constants_appVariables.resultsGvsBlock.querySelector("tbody");
  constants_appVariables.resultsGvsRows = constants_appVariables.resultsGvsTable.querySelectorAll("tr");
  constants_appVariables.resultsHvsBlock = constants_appVariables.results.querySelector("#group_22273");
  constants_appVariables.resultsHvsTable = constants_appVariables.resultsHvsBlock.querySelector("tbody");
  constants_appVariables.resultsHvsRows = constants_appVariables.resultsHvsTable.querySelectorAll("tr");
  constants_appVariables.resultsSewerBlock = constants_appVariables.results.querySelector("#group_22274");
  constants_appVariables.resultsSewerTable = constants_appVariables.resultsSewerBlock.querySelector("tbody");
  constants_appVariables.resultsSewerRows = constants_appVariables.resultsSewerTable.querySelectorAll("tr");
  constants_appVariables.signatoriesBlock = constants_appVariables.html.querySelector("#group_22133");
  constants_appVariables.signatoriesTable = constants_appVariables.signatoriesBlock.querySelector("tbody");
  constants_appVariables.signatoriesRows = constants_appVariables.signatoriesTable.querySelectorAll("tr");
  constants_appVariables.options = new Object();
  constants_appVariables["options"]["Крыша"] = new Object();
  constants_appVariables["options"]["Крыша"]["Конструкция крыши"] = constants_appVariables.results.querySelector("#lookupTextcomp_12453");
  constants_appVariables["options"]["Крыша"]["Материал кровли"] = constants_appVariables.results.querySelector("#lookupTextcomp_12454");
  constants_appVariables["options"]["Водоотвод"] = new Object();
  constants_appVariables["options"]["Водоотвод"]["Тип водоотвода"] = constants_appVariables.results.querySelector("#lookupTextcomp_12456");
  constants_appVariables["options"]["Водоотвод"]["Материал водоотвода"] = constants_appVariables.results.querySelector("#lookupTextcomp_12457");
  constants_appVariables["options"]["Межпанельные стыки"] = new Object();
  constants_appVariables["options"]["Межпанельные стыки"]["Тип стыков"] = constants_appVariables.results.querySelector("#lookupTextcomp_12458");
  constants_appVariables["options"]["Межпанельные стыки"]["Тип стыков"] = constants_appVariables.results.querySelector("#lookupTextcomp_12458");
  constants_appVariables["options"]["Фасад"] = new Object();
  constants_appVariables["options"]["Фасад"]["Отделка стен"] = constants_appVariables.results.querySelector("#lookupTextcomp_12460");
  constants_appVariables["options"]["Фасад"]["Отделка цоколя"] = constants_appVariables.results.querySelector("#lookupTextcomp_12461");
  constants_appVariables["options"]["Фасад"]["Оконные заполнения"] = constants_appVariables.results.querySelector("#lookupTextcomp_12462");
  constants_appVariables["options"]["Стены"] = new Object();
  constants_appVariables["options"]["Стены"]["Материал стен"] = constants_appVariables.results.querySelector("#lookupTextcomp_12444");
  constants_appVariables["options"]["Стены"]["Теплофизические свойства"] = constants_appVariables.results.querySelector("#lookupTextcomp_12445");
  constants_appVariables["options"]["Лестницы"] = new Object();
  constants_appVariables["options"]["Лестницы"]["Конструкция"] = constants_appVariables.results.querySelector("#lookupTextcomp_12370");
  constants_appVariables["options"]["Перекрытия"] = new Object();
  constants_appVariables["options"]["Перекрытия"]["Материал перекрытия"] = constants_appVariables.results.querySelector("#lookupTextcomp_12371");
  constants_appVariables["options"]["Система отопления"] = new Object();
  constants_appVariables["options"]["Система отопления"]["Вид отопления"] = constants_appVariables.results.querySelector("#lookupTextcomp_12605");
  constants_appVariables["options"]["Система отопления"]["Материал трубопроводов"] = constants_appVariables.results.querySelector("#lookupTextcomp_13393");
  constants_appVariables["options"]["Система отопления"]["Тип приборов"] = constants_appVariables.results.querySelector("#lookupTextcomp_12372");
  constants_appVariables["options"]["Система отопления"]["Термо-регуляторы в квартирах"] = constants_appVariables.results.querySelector("#lookupTextcomp_12373");
  constants_appVariables["options"]["Система отопления"]["Наличие ОДУУ"] = constants_appVariables.results.querySelector("#lookupTextcomp_12375");
  constants_appVariables["options"]["Система отопления"]["Тип стояков"] = constants_appVariables.results.querySelector("#lookupTextcomp_12299");
  constants_appVariables["options"]["ГВС"] = new Object();
  constants_appVariables["options"]["ГВС"]["Тип системы"] = constants_appVariables.results.querySelector("#lookupTextcomp_12378");
  constants_appVariables["options"]["ГВС"]["Материал трубопроводов"] = constants_appVariables.results.querySelector("#lookupTextcomp_12379");
  constants_appVariables["options"]["ГВС"]["Наличие ОДУУ"] = constants_appVariables.results.querySelector("#lookupTextcomp_12380");
  constants_appVariables["options"]["ГВС"]["Тип стояков"] = constants_appVariables.results.querySelector("#lookupTextcomp_13394");
  constants_appVariables["options"]["ХВС"] = new Object();
  constants_appVariables["options"]["ХВС"]["Материал трубопроводов"] = constants_appVariables.results.querySelector("#lookupTextcomp_12382");
  constants_appVariables["options"]["ХВС"]["Наличие ОДУУ"] = constants_appVariables.results.querySelector("#lookupTextcomp_12381");
  constants_appVariables["options"]["ХВС"]["Тип стояков"] = constants_appVariables.results.querySelector("#lookupTextcomp_13395");
  constants_appVariables["options"]["Канализация"] = new Object();
  constants_appVariables["options"]["Канализация"]["Материал трубопроводов"] = constants_appVariables.results.querySelector("#lookupTextcomp_12383");
  constants_appVariables["options"]["Канализация"]["Тип стояков"] = constants_appVariables.results.querySelector("#lookupTextcomp_13396");

  // ПАСПОРТНЫЕ ДАННЫЕ
  constants_appVariables.passportDannye = new Object();
  constants_appVariables.passportDannye.etajei = constants_appVariables.form.querySelector("#comp_12472");
  constants_appVariables.passportDannye.podjezdov = constants_appVariables.form.querySelector("#comp_12473");
  constants_appVariables.passportDannye.stroyObjem = constants_appVariables.form.querySelector("#comp_12474");
  constants_appVariables.passportDannye.kvartir = constants_appVariables.form.querySelector("#comp_12475");
  constants_appVariables.passportDannye.poleznayaPloschad = constants_appVariables.form.querySelector("#comp_12476");
  constants_appVariables.passportDannye.jilayaPloschad = constants_appVariables.form.querySelector("#comp_12477");
  constants_appVariables.passportDannye.neJilayaPloschad = constants_appVariables.form.querySelector("#comp_12478");
  constants_appVariables.passportDannye.seriyaProekta = constants_appVariables.form.querySelector("#lookupTextcomp_12479");
  constants_appVariables.passportDannye.godPostrioki = constants_appVariables.form.querySelector("#comp_12480");
  constants_appVariables.passportDannye.godRekonstrukcii = constants_appVariables.form.querySelector("#comp_12481");
  constants_appVariables.passportDannye.klassEnergoeffectivnosti = constants_appVariables.form.querySelector("#lookupTextcomp_12482");
  constants_appVariables.passportDannye.fizIznos = constants_appVariables.form.querySelector("#comp_12661");
  constants_appVariables.passportDannye.dannyeBtiData = constants_appVariables.form.querySelector("#comp_12662");
  constants_appVariables.passportDannye.nalichVstroenSooruj = constants_appVariables.form.querySelector("#lookupTextcomp_12663");
  constants_appVariables.passportDannye.kolichVstroenSooruj = constants_appVariables.form.querySelector("#comp_12664");
  constants_appVariables.passportDannye.kolichNadstroenSooruj = constants_appVariables.form.querySelector("#comp_12671");
  constants_appVariables.passportDannye.tp = constants_appVariables.form.querySelector("#comp_12665");
  constants_appVariables.passportDannye.maslyanieTp = constants_appVariables.form.querySelector("#comp_12666");
  constants_appVariables.passportDannye.magistraliTranzit = constants_appVariables.form.querySelector("#lookupTextcomp_12667");
  constants_appVariables.passportDannye.potreblenieTeplaFact = constants_appVariables.form.querySelector("#comp_12668");
  constants_appVariables.passportDannye.potreblenieTeplaProekt = constants_appVariables.form.querySelector("#comp_12669");
  constants_appVariables.passportDannye.potreblenieTeplaOtklonenie = constants_appVariables.form.querySelector("#comp_12670");

  // ТЕХ ЗАКЛЮЧЕНИЯ И ПРОЕКТЫ РЕМОНТОВ
  constants_appVariables.tehZakluchenia = new Object();
  for (let i = 0; i < constants_appVariables.repairProjectsTableRows.length; i++) {
    if (i < 1 || constants_appVariables.repairProjectsTableRows[i].classList.contains("gridBGTotal")) {
      continue;
    }
    if (i > 1) {
      constants_appVariables["tehZakluchenia"][i] = new Object();
      constants_appVariables["tehZakluchenia"][i]["organizacia"] = constants_appVariables.repairProjectsTableRows[i].querySelector("#comp_12333");
      constants_appVariables["tehZakluchenia"][i]["dataNomer"] = constants_appVariables.repairProjectsTableRows[i].querySelector("#comp_12334");
      constants_appVariables["tehZakluchenia"][i]["naimenovanieSoderjanie"] = constants_appVariables.repairProjectsTableRows[i].querySelector("#comp_12335");
    }
  }

  // ВЫВОДЫ ПО РЕЗУЛЬТАТАМ ПРЕДЫДУЩЕГО ОБСЛЕДОВАНИЯ
  constants_appVariables.vivodyPoRezultatam = new Object();
  for (let i = 0; i < constants_appVariables.conclusionsPrevSurveyRows.length; i++) {
    constants_appVariables["vivodyPoRezultatam"][i] = new Object();
    constants_appVariables["vivodyPoRezultatam"][i]["id"] = constants_appVariables.conclusionsPrevSurveyRows[i].querySelector("td:nth-child(1)").firstElementChild;
    constants_appVariables["vivodyPoRezultatam"][i]["data"] = constants_appVariables.conclusionsPrevSurveyRows[i].querySelector("td:nth-child(2)");
    constants_appVariables["vivodyPoRezultatam"][i]["number"] = constants_appVariables.conclusionsPrevSurveyRows[i].querySelector("td:nth-child(3)");
    constants_appVariables["vivodyPoRezultatam"][i]["tehSostoyanie"] = constants_appVariables.conclusionsPrevSurveyRows[i].querySelector("td:nth-child(4)");
  }

  // РЕКОМЕНДАЦИИ ПО КАП РЕМОНТУ
  constants_appVariables.recomend = new Object();
  // Крыша
  constants_appVariables.recomend.krisha = new Object();
  for (let i = 1; i < constants_appVariables.roofRows.length; i++) {
    switch (constants_appVariables.roofRows[i].querySelector("#lookupTextcomp_12483").textContent) {
      case "Кровля":
        constants_appVariables.recomend.krisha.krovla = new Object();
        constants_appVariables.recomend.krisha.krovla.name = constants_appVariables.roofRows[i].querySelector("#lookupTextcomp_12483").textContent;
        constants_appVariables.recomend.krisha.krovla.recomend = constants_appVariables.roofRows[i].querySelector("#comp_12484");
        constants_appVariables.recomend.krisha.krovla.trebObjom = constants_appVariables.roofRows[i].querySelector("#comp_12485");
        constants_appVariables.recomend.krisha.krovla.vypolnenGod = constants_appVariables.roofRows[i].querySelector("#comp_12486");
        constants_appVariables.recomend.krisha.krovla.factObjom = constants_appVariables.roofRows[i].querySelector("#comp_12487");
        break;
      case "Свесы":
        constants_appVariables.recomend.krisha.svesy = new Object();
        constants_appVariables.recomend.krisha.svesy.name = constants_appVariables.roofRows[i].querySelector("#lookupTextcomp_12483").textContent;
        constants_appVariables.recomend.krisha.svesy.recomend = constants_appVariables.roofRows[i].querySelector("#comp_12484");
        constants_appVariables.recomend.krisha.svesy.trebObjom = constants_appVariables.roofRows[i].querySelector("#comp_12485");
        constants_appVariables.recomend.krisha.svesy.vypolnenGod = constants_appVariables.roofRows[i].querySelector("#comp_12486");
        constants_appVariables.recomend.krisha.svesy.factObjom = constants_appVariables.roofRows[i].querySelector("#comp_12487");
        break;
      case "Стропильная система":
        constants_appVariables.recomend.krisha.stropilnayaSistema = new Object();
        constants_appVariables.recomend.krisha.stropilnayaSistema.name = constants_appVariables.roofRows[i].querySelector("#lookupTextcomp_12483").textContent;
        constants_appVariables.recomend.krisha.stropilnayaSistema.recomend = constants_appVariables.roofRows[i].querySelector("#comp_12484");
        constants_appVariables.recomend.krisha.stropilnayaSistema.trebObjom = constants_appVariables.roofRows[i].querySelector("#comp_12485");
        constants_appVariables.recomend.krisha.stropilnayaSistema.vypolnenGod = constants_appVariables.roofRows[i].querySelector("#comp_12486");
        constants_appVariables.recomend.krisha.stropilnayaSistema.factObjom = constants_appVariables.roofRows[i].querySelector("#comp_12487");
        break;
      case "Чердак":
        constants_appVariables.recomend.krisha.cherdak = new Object();
        constants_appVariables.recomend.krisha.cherdak.name = constants_appVariables.roofRows[i].querySelector("#lookupTextcomp_12483").textContent;
        constants_appVariables.recomend.krisha.cherdak.recomend = constants_appVariables.roofRows[i].querySelector("#comp_12484");
        constants_appVariables.recomend.krisha.cherdak.trebObjom = constants_appVariables.roofRows[i].querySelector("#comp_12485");
        constants_appVariables.recomend.krisha.cherdak.vypolnenGod = constants_appVariables.roofRows[i].querySelector("#comp_12486");
        constants_appVariables.recomend.krisha.cherdak.factObjom = constants_appVariables.roofRows[i].querySelector("#comp_12487");
        break;
      case "Покрытие ж/б":
        constants_appVariables.recomend.krisha.pokritieJB = new Object();
        constants_appVariables.recomend.krisha.pokritieJB.name = constants_appVariables.roofRows[i].querySelector("#lookupTextcomp_12483").textContent;
        constants_appVariables.recomend.krisha.pokritieJB.recomend = constants_appVariables.roofRows[i].querySelector("#comp_12484");
        constants_appVariables.recomend.krisha.pokritieJB.trebObjom = constants_appVariables.roofRows[i].querySelector("#comp_12485");
        constants_appVariables.recomend.krisha.pokritieJB.vypolnenGod = constants_appVariables.roofRows[i].querySelector("#comp_12486");
        constants_appVariables.recomend.krisha.pokritieJB.factObjom = constants_appVariables.roofRows[i].querySelector("#comp_12487");
        break;
      case "Все элементы":
        constants_appVariables.recomend.krisha.vseElementy = new Object();
        constants_appVariables.recomend.krisha.vseElementy.name = constants_appVariables.roofRows[i].querySelector("#lookupTextcomp_12483").textContent;
        constants_appVariables.recomend.krisha.vseElementy.recomend = constants_appVariables.roofRows[i].querySelector("#comp_12484");
        constants_appVariables.recomend.krisha.vseElementy.trebObjom = constants_appVariables.roofRows[i].querySelector("#comp_12485");
        constants_appVariables.recomend.krisha.vseElementy.vypolnenGod = constants_appVariables.roofRows[i].querySelector("#comp_12486");
        constants_appVariables.recomend.krisha.vseElementy.factObjom = constants_appVariables.roofRows[i].querySelector("#comp_12487");
        break;
    }
  }

  // Водоотвод
  constants_appVariables.recomend.vodootvod = new Object();
  constants_appVariables.recomend.vodootvod.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12489");
  constants_appVariables.recomend.vodootvod.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12490");
  constants_appVariables.recomend.vodootvod.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12491");
  constants_appVariables.recomend.vodootvod.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12492");

  // Герметизация
  constants_appVariables.recomend.germetizacia = new Object();
  constants_appVariables.recomend.germetizacia.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12359");
  constants_appVariables.recomend.germetizacia.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12366");
  constants_appVariables.recomend.germetizacia.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12365");
  constants_appVariables.recomend.germetizacia.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12364");

  // Фасад
  constants_appVariables.recomend.fasad = new Object();
  constants_appVariables.recomend.fasad.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12494");
  constants_appVariables.recomend.fasad.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12495");
  constants_appVariables.recomend.fasad.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12496");
  constants_appVariables.recomend.fasad.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12364");

  // Балконы
  constants_appVariables.recomend.balkony = new Object();
  constants_appVariables.recomend.balkony.balkony = new Object();
  constants_appVariables.recomend.balkony.lodjii = new Object();
  constants_appVariables.recomend.balkony.kozirki = new Object();
  constants_appVariables.recomend.balkony.erkery = new Object();
  constants_appVariables.recomend.balkony.vseElementy = new Object();
  for (let i = 1; i < constants_appVariables.balconyRows.length; i++) {
    switch (constants_appVariables.balconyRows[i].querySelector("#lookupTextcomp_12498").textContent) {
      case "Балконы":
        constants_appVariables.recomend.balkony.balkony.name = constants_appVariables.balconyRows[i].querySelector("#lookupTextcomp_12498").textContent;
        constants_appVariables.recomend.balkony.balkony.recomend = constants_appVariables.balconyRows[i].querySelector("#comp_12499");
        constants_appVariables.recomend.balkony.balkony.trebObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12500");
        constants_appVariables.recomend.balkony.balkony.vypolnenGod = constants_appVariables.balconyRows[i].querySelector("#comp_12501");
        constants_appVariables.recomend.balkony.balkony.factObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12502");
        break;
      case "Лоджии":
        constants_appVariables.recomend.balkony.lodjii.name = constants_appVariables.balconyRows[i].querySelector("#lookupTextcomp_12498").textContent;
        constants_appVariables.recomend.balkony.lodjii.recomend = constants_appVariables.balconyRows[i].querySelector("#comp_12499");
        constants_appVariables.recomend.balkony.lodjii.trebObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12500");
        constants_appVariables.recomend.balkony.lodjii.vypolnenGod = constants_appVariables.balconyRows[i].querySelector("#comp_12501");
        constants_appVariables.recomend.balkony.lodjii.factObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12502");
        break;
      case "Козырьки":
        constants_appVariables.recomend.balkony.kozirki.name = constants_appVariables.balconyRows[i].querySelector("#lookupTextcomp_12498").textContent;
        constants_appVariables.recomend.balkony.kozirki.recomend = constants_appVariables.balconyRows[i].querySelector("#comp_12499");
        constants_appVariables.recomend.balkony.kozirki.trebObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12500");
        constants_appVariables.recomend.balkony.kozirki.vypolnenGod = constants_appVariables.balconyRows[i].querySelector("#comp_12501");
        constants_appVariables.recomend.balkony.kozirki.factObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12502");
        break;
      case "Эркеры":
        constants_appVariables.recomend.balkony.erkery.name = constants_appVariables.balconyRows[i].querySelector("#lookupTextcomp_12498").textContent;
        constants_appVariables.recomend.balkony.erkery.recomend = constants_appVariables.balconyRows[i].querySelector("#comp_12499");
        constants_appVariables.recomend.balkony.erkery.trebObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12500");
        constants_appVariables.recomend.balkony.erkery.vypolnenGod = constants_appVariables.balconyRows[i].querySelector("#comp_12501");
        constants_appVariables.recomend.balkony.erkery.factObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12502");
        break;
      case "Все элементы":
        constants_appVariables.recomend.balkony.vseElementy.name = constants_appVariables.balconyRows[i].querySelector("#lookupTextcomp_12498").textContent;
        constants_appVariables.recomend.balkony.vseElementy.recomend = constants_appVariables.balconyRows[i].querySelector("#comp_12499");
        constants_appVariables.recomend.balkony.vseElementy.trebObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12500");
        constants_appVariables.recomend.balkony.vseElementy.vypolnenGod = constants_appVariables.balconyRows[i].querySelector("#comp_12501");
        constants_appVariables.recomend.balkony.vseElementy.factObjom = constants_appVariables.balconyRows[i].querySelector("#comp_12502");
        break;
    }
  }
  constants_appVariables.recomend.balkony.balkony.osteklenie = constants_appVariables.recomendationsDone.querySelector("#lookupTextcomp_12604");
  constants_appVariables.recomend.balkony.lodjii.osteklenie = constants_appVariables.recomendationsDone.querySelector("#lookupTextcomp_12603");

  // Стены
  constants_appVariables.recomend.steny = new Object();
  constants_appVariables.recomend.steny.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12504");
  constants_appVariables.recomend.steny.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12505");
  constants_appVariables.recomend.steny.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12506");
  constants_appVariables.recomend.steny.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12348");
  constants_appVariables.recomend.steny.uteplenie = constants_appVariables.recomendationsDone.querySelector("#lookupTextcomp_12602");

  // Подвал
  constants_appVariables.recomend.podval = new Object();
  constants_appVariables.recomend.podval.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12360");
  constants_appVariables.recomend.podval.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12361");
  constants_appVariables.recomend.podval.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12362");
  constants_appVariables.recomend.podval.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12363");

  // Тех.подполье
  constants_appVariables.recomend.tehPodpolie = new Object();
  constants_appVariables.recomend.tehPodpolie.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12353");
  constants_appVariables.recomend.tehPodpolie.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12507");
  constants_appVariables.recomend.tehPodpolie.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12508");
  constants_appVariables.recomend.tehPodpolie.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12509");

  // Тех.этаж
  constants_appVariables.recomend.tehEtaj = new Object();
  constants_appVariables.recomend.tehEtaj.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12511");
  constants_appVariables.recomend.tehEtaj.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12512");
  constants_appVariables.recomend.tehEtaj.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12513");
  constants_appVariables.recomend.tehEtaj.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12514");

  // Гараж стоянка (подземный)
  constants_appVariables.recomend.garage = new Object();
  constants_appVariables.recomend.garage.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12516");
  constants_appVariables.recomend.garage.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12517");
  constants_appVariables.recomend.garage.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12518");
  constants_appVariables.recomend.garage.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12519");

  // Места общего пользования
  constants_appVariables.recomend.mop = new Object();
  for (let i = 1; i < constants_appVariables.mopRows.length; i++) {
    switch (constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent) {
      case "Вестибюли":
        constants_appVariables.recomend.mop.vestibuli = new Object();
        constants_appVariables.recomend.mop.vestibuli.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.vestibuli.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.vestibuli.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.vestibuli.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.vestibuli.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
      case "Крыльца":
        constants_appVariables.recomend.mop.krilca = new Object();
        constants_appVariables.recomend.mop.krilca.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.krilca.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.krilca.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.krilca.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.krilca.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
      case "Пандусы наружные":
        constants_appVariables.recomend.mop.pandusyNaruzh = new Object();
        constants_appVariables.recomend.mop.pandusyNaruzh.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.pandusyNaruzh.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.pandusyNaruzh.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.pandusyNaruzh.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.pandusyNaruzh.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
      case "Пандусы внутриподъездные":
        constants_appVariables.recomend.mop.pandusyVnutr = new Object();
        constants_appVariables.recomend.mop.pandusyVnutr.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.pandusyVnutr.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.pandusyVnutr.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.pandusyVnutr.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.pandusyVnutr.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
      case "Сходы/съезды":
        constants_appVariables.recomend.mop.shodySiezdy = new Object();
        constants_appVariables.recomend.mop.shodySiezdy.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.shodySiezdy.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.shodySiezdy.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.shodySiezdy.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.shodySiezdy.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
      case "Окна, двери":
        constants_appVariables.recomend.mop.oknaDveri = new Object();
        constants_appVariables.recomend.mop.oknaDveri.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.oknaDveri.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.oknaDveri.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.oknaDveri.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.oknaDveri.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
      case "Внутренняя отделка помещений":
        constants_appVariables.recomend.mop.vnOtdelkaPomesh = new Object();
        constants_appVariables.recomend.mop.vnOtdelkaPomesh.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.vnOtdelkaPomesh.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.vnOtdelkaPomesh.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.vnOtdelkaPomesh.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.vnOtdelkaPomesh.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
      case "Все элементы":
        constants_appVariables.recomend.mop.vseElementy = new Object();
        constants_appVariables.recomend.mop.vseElementy.name = constants_appVariables.mopRows[i].querySelector("#lookupTextcomp_12520").textContent;
        constants_appVariables.recomend.mop.vseElementy.recomend = constants_appVariables.mopRows[i].querySelector("#comp_12521");
        constants_appVariables.recomend.mop.vseElementy.trebObjom = constants_appVariables.mopRows[i].querySelector("#comp_12522");
        constants_appVariables.recomend.mop.vseElementy.vypolnenGod = constants_appVariables.mopRows[i].querySelector("#comp_12523");
        constants_appVariables.recomend.mop.vseElementy.factObjom = constants_appVariables.mopRows[i].querySelector("#comp_12524");
        break;
    }
  }

  // Лестницы
  constants_appVariables.recomend.lestnicy = new Object();
  constants_appVariables.recomend.lestnicy.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12526");
  constants_appVariables.recomend.lestnicy.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12527");
  constants_appVariables.recomend.lestnicy.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12528");
  constants_appVariables.recomend.lestnicy.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12529");

  // Перекрытия
  constants_appVariables.recomend.perekritya = new Object();
  constants_appVariables.recomend.perekritya.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12531");
  constants_appVariables.recomend.perekritya.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12532");
  constants_appVariables.recomend.perekritya.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12533");
  constants_appVariables.recomend.perekritya.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12534");

  // Система отопления
  constants_appVariables.recomend.sistemaOtoplenia = new Object();
  for (let i = 1; i < constants_appVariables.heatSystemRows.length; i++) {
    switch (constants_appVariables.heatSystemRows[i].querySelector("#lookupTextcomp_12535").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.recomend.sistemaOtoplenia.tehPodpolie = new Object();
        constants_appVariables.recomend.sistemaOtoplenia.tehPodpolie.name = constants_appVariables.heatSystemRows[i].querySelector("#lookupTextcomp_12535").textContent;
        constants_appVariables.recomend.sistemaOtoplenia.tehPodpolie.recomend = constants_appVariables.heatSystemRows[i].querySelector("#comp_12536");
        constants_appVariables.recomend.sistemaOtoplenia.tehPodpolie.trebObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12537");
        constants_appVariables.recomend.sistemaOtoplenia.tehPodpolie.vypolnenGod = constants_appVariables.heatSystemRows[i].querySelector("#comp_12538");
        constants_appVariables.recomend.sistemaOtoplenia.tehPodpolie.factObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12539");
        break;
      case "Транзит питающий":
        constants_appVariables.recomend.sistemaOtoplenia.tranzitPitaush = new Object();
        constants_appVariables.recomend.sistemaOtoplenia.tranzitPitaush.name = constants_appVariables.heatSystemRows[i].querySelector("#lookupTextcomp_12535").textContent;
        constants_appVariables.recomend.sistemaOtoplenia.tranzitPitaush.recomend = constants_appVariables.heatSystemRows[i].querySelector("#comp_12536");
        constants_appVariables.recomend.sistemaOtoplenia.tranzitPitaush.trebObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12537");
        constants_appVariables.recomend.sistemaOtoplenia.tranzitPitaush.vypolnenGod = constants_appVariables.heatSystemRows[i].querySelector("#comp_12538");
        constants_appVariables.recomend.sistemaOtoplenia.tranzitPitaush.factObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12539");
        break;
      case "Чердак":
        constants_appVariables.recomend.sistemaOtoplenia.cherdak = new Object();
        constants_appVariables.recomend.sistemaOtoplenia.cherdak.name = constants_appVariables.heatSystemRows[i].querySelector("#lookupTextcomp_12535").textContent;
        constants_appVariables.recomend.sistemaOtoplenia.cherdak.recomend = constants_appVariables.heatSystemRows[i].querySelector("#comp_12536");
        constants_appVariables.recomend.sistemaOtoplenia.cherdak.trebObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12537");
        constants_appVariables.recomend.sistemaOtoplenia.cherdak.vypolnenGod = constants_appVariables.heatSystemRows[i].querySelector("#comp_12538");
        constants_appVariables.recomend.sistemaOtoplenia.cherdak.factObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12539");
        break;
      case "Этажи":
        constants_appVariables.recomend.sistemaOtoplenia.etaji = new Object();
        constants_appVariables.recomend.sistemaOtoplenia.etaji.name = constants_appVariables.heatSystemRows[i].querySelector("#lookupTextcomp_12535").textContent;
        constants_appVariables.recomend.sistemaOtoplenia.etaji.recomend = constants_appVariables.heatSystemRows[i].querySelector("#comp_12536");
        constants_appVariables.recomend.sistemaOtoplenia.etaji.trebObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12537");
        constants_appVariables.recomend.sistemaOtoplenia.etaji.vypolnenGod = constants_appVariables.heatSystemRows[i].querySelector("#comp_12538");
        constants_appVariables.recomend.sistemaOtoplenia.etaji.factObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12539");
        break;
      case "Вся система":
        constants_appVariables.recomend.sistemaOtoplenia.vsaSistema = new Object();
        constants_appVariables.recomend.sistemaOtoplenia.vsaSistema.name = constants_appVariables.heatSystemRows[i].querySelector("#lookupTextcomp_12535").textContent;
        constants_appVariables.recomend.sistemaOtoplenia.vsaSistema.recomend = constants_appVariables.heatSystemRows[i].querySelector("#comp_12536");
        constants_appVariables.recomend.sistemaOtoplenia.vsaSistema.trebObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12537");
        constants_appVariables.recomend.sistemaOtoplenia.vsaSistema.vypolnenGod = constants_appVariables.heatSystemRows[i].querySelector("#comp_12538");
        constants_appVariables.recomend.sistemaOtoplenia.vsaSistema.factObjom = constants_appVariables.heatSystemRows[i].querySelector("#comp_12539");
        break;
    }
  }

  // ГВС
  constants_appVariables.recomend.gvs = new Object();
  for (let i = 1; i < constants_appVariables.gvsRows.length; i++) {
    switch (constants_appVariables.gvsRows[i].querySelector("#lookupTextcomp_12540").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.recomend.gvs.tehPodpolie = new Object();
        constants_appVariables.recomend.gvs.tehPodpolie.name = constants_appVariables.gvsRows[i].querySelector("#lookupTextcomp_12540").textContent;
        constants_appVariables.recomend.gvs.tehPodpolie.recomend = constants_appVariables.gvsRows[i].querySelector("#comp_12541");
        constants_appVariables.recomend.gvs.tehPodpolie.trebObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12542");
        constants_appVariables.recomend.gvs.tehPodpolie.vypolnenGod = constants_appVariables.gvsRows[i].querySelector("#comp_12543");
        constants_appVariables.recomend.gvs.tehPodpolie.factObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12544");
        break;
      case "Транзит питающий":
        constants_appVariables.recomend.gvs.tranzitPitaush = new Object();
        constants_appVariables.recomend.gvs.tranzitPitaush.name = constants_appVariables.gvsRows[i].querySelector("#lookupTextcomp_12540").textContent;
        constants_appVariables.recomend.gvs.tranzitPitaush.recomend = constants_appVariables.gvsRows[i].querySelector("#comp_12541");
        constants_appVariables.recomend.gvs.tranzitPitaush.trebObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12542");
        constants_appVariables.recomend.gvs.tranzitPitaush.vypolnenGod = constants_appVariables.gvsRows[i].querySelector("#comp_12543");
        constants_appVariables.recomend.gvs.tranzitPitaush.factObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12544");
        break;
      case "Чердак":
        constants_appVariables.recomend.gvs.cherdak = new Object();
        constants_appVariables.recomend.gvs.cherdak.name = constants_appVariables.gvsRows[i].querySelector("#lookupTextcomp_12540").textContent;
        constants_appVariables.recomend.gvs.cherdak.recomend = constants_appVariables.gvsRows[i].querySelector("#comp_12541");
        constants_appVariables.recomend.gvs.cherdak.trebObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12542");
        constants_appVariables.recomend.gvs.cherdak.vypolnenGod = constants_appVariables.gvsRows[i].querySelector("#comp_12543");
        constants_appVariables.recomend.gvs.cherdak.factObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12544");
        break;
      case "Этажи":
        constants_appVariables.recomend.gvs.etaji = new Object();
        constants_appVariables.recomend.gvs.etaji.name = constants_appVariables.gvsRows[i].querySelector("#lookupTextcomp_12540").textContent;
        constants_appVariables.recomend.gvs.etaji.recomend = constants_appVariables.gvsRows[i].querySelector("#comp_12541");
        constants_appVariables.recomend.gvs.etaji.trebObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12542");
        constants_appVariables.recomend.gvs.etaji.vypolnenGod = constants_appVariables.gvsRows[i].querySelector("#comp_12543");
        constants_appVariables.recomend.gvs.etaji.factObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12544");
        break;
      case "Вся система":
        constants_appVariables.recomend.gvs.vsaSistema = new Object();
        constants_appVariables.recomend.gvs.vsaSistema.name = constants_appVariables.gvsRows[i].querySelector("#lookupTextcomp_12540").textContent;
        constants_appVariables.recomend.gvs.vsaSistema.recomend = constants_appVariables.gvsRows[i].querySelector("#comp_12541");
        constants_appVariables.recomend.gvs.vsaSistema.trebObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12542");
        constants_appVariables.recomend.gvs.vsaSistema.vypolnenGod = constants_appVariables.gvsRows[i].querySelector("#comp_12543");
        constants_appVariables.recomend.gvs.vsaSistema.factObjom = constants_appVariables.gvsRows[i].querySelector("#comp_12544");
        break;
    }
  }

  // ХВС
  constants_appVariables.recomend.hvs = new Object();
  for (let i = 1; i < constants_appVariables.hvsRows.length; i++) {
    switch (constants_appVariables.hvsRows[i].querySelector("#lookupTextcomp_12545").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.recomend.hvs.tehPodpolie = new Object();
        constants_appVariables.recomend.hvs.tehPodpolie.name = constants_appVariables.hvsRows[i].querySelector("#lookupTextcomp_12545").textContent;
        constants_appVariables.recomend.hvs.tehPodpolie.recomend = constants_appVariables.hvsRows[i].querySelector("#comp_12546");
        constants_appVariables.recomend.hvs.tehPodpolie.trebObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12547");
        constants_appVariables.recomend.hvs.tehPodpolie.vypolnenGod = constants_appVariables.hvsRows[i].querySelector("#comp_12548");
        constants_appVariables.recomend.hvs.tehPodpolie.factObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12549");
        break;
      case "Транзит питающий":
        constants_appVariables.recomend.hvs.tranzitPitaush = new Object();
        constants_appVariables.recomend.hvs.tranzitPitaush.name = constants_appVariables.hvsRows[i].querySelector("#lookupTextcomp_12545").textContent;
        constants_appVariables.recomend.hvs.tranzitPitaush.recomend = constants_appVariables.hvsRows[i].querySelector("#comp_12546");
        constants_appVariables.recomend.hvs.tranzitPitaush.trebObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12547");
        constants_appVariables.recomend.hvs.tranzitPitaush.vypolnenGod = constants_appVariables.hvsRows[i].querySelector("#comp_12548");
        constants_appVariables.recomend.hvs.tranzitPitaush.factObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12549");
        break;
      case "Этажи":
        constants_appVariables.recomend.hvs.etaji = new Object();
        constants_appVariables.recomend.hvs.etaji.name = constants_appVariables.hvsRows[i].querySelector("#lookupTextcomp_12545").textContent;
        constants_appVariables.recomend.hvs.etaji.recomend = constants_appVariables.hvsRows[i].querySelector("#comp_12546");
        constants_appVariables.recomend.hvs.etaji.trebObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12547");
        constants_appVariables.recomend.hvs.etaji.vypolnenGod = constants_appVariables.hvsRows[i].querySelector("#comp_12548");
        constants_appVariables.recomend.hvs.etaji.factObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12549");
        break;
      case "Внутренний пожарный водопровод":
        constants_appVariables.recomend.hvs.vnPojarTrubopr = new Object();
        constants_appVariables.recomend.hvs.vnPojarTrubopr.name = constants_appVariables.hvsRows[i].querySelector("#lookupTextcomp_12545").textContent;
        constants_appVariables.recomend.hvs.vnPojarTrubopr.recomend = constants_appVariables.hvsRows[i].querySelector("#comp_12546");
        constants_appVariables.recomend.hvs.vnPojarTrubopr.trebObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12547");
        constants_appVariables.recomend.hvs.vnPojarTrubopr.vypolnenGod = constants_appVariables.hvsRows[i].querySelector("#comp_12548");
        constants_appVariables.recomend.hvs.vnPojarTrubopr.factObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12549");
        break;
      case "Вся система":
        constants_appVariables.recomend.hvs.vsaSistema = new Object();
        constants_appVariables.recomend.hvs.vsaSistema.name = constants_appVariables.hvsRows[i].querySelector("#lookupTextcomp_12545").textContent;
        constants_appVariables.recomend.hvs.vsaSistema.recomend = constants_appVariables.hvsRows[i].querySelector("#comp_12546");
        constants_appVariables.recomend.hvs.vsaSistema.trebObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12547");
        constants_appVariables.recomend.hvs.vsaSistema.vypolnenGod = constants_appVariables.hvsRows[i].querySelector("#comp_12548");
        constants_appVariables.recomend.hvs.vsaSistema.factObjom = constants_appVariables.hvsRows[i].querySelector("#comp_12549");
        break;
    }
  }

  // Канализация
  constants_appVariables.recomend.kanalizacia = new Object();
  for (let i = 1; i < constants_appVariables.sewerRows.length; i++) {
    switch (constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12550").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.recomend.kanalizacia.tehPodpolie = new Object();
        constants_appVariables.recomend.kanalizacia.tehPodpolie.name = constants_appVariables.sewerRows[i].querySelector("#lookupTextcomp_12550").textContent;
        constants_appVariables.recomend.kanalizacia.tehPodpolie.recomend = constants_appVariables.sewerRows[i].querySelector("#comp_12551");
        constants_appVariables.recomend.kanalizacia.tehPodpolie.trebObjom = constants_appVariables.sewerRows[i].querySelector("#comp_12552");
        constants_appVariables.recomend.kanalizacia.tehPodpolie.vypolnenGod = constants_appVariables.sewerRows[i].querySelector("#comp_12553");
        constants_appVariables.recomend.kanalizacia.tehPodpolie.factObjom = constants_appVariables.sewerRows[i].querySelector("#comp_12554");
        break;
      case "Этажи":
        constants_appVariables.recomend.kanalizacia.etaji = new Object();
        constants_appVariables.recomend.kanalizacia.etaji.name = constants_appVariables.sewerRows[i].querySelector("#lookupTextcomp_12550").textContent;
        constants_appVariables.recomend.kanalizacia.etaji.recomend = constants_appVariables.sewerRows[i].querySelector("#comp_12551");
        constants_appVariables.recomend.kanalizacia.etaji.trebObjom = constants_appVariables.sewerRows[i].querySelector("#comp_12552");
        constants_appVariables.recomend.kanalizacia.etaji.vypolnenGod = constants_appVariables.sewerRows[i].querySelector("#comp_12553");
        constants_appVariables.recomend.kanalizacia.etaji.factObjom = constants_appVariables.sewerRows[i].querySelector("#comp_12554");
        break;
      case "Вся система":
        constants_appVariables.recomend.kanalizacia.vsaSistema = new Object();
        constants_appVariables.recomend.kanalizacia.vsaSistema.name = constants_appVariables.sewerRows[i].querySelector("#lookupTextcomp_12550").textContent;
        constants_appVariables.recomend.kanalizacia.vsaSistema.recomend = constants_appVariables.sewerRows[i].querySelector("#comp_12551");
        constants_appVariables.recomend.kanalizacia.vsaSistema.trebObjom = constants_appVariables.sewerRows[i].querySelector("#comp_12552");
        constants_appVariables.recomend.kanalizacia.vsaSistema.vypolnenGod = constants_appVariables.sewerRows[i].querySelector("#comp_12553");
        constants_appVariables.recomend.kanalizacia.vsaSistema.factObjom = constants_appVariables.sewerRows[i].querySelector("#comp_12554");
        break;
    }
  }

  // Мусоропроводы
  constants_appVariables.recomend.musoroprovody = new Object();
  constants_appVariables.recomend.musoroprovody.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12556");
  constants_appVariables.recomend.musoroprovody.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12557");
  constants_appVariables.recomend.musoroprovody.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12558");
  constants_appVariables.recomend.musoroprovody.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12559");

  // Система промывки и прочистки стволов мусоропроводов
  constants_appVariables.recomend.musoroChistSistema = new Object();
  constants_appVariables.recomend.musoroChistSistema.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12561");
  constants_appVariables.recomend.musoroChistSistema.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12562");
  constants_appVariables.recomend.musoroChistSistema.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12563");
  constants_appVariables.recomend.musoroChistSistema.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12564");

  // Вентиляц.
  constants_appVariables.recomend.ventilacia = new Object();
  constants_appVariables.recomend.ventilacia.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12566");
  constants_appVariables.recomend.ventilacia.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12567");
  constants_appVariables.recomend.ventilacia.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12568");
  constants_appVariables.recomend.ventilacia.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12569");

  // Газоходы
  constants_appVariables.recomend.gazohody = new Object();
  constants_appVariables.recomend.gazohody.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12576");
  constants_appVariables.recomend.gazohody.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12577");
  constants_appVariables.recomend.gazohody.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12578");
  constants_appVariables.recomend.gazohody.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12579");

  // Лифты
  constants_appVariables.recomend.lifty = new Object();
  constants_appVariables.recomend.lifty.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12581");
  constants_appVariables.recomend.lifty.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12582");
  constants_appVariables.recomend.lifty.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12583");
  constants_appVariables.recomend.lifty.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12584");

  // Подъёмное устройство для маломобильной группы населения
  constants_appVariables.recomend.podyomnik = new Object();
  constants_appVariables.recomend.podyomnik.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12586");
  constants_appVariables.recomend.podyomnik.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12587");
  constants_appVariables.recomend.podyomnik.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12588");
  constants_appVariables.recomend.podyomnik.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12589");

  // Устройство для автоматического опускания лифта
  constants_appVariables.recomend.autoSpuskLift = new Object();
  constants_appVariables.recomend.autoSpuskLift.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12591");
  constants_appVariables.recomend.autoSpuskLift.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12592");
  constants_appVariables.recomend.autoSpuskLift.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12593");
  constants_appVariables.recomend.autoSpuskLift.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12594");

  // Система ЭС (ВРУ)
  constants_appVariables.recomend.systemEs = new Object();
  constants_appVariables.recomend.systemEs.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12596");
  constants_appVariables.recomend.systemEs.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12597");
  constants_appVariables.recomend.systemEs.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12598");
  constants_appVariables.recomend.systemEs.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12599");

  // ВКВ (второй кабельный ввод)
  constants_appVariables.recomend.vkv = new Object();
  constants_appVariables.recomend.vkv.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12436");
  constants_appVariables.recomend.vkv.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12437");
  constants_appVariables.recomend.vkv.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12438");
  constants_appVariables.recomend.vkv.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12439");

  // АВР (автоматическое включение резервного питания)
  constants_appVariables.recomend.avr = new Object();
  constants_appVariables.recomend.avr.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12441");
  constants_appVariables.recomend.avr.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12442");
  constants_appVariables.recomend.avr.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12443");
  constants_appVariables.recomend.avr.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12404");

  // ППАиДУ
  constants_appVariables.recomend.ppaidu = new Object();
  constants_appVariables.recomend.ppaidu.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12406");
  constants_appVariables.recomend.ppaidu.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12407");
  constants_appVariables.recomend.ppaidu.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12408");
  constants_appVariables.recomend.ppaidu.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12409");

  // Система оповещения о пожаре
  constants_appVariables.recomend.pozharOpoveshen = new Object();
  constants_appVariables.recomend.pozharOpoveshen.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12411");
  constants_appVariables.recomend.pozharOpoveshen.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12412");
  constants_appVariables.recomend.pozharOpoveshen.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12413");
  constants_appVariables.recomend.pozharOpoveshen.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12414");

  // ГС
  constants_appVariables.recomend.gs = new Object();
  constants_appVariables.recomend.gs.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12416");
  constants_appVariables.recomend.gs.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12417");
  constants_appVariables.recomend.gs.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12418");
  constants_appVariables.recomend.gs.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12419");

  // Связь с ОДС
  constants_appVariables.recomend.ods = new Object();
  constants_appVariables.recomend.ods.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12421");
  constants_appVariables.recomend.ods.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12422");
  constants_appVariables.recomend.ods.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12423");
  constants_appVariables.recomend.ods.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12424");

  // Система видеонаблюдения
  constants_appVariables.recomend.videonab = new Object();
  constants_appVariables.recomend.videonab.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12426");
  constants_appVariables.recomend.videonab.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12427");
  constants_appVariables.recomend.videonab.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12428");
  constants_appVariables.recomend.videonab.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12429");

  // ОЗДС(охранно-защитная дератизационная система)
  constants_appVariables.recomend.ozds = new Object();
  constants_appVariables.recomend.ozds.recomend = constants_appVariables.recomendationsDone.querySelector("#comp_12431");
  constants_appVariables.recomend.ozds.trebObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12432");
  constants_appVariables.recomend.ozds.vypolnenGod = constants_appVariables.recomendationsDone.querySelector("#comp_12423");
  constants_appVariables.recomend.ozds.factObjom = constants_appVariables.recomendationsDone.querySelector("#comp_12424");

  // Общий вывод: Рекомендации по выполнению объемов капитального ремонта
  constants_appVariables.recomend.obshiyVivod = constants_appVariables.recomendationsDone.querySelector("#lookupTextcomp_12435");

  // РЕЗУЛЬТАТЫ ВЫБОРОЧНОГО ОБСЛЕДОВАНИЯ
  // Крыша
  for (let i = 1; i < constants_appVariables.resultsRoofRows.length; i++) {
    if (!constants_appVariables.resultsRoofRows[i].querySelector("#comp_12642")) {
      continue;
    }
    switch (constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12641").textContent) {
      case "Кровля":
        constants_appVariables.krovlyaName = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12641").textContent;
        constants_appVariables.krovlyaDefecty = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12642");
        constants_appVariables.krovlyaPercent = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12644");
        constants_appVariables.krovlyaProshlOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12643");
        constants_appVariables.krovlyaOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12645");
        break;
      case "Свесы":
        constants_appVariables.svesyName = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12641").textContent;
        constants_appVariables.svesyDefecty = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12642");
        constants_appVariables.svesyPercent = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12644");
        constants_appVariables.svesyProshlOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12643");
        constants_appVariables.svesyOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12645");
        break;
      case "Стропильная система":
        constants_appVariables.stropilnayaSistemaName = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12641").textContent;
        constants_appVariables.stropilnayaSistemaDefecty = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12642");
        constants_appVariables.stropilnayaSistemaPercent = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12644");
        constants_appVariables.stropilnayaSistemaProshlOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12643");
        constants_appVariables.stropilnayaSistemaOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12645");
        break;
      case "Чердак":
        constants_appVariables.cherdakName = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12641").textContent;
        constants_appVariables.cherdakDefecty = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12642");
        constants_appVariables.cherdakPercent = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12644");
        constants_appVariables.cherdakProshlOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12643");
        constants_appVariables.cherdakOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12645");
        break;
      case "Покрытие ж/б":
        constants_appVariables.pokritieJBName = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12641").textContent;
        constants_appVariables.pokritieJBDefecty = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12642");
        constants_appVariables.pokritieJBPercent = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12644");
        constants_appVariables.pokritieJBProshlOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12643");
        constants_appVariables.pokritieJBOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12645");
        break;
      case "Все элементы":
        constants_appVariables.vsyaKrishaName = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12641").textContent;
        constants_appVariables.vsyaKrishaDefecty = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12642");
        constants_appVariables.vsyaKrishaPercent = constants_appVariables.resultsRoofRows[i].querySelector("#comp_12644");
        constants_appVariables.vsyaKrishaProshlOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12643");
        constants_appVariables.vsyaKrishaOcenka = constants_appVariables.resultsRoofRows[i].querySelector("#lookupTextcomp_12645");
        break;
    }
  }
  constants_appVariables.roofConstruction = constants_appVariables.results.querySelector("#lookupTextcomp_12453");
  constants_appVariables.roofMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_12454");
  constants_appVariables.roofSquare = constants_appVariables.results.querySelector("#comp_12455");

  // Водоотвод
  constants_appVariables.vodootvodDefecty = constants_appVariables.results.querySelector("#comp_12647");
  constants_appVariables.vodootvodPercent = constants_appVariables.results.querySelector("#comp_12649");
  constants_appVariables.vodootvodProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12648");
  constants_appVariables.vodootvodOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12650");
  constants_appVariables.vodootvodType = constants_appVariables.results.querySelector("#lookupTextcomp_12456");
  constants_appVariables.vodootvodMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_12457");

  // Межпанельные стыки
  constants_appVariables.majpanelnyeStykiDefecty = constants_appVariables.results.querySelector("#comp_12652");
  constants_appVariables.majpanelnyeStykiPercent = constants_appVariables.results.querySelector("#comp_12654");
  constants_appVariables.majpanelnyeStykiProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12653");
  constants_appVariables.majpanelnyeStykiOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12655");
  constants_appVariables.majpanelnyeStykiType = constants_appVariables.results.querySelector("#lookupTextcomp_12458");

  // Фасад
  constants_appVariables.fasadDefecty = constants_appVariables.results.querySelector("#comp_12657");
  constants_appVariables.fasadPercent = constants_appVariables.results.querySelector("#comp_12659");
  constants_appVariables.fasadProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12658");
  constants_appVariables.fasadOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12660");
  constants_appVariables.fasadSquare = constants_appVariables.results.querySelector("#comp_12459");
  constants_appVariables.fasadOtdelkaSten = constants_appVariables.results.querySelector("#lookupTextcomp_12460");
  constants_appVariables.fasadOblicovkaTsokolya = constants_appVariables.results.querySelector("#lookupTextcomp_12461");
  constants_appVariables.fasadOkonnyeZapolneniya = constants_appVariables.results.querySelector("#lookupTextcomp_12462");

  // Балконы
  for (let i = 1; i < constants_appVariables.resultsBalconyRows.length; i++) {
    if (!constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12736")) {
      continue;
    }
    switch (constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12735").textContent) {
      case "Балконы":
        constants_appVariables.balkonyName = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12735").textContent;
        constants_appVariables.balkonyDefecty = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12736");
        constants_appVariables.balkonyPercent = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12738");
        constants_appVariables.balkonyProshlOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12737");
        constants_appVariables.balkonyOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12739");
        break;
      case "Лоджии":
        constants_appVariables.lodjiiName = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12735").textContent;
        constants_appVariables.lodjiiDefecty = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12736");
        constants_appVariables.lodjiiPercent = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12738");
        constants_appVariables.lodjiiProshlOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12737");
        constants_appVariables.lodjiiOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12739");
        break;
      case "Козырьки":
        constants_appVariables.kozirkiName = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12735").textContent;
        constants_appVariables.kozirkiDefecty = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12736");
        constants_appVariables.kozirkiPercent = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12738");
        constants_appVariables.kozirkiProshlOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12737");
        constants_appVariables.kozirkiOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12739");
        break;
      case "Эркеры":
        constants_appVariables.erkeryName = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12735").textContent;
        constants_appVariables.erkeryDefecty = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12736");
        constants_appVariables.erkeryPercent = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12738");
        constants_appVariables.erkeryProshlOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12737");
        constants_appVariables.erkeryOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12739");
        break;
      case "Все элементы":
        constants_appVariables.vseBalkonyName = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12735").textContent;
        constants_appVariables.vseBalkonyDefecty = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12736");
        constants_appVariables.vseBalkonyPercent = constants_appVariables.resultsBalconyRows[i].querySelector("#comp_12738");
        constants_appVariables.vseBalkonyProshlOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12737");
        constants_appVariables.vseBalkonyOcenka = constants_appVariables.resultsBalconyRows[i].querySelector("#lookupTextcomp_12739");
        break;
    }
  }
  constants_appVariables.balkonyKolich = constants_appVariables.results.querySelector("#comp_12463");
  constants_appVariables.balkonyLojii = constants_appVariables.results.querySelector("#comp_12464");
  constants_appVariables.balkonyKozirkovVhody = constants_appVariables.results.querySelector("#comp_12465");
  constants_appVariables.balkonyKozirkovVerh = constants_appVariables.results.querySelector("#comp_12466");
  constants_appVariables.balkonyKozirkovNeproekt = constants_appVariables.results.querySelector("#comp_12467");
  constants_appVariables.balkonyErkerovKolich = constants_appVariables.results.querySelector("#comp_12468");

  // Стены
  constants_appVariables.stenyDefecty = constants_appVariables.results.querySelector("#comp_12624");
  constants_appVariables.stenyPercent = constants_appVariables.results.querySelector("#comp_12626");
  constants_appVariables.stenyProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12625");
  constants_appVariables.stenyOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12672");
  constants_appVariables.stenyMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_12444");
  constants_appVariables.stenyTeploFizSvoistva = constants_appVariables.results.querySelector("#lookupTextcomp_12445");

  // Подвал
  constants_appVariables.podvalDefecty = constants_appVariables.results.querySelector("#comp_12628");
  constants_appVariables.podvalPercent = constants_appVariables.results.querySelector("#comp_12630");
  constants_appVariables.podvalProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12629");
  constants_appVariables.podvalOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12631");
  constants_appVariables.podvalNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12446");
  constants_appVariables.podvalSquare = constants_appVariables.results.querySelector("#comp_12447");

  // Тех.подполье
  constants_appVariables.techPodpolieDefecty = constants_appVariables.results.querySelector("#comp_12633");
  constants_appVariables.techPodpoliePercent = constants_appVariables.results.querySelector("#comp_12635");
  constants_appVariables.techPodpolieProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12634");
  constants_appVariables.techPodpolieOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12636");
  constants_appVariables.techPodpolieNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12448");

  // Тех.этаж
  constants_appVariables.techEtajDefecty = constants_appVariables.results.querySelector("#comp_12638");
  constants_appVariables.techEtajPercent = constants_appVariables.results.querySelector("#comp_12640");
  constants_appVariables.techEtajProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12639");
  constants_appVariables.techEtajOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12673");
  constants_appVariables.techEtajNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12449");
  constants_appVariables.techEtajMesto = constants_appVariables.results.querySelector("#comp_12367");

  // Гараж стоянка (подземный)
  constants_appVariables.garageDefecty = constants_appVariables.results.querySelector("#comp_12747");
  constants_appVariables.garagePercent = constants_appVariables.results.querySelector("#comp_12749");
  constants_appVariables.garageProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12748");
  constants_appVariables.garageOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12750");
  constants_appVariables.garageType = constants_appVariables.results.querySelector("#lookupTextcomp_12450");
  constants_appVariables.garageSquare = constants_appVariables.results.querySelector("#comp_12451");
  constants_appVariables.garageEtagnost = constants_appVariables.results.querySelector("#comp_12452");
  constants_appVariables.garageKolichestvoMashin = constants_appVariables.results.querySelector("#comp_12369");

  // Места общего пользования
  for (let i = 1; i < constants_appVariables.resultsMopRows.length; i++) {
    if (!constants_appVariables.resultsMopRows[i].querySelector("#comp_12752")) {
      continue;
    }
    switch (constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent) {
      case "Вестибюли":
        constants_appVariables.mopVestibuliName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopVestibuliDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopVestibuliPercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopVestibuliProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopVestibuliOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
      case "Крыльца":
        constants_appVariables.mopKrilcaName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopKrilcaDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopKrilcaPercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopKrilcaProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopKrilcaOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
      case "Пандусы наружные":
        constants_appVariables.mopPandusyNaruzhnieName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopPandusyNaruzhnieDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopPandusyNaruzhniePercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopPandusyNaruzhnieProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopPandusyNaruzhnieOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
      case "Пандусы внутри-подъездные":
        constants_appVariables.mopPandusyVnutrennieName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopPandusyVnutrennieDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopPandusyVnutrenniePercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopPandusyVnutrennieProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopPandusyVnutrennieOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
      case "Сходы/съезды":
        constants_appVariables.mopShodySiezdyName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopShodySiezdyDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopShodySiezdyPercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopShodySiezdyProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopShodySiezdyOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
      case "Окна, двери":
        constants_appVariables.mopOknaDveriName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopOknaDveriDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopOknaDveriPercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopOknaDveriProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopOknaDveriOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
      case "Внутренняя отделка помещений":
        constants_appVariables.mopVnOtdelkaPomeshName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopVnOtdelkaPomeshDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopVnOtdelkaPomeshPercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopVnOtdelkaPomeshProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopVnOtdelkaPomeshOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
      case "Все элементы":
        constants_appVariables.mopVseElementyName = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12751").textContent;
        constants_appVariables.mopVseElementyDefecty = constants_appVariables.resultsMopRows[i].querySelector("#comp_12752");
        constants_appVariables.mopVseElementyPercent = constants_appVariables.resultsMopRows[i].querySelector("#comp_12754");
        constants_appVariables.mopVseElementyProshlOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12753");
        constants_appVariables.mopVseElementyOcenka = constants_appVariables.resultsMopRows[i].querySelector("#lookupTextcomp_12755");
        break;
    }
  }
  constants_appVariables.mopPandusyNaruzhKolich = constants_appVariables.results.querySelector("#comp_12354");
  constants_appVariables.mopPandusyVnutrKolich = constants_appVariables.results.querySelector("#comp_12355");
  constants_appVariables.mopShodySiezdyKolich = constants_appVariables.results.querySelector("#comp_12356");

  // Лестницы
  constants_appVariables.lestnicyDefecty = constants_appVariables.results.querySelector("#comp_12757");
  constants_appVariables.lestnicyPercent = constants_appVariables.results.querySelector("#comp_12759");
  constants_appVariables.lestnicyProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12758");
  constants_appVariables.lestnicyOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12674");
  constants_appVariables.lestnicyConstruction = constants_appVariables.results.querySelector("#lookupTextcomp_12370");

  // Перекрытия
  constants_appVariables.perekrityaDefecty = constants_appVariables.results.querySelector("#comp_12761");
  constants_appVariables.perekrityaPercent = constants_appVariables.results.querySelector("#comp_12763");
  constants_appVariables.perekrityaProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12764");
  constants_appVariables.perekrityaOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12764");
  constants_appVariables.perekrityaMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_12371");

  // Система отопления
  for (let i = 1; i < constants_appVariables.resultsHeatSystemRows.length; i++) {
    if (!constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12766")) {
      continue;
    }
    switch (constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12765").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.otopleniyeTehPodpolieName = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12765").textContent;
        constants_appVariables.otopleniyeTehPodpolieDefecty = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12766");
        constants_appVariables.otopleniyeTehPodpoliePercent = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12768");
        constants_appVariables.otopleniyeTehPodpolieProshlOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12767");
        constants_appVariables.otopleniyeTehPodpolieOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12769");
        break;
      case "Транзит питающий":
        constants_appVariables.otopleniyeTranzitPitaushName = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12765").textContent;
        constants_appVariables.otopleniyeTranzitPitaushDefecty = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12766");
        constants_appVariables.otopleniyeTranzitPitaushPercent = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12768");
        constants_appVariables.otopleniyeTranzitPitaushProshlOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12767");
        constants_appVariables.otopleniyeTranzitPitaushOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12769");
        break;
      case "Чердак":
        constants_appVariables.otopleniyeCherdakName = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12765").textContent;
        constants_appVariables.otopleniyeCherdakDefecty = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12766");
        constants_appVariables.otopleniyeCherdakPercent = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12768");
        constants_appVariables.otopleniyeCherdakProshlOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12767");
        constants_appVariables.otopleniyeCherdakOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12769");
        break;
      case "Этажи":
        constants_appVariables.otopleniyeEtajiName = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12765").textContent;
        constants_appVariables.otopleniyeEtajiDefecty = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12766");
        constants_appVariables.otopleniyeEtajiPercent = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12768");
        constants_appVariables.otopleniyeEtajiProshlOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12767");
        constants_appVariables.otopleniyeEtajiOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12769");
        break;
      case "Вся система":
        constants_appVariables.vseOtopleniyeName = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12765").textContent;
        constants_appVariables.vseOtopleniyeDefecty = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12766");
        constants_appVariables.vseOtopleniyePercent = constants_appVariables.resultsHeatSystemRows[i].querySelector("#comp_12768");
        constants_appVariables.vseOtopleniyeProshlOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12767");
        constants_appVariables.vseOtopleniyeOcenka = constants_appVariables.resultsHeatSystemRows[i].querySelector("#lookupTextcomp_12769");
        break;
    }
  }
  constants_appVariables.otopleniyeVid = constants_appVariables.results.querySelector("#lookupTextcomp_12605");
  constants_appVariables.otopleniyeMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_13393");
  constants_appVariables.otopleniyeTypePribor = constants_appVariables.results.querySelector("#lookupTextcomp_12372");
  constants_appVariables.otopleniyeTermoRegulKvartir = constants_appVariables.results.querySelector("#lookupTextcomp_12373");
  constants_appVariables.otopleniyeAuu = constants_appVariables.results.querySelector("#comp_12374");
  constants_appVariables.otopleniyeOduu = constants_appVariables.results.querySelector("#lookupTextcomp_12375");
  constants_appVariables.otopleniyeElevUzel = constants_appVariables.results.querySelector("#comp_12376");
  constants_appVariables.otopleniyeTeplovoyUzel = constants_appVariables.results.querySelector("#comp_12377");
  constants_appVariables.otopleniyeTypeStoyakov = constants_appVariables.results.querySelector("#lookupTextcomp_12299");

  // ГВС
  for (let i = 1; i < constants_appVariables.resultsGvsRows.length; i++) {
    if (!constants_appVariables.resultsGvsRows[i].querySelector("#comp_12771")) {
      continue;
    }
    switch (constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12770").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.gvsTehPodpolieName = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12770").textContent;
        constants_appVariables.gvsTehPodpolieDefecty = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12771");
        constants_appVariables.gvsTehPodpoliePercent = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12773");
        constants_appVariables.gvsTehPodpolieProshlOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12772");
        constants_appVariables.gvsTehPodpolieOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12675");
        break;
      case "Транзит питающий":
        constants_appVariables.gvsTranzitPitaushName = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12770").textContent;
        constants_appVariables.gvsTranzitPitaushDefecty = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12771");
        constants_appVariables.gvsTranzitPitaushPercent = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12773");
        constants_appVariables.gvsTranzitPitaushProshlOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12772");
        constants_appVariables.gvsTranzitPitaushOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12675");
        break;
      case "Чердак":
        constants_appVariables.gvsCherdakName = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12770").textContent;
        constants_appVariables.gvsCherdakDefecty = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12771");
        constants_appVariables.gvsCherdakPercent = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12773");
        constants_appVariables.gvsCherdakProshlOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12772");
        constants_appVariables.gvsCherdakOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12675");
        break;
      case "Этажи":
        constants_appVariables.gvsEtajiName = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12770").textContent;
        constants_appVariables.gvsEtajiDefecty = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12771");
        constants_appVariables.gvsEtajiPercent = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12773");
        constants_appVariables.gvsEtajiProshlOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12772");
        constants_appVariables.gvsEtajiOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12675");
        break;
      case "Вся система":
        constants_appVariables.vseGvsName = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12770").textContent;
        constants_appVariables.vseGvsDefecty = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12771");
        constants_appVariables.vseGvsPercent = constants_appVariables.resultsGvsRows[i].querySelector("#comp_12773");
        constants_appVariables.vseGvsProshlOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12772");
        constants_appVariables.vseGvsOcenka = constants_appVariables.resultsGvsRows[i].querySelector("#lookupTextcomp_12675");
        break;
    }
  }
  constants_appVariables.gvsType = constants_appVariables.results.querySelector("#lookupTextcomp_12378");
  constants_appVariables.gvsMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_12379");
  constants_appVariables.gvsOduu = constants_appVariables.results.querySelector("#lookupTextcomp_12380");
  constants_appVariables.gvsTypeStoyakov = constants_appVariables.results.querySelector("#lookupTextcomp_13394");

  // ХВС
  for (let i = 1; i < constants_appVariables.resultsHvsRows.length; i++) {
    if (!constants_appVariables.resultsHvsRows[i].querySelector("#comp_12775")) {
      continue;
    }
    switch (constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12774").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.hvsTehPodpolieName = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12774").textContent;
        constants_appVariables.hvsTehPodpolieDefecty = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12775");
        constants_appVariables.hvsTehPodpoliePercent = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12777");
        constants_appVariables.hvsTehPodpolieProshlOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12776");
        constants_appVariables.hvsTehPodpolieOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12778");
        break;
      case "Транзит питающий":
        constants_appVariables.hvsTranzitPitaushName = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12774").textContent;
        constants_appVariables.hvsTranzitPitaushDefecty = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12775");
        constants_appVariables.hvsTranzitPitaushPercent = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12777");
        constants_appVariables.hvsTranzitPitaushProshlOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12776");
        constants_appVariables.hvsTranzitPitaushOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12778");
        break;
      case "Этажи":
        constants_appVariables.hvsEtajiName = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12774").textContent;
        constants_appVariables.hvsEtajiDefecty = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12775");
        constants_appVariables.hvsEtajiPercent = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12777");
        constants_appVariables.hvsEtajiProshlOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12776");
        constants_appVariables.hvsEtajiOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12778");
        break;
      case "Внутренний пожарный водопровод":
        constants_appVariables.hvsVnPozharProvodName = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12774").textContent;
        constants_appVariables.hvsVnPozharProvodDefecty = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12775");
        constants_appVariables.hvsVnPozharProvodPercent = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12777");
        constants_appVariables.hvsVnPozharProvodProshlOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12776");
        constants_appVariables.hvsVnPozharProvodOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12778");
        break;
      case "Вся система":
        constants_appVariables.vseHvsName = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12774").textContent;
        constants_appVariables.vseHvsDefecty = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12775");
        constants_appVariables.vseHvsPercent = constants_appVariables.resultsHvsRows[i].querySelector("#comp_12777");
        constants_appVariables.vseHvsProshlOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12776");
        constants_appVariables.vseHvsOcenka = constants_appVariables.resultsHvsRows[i].querySelector("#lookupTextcomp_12778");
        break;
    }
  }
  constants_appVariables.hvsMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_12382");
  constants_appVariables.hvsOduu = constants_appVariables.results.querySelector("#lookupTextcomp_12381");
  constants_appVariables.hvsTypeStoyakov = constants_appVariables.results.querySelector("#lookupTextcomp_13395");

  // Канализация
  for (let i = 1; i < constants_appVariables.resultsSewerRows.length; i++) {
    if (!constants_appVariables.resultsSewerRows[i].querySelector("#comp_12780")) {
      continue;
    }
    switch (constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12779").textContent) {
      case "Тех.подполье/тех.этаж":
        constants_appVariables.kanalizaciaTehPodpolieName = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12779").textContent;
        constants_appVariables.kanalizaciaTehPodpolieDefecty = constants_appVariables.resultsSewerRows[i].querySelector("#comp_12780");
        constants_appVariables.kanalizaciaTehPodpoliePercent = constants_appVariables.resultsSewerRows[i].querySelector("#comp_12782");
        constants_appVariables.kanalizaciaTehPodpolieProshlOcenka = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12781");
        constants_appVariables.kanalizaciaTehPodpolieOcenka = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12783");
        break;
      case "Этажи":
        constants_appVariables.kanalizaciaEtajiName = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12779").textContent;
        constants_appVariables.kanalizaciaEtajiDefecty = constants_appVariables.resultsSewerRows[i].querySelector("#comp_12780");
        constants_appVariables.kanalizaciaEtajiPercent = constants_appVariables.resultsSewerRows[i].querySelector("#comp_12782");
        constants_appVariables.kanalizaciaEtajiProshlOcenka = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12781");
        constants_appVariables.kanalizaciaEtajiOcenka = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12783");
        break;
      case "Вся система":
        constants_appVariables.vseKanalizaciaName = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12779").textContent;
        constants_appVariables.vseKanalizaciaDefecty = constants_appVariables.resultsSewerRows[i].querySelector("#comp_12780");
        constants_appVariables.vseKanalizaciaPercent = constants_appVariables.resultsSewerRows[i].querySelector("#comp_12782");
        constants_appVariables.vseKanalizaciaProshlOcenka = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12781");
        constants_appVariables.vseKanalizaciaOcenka = constants_appVariables.resultsSewerRows[i].querySelector("#lookupTextcomp_12783");
        break;
    }
  }
  constants_appVariables.kanalizaciaMaterial = constants_appVariables.results.querySelector("#lookupTextcomp_12383");
  constants_appVariables.kanalizaciaTypeStoyakov = constants_appVariables.results.querySelector("#lookupTextcomp_13396");

  // Мусоропроводы
  constants_appVariables.musoroprovodyDefecty = constants_appVariables.results.querySelector("#comp_12785");
  constants_appVariables.musoroprovodyPercent = constants_appVariables.results.querySelector("#comp_12787");
  constants_appVariables.musoroprovodyProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12786");
  constants_appVariables.musoroprovodyOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12788");
  constants_appVariables.musoroprovodyMesto = constants_appVariables.results.querySelector("#lookupTextcomp_12384");
  constants_appVariables.musoroprovodyKamery = constants_appVariables.results.querySelector("#lookupTextcomp_12385");

  // Связь с ОДС
  constants_appVariables.odsDefecty = constants_appVariables.results.querySelector("#comp_12790");
  constants_appVariables.odsPosledneeObsled = constants_appVariables.results.querySelector("#comp_12791");
  constants_appVariables.odsOrganizacia = constants_appVariables.results.querySelector("#comp_12792");
  constants_appVariables.odsProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13401");
  constants_appVariables.odsOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12793");
  constants_appVariables.odsType = constants_appVariables.results.querySelector("#lookupTextcomp_12386");
  constants_appVariables.odsSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12607");

  // Вентиляция
  constants_appVariables.ventilaciaDefecty = constants_appVariables.results.querySelector("#comp_12795");
  constants_appVariables.ventilaciaPosledneeObsled = constants_appVariables.results.querySelector("#comp_12796");
  constants_appVariables.ventilaciaOrganizacia = constants_appVariables.results.querySelector("#comp_12797");
  constants_appVariables.ventilaciaProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13402");
  constants_appVariables.ventilaciaOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12798");
  constants_appVariables.ventilaciaSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12608");

  // Система промывки и прочистки стволов мусоропроводов
  constants_appVariables.musoroChistSistemaDefecty = constants_appVariables.results.querySelector("#comp_12800");
  constants_appVariables.musoroChistSistemaPosledObsled = constants_appVariables.results.querySelector("#comp_12801");
  constants_appVariables.musoroChistSistemaOrganizacia = constants_appVariables.results.querySelector("#comp_12802");
  constants_appVariables.musoroChistSistemaProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13403");
  constants_appVariables.musoroChistSistemaOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12803");
  constants_appVariables.musoroChistSistemaNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12387");
  constants_appVariables.musoroChistSistemaSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12609");

  // ОЗДС (охранно-защитная дератизационная система)
  constants_appVariables.ozdsDefecty = constants_appVariables.results.querySelector("#comp_12677");
  constants_appVariables.ozdsPosledObsled = constants_appVariables.results.querySelector("#comp_12678");
  constants_appVariables.ozdsOrganizacia = constants_appVariables.results.querySelector("#comp_12679");
  constants_appVariables.ozdsProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13404");
  constants_appVariables.ozdsOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12680");
  constants_appVariables.ozdsNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12388");
  constants_appVariables.ozdsSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12610");

  // Газоходы
  constants_appVariables.gazohodyDefecty = constants_appVariables.results.querySelector("#comp_12687");
  constants_appVariables.gazohodyPosledObsled = constants_appVariables.results.querySelector("#comp_12688");
  constants_appVariables.gazohodyOrganizacia = constants_appVariables.results.querySelector("#comp_12689");
  constants_appVariables.gazohodyProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13405");
  constants_appVariables.gazohodyOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12690");
  constants_appVariables.gazohodyNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12390");
  constants_appVariables.gazohodySostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12612");

  // Лифты
  constants_appVariables.liftyDefecty = constants_appVariables.results.querySelector("#comp_12692");
  constants_appVariables.liftyPosledObsled = constants_appVariables.results.querySelector("#comp_12693");
  constants_appVariables.liftyOrganizacia = constants_appVariables.results.querySelector("#comp_12694");
  constants_appVariables.liftyProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13406");
  constants_appVariables.liftyOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12695");
  constants_appVariables.liftyPass = constants_appVariables.results.querySelector("#comp_12391");
  constants_appVariables.liftyGruzPass = constants_appVariables.results.querySelector("#comp_12392");
  constants_appVariables.liftyNavesnye = constants_appVariables.results.querySelector("#comp_12393");
  constants_appVariables.liftySostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12613");

  // Подъёмное устройство для маломобильной группы населения
  constants_appVariables.podyomnikDefecty = constants_appVariables.results.querySelector("#comp_12697");
  constants_appVariables.podyomnikPosledObsled = constants_appVariables.results.querySelector("#comp_12698");
  constants_appVariables.podyomnikOrganizacia = constants_appVariables.results.querySelector("#comp_12699");
  constants_appVariables.podyomnikProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13407");
  constants_appVariables.podyomnikOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12700");
  constants_appVariables.podyomnikKolich = constants_appVariables.results.querySelector("#comp_12394");
  constants_appVariables.podyomnikSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12614");

  // Устройство для автоматического опускания лифта
  constants_appVariables.autoSpuskLiftDefecty = constants_appVariables.results.querySelector("#comp_12702");
  constants_appVariables.autoSpuskLiftPosledObsled = constants_appVariables.results.querySelector("#comp_12703");
  constants_appVariables.autoSpuskLiftOrganizacia = constants_appVariables.results.querySelector("#comp_12704");
  constants_appVariables.autoSpuskLiftProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13408");
  constants_appVariables.autoSpuskLiftOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12705");
  constants_appVariables.autoSpuskLiftNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12395");
  constants_appVariables.autoSpuskLiftSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12615");

  // Система ЭС
  constants_appVariables.systemEsDefecty = constants_appVariables.results.querySelector("#comp_12707");
  constants_appVariables.systemEsPosledObsled = constants_appVariables.results.querySelector("#comp_12708");
  constants_appVariables.systemEsOrganizacia = constants_appVariables.results.querySelector("#comp_12709");
  constants_appVariables.systemEsProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13409");
  constants_appVariables.systemEsOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12710");
  constants_appVariables.systemEsKolich = constants_appVariables.results.querySelector("#comp_12397");
  constants_appVariables.systemEsRazmeshenie = constants_appVariables.results.querySelector("#lookupTextcomp_12396");
  constants_appVariables.systemEsSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12616");

  // ВКВ (второй кабельный ввод)
  constants_appVariables.vkvDefecty = constants_appVariables.results.querySelector("#comp_12712");
  constants_appVariables.vkvPosledObsled = constants_appVariables.results.querySelector("#comp_12713");
  constants_appVariables.vkvOrganizacia = constants_appVariables.results.querySelector("#comp_12714");
  constants_appVariables.vkvProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13410");
  constants_appVariables.vkvOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12715");
  constants_appVariables.vkvNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12398");
  constants_appVariables.vkvSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12622");

  // АВР (автоматическое включение резервного питания)
  constants_appVariables.avrDefecty = constants_appVariables.results.querySelector("#comp_12717");
  constants_appVariables.avrPosledObsled = constants_appVariables.results.querySelector("#comp_12718");
  constants_appVariables.avrOrganizacia = constants_appVariables.results.querySelector("#comp_12724");
  constants_appVariables.avrProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13411");
  constants_appVariables.avrOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12720");
  constants_appVariables.avrNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12399");
  constants_appVariables.avrSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12617");

  // ППАиДУ
  constants_appVariables.ppaiduDefecty = constants_appVariables.results.querySelector("#comp_12722");
  constants_appVariables.ppaiduPosledObsled = constants_appVariables.results.querySelector("#comp_12723");
  constants_appVariables.ppaiduOrganizacia = constants_appVariables.results.querySelector("#comp_12724");
  constants_appVariables.ppaiduProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13412");
  constants_appVariables.ppaiduOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12725");
  constants_appVariables.ppaiduType = constants_appVariables.results.querySelector("#lookupTextcomp_12400");
  constants_appVariables.ppaiduSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12618");

  // Система оповещения о пожаре
  constants_appVariables.pozharOpoveshenDefecty = constants_appVariables.results.querySelector("#comp_12727");
  constants_appVariables.pozharOpoveshenPosledObsled = constants_appVariables.results.querySelector("#comp_12728");
  constants_appVariables.pozharOpoveshenOrganizacia = constants_appVariables.results.querySelector("#comp_12729");
  constants_appVariables.pozharOpoveshenProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13413");
  constants_appVariables.pozharOpoveshenOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12730");
  constants_appVariables.pozharOpoveshenNalichie = constants_appVariables.results.querySelector("#lookupTextcomp_12401");
  constants_appVariables.pozharOpoveshenSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12619");

  // Система ГС
  constants_appVariables.sistemaGsDefecty = constants_appVariables.results.querySelector("#comp_12732");
  constants_appVariables.sistemaGsPosledObsled = constants_appVariables.results.querySelector("#comp_12733");
  constants_appVariables.sistemaGsOrganizacia = constants_appVariables.results.querySelector("#comp_12733");
  constants_appVariables.sistemaGsProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13414");
  constants_appVariables.sistemaGsOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12740");
  constants_appVariables.sistemaGsVvody = constants_appVariables.results.querySelector("#lookupTextcomp_12402");
  constants_appVariables.sistemaGsRazvodka = constants_appVariables.results.querySelector("#lookupTextcomp_12403");
  constants_appVariables.sistemaGsSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12620");

  // Система видеонаблюдения
  constants_appVariables.sistemaVideonabDefecty = constants_appVariables.results.querySelector("#comp_12742");
  constants_appVariables.sistemaVideonabPosledObsled = constants_appVariables.results.querySelector("#comp_12743");
  constants_appVariables.sistemaVideonabOrganizacia = constants_appVariables.results.querySelector("#comp_12744");
  constants_appVariables.sistemaVideonabProshlOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_13415");
  constants_appVariables.sistemaVideonabOcenka = constants_appVariables.results.querySelector("#lookupTextcomp_12745");
  constants_appVariables.sistemaVideonabMesto = constants_appVariables.results.querySelector("#lookupTextcomp_12349");
  constants_appVariables.sistemaVideonabSostoyanie = constants_appVariables.results.querySelector("#lookupTextcomp_12621");

  // Нижняя часть отчета
  constants_appVariables.dopolnitDannye = constants_appVariables.form.querySelector("#comp_12324");
  constants_appVariables.obsledVypolneno = constants_appVariables.form.querySelector("#lookupTextcomp_12347");
  constants_appVariables.recomendatciiPoUtepleniuSten = constants_appVariables.form.querySelector("#lookupTextcomp_12350");
  constants_appVariables.tehSostoyanieZdania = constants_appVariables.form.querySelector("#lookupTextcomp_12325");
  constants_appVariables.recomendatciiPoDopRabotam = constants_appVariables.form.querySelector("#comp_12606");

  // Подписывающие лица
  for (let i = 0; i < constants_appVariables.signatoriesRows.length; i++) {
    if (!constants_appVariables.signatoriesRows[i].querySelector("#comp_12340")) {
      continue;
    }
    constants_appVariables[i] = new Object();
    constants_appVariables[i]["licaOt"] = constants_appVariables.signatoriesRows[i].querySelector("#comp_12340");
    constants_appVariables[i]["LicaDoljnost"] = constants_appVariables.signatoriesRows[i].querySelector("#comp_12341");
    constants_appVariables[i]["licaFio"] = constants_appVariables.signatoriesRows[i].querySelector("#comp_12342");
    if (representativesInputs.empty) {
      representativesInputs[i] = new Object();
      representativesInputs[i]["LicaDoljnost"] = new Array();
      representativesInputs[i]["licaOt"] = new Array();
      representativesInputs[i]["licaFio"] = new Array();
      representativesInputs[i]["LicaDoljnost"].push(constants_appVariables[i]["LicaDoljnost"]);
      representativesInputs[i]["licaOt"].push(constants_appVariables[i]["licaOt"]);
      representativesInputs[i]["licaFio"].push(constants_appVariables[i]["licaFio"]);
    }
  }
  representativesInputs.empty = false;
  if (resultsDefectsInputs.empty) {
    resultsDefectsInputs.inputs.push(constants_appVariables.krovlyaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.svesyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.stropilnayaSistemaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.cherdakDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.pokritieJBDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vsyaKrishaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vodootvodDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.majpanelnyeStykiDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.fasadDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.balkonyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.lodjiiDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.kozirkiDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.erkeryDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vseBalkonyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.stenyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.podvalDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.techPodpolieDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.techEtajDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.garageDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopVestibuliDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopKrilcaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopPandusyNaruzhnieDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopPandusyVnutrennieDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopShodySiezdyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopOknaDveriDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopVnOtdelkaPomeshDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.mopVseElementyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.lestnicyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.perekrityaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.otopleniyeTehPodpolieDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.otopleniyeTranzitPitaushDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.otopleniyeCherdakDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.otopleniyeEtajiDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vseOtopleniyeDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.gvsTehPodpolieDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.gvsTranzitPitaushDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.gvsCherdakDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.gvsEtajiDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vseGvsDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.hvsTehPodpolieDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.hvsTranzitPitaushDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.hvsEtajiDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.hvsVnPozharProvodDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vseHvsDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.kanalizaciaTehPodpolieDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.kanalizaciaEtajiDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vseKanalizaciaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.musoroprovodyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.odsDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.ventilaciaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.musoroChistSistemaDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.ozdsDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.gazohodyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.liftyDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.podyomnikDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.autoSpuskLiftDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.systemEsDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.vkvDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.avrDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.ppaiduDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.pozharOpoveshenDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.sistemaGsDefecty);
    resultsDefectsInputs.inputs.push(constants_appVariables.sistemaVideonabDefecty);
    resultsDefectsInputs.empty = false;
  }
};
;// ./server/appComponents/clickGenerator.js
const clickGenerator_clickGenerator = (ocenkaInput, value, load) => {
  if (load && value === "-") {
    return;
  }
  try {
    const dataElement = ocenkaInput.parentElement.nextElementSibling;
    const listItems = dataElement.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
      const a = listItems[i].querySelector("a");
      if (a.textContent === value) {
        a.click();
        return;
      }
    }
  } catch {
    console.error(`clickGenerator failed: can't click`);
    return;
  }
};
;// ./server/appComponents/buttonError.js
const buttonError_buttonError = (button, currentPage, needPage, stdValue) => {
  if (currentPage !== needPage) {
    button.classList.add("main__button_error");
    button.textContent = "Ошибка!";
    setTimeout(() => {
      button.classList.remove("main__button_error");
      button.textContent = stdValue;
    }, 1500);
    return false;
  } else {
    return true;
  }
};
;// ./server/appComponents/clearData.js




const clearData = () => {
  if (!appData.availableFunctions.clearData) {
    return;
  }
  // Если страница не подходит для очистки - выдаем ошибку и выходим из функции
  if (!buttonError_buttonError(constants_appVariables.clearDataButton, constants_appVariables.currentPage, "main", "Очистка отчета")) {
    return;
  }
  // находим все инпуты в отчете
  searchAllInputs();

  // РЕЗУЛЬТАТЫ ВЫБОРОЧНОГО ОБСЛЕДОВАНИЯ
  // Крыша
  // Кровля
  constants_appVariables.krovlyaDefecty.value = "";
  constants_appVariables.krovlyaPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.krovlyaOcenka, "-", false);

  // Свесы
  constants_appVariables.svesyDefecty.value = "";
  constants_appVariables.svesyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.svesyOcenka, "-", false);

  // Стропильная система
  constants_appVariables.stropilnayaSistemaDefecty.value = "";
  constants_appVariables.stropilnayaSistemaPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.stropilnayaSistemaOcenka, "-", false);

  // Чердак
  constants_appVariables.cherdakDefecty.value = "";
  constants_appVariables.cherdakPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.cherdakOcenka, "-", false);

  // Покрытие ж/б
  constants_appVariables.pokritieJBDefecty.value = "";
  constants_appVariables.pokritieJBPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.pokritieJBOcenka, "-", false);

  // Все элементы
  constants_appVariables.vsyaKrishaDefecty.value = "";
  constants_appVariables.vsyaKrishaPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vsyaKrishaOcenka, "-", false);

  // Водоотвод
  constants_appVariables.vodootvodDefecty.value = "";
  constants_appVariables.vodootvodPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vodootvodOcenka, "-", false);

  // Межпанельные стыки
  constants_appVariables.majpanelnyeStykiDefecty.value = "";
  constants_appVariables.majpanelnyeStykiPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.majpanelnyeStykiProshlOcenka, "-", false);

  // Фасад
  constants_appVariables.fasadDefecty.value = "";
  constants_appVariables.fasadPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.fasadOcenka, "-", false);

  // Балконы
  // Балконы
  constants_appVariables.balkonyDefecty.value = "";
  constants_appVariables.balkonyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.balkonyOcenka, "-", false);

  // Лоджии
  constants_appVariables.lodjiiDefecty.value = "";
  constants_appVariables.lodjiiPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.lodjiiOcenka, "-", false);

  // Козырьки
  constants_appVariables.kozirkiDefecty.value = "";
  constants_appVariables.kozirkiPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.kozirkiOcenka, "-", false);

  // Эркеры
  constants_appVariables.erkeryDefecty.value = "";
  constants_appVariables.erkeryPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.erkeryOcenka, "-", false);

  // Все элементы
  constants_appVariables.vseBalkonyDefecty.value = "";
  constants_appVariables.vseBalkonyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vseBalkonyOcenka, "-", false);

  // Стены
  constants_appVariables.stenyDefecty.value = "";
  constants_appVariables.stenyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.stenyOcenka, "-", false);

  // Подвал
  constants_appVariables.podvalDefecty.value = "";
  constants_appVariables.podvalPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.podvalOcenka, "-", false);

  // Тех.подполье
  constants_appVariables.techPodpolieDefecty.value = "";
  constants_appVariables.techPodpoliePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.techPodpolieOcenka, "-", false);

  // Тех.этаж
  constants_appVariables.techEtajDefecty.value = "";
  constants_appVariables.techEtajPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.techEtajOcenka, "-", false);

  // Гараж стоянка (подземный)
  constants_appVariables.garageDefecty.value = "";
  constants_appVariables.garagePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.garageOcenka, "-", false);

  // Места общего пользования
  // Вестибюли
  constants_appVariables.mopVestibuliDefecty.value = "";
  constants_appVariables.mopVestibuliPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopVestibuliOcenka, "-", false);

  // Крыльца
  constants_appVariables.mopKrilcaDefecty.value = "";
  constants_appVariables.mopKrilcaPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopKrilcaOcenka, "-", false);

  // Пандусы наружные
  constants_appVariables.mopPandusyNaruzhnieDefecty.value = "";
  constants_appVariables.mopPandusyNaruzhniePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopPandusyNaruzhnieOcenka, "-", false);

  // Пандусы внутри-подъездные
  constants_appVariables.mopPandusyVnutrennieDefecty.value = "";
  constants_appVariables.mopPandusyVnutrenniePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopPandusyVnutrennieOcenka, "-", false);

  // Сходы/съезды
  constants_appVariables.mopShodySiezdyDefecty.value = "";
  constants_appVariables.mopShodySiezdyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopShodySiezdyOcenka, "-", false);

  // Окна, двери
  constants_appVariables.mopOknaDveriDefecty.value = "";
  constants_appVariables.mopOknaDveriPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopOknaDveriOcenka, "-", false);

  // Внутренняя отделка помещений
  constants_appVariables.mopVnOtdelkaPomeshDefecty.value = "";
  constants_appVariables.mopVnOtdelkaPomeshPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopVnOtdelkaPomeshOcenka, "-", false);

  // Все элементы
  constants_appVariables.mopVseElementyDefecty.value = "";
  constants_appVariables.mopVseElementyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.mopVseElementyOcenka, "-", false);

  // Лестницы
  constants_appVariables.lestnicyDefecty.value = "";
  constants_appVariables.lestnicyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.lestnicyOcenka, "-", false);

  // Перекрытия
  constants_appVariables.perekrityaDefecty.value = "";
  constants_appVariables.perekrityaPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.perekrityaOcenka, "-", false);

  // Система отопления
  // Тех.подполье/тех.этаж
  constants_appVariables.otopleniyeTehPodpolieDefecty.value = "";
  constants_appVariables.otopleniyeTehPodpoliePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeTehPodpolieOcenka, "-", false);

  // Транзит питающий
  constants_appVariables.otopleniyeTranzitPitaushDefecty.value = "";
  constants_appVariables.otopleniyeTranzitPitaushPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeTranzitPitaushOcenka, "-", false);

  // Чердак
  constants_appVariables.otopleniyeCherdakDefecty.value = "";
  constants_appVariables.otopleniyeCherdakPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeCherdakOcenka, "-", false);

  // Этажи
  constants_appVariables.otopleniyeEtajiDefecty.value = "";
  constants_appVariables.otopleniyeEtajiPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeEtajiOcenka, "-", false);

  // Вся система
  constants_appVariables.vseOtopleniyeDefecty.value = "";
  constants_appVariables.vseOtopleniyePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vseOtopleniyeOcenka, "-", false);

  // ГВС
  // Тех.подполье/тех.этаж
  constants_appVariables.gvsTehPodpolieDefecty.value = "";
  constants_appVariables.gvsTehPodpoliePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.gvsTehPodpolieOcenka, "-", false);

  // Транзит питающий
  constants_appVariables.gvsTranzitPitaushDefecty.value = "";
  constants_appVariables.gvsTranzitPitaushPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.gvsTranzitPitaushOcenka, "-", false);

  // Чердак
  constants_appVariables.gvsCherdakDefecty.value = "";
  constants_appVariables.gvsCherdakPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.gvsCherdakOcenka, "-", false);

  // Этажи
  constants_appVariables.gvsEtajiDefecty.value = "";
  constants_appVariables.gvsEtajiPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.gvsEtajiOcenka, "-", false);

  // Вся система
  constants_appVariables.vseGvsDefecty.value = "";
  constants_appVariables.vseGvsPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vseGvsOcenka, "-", false);

  // ХВС
  // Тех.подполье/тех.этаж
  constants_appVariables.hvsTehPodpolieDefecty.value = "";
  constants_appVariables.hvsTehPodpoliePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.hvsTehPodpolieOcenka, "-", false);

  // Транзит питающий
  constants_appVariables.hvsTranzitPitaushDefecty.value = "";
  constants_appVariables.hvsTranzitPitaushPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.hvsTranzitPitaushOcenka, "-", false);

  // Этажи
  constants_appVariables.hvsEtajiDefecty.value = "";
  constants_appVariables.hvsEtajiPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.hvsEtajiOcenka, "-", false);

  // Внутренний пожарный водопровод
  constants_appVariables.hvsVnPozharProvodDefecty.value = "";
  constants_appVariables.hvsVnPozharProvodPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.hvsVnPozharProvodOcenka, "-", false);

  // Вся система
  constants_appVariables.vseHvsDefecty.value = "";
  constants_appVariables.vseHvsPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vseHvsOcenka, "-", false);

  // Канализация
  // Тех.подполье/тех.этаж
  constants_appVariables.kanalizaciaTehPodpolieDefecty.value = "";
  constants_appVariables.kanalizaciaTehPodpoliePercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.kanalizaciaTehPodpolieOcenka, "-", false);

  // Этажи
  constants_appVariables.kanalizaciaEtajiDefecty.value = "";
  constants_appVariables.kanalizaciaEtajiPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.kanalizaciaEtajiOcenka, "-", false);

  // Вся система
  constants_appVariables.vseKanalizaciaDefecty.value = "";
  constants_appVariables.vseKanalizaciaPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vseKanalizaciaOcenka, "-", false);

  // Мусоропроводы
  constants_appVariables.musoroprovodyDefecty.value = "";
  constants_appVariables.musoroprovodyPercent.value = "";
  clickGenerator_clickGenerator(constants_appVariables.musoroprovodyOcenka, "-", false);

  // Связь с ОДС
  constants_appVariables.odsDefecty.value = "";
  constants_appVariables.odsPosledneeObsled.value = "";
  constants_appVariables.odsOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.odsOcenka, "-", false);

  // Вентиляция
  constants_appVariables.ventilaciaDefecty.value = "";
  constants_appVariables.ventilaciaPosledneeObsled.value = "";
  constants_appVariables.odsOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.ventilaciaOcenka, "-", false);

  // Система промывки и прочистки стволов мусоропроводов
  constants_appVariables.musoroChistSistemaDefecty.value = "";
  constants_appVariables.musoroChistSistemaPosledObsled.value = "";
  constants_appVariables.musoroChistSistemaOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.musoroChistSistemaOcenka, "-", false);

  // ОЗДС (охранно-защитная дератизационная система)
  constants_appVariables.ozdsDefecty.value = "";
  constants_appVariables.ozdsPosledObsled.value = "";
  constants_appVariables.ozdsOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.ozdsOcenka, "-", false);

  // Газоходы
  constants_appVariables.gazohodyDefecty.value = "";
  constants_appVariables.gazohodyPosledObsled.value = "";
  constants_appVariables.gazohodyOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.gazohodyOcenka, "-", false);

  // Лифты
  constants_appVariables.liftyDefecty.value = "";
  constants_appVariables.liftyPosledObsled.value = "";
  constants_appVariables.liftyOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.liftyOcenka, "-", false);

  // Подъёмное устройство для маломобильной группы населения
  constants_appVariables.podyomnikDefecty.value = "";
  constants_appVariables.podyomnikPosledObsled.value = "";
  constants_appVariables.podyomnikOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.podyomnikOcenka, "-", false);

  // Устройство для автоматического опускания лифта
  constants_appVariables.autoSpuskLiftDefecty.value = "";
  constants_appVariables.autoSpuskLiftPosledObsled.value = "";
  constants_appVariables.autoSpuskLiftOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.autoSpuskLiftOcenka, "-", false);

  // Система ЭС
  constants_appVariables.systemEsDefecty.value = "";
  constants_appVariables.systemEsPosledObsled.value = "";
  constants_appVariables.systemEsOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.systemEsOcenka, "-", false);

  // ВКВ (второй кабельный ввод)
  constants_appVariables.vkvDefecty.value = "";
  constants_appVariables.vkvPosledObsled.value = "";
  constants_appVariables.vkvOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.vkvOcenka, "-", false);

  // АВР (автоматическое включение резервного питания)
  constants_appVariables.avrDefecty.value = "";
  constants_appVariables.avrPosledObsled.value = "";
  constants_appVariables.avrOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.avrOcenka, "-", false);

  // ППАиДУ
  constants_appVariables.ppaiduDefecty.value = "";
  constants_appVariables.ppaiduPosledObsled.value = "";
  constants_appVariables.ppaiduOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.ppaiduOcenka, "-", false);

  // Система оповещения о пожаре
  constants_appVariables.pozharOpoveshenDefecty.value = "";
  constants_appVariables.pozharOpoveshenPosledObsled.value = "";
  constants_appVariables.pozharOpoveshenOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.pozharOpoveshenOcenka, "-", false);

  // Система ГС
  constants_appVariables.sistemaGsDefecty.value = "";
  constants_appVariables.sistemaGsPosledObsled.value = "";
  constants_appVariables.sistemaGsOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.sistemaGsOcenka, "-", false);

  // Система видеонаблюдения
  constants_appVariables.sistemaVideonabDefecty.value = "";
  constants_appVariables.sistemaVideonabPosledObsled.value = "";
  constants_appVariables.sistemaVideonabOrganizacia.value = "";
  clickGenerator_clickGenerator(constants_appVariables.sistemaVideonabProshlOcenka, "-", false);
  constants_appVariables.dopolnitDannye.value = "";
  clickGenerator_clickGenerator(constants_appVariables.recomendatciiPoUtepleniuSten, "Н/и (не имеется)", false);
  constants_appVariables.recomendatciiPoDopRabotam.value = "";

  // Подписывающие лица
  for (let i = 1; i < constants_appVariables.signatoriesRows.length; i++) {
    if (!constants_appVariables.signatoriesRows[i].querySelector("#comp_12340")) {
      continue;
    }
    constants_appVariables[i]["licaOt"].value = "";
    constants_appVariables[i]["LicaDoljnost"].value = "";
    constants_appVariables[i]["licaFio"].value = "";
  }
  constants_appVariables.clearDataButton.textContent = "Очищено";
  constants_appVariables.clearDataButton.classList.add("main__button_done");
  setTimeout(() => {
    constants_appVariables.clearDataButton.textContent = "Очистка отчета";
    constants_appVariables.clearDataButton.classList.remove("main__button_done");
  }, 1500);
};
;// ./server/appComponents/saveData.js


const saveData = () => {
  if (!appData.availableFunctions.saveData) {
    return;
  }
  // Если страница не подходит для сохранения - выдаем ошибку и выходим из функции
  if (!buttonError(constants_appVariables.copyButton, constants_appVariables.currentPage, "main", "Копирование отчета")) {
    return;
  }

  // обновляем все значения объекта переменных
  searchAllInputs();
  const data = {
    address: {
      area: constants_appVariables.area,
      district: constants_appVariables.district,
      address: constants_appVariables.address
    },
    "Паспортные данные": {
      "Количество этажей": constants_appVariables.passportDannye.etajei.value,
      "Количество подъездов": constants_appVariables.passportDannye.podjezdov.value,
      "Строительный объем здания": constants_appVariables.passportDannye.stroyObjem.value,
      "Кол-во квартир": constants_appVariables.passportDannye.kvartir.value,
      "Площадь полезная": constants_appVariables.passportDannye.poleznayaPloschad.value,
      "Площадь в жилых помещениях": constants_appVariables.passportDannye.jilayaPloschad.value,
      "Площадь в нежилых помещениях": constants_appVariables.passportDannye.neJilayaPloschad.value,
      "Серия проекта": constants_appVariables.passportDannye.seriyaProekta.value,
      "Год постройки": constants_appVariables.passportDannye.godPostrioki.value,
      "Год реконструкции": constants_appVariables.passportDannye.godRekonstrukcii.value,
      "Класс энергетической эффективности здания": constants_appVariables.passportDannye.klassEnergoeffectivnosti.value,
      "Физический износ (%) по данным БТИ": constants_appVariables.passportDannye.fizIznos.value,
      "по данным БТИ на дату": constants_appVariables.passportDannye.dannyeBtiData.value,
      "Наличие встроенных инженерных сооружений": constants_appVariables.passportDannye.nalichVstroenSooruj.value,
      "Кол-во встроенных инженерных сооружений": constants_appVariables.passportDannye.kolichVstroenSooruj.value,
      "Кол-во надстроенных инженерных сооружений": constants_appVariables.passportDannye.kolichNadstroenSooruj.value,
      ТП: constants_appVariables.passportDannye.tp.value,
      "в т.ч. масляные ТП": constants_appVariables.passportDannye.maslyanieTp.value,
      "Магистрали транзитные": constants_appVariables.passportDannye.magistraliTranzit.value,
      "Факт. уд. потребление тепловой эн., Гкал/м²": constants_appVariables.passportDannye.potreblenieTeplaFact.value,
      "Проект. уд. потребление тепловой эн., кДж/(м²×град.×сут.)": constants_appVariables.passportDannye.potreblenieTeplaProekt.value,
      "Величина отклонения (%)": constants_appVariables.passportDannye.potreblenieTeplaOtklonenie.value
    },
    "Технические заключения и проекты ремонтов": {
      1: {
        Организация: "",
        "Дата, №": "",
        "Наименование, содержание": ""
      },
      2: {
        Организация: "",
        "Дата, №": "",
        "Наименование, содержание": ""
      },
      3: {
        Организация: "",
        "Дата, №": "",
        "Наименование, содержание": ""
      },
      4: {
        Организация: "",
        "Дата, №": "",
        "Наименование, содержание": ""
      }
    },
    "Выводы по результатам предыдущего обследования": {},
    "Выполнение рекомендаций по кап. ремонту": {
      Крыша: {
        Кровля: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Свесы: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Стропильная система": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Чердак: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Покрытие ж/б": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Все элементы": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        }
      },
      Водоотвод: {
        Рекомендации: constants_appVariables.recomend.vodootvod.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.vodootvod.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.vodootvod.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.vodootvod.factObjom.value
      },
      Герметизация: {
        Рекомендации: constants_appVariables.recomend.germetizacia.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.germetizacia.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.germetizacia.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.germetizacia.factObjom.value
      },
      Фасад: {
        Рекомендации: constants_appVariables.recomend.fasad.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.fasad.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.fasad.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.fasad.factObjom.value,
        "Остекление оконных заполнений фасада": constants_appVariables.recomendationsDone.querySelector("#lookupTextcomp_12601").value
      },
      Балконы: {
        Балконы: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Лоджии: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Козырьки: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Эркеры: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Все элементы": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Остекление балконов": constants_appVariables.recomend.balkony.balkony.osteklenie.value,
        "Остекление лоджий": constants_appVariables.recomend.balkony.lodjii.osteklenie.value
      },
      Стены: {
        Рекомендации: constants_appVariables.recomend.steny.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.steny.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.steny.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.steny.factObjom.value,
        "Утепление стен": constants_appVariables.recomend.steny.uteplenie.value
      },
      Подвал: {
        Рекомендации: constants_appVariables.recomend.podval.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.podval.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.podval.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.podval.factObjom.value
      },
      "Тех.подполье": {
        Рекомендации: constants_appVariables.recomend.tehPodpolie.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.tehPodpolie.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.tehPodpolie.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.tehPodpolie.factObjom.value
      },
      "Тех.этаж": {
        Рекомендации: constants_appVariables.recomend.tehEtaj.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.tehEtaj.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.tehEtaj.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.tehEtaj.factObjom.value
      },
      "Гараж стоянка (подземный)": {
        Рекомендации: constants_appVariables.recomend.garage.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.garage.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.garage.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.garage.factObjom.value
      },
      "Места общего пользования": {
        Вестибюли: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Крыльца: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Пандусы наружные": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Пандусы внутриподъездные": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Сходы/съезды": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Окна, двери": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Внутренняя отделка помещений": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Все элементы": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        }
      },
      Лестницы: {
        Рекомендации: constants_appVariables.recomend.lestnicy.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.lestnicy.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.lestnicy.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.lestnicy.factObjom.value
      },
      Перекрытия: {
        Рекомендации: constants_appVariables.recomend.perekritya.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.perekritya.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.perekritya.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.perekritya.factObjom.value
      },
      "Система отопления": {
        "Тех.подполье/тех.этаж": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Транзит питающий": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Чердак: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Этажи: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Вся система": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        }
      },
      ГВС: {
        "Тех.подполье/тех.этаж": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Транзит питающий": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Чердак: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Этажи: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Вся система": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        }
      },
      ХВС: {
        "Тех.подполье/тех.этаж": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Транзит питающий": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Внутренний пожарный водопровод": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Этажи: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Вся система": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        }
      },
      Канализация: {
        "Тех.подполье/тех.этаж": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        Этажи: {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        },
        "Вся система": {
          Рекомендации: "",
          "Треб. объем, %": "",
          "Выполнен, год": "",
          "Факт. объем, %": ""
        }
      },
      Мусоропроводы: {
        Рекомендации: constants_appVariables.recomend.musoroprovody.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.musoroprovody.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.musoroprovody.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.musoroprovody.factObjom.value
      },
      "Система промывки и прочистки стволов мусоропроводов": {
        Рекомендации: constants_appVariables.recomend.musoroChistSistema.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.musoroChistSistema.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.musoroChistSistema.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.musoroChistSistema.factObjom.value
      },
      "Вентиляц.": {
        Рекомендации: constants_appVariables.recomend.ventilacia.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.ventilacia.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.ventilacia.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.ventilacia.factObjom.value
      },
      Газоходы: {
        Рекомендации: constants_appVariables.recomend.gazohody.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.gazohody.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.gazohody.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.gazohody.factObjom.value
      },
      Лифты: {
        Рекомендации: constants_appVariables.recomend.lifty.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.lifty.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.lifty.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.lifty.factObjom.value
      },
      "Подъёмное устройство для маломобильной группы населения": {
        Рекомендации: constants_appVariables.recomend.podyomnik.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.podyomnik.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.podyomnik.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.podyomnik.factObjom.value
      },
      "Устройство для автоматического опускания лифта": {
        Рекомендации: constants_appVariables.recomend.autoSpuskLift.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.autoSpuskLift.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.autoSpuskLift.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.autoSpuskLift.factObjom.value
      },
      "Система ЭС (ВРУ)": {
        Рекомендации: constants_appVariables.recomend.systemEs.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.systemEs.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.systemEs.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.systemEs.factObjom.value
      },
      "ВКВ (второй кабельный ввод)": {
        Рекомендации: constants_appVariables.recomend.vkv.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.vkv.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.vkv.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.vkv.factObjom.value
      },
      "АВР (автоматическое включение резервного питания)": {
        Рекомендации: constants_appVariables.recomend.avr.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.avr.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.avr.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.avr.factObjom.value
      },
      ППАиДУ: {
        Рекомендации: constants_appVariables.recomend.ppaidu.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.ppaidu.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.ppaidu.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.ppaidu.factObjom.value
      },
      "Система оповещения о пожаре": {
        Рекомендации: constants_appVariables.recomend.pozharOpoveshen.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.pozharOpoveshen.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.pozharOpoveshen.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.pozharOpoveshen.factObjom.value
      },
      ГС: {
        Рекомендации: constants_appVariables.recomend.gs.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.gs.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.gs.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.gs.factObjom.value
      },
      "Связь с ОДС": {
        Рекомендации: constants_appVariables.recomend.ods.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.ods.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.ods.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.ods.factObjom.value
      },
      "Система видеонаблюдения": {
        Рекомендации: constants_appVariables.recomend.videonab.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.videonab.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.videonab.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.videonab.factObjom.value
      },
      "ОЗДС(охранно-защитная дератизационная система)": {
        Рекомендации: constants_appVariables.recomend.ozds.recomend.value,
        "Треб. объем, %": constants_appVariables.recomend.ozds.trebObjom.value,
        "Выполнен, год": constants_appVariables.recomend.ozds.vypolnenGod.value,
        "Факт. объем, %": constants_appVariables.recomend.ozds.factObjom.value
      },
      "Общий вывод: Рекомендации по выполнению объемов капитального ремонта": constants_appVariables.recomend.obshiyVivod.value
    },
    "Результаты выборочного обследования": {
      Крыша: {
        "Конструкция крыши": constants_appVariables.roofConstruction.value,
        "Материал кровли": constants_appVariables.roofMaterial.value,
        "Площадь кровли, м²": constants_appVariables.roofSquare.value,
        Кровля: {
          "Выявленные дефекты": constants_appVariables.krovlyaDefecty.value,
          "Оценка пред.": constants_appVariables.krovlyaProshlOcenka.textContent,
          "% деф. части": constants_appVariables.krovlyaPercent.value,
          Оценка: constants_appVariables.krovlyaOcenka.value
        },
        Свесы: {
          "Выявленные дефекты": constants_appVariables.svesyDefecty.value,
          "Оценка пред.": constants_appVariables.svesyProshlOcenka.textContent,
          "% деф. части": constants_appVariables.svesyPercent.value,
          Оценка: constants_appVariables.svesyOcenka.value
        },
        "Стропильная система": {
          "Выявленные дефекты": constants_appVariables.stropilnayaSistemaDefecty.value,
          "Оценка пред.": constants_appVariables.stropilnayaSistemaProshlOcenka.textContent,
          "% деф. части": constants_appVariables.stropilnayaSistemaPercent.value,
          Оценка: constants_appVariables.stropilnayaSistemaOcenka.value
        },
        Чердак: {
          "Выявленные дефекты": constants_appVariables.cherdakDefecty.value,
          "Оценка пред.": constants_appVariables.cherdakProshlOcenka.textContent,
          "% деф. части": constants_appVariables.cherdakPercent.value,
          Оценка: constants_appVariables.cherdakOcenka.value
        },
        "Покрытие ж/б": {
          "Выявленные дефекты": constants_appVariables.pokritieJBDefecty.value,
          "Оценка пред.": constants_appVariables.pokritieJBProshlOcenka.textContent,
          "% деф. части": constants_appVariables.pokritieJBPercent.value,
          Оценка: constants_appVariables.pokritieJBOcenka.value
        },
        "Все элементы": {
          "Выявленные дефекты": constants_appVariables.vsyaKrishaDefecty.value,
          "Оценка пред.": constants_appVariables.vsyaKrishaProshlOcenka.textContent,
          "% деф. части": constants_appVariables.vsyaKrishaPercent.value,
          Оценка: constants_appVariables.vsyaKrishaOcenka.value
        }
      },
      Водоотвод: {
        "Тип водоотвода": constants_appVariables.vodootvodType.value,
        "Материал водоотвода": constants_appVariables.vodootvodMaterial.value,
        "Выявленные дефекты": constants_appVariables.vodootvodDefecty.value,
        "Оценка пред.": constants_appVariables.vodootvodProshlOcenka.textContent,
        "% деф. части": constants_appVariables.vodootvodPercent.value,
        Оценка: constants_appVariables.vodootvodOcenka.value
      },
      "Межпанельные стыки": {
        "Тип стыков": constants_appVariables.majpanelnyeStykiType.value,
        "Выявленные дефекты": constants_appVariables.majpanelnyeStykiDefecty.value,
        "Оценка пред.": constants_appVariables.majpanelnyeStykiProshlOcenka.textContent,
        "% деф. части": constants_appVariables.majpanelnyeStykiPercent.value,
        Оценка: constants_appVariables.majpanelnyeStykiOcenka.value
      },
      Фасад: {
        "Площадь фасада, м²": constants_appVariables.fasadSquare.value,
        "Отделка стен": constants_appVariables.fasadOtdelkaSten.value,
        "Отделка цоколя": constants_appVariables.fasadOblicovkaTsokolya.value,
        "Оконные заполнения": constants_appVariables.fasadOkonnyeZapolneniya.value,
        "Выявленные дефекты": constants_appVariables.fasadDefecty.value,
        "Оценка пред.": constants_appVariables.fasadProshlOcenka.textContent,
        "% деф. части": constants_appVariables.fasadPercent.value,
        Оценка: constants_appVariables.fasadOcenka.value
      },
      Балконы: {
        "Количество балконов": constants_appVariables.balkonyKolich.value,
        "Количество лоджий": constants_appVariables.balkonyLojii.value,
        "Козырьков над входами": constants_appVariables.balkonyKozirkovVhody.value,
        "Козырьков на верхних этажах": constants_appVariables.balkonyKozirkovVerh.value,
        "Козырьков непроектных": constants_appVariables.balkonyKozirkovNeproekt.value,
        "Количество эркеров": constants_appVariables.balkonyErkerovKolich.value,
        Балконы: {
          "Выявленные дефекты": constants_appVariables.balkonyDefecty.value,
          "Оценка пред.": constants_appVariables.balkonyProshlOcenka.textContent,
          "% деф. части": constants_appVariables.balkonyPercent.value,
          Оценка: constants_appVariables.balkonyOcenka.value
        },
        Лоджии: {
          "Выявленные дефекты": constants_appVariables.lodjiiDefecty.value,
          "Оценка пред.": constants_appVariables.lodjiiProshlOcenka.textContent,
          "% деф. части": constants_appVariables.lodjiiPercent.value,
          Оценка: constants_appVariables.lodjiiOcenka.value
        },
        Козырьки: {
          "Выявленные дефекты": constants_appVariables.kozirkiDefecty.value,
          "Оценка пред.": constants_appVariables.kozirkiProshlOcenka.textContent,
          "% деф. части": constants_appVariables.kozirkiPercent.value,
          Оценка: constants_appVariables.kozirkiOcenka.value
        },
        Эркеры: {
          "Выявленные дефекты": constants_appVariables.erkeryDefecty.value,
          "Оценка пред.": constants_appVariables.erkeryProshlOcenka.textContent,
          "% деф. части": constants_appVariables.erkeryPercent.value,
          Оценка: constants_appVariables.erkeryOcenka.value
        },
        "Все элементы": {
          "Выявленные дефекты": constants_appVariables.vseBalkonyDefecty.value,
          "Оценка пред.": constants_appVariables.vseBalkonyProshlOcenka.textContent,
          "% деф. части": constants_appVariables.vseBalkonyPercent.value,
          Оценка: constants_appVariables.vseBalkonyOcenka.value
        }
      },
      Стены: {
        "Материал стен": constants_appVariables.stenyMaterial.value,
        "Теплофизические свойства": constants_appVariables.stenyTeploFizSvoistva.value,
        "Выявленные дефекты": constants_appVariables.stenyDefecty.value,
        "Оценка пред.": constants_appVariables.stenyProshlOcenka.textContent,
        "% деф. части": constants_appVariables.stenyPercent.value,
        Оценка: constants_appVariables.stenyOcenka.value
      },
      Подвал: {
        "Наличие подвала": constants_appVariables.podvalNalichie.value,
        "Площадь, м²": constants_appVariables.podvalSquare.value,
        "Выявленные дефекты": constants_appVariables.podvalDefecty.value,
        "Оценка пред.": constants_appVariables.podvalProshlOcenka.textContent,
        "% деф. части": constants_appVariables.podvalPercent.value,
        Оценка: constants_appVariables.podvalOcenka.value
      },
      "Тех.подполье": {
        "Наличие тех.подполья": constants_appVariables.techPodpolieNalichie.value,
        "Выявленные дефекты": constants_appVariables.techPodpolieDefecty.value,
        "Оценка пред.": constants_appVariables.techPodpolieProshlOcenka.textContent,
        "% деф. части": constants_appVariables.techPodpoliePercent.value,
        Оценка: constants_appVariables.techPodpolieOcenka.value
      },
      "Тех.этаж": {
        "Наличие тех.этажа": constants_appVariables.techEtajNalichie.value,
        "Местонахождение, этаж": constants_appVariables.techEtajMesto.value,
        "Выявленные дефекты": constants_appVariables.techEtajDefecty.value,
        "Оценка пред.": constants_appVariables.techEtajProshlOcenka.textContent,
        "% деф. части": constants_appVariables.techEtajPercent.value,
        Оценка: constants_appVariables.techEtajOcenka.value
      },
      "Гараж стоянка (подземный)": {
        Тип: constants_appVariables.garageType.value,
        "Площадь,м²": constants_appVariables.garageSquare.value,
        "Этажность, эт": constants_appVariables.garageEtagnost.value,
        "Количество маш.мест, шт": constants_appVariables.garageKolichestvoMashin.value,
        "Выявленные дефекты": constants_appVariables.garageDefecty.value,
        "Оценка пред.": constants_appVariables.garageProshlOcenka.textContent,
        "% деф. части": constants_appVariables.garagePercent.value,
        Оценка: constants_appVariables.garageOcenka.value
      },
      "Места общего пользования": {
        "Пандусы наружные, шт": constants_appVariables.mopPandusyNaruzhKolich.value,
        "Пандусы внутренние, шт": constants_appVariables.mopPandusyVnutrKolich.value,
        "Сходы-съезды, шт.": constants_appVariables.mopShodySiezdyKolich.value,
        Вестибюли: {
          "Выявленные дефекты": constants_appVariables.mopVestibuliDefecty.value,
          "Оценка пред.": constants_appVariables.mopVestibuliProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopVestibuliPercent.value,
          Оценка: constants_appVariables.mopVestibuliOcenka.value
        },
        Крыльца: {
          "Выявленные дефекты": constants_appVariables.mopKrilcaDefecty.value,
          "Оценка пред.": constants_appVariables.mopKrilcaProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopKrilcaPercent.value,
          Оценка: constants_appVariables.mopKrilcaOcenka.value
        },
        "Пандусы наружные": {
          "Выявленные дефекты": constants_appVariables.mopPandusyNaruzhnieDefecty.value,
          "Оценка пред.": constants_appVariables.mopPandusyNaruzhnieProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopPandusyNaruzhniePercent.value,
          Оценка: constants_appVariables.mopPandusyNaruzhnieOcenka.value
        },
        "Пандусы внутри-подъездные": {
          "Выявленные дефекты": constants_appVariables.mopPandusyVnutrennieDefecty.value,
          "Оценка пред.": constants_appVariables.mopPandusyVnutrennieProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopPandusyVnutrenniePercent.value,
          Оценка: constants_appVariables.mopPandusyVnutrennieOcenka.value
        },
        "Сходы/съезды": {
          "Выявленные дефекты": constants_appVariables.mopShodySiezdyDefecty.value,
          "Оценка пред.": constants_appVariables.mopShodySiezdyProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopShodySiezdyPercent.value,
          Оценка: constants_appVariables.mopShodySiezdyOcenka.value
        },
        "Окна, двери": {
          "Выявленные дефекты": constants_appVariables.mopOknaDveriDefecty.value,
          "Оценка пред.": constants_appVariables.mopOknaDveriProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopOknaDveriPercent.value,
          Оценка: constants_appVariables.mopOknaDveriOcenka.value
        },
        "Внутренняя отделка помещений": {
          "Выявленные дефекты": constants_appVariables.mopVnOtdelkaPomeshDefecty.value,
          "Оценка пред.": constants_appVariables.mopVnOtdelkaPomeshProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopVnOtdelkaPomeshPercent.value,
          Оценка: constants_appVariables.mopVnOtdelkaPomeshOcenka.value
        },
        "Все элементы": {
          "Выявленные дефекты": constants_appVariables.mopVseElementyDefecty.value,
          "Оценка пред.": constants_appVariables.mopVseElementyProshlOcenka.textContent,
          "% деф. части": constants_appVariables.mopVseElementyPercent.value,
          Оценка: constants_appVariables.mopVseElementyOcenka.value
        }
      },
      Лестницы: {
        Конструкция: constants_appVariables.lestnicyConstruction.value,
        "Выявленные дефекты": constants_appVariables.lestnicyDefecty.value,
        "Оценка пред.": constants_appVariables.lestnicyProshlOcenka.textContent,
        "% деф. части": constants_appVariables.lestnicyPercent.value,
        Оценка: constants_appVariables.lestnicyOcenka.value
      },
      Перекрытия: {
        "Материал перекрытия": constants_appVariables.perekrityaMaterial.value,
        "Выявленные дефекты": constants_appVariables.perekrityaDefecty.value,
        "Оценка пред.": constants_appVariables.perekrityaProshlOcenka.textContent,
        "% деф. части": constants_appVariables.perekrityaPercent.value,
        Оценка: constants_appVariables.perekrityaOcenka.value
      },
      "Система отопления": {
        "Вид отопления": constants_appVariables.otopleniyeVid.value,
        "Материал трубопроводов": constants_appVariables.otopleniyeMaterial.value,
        "Тип приборов": constants_appVariables.otopleniyeTypePribor.value,
        "Термо-регуляторы в квартирах": constants_appVariables.otopleniyeTermoRegulKvartir.value,
        "Наличие АУУ, шт": constants_appVariables.otopleniyeAuu.value,
        "Наличие ОДУУ": constants_appVariables.otopleniyeOduu.value,
        "Элеваторный узел, шт": constants_appVariables.otopleniyeElevUzel.value,
        "Тепловой узел, шт": constants_appVariables.otopleniyeTeplovoyUzel.value,
        "Тип стояков": constants_appVariables.otopleniyeTypeStoyakov.value,
        "Тех.подполье/тех.этаж": {
          "Выявленные дефекты": constants_appVariables.otopleniyeTehPodpolieDefecty.value,
          "Оценка пред.": constants_appVariables.otopleniyeTehPodpolieProshlOcenka.textContent,
          "% деф. части": constants_appVariables.otopleniyeTehPodpoliePercent.value,
          Оценка: constants_appVariables.otopleniyeTehPodpolieOcenka.value
        },
        "Транзит питающий": {
          "Выявленные дефекты": constants_appVariables.otopleniyeTranzitPitaushDefecty.value,
          "Оценка пред.": constants_appVariables.otopleniyeTranzitPitaushProshlOcenka.textContent,
          "% деф. части": constants_appVariables.otopleniyeTranzitPitaushPercent.value,
          Оценка: constants_appVariables.otopleniyeTranzitPitaushOcenka.value
        },
        Чердак: {
          "Выявленные дефекты": constants_appVariables.otopleniyeCherdakDefecty.value,
          "Оценка пред.": constants_appVariables.otopleniyeCherdakProshlOcenka.textContent,
          "% деф. части": constants_appVariables.otopleniyeCherdakPercent.value,
          Оценка: constants_appVariables.otopleniyeCherdakOcenka.value
        },
        Этажи: {
          "Выявленные дефекты": constants_appVariables.otopleniyeEtajiDefecty.value,
          "Оценка пред.": constants_appVariables.otopleniyeEtajiProshlOcenka.textContent,
          "% деф. части": constants_appVariables.otopleniyeEtajiPercent.value,
          Оценка: constants_appVariables.otopleniyeEtajiOcenka.value
        },
        "Вся система": {
          "Выявленные дефекты": constants_appVariables.vseOtopleniyeDefecty.value,
          "Оценка пред.": constants_appVariables.vseOtopleniyeProshlOcenka.textContent,
          "% деф. части": constants_appVariables.vseOtopleniyePercent.value,
          Оценка: constants_appVariables.vseOtopleniyeOcenka.value
        }
      },
      ГВС: {
        "Тип системы": constants_appVariables.gvsType.value,
        "Материал трубопроводов": constants_appVariables.gvsMaterial.value,
        "Наличие ОДУУ": constants_appVariables.gvsOduu.value,
        "Тип стояков": constants_appVariables.gvsTypeStoyakov.value,
        "Тех.подполье/тех.этаж": {
          "Выявленные дефекты": constants_appVariables.gvsTehPodpolieDefecty.value,
          "Оценка пред.": constants_appVariables.gvsTehPodpolieProshlOcenka.textContent,
          "% деф. части": constants_appVariables.gvsTehPodpoliePercent.value,
          Оценка: constants_appVariables.gvsTehPodpolieOcenka.value
        },
        "Транзит питающий": {
          "Выявленные дефекты": constants_appVariables.gvsTranzitPitaushDefecty.value,
          "Оценка пред.": constants_appVariables.gvsTranzitPitaushProshlOcenka.textContent,
          "% деф. части": constants_appVariables.gvsTranzitPitaushPercent.value,
          Оценка: constants_appVariables.gvsTranzitPitaushOcenka.value
        },
        Чердак: {
          "Выявленные дефекты": constants_appVariables.gvsCherdakDefecty.value,
          "Оценка пред.": constants_appVariables.gvsCherdakProshlOcenka.textContent,
          "% деф. части": constants_appVariables.gvsCherdakPercent.value,
          Оценка: constants_appVariables.gvsCherdakOcenka.value
        },
        Этажи: {
          "Выявленные дефекты": constants_appVariables.gvsEtajiDefecty.value,
          "Оценка пред.": constants_appVariables.gvsEtajiProshlOcenka.textContent,
          "% деф. части": constants_appVariables.gvsEtajiPercent.value,
          Оценка: constants_appVariables.gvsEtajiOcenka.value
        },
        "Вся система": {
          "Выявленные дефекты": constants_appVariables.vseGvsDefecty.value,
          "Оценка пред.": constants_appVariables.vseGvsProshlOcenka.textContent,
          "% деф. части": constants_appVariables.vseGvsPercent.value,
          Оценка: constants_appVariables.vseGvsOcenka.value
        }
      },
      ХВС: {
        "Материал трубопроводов": constants_appVariables.hvsMaterial.value,
        "Наличие ОДУУ": constants_appVariables.hvsOduu.value,
        "Тип стояков": constants_appVariables.hvsTypeStoyakov.value,
        "Тех.подполье/тех.этаж": {
          "Выявленные дефекты": constants_appVariables.hvsTehPodpolieDefecty.value,
          "Оценка пред.": constants_appVariables.hvsTehPodpolieProshlOcenka.textContent,
          "% деф. части": constants_appVariables.hvsTehPodpoliePercent.value,
          Оценка: constants_appVariables.hvsTehPodpolieOcenka.value
        },
        "Транзит питающий": {
          "Выявленные дефекты": constants_appVariables.hvsTranzitPitaushDefecty.value,
          "Оценка пред.": constants_appVariables.hvsTranzitPitaushProshlOcenka.textContent,
          "% деф. части": constants_appVariables.hvsTranzitPitaushPercent.value,
          Оценка: constants_appVariables.hvsTranzitPitaushOcenka.value
        },
        "Внутренний пожарный водопровод": {
          "Выявленные дефекты": constants_appVariables.hvsVnPozharProvodDefecty.value,
          "Оценка пред.": constants_appVariables.hvsVnPozharProvodProshlOcenka.textContent,
          "% деф. части": constants_appVariables.hvsVnPozharProvodPercent.value,
          Оценка: constants_appVariables.hvsVnPozharProvodOcenka.value
        },
        Этажи: {
          "Выявленные дефекты": constants_appVariables.hvsEtajiDefecty.value,
          "Оценка пред.": constants_appVariables.hvsEtajiProshlOcenka.textContent,
          "% деф. части": constants_appVariables.hvsEtajiPercent.value,
          Оценка: constants_appVariables.hvsEtajiOcenka.value
        },
        "Вся система": {
          "Выявленные дефекты": constants_appVariables.vseHvsDefecty.value,
          "Оценка пред.": constants_appVariables.vseHvsProshlOcenka.textContent,
          "% деф. части": constants_appVariables.vseHvsPercent.value,
          Оценка: constants_appVariables.vseHvsOcenka.value
        }
      },
      Канализация: {
        "Материал трубопроводов": constants_appVariables.kanalizaciaMaterial.value,
        "Тип стояков": constants_appVariables.kanalizaciaTypeStoyakov.value,
        "Тех.подполье/тех.этаж": {
          "Выявленные дефекты": constants_appVariables.kanalizaciaTehPodpolieDefecty.value,
          "Оценка пред.": constants_appVariables.kanalizaciaTehPodpolieProshlOcenka.textContent,
          "% деф. части": constants_appVariables.kanalizaciaTehPodpoliePercent.value,
          Оценка: constants_appVariables.kanalizaciaTehPodpolieOcenka.value
        },
        Этажи: {
          "Выявленные дефекты": constants_appVariables.kanalizaciaEtajiDefecty.value,
          "Оценка пред.": constants_appVariables.kanalizaciaEtajiProshlOcenka.textContent,
          "% деф. части": constants_appVariables.kanalizaciaEtajiPercent.value,
          Оценка: constants_appVariables.kanalizaciaEtajiOcenka.value
        },
        "Вся система": {
          "Выявленные дефекты": constants_appVariables.vseKanalizaciaDefecty.value,
          "Оценка пред.": constants_appVariables.vseKanalizaciaProshlOcenka.textContent,
          "% деф. части": constants_appVariables.vseKanalizaciaPercent.value,
          Оценка: constants_appVariables.vseKanalizaciaOcenka.value
        }
      },
      Мусоропроводы: {
        Мусоропроводы: constants_appVariables.musoroprovodyMesto.value,
        Мусорокамеры: constants_appVariables.musoroprovodyKamery.value,
        "Выявленные дефекты": constants_appVariables.musoroprovodyDefecty.value,
        "Оценка пред.": constants_appVariables.musoroprovodyProshlOcenka.textContent,
        "% деф. части": constants_appVariables.musoroprovodyPercent.value,
        Оценка: constants_appVariables.musoroprovodyOcenka.value
      },
      "Связь с ОДС": {
        Тип: constants_appVariables.odsType.value,
        Состояние: constants_appVariables.odsSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.odsDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.odsPosledneeObsled.value,
        "Специализированная организация": constants_appVariables.odsOrganizacia.value,
        "Оценка пред.": constants_appVariables.odsProshlOcenka.textContent,
        Оценка: constants_appVariables.odsOcenka.value
      },
      Вентиляция: {
        Состояние: constants_appVariables.ventilaciaSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.ventilaciaDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.ventilaciaPosledneeObsled.value,
        "Специализированная организация": constants_appVariables.ventilaciaOrganizacia.value,
        "Оценка пред.": constants_appVariables.ventilaciaProshlOcenka.textContent,
        Оценка: constants_appVariables.ventilaciaOcenka.value
      },
      "Система промывки и прочистки стволов мусоропроводов": {
        Наличие: constants_appVariables.musoroChistSistemaNalichie.value,
        Состояние: constants_appVariables.musoroChistSistemaSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.musoroChistSistemaDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.musoroChistSistemaPosledObsled.value,
        "Специализированная организация": constants_appVariables.musoroChistSistemaOrganizacia.value,
        "Оценка пред.": constants_appVariables.musoroChistSistemaProshlOcenka.textContent,
        Оценка: constants_appVariables.musoroChistSistemaOcenka.value
      },
      "ОЗДС (охранно-защитная дератизационная система)": {
        Наличие: constants_appVariables.ozdsNalichie.value,
        Состояние: constants_appVariables.ozdsSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.ozdsDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.ozdsPosledObsled.value,
        "Специализированная организация": constants_appVariables.ozdsOrganizacia.value,
        "Оценка пред.": constants_appVariables.ozdsProshlOcenka.textContent,
        Оценка: constants_appVariables.ozdsOcenka.value
      },
      Газоходы: {
        Наличие: constants_appVariables.gazohodyNalichie.value,
        Состояние: constants_appVariables.gazohodySostoyanie.value,
        "Выявленные дефекты": constants_appVariables.gazohodyDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.gazohodyPosledObsled.value,
        "Специализированная организация": constants_appVariables.gazohodyOrganizacia.value,
        "Оценка пред.": constants_appVariables.gazohodyProshlOcenka.textContent,
        Оценка: constants_appVariables.gazohodyOcenka.value
      },
      Лифты: {
        "Пассажирские, шт": constants_appVariables.liftyPass.value,
        "Грузопассажирские, шт": constants_appVariables.liftyGruzPass.value,
        "В т.ч. навесные, шт": constants_appVariables.liftyNavesnye.value,
        Состояние: constants_appVariables.liftySostoyanie.value,
        "Выявленные дефекты": constants_appVariables.liftyDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.liftyPosledObsled.value,
        "Специализированная организация": constants_appVariables.liftyOrganizacia.value,
        "Оценка пред.": constants_appVariables.liftyProshlOcenka.textContent,
        Оценка: constants_appVariables.liftyOcenka.value
      },
      "Подъёмное устройство для маломобильной группы населения": {
        "Кол-во, шт": constants_appVariables.podyomnikKolich.value,
        Состояние: constants_appVariables.podyomnikSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.podyomnikDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.podyomnikPosledObsled.value,
        "Специализированная организация": constants_appVariables.podyomnikOrganizacia.value,
        "Оценка пред.": constants_appVariables.podyomnikProshlOcenka.textContent,
        Оценка: constants_appVariables.podyomnikOcenka.value
      },
      "Устройство для автоматического опускания лифта": {
        Наличие: constants_appVariables.autoSpuskLiftNalichie.value,
        Состояние: constants_appVariables.autoSpuskLiftSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.autoSpuskLiftDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.autoSpuskLiftPosledObsled.value,
        "Специализированная организация": constants_appVariables.autoSpuskLiftOrganizacia.value,
        "Оценка пред.": constants_appVariables.autoSpuskLiftProshlOcenka.textContent,
        Оценка: constants_appVariables.autoSpuskLiftOcenka.value
      },
      "Система ЭС": {
        "Кол-во ВРУ, шт": constants_appVariables.systemEsKolich.value,
        "Размещение ВРУ": constants_appVariables.systemEsRazmeshenie.value,
        Состояние: constants_appVariables.systemEsSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.systemEsDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.systemEsPosledObsled.value,
        "Специализированная организация": constants_appVariables.systemEsOrganizacia.value,
        "Оценка пред.": constants_appVariables.systemEsProshlOcenka.textContent,
        Оценка: constants_appVariables.systemEsOcenka.value
      },
      "ВКВ (второй кабельный ввод)": {
        Наличие: constants_appVariables.vkvNalichie.value,
        Состояние: constants_appVariables.vkvSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.vkvDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.vkvPosledObsled.value,
        "Специализированная организация": constants_appVariables.vkvOrganizacia.value,
        "Оценка пред.": constants_appVariables.vkvProshlOcenka.textContent,
        Оценка: constants_appVariables.vkvOcenka.value
      },
      "АВР (автоматическое включение резервного питания)": {
        Наличие: constants_appVariables.avrNalichie.value,
        Состояние: constants_appVariables.avrSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.avrDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.avrPosledObsled.value,
        "Специализированная организация": constants_appVariables.avrOrganizacia.value,
        "Оценка пред.": constants_appVariables.avrProshlOcenka.textContent,
        Оценка: constants_appVariables.avrOcenka.value
      },
      ППАиДУ: {
        Тип: constants_appVariables.ppaiduType.value,
        Состояние: constants_appVariables.ppaiduSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.ppaiduDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.ppaiduPosledObsled.value,
        "Специализированная организация": constants_appVariables.ppaiduOrganizacia.value,
        "Оценка пред.": constants_appVariables.ppaiduProshlOcenka.textContent,
        Оценка: constants_appVariables.ppaiduOcenka.value
      },
      "Система оповещения о пожаре": {
        Наличие: constants_appVariables.pozharOpoveshenNalichie.value,
        Состояние: constants_appVariables.pozharOpoveshenSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.pozharOpoveshenDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.pozharOpoveshenPosledObsled.value,
        "Специализированная организация": constants_appVariables.pozharOpoveshenOrganizacia.value,
        "Оценка пред.": constants_appVariables.pozharOpoveshenProshlOcenka.textContent,
        Оценка: constants_appVariables.pozharOpoveshenOcenka.value
      },
      "Система ГС": {
        Вводы: constants_appVariables.sistemaGsVvody.value,
        Разводка: constants_appVariables.sistemaGsRazvodka.value,
        Состояние: constants_appVariables.sistemaGsSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.sistemaGsDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.sistemaGsPosledObsled.value,
        "Специализированная организация": constants_appVariables.sistemaGsOrganizacia.value,
        "Оценка пред.": constants_appVariables.sistemaGsProshlOcenka.textContent,
        Оценка: constants_appVariables.sistemaGsOcenka.value
      },
      "Система видеонаблюдения": {
        Место: constants_appVariables.sistemaVideonabMesto.value,
        Состояние: constants_appVariables.sistemaGsSostoyanie.value,
        "Выявленные дефекты": constants_appVariables.sistemaVideonabDefecty.value,
        "№ и дата последнего обслед.": constants_appVariables.sistemaVideonabPosledObsled.value,
        "Специализированная организация": constants_appVariables.sistemaVideonabOrganizacia.value,
        "Оценка пред.": constants_appVariables.sistemaVideonabProshlOcenka.textContent,
        Оценка: constants_appVariables.sistemaVideonabOcenka.value
      },
      "Дополнительные данные": constants_appVariables.dopolnitDannye.value,
      "Выполнено обследование": constants_appVariables.obsledVypolneno.value,
      "Рекомендации по утеплению стен": constants_appVariables.recomendatciiPoUtepleniuSten.value
    },
    "Выводы по результатам обследования": {
      "Техническое состояние (приведенная оценка) здания (в целом)": constants_appVariables.tehSostoyanieZdania.value,
      "РЕКОМЕНДАЦИИ по ремонтно-восстановительным работам": constants_appVariables.recomendatciiPoDopRabotam.value
    },
    "Подписывающие лица": {
      "Представители от": {
        1: "",
        2: "",
        3: "",
        4: ""
      },
      "Должность и наименование организации": {
        1: "",
        2: "",
        3: "",
        4: ""
      },
      "ФИО должностного лица": {
        1: "",
        2: "",
        3: "",
        4: ""
      }
    }
  };

  // Для тех заключений и проектов
  for (let i = 0; i < constants_appVariables.repairProjectsTableRows.length; i++) {
    if (i < 2 || constants_appVariables.repairProjectsTableRows[i].classList.contains("gridBGTotal")) {
      continue;
    }
    if (i > 1) {
      data["Технические заключения и проекты ремонтов"][i]["Организация"] = constants_appVariables["tehZakluchenia"][i]["organizacia"].value;
      data["Технические заключения и проекты ремонтов"][i]["Дата, №"] = constants_appVariables["tehZakluchenia"][i]["dataNomer"].value;
      data["Технические заключения и проекты ремонтов"][i]["Наименование, содержание"] = constants_appVariables["tehZakluchenia"][i]["naimenovanieSoderjanie"].value;
    }
  }

  // Для выводов по результатам пред. обследования
  for (let key in constants_appVariables.vivodyPoRezultatam) {
    data["Выводы по результатам предыдущего обследования"][key] = new Object();
    data["Выводы по результатам предыдущего обследования"][key]["id"] = constants_appVariables["vivodyPoRezultatam"][key]["id"].textContent;
    data["Выводы по результатам предыдущего обследования"][key]["Дата"] = constants_appVariables["vivodyPoRezultatam"][key]["data"].textContent;
    data["Выводы по результатам предыдущего обследования"][key]["№"] = constants_appVariables["vivodyPoRezultatam"][key]["number"].textContent;
    data["Выводы по результатам предыдущего обследования"][key]["Техническое состояние здания в целом"] = constants_appVariables["vivodyPoRezultatam"][key]["tehSostoyanie"].textContent;
  }

  // РЕКОМЕНДАЦИИ ПО КАП РЕМОНТУ
  // Крыша
  for (let key in constants_appVariables.recomend.krisha) {
    const neededObj = constants_appVariables.recomend.krisha[key];
    data["Выполнение рекомендаций по кап. ремонту"]["Крыша"][neededObj.name]["Рекомендации"] = neededObj.recomend.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Крыша"][neededObj.name]["Треб. объем, %"] = neededObj.trebObjom.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Крыша"][neededObj.name]["Выполнен, год"] = neededObj.vypolnenGod.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Крыша"][neededObj.name]["Факт. объем, %"] = neededObj.factObjom.value;
  }
  // Балконы
  for (let key in constants_appVariables.recomend.balkony) {
    const neededObj = constants_appVariables.recomend.balkony[key];
    data["Выполнение рекомендаций по кап. ремонту"]["Балконы"][neededObj.name]["Рекомендации"] = neededObj.recomend.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Балконы"][neededObj.name]["Треб. объем, %"] = neededObj.trebObjom.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Балконы"][neededObj.name]["Выполнен, год"] = neededObj.vypolnenGod.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Балконы"][neededObj.name]["Факт. объем, %"] = neededObj.factObjom.value;
  }
  // Места общего пользования
  for (let key in constants_appVariables.recomend.mop) {
    const neededObj = constants_appVariables.recomend.mop[key];
    data["Выполнение рекомендаций по кап. ремонту"]["Места общего пользования"][neededObj.name]["Рекомендации"] = neededObj.recomend.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Места общего пользования"][neededObj.name]["Треб. объем, %"] = neededObj.trebObjom.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Места общего пользования"][neededObj.name]["Выполнен, год"] = neededObj.vypolnenGod.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Места общего пользования"][neededObj.name]["Факт. объем, %"] = neededObj.factObjom.value;
  }
  // Системы отопления
  for (let key in constants_appVariables.recomend.sistemaOtoplenia) {
    const neededObj = constants_appVariables.recomend.sistemaOtoplenia[key];
    data["Выполнение рекомендаций по кап. ремонту"]["Система отопления"][neededObj.name]["Рекомендации"] = neededObj.recomend.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Система отопления"][neededObj.name]["Треб. объем, %"] = neededObj.trebObjom.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Система отопления"][neededObj.name]["Выполнен, год"] = neededObj.vypolnenGod.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Система отопления"][neededObj.name]["Факт. объем, %"] = neededObj.factObjom.value;
  }
  // ГВС
  for (let key in constants_appVariables.recomend.gvs) {
    const neededObj = constants_appVariables.recomend.gvs[key];
    data["Выполнение рекомендаций по кап. ремонту"]["ГВС"][neededObj.name]["Рекомендации"] = neededObj.recomend.value;
    data["Выполнение рекомендаций по кап. ремонту"]["ГВС"][neededObj.name]["Треб. объем, %"] = neededObj.trebObjom.value;
    data["Выполнение рекомендаций по кап. ремонту"]["ГВС"][neededObj.name]["Выполнен, год"] = neededObj.vypolnenGod.value;
    data["Выполнение рекомендаций по кап. ремонту"]["ГВС"][neededObj.name]["Факт. объем, %"] = neededObj.factObjom.value;
  }
  // ХВС
  for (let key in constants_appVariables.recomend.hvs) {
    const neededObj = constants_appVariables.recomend.hvs[key];
    data["Выполнение рекомендаций по кап. ремонту"]["ХВС"][neededObj.name]["Рекомендации"] = neededObj.recomend.value;
    data["Выполнение рекомендаций по кап. ремонту"]["ХВС"][neededObj.name]["Треб. объем, %"] = neededObj.trebObjom.value;
    data["Выполнение рекомендаций по кап. ремонту"]["ХВС"][neededObj.name]["Выполнен, год"] = neededObj.vypolnenGod.value;
    data["Выполнение рекомендаций по кап. ремонту"]["ХВС"][neededObj.name]["Факт. объем, %"] = neededObj.factObjom.value;
  }
  // Канализация
  for (let key in constants_appVariables.recomend.kanalizacia) {
    const neededObj = constants_appVariables.recomend.kanalizacia[key];
    data["Выполнение рекомендаций по кап. ремонту"]["Канализация"][neededObj.name]["Рекомендации"] = neededObj.recomend.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Канализация"][neededObj.name]["Треб. объем, %"] = neededObj.trebObjom.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Канализация"][neededObj.name]["Выполнен, год"] = neededObj.vypolnenGod.value;
    data["Выполнение рекомендаций по кап. ремонту"]["Канализация"][neededObj.name]["Факт. объем, %"] = neededObj.factObjom.value;
  }
  for (let counter = 1; counter <= 4; counter++) {
    const neededObj = constants_appVariables[counter];
    data["Подписывающие лица"]["Представители от"][counter] = neededObj["licaOt"].value;
    data["Подписывающие лица"]["ФИО должностного лица"][counter] = neededObj["licaFio"].value;
    data["Подписывающие лица"]["Должность и наименование организации"][counter] = neededObj["LicaDoljnost"].value;
  }
  localStorage.setItem("MJIDATA", JSON.stringify(data));
  constants_appVariables.copyButton.textContent = "Скопировано";
  constants_appVariables.copyButton.classList.add("main__button_done");
  setTimeout(() => {
    constants_appVariables.copyButton.textContent = "Копирование отчета";
    constants_appVariables.copyButton.classList.remove("main__button_done");
  }, 1500);
};
;// ./server/appComponents/setRepresentatives.js

const setRepresentatives = () => {
  if (!appData.availableFunctions.setRepresentatives) {
    return;
  }
  const representatives = appData.representativesData;
  Object.keys(representativesInputs).forEach(key => {
    for (let i = 1; i < Object.keys(representativesInputs[key]).length; i += 2) {
      if (typeof representativesInputs[key] == "boolean") {
        break;
      }
      const firstColName = Object.keys(representativesInputs[key])[i]; // licaOt
      const secondColName = Object.keys(representativesInputs[key])[i - 1]; // LicaDoljnost
      const thirdColName = Object.keys(representativesInputs[key])[i + 1]; // licaFio

      const firstColInput = representativesInputs[key][firstColName][0];
      const secondColInput = representativesInputs[key][secondColName][0];
      const thirdColInput = representativesInputs[key][thirdColName][0];
      switch (secondColInput.value) {
        case "Генеральный директор":
          {
            firstColInput.value = "ООО СпецСтройЭксперт";
            secondColInput.value = "Генеральный директор";
            thirdColInput.value = representatives["Генеральный директор"];
            break;
          }
        case "Директор":
          {
            firstColInput.value = "ООО СпецСтройЭксперт";
            secondColInput.value = "Генеральный директор";
            thirdColInput.value = representatives["Генеральный директор"];
            break;
          }
        case "Руководитель работ":
          {
            firstColInput.value = "ООО СпецСтройЭксперт";
            thirdColInput.value = representatives["Руководитель работ"];
            break;
          }
        case "Исполнитель работ":
          {
            firstColInput.value = "ООО СпецСтройЭксперт";
            thirdColInput.value = currentFio;
          }
      }
    }
  });
};
;// ./server/appComponents/loadData.js





const loadData = () => {
  if (!appData.availableFunctions.loadData) {
    return;
  }
  // Находим все поля в отчете
  searchAllInputs();
  setRepresentatives();

  // Если страница не подходит для вставки - выдаем ошибку и выходим из функции
  if (!buttonError_buttonError(constants_appVariables.pasteButton, constants_appVariables.currentPage, "main", "Вставка отчета")) {
    return;
  }

  // Если никаких данных в localStorage нет - выходим из функции
  if (localStorage.getItem("MJIDATA") === null) {
    constants_appVariables.pasteButton.classList.add("main__button_error");
    constants_appVariables.pasteButton.textContent = "Ничего не скопировано";
    setTimeout(() => {
      constants_appVariables.pasteButton.textContent = "Вставка отчета";
      constants_appVariables.pasteButton.classList.remove("main__button_error");
    }, 1500);
    return;
  }
  const loadData = JSON.parse(localStorage.getItem("MJIDATA"));

  // РЕЗУЛЬТАТЫ ВЫБОРОЧНОГО ОБСЛЕДОВАНИЯ
  // Крыша
  // Кровля
  constants_appVariables.krovlyaDefecty.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.krovlyaName]["Выявленные дефекты"];
  constants_appVariables.krovlyaPercent.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.krovlyaName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.krovlyaOcenka, loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.krovlyaName]["Оценка"], true);

  // Свесы
  constants_appVariables.svesyDefecty.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.svesyName]["Выявленные дефекты"];
  constants_appVariables.svesyPercent.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.svesyName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.svesyOcenka, loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.svesyName]["Оценка"], true);

  // Стропильная система
  constants_appVariables.stropilnayaSistemaDefecty.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.stropilnayaSistemaName]["Выявленные дефекты"];
  constants_appVariables.stropilnayaSistemaPercent.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.stropilnayaSistemaName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.stropilnayaSistemaOcenka, loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.stropilnayaSistemaName]["Оценка"], true);

  // Чердак
  constants_appVariables.cherdakDefecty.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.cherdakName]["Выявленные дефекты"];
  constants_appVariables.cherdakPercent.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.cherdakName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.cherdakOcenka, loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.cherdakName]["Оценка"], true);

  // Покрытие ж/б
  constants_appVariables.pokritieJBDefecty.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.pokritieJBName]["Выявленные дефекты"];
  constants_appVariables.pokritieJBPercent.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.pokritieJBName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.pokritieJBOcenka, loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.pokritieJBName]["Оценка"], true);

  // Все элементы
  constants_appVariables.vsyaKrishaDefecty.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.vsyaKrishaName]["Выявленные дефекты"];
  constants_appVariables.vsyaKrishaPercent.value = loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.vsyaKrishaName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.vsyaKrishaOcenka, loadData["Результаты выборочного обследования"]["Крыша"][constants_appVariables.vsyaKrishaName]["Оценка"], true);

  // Водоотвод
  constants_appVariables.vodootvodDefecty.value = loadData["Результаты выборочного обследования"]["Водоотвод"]["Выявленные дефекты"];
  constants_appVariables.vodootvodPercent.value = loadData["Результаты выборочного обследования"]["Водоотвод"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.vodootvodOcenka, loadData["Результаты выборочного обследования"]["Водоотвод"]["Оценка"], true);

  // Межпанельные стыки
  constants_appVariables.majpanelnyeStykiDefecty.value = loadData["Результаты выборочного обследования"]["Межпанельные стыки"]["Выявленные дефекты"];
  constants_appVariables.majpanelnyeStykiPercent.value = loadData["Результаты выборочного обследования"]["Межпанельные стыки"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.majpanelnyeStykiOcenka, loadData["Результаты выборочного обследования"]["Межпанельные стыки"]["Оценка"], true);

  // Фасад
  constants_appVariables.fasadDefecty.value = loadData["Результаты выборочного обследования"]["Фасад"]["Выявленные дефекты"];
  constants_appVariables.fasadPercent.value = loadData["Результаты выборочного обследования"]["Фасад"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.fasadOcenka, loadData["Результаты выборочного обследования"]["Фасад"]["Оценка"], true);

  // Балконы
  // Балконы
  constants_appVariables.balkonyDefecty.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.balkonyName]["Выявленные дефекты"];
  constants_appVariables.balkonyPercent.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.balkonyName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.balkonyOcenka, loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.balkonyName]["Оценка"], true);

  // Лоджии
  constants_appVariables.lodjiiDefecty.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.lodjiiName]["Выявленные дефекты"];
  constants_appVariables.lodjiiPercent.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.lodjiiName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.lodjiiOcenka, loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.lodjiiName]["Оценка"], true);

  // Козырьки
  constants_appVariables.kozirkiDefecty.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.kozirkiName]["Выявленные дефекты"];
  constants_appVariables.kozirkiPercent.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.kozirkiName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.kozirkiOcenka, loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.kozirkiName]["Оценка"], true);

  // Эркеры
  constants_appVariables.erkeryDefecty.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.erkeryName]["Выявленные дефекты"];
  constants_appVariables.erkeryPercent.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.erkeryName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.erkeryOcenka, loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.erkeryName]["Оценка"], true);

  // Все элементы
  constants_appVariables.vseBalkonyDefecty.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.vseBalkonyName]["Выявленные дефекты"];
  constants_appVariables.vseBalkonyPercent.value = loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.vseBalkonyName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.vseBalkonyOcenka, loadData["Результаты выборочного обследования"]["Балконы"][constants_appVariables.vseBalkonyName]["Оценка"], true);

  // Стены
  constants_appVariables.stenyDefecty.value = loadData["Результаты выборочного обследования"]["Стены"]["Выявленные дефекты"];
  constants_appVariables.stenyPercent.value = loadData["Результаты выборочного обследования"]["Стены"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.stenyOcenka, loadData["Результаты выборочного обследования"]["Стены"]["Оценка"], true);

  // Подвал
  constants_appVariables.podvalDefecty.value = loadData["Результаты выборочного обследования"]["Подвал"]["Выявленные дефекты"];
  constants_appVariables.podvalPercent.value = loadData["Результаты выборочного обследования"]["Подвал"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.podvalOcenka, loadData["Результаты выборочного обследования"]["Подвал"]["Оценка"], true);

  // Тех.подполье
  constants_appVariables.techPodpolieDefecty.value = loadData["Результаты выборочного обследования"]["Тех.подполье"]["Выявленные дефекты"];
  constants_appVariables.techPodpoliePercent.value = loadData["Результаты выборочного обследования"]["Тех.подполье"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.techPodpolieOcenka, loadData["Результаты выборочного обследования"]["Тех.подполье"]["Оценка"], true);

  // Тех.этаж
  constants_appVariables.techEtajDefecty.value = loadData["Результаты выборочного обследования"]["Тех.этаж"]["Выявленные дефекты"];
  constants_appVariables.techEtajPercent.value = loadData["Результаты выборочного обследования"]["Тех.этаж"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.techEtajOcenka, loadData["Результаты выборочного обследования"]["Тех.этаж"]["Оценка"], true);

  // Гараж стоянка (подземный)
  constants_appVariables.garageDefecty.value = loadData["Результаты выборочного обследования"]["Гараж стоянка (подземный)"]["Выявленные дефекты"];
  constants_appVariables.garagePercent.value = loadData["Результаты выборочного обследования"]["Гараж стоянка (подземный)"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.garageOcenka, loadData["Результаты выборочного обследования"]["Гараж стоянка (подземный)"]["Оценка"], true);

  // Места общего пользования
  // Вестибюли
  constants_appVariables.mopVestibuliDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVestibuliName]["Выявленные дефекты"];
  constants_appVariables.mopVestibuliPercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVestibuliName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopVestibuliOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVestibuliName]["Оценка"], true);

  // Крыльца
  constants_appVariables.mopKrilcaDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopKrilcaName]["Выявленные дефекты"];
  constants_appVariables.mopKrilcaPercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopKrilcaName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopKrilcaOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopKrilcaName]["Оценка"], true);

  // Пандусы наружные
  constants_appVariables.mopPandusyNaruzhnieDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopPandusyNaruzhnieName]["Выявленные дефекты"];
  constants_appVariables.mopPandusyNaruzhniePercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopPandusyNaruzhnieName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopPandusyNaruzhnieOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopPandusyNaruzhnieName]["Оценка"], true);

  // Пандусы внутри-подъездные
  constants_appVariables.mopPandusyVnutrennieDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopPandusyVnutrennieName]["Выявленные дефекты"];
  constants_appVariables.mopPandusyVnutrenniePercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopPandusyVnutrennieName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopPandusyVnutrennieOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopPandusyVnutrennieName]["Оценка"], true);

  // Сходы/съезды
  constants_appVariables.mopShodySiezdyDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopShodySiezdyName]["Выявленные дефекты"];
  constants_appVariables.mopShodySiezdyPercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopShodySiezdyName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopShodySiezdyOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopShodySiezdyName]["Оценка"], true);

  // Окна, двери
  constants_appVariables.mopOknaDveriDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopOknaDveriName]["Выявленные дефекты"];
  constants_appVariables.mopOknaDveriPercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopOknaDveriName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopOknaDveriOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopOknaDveriName]["Оценка"], true);

  // Внутренняя отделка помещений
  constants_appVariables.mopVnOtdelkaPomeshDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVnOtdelkaPomeshName]["Выявленные дефекты"];
  constants_appVariables.mopVnOtdelkaPomeshPercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVnOtdelkaPomeshName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopVnOtdelkaPomeshOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVnOtdelkaPomeshName]["Оценка"], true);

  // Все элементы
  constants_appVariables.mopVseElementyDefecty.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVseElementyName]["Выявленные дефекты"];
  constants_appVariables.mopVseElementyPercent.value = loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVseElementyName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.mopVseElementyOcenka, loadData["Результаты выборочного обследования"]["Места общего пользования"][constants_appVariables.mopVseElementyName]["Оценка"], true);

  // Лестницы
  constants_appVariables.lestnicyDefecty.value = loadData["Результаты выборочного обследования"]["Лестницы"]["Выявленные дефекты"];
  constants_appVariables.lestnicyPercent.value = loadData["Результаты выборочного обследования"]["Лестницы"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.lestnicyOcenka, loadData["Результаты выборочного обследования"]["Лестницы"]["Оценка"], true);

  // Перекрытия
  constants_appVariables.perekrityaDefecty.value = loadData["Результаты выборочного обследования"]["Перекрытия"]["Выявленные дефекты"];
  constants_appVariables.perekrityaPercent.value = loadData["Результаты выборочного обследования"]["Перекрытия"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.perekrityaOcenka, loadData["Результаты выборочного обследования"]["Перекрытия"]["Оценка"], true);

  // Система отопления
  // Тех.подполье/тех.этаж
  constants_appVariables.otopleniyeTehPodpolieDefecty.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeTehPodpolieName]["Выявленные дефекты"];
  constants_appVariables.otopleniyeTehPodpoliePercent.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeTehPodpolieName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeTehPodpolieOcenka, loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeTehPodpolieName]["Оценка"], true);

  // Транзит питающий
  constants_appVariables.otopleniyeTranzitPitaushDefecty.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeTranzitPitaushName]["Выявленные дефекты"];
  constants_appVariables.otopleniyeTranzitPitaushPercent.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeTranzitPitaushName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeTranzitPitaushOcenka, loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeTranzitPitaushName]["Оценка"], true);

  // Чердак
  constants_appVariables.otopleniyeCherdakDefecty.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeCherdakName]["Выявленные дефекты"];
  constants_appVariables.otopleniyeCherdakPercent.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeCherdakName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeCherdakOcenka, loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeCherdakName]["Оценка"], true);

  // Этажи
  constants_appVariables.otopleniyeEtajiDefecty.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeEtajiName]["Выявленные дефекты"];
  constants_appVariables.otopleniyeEtajiPercent.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeEtajiName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.otopleniyeEtajiOcenka, loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.otopleniyeEtajiName]["Оценка"], true);

  // Вся система
  constants_appVariables.vseOtopleniyeDefecty.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.vseOtopleniyeName]["Выявленные дефекты"];
  constants_appVariables.vseOtopleniyePercent.value = loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.vseOtopleniyeName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.vseOtopleniyeOcenka, loadData["Результаты выборочного обследования"]["Система отопления"][constants_appVariables.vseOtopleniyeName]["Оценка"], true);

  // ГВС
  // Тех.подполье/тех.этаж
  constants_appVariables.gvsTehPodpolieDefecty.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsTehPodpolieName]["Выявленные дефекты"];
  constants_appVariables.gvsTehPodpoliePercent.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsTehPodpolieName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.gvsTehPodpolieOcenka, loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsTehPodpolieName]["Оценка"], true);

  // Транзит питающий
  constants_appVariables.gvsTranzitPitaushDefecty.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsTranzitPitaushName]["Выявленные дефекты"];
  constants_appVariables.gvsTranzitPitaushPercent.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsTranzitPitaushName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.gvsTranzitPitaushOcenka, loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsTranzitPitaushName]["Оценка"], true);

  // Чердак
  constants_appVariables.gvsCherdakDefecty.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsCherdakName]["Выявленные дефекты"];
  constants_appVariables.gvsCherdakPercent.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsCherdakName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.gvsCherdakOcenka, loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsCherdakName]["Оценка"], true);

  // Этажи
  constants_appVariables.gvsEtajiDefecty.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsEtajiName]["Выявленные дефекты"];
  constants_appVariables.gvsEtajiPercent.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsEtajiName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.gvsEtajiOcenka, loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.gvsEtajiName]["Оценка"], true);

  // Вся система
  constants_appVariables.vseGvsDefecty.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.vseGvsName]["Выявленные дефекты"];
  constants_appVariables.vseGvsPercent.value = loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.vseGvsName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.vseGvsOcenka, loadData["Результаты выборочного обследования"]["ГВС"][constants_appVariables.vseGvsName]["Оценка"], true);

  // ХВС
  // Тех.подполье/тех.этаж
  constants_appVariables.hvsTehPodpolieDefecty.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsTehPodpolieName]["Выявленные дефекты"];
  constants_appVariables.hvsTehPodpoliePercent.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsTehPodpolieName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.hvsTehPodpolieOcenka, loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsTehPodpolieName]["Оценка"], true);

  // Транзит питающий
  constants_appVariables.hvsTranzitPitaushDefecty.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsTranzitPitaushName]["Выявленные дефекты"];
  constants_appVariables.hvsTranzitPitaushPercent.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsTranzitPitaushName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.hvsTranzitPitaushOcenka, loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsTranzitPitaushName]["Оценка"], true);

  // Этажи
  constants_appVariables.hvsEtajiDefecty.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsEtajiName]["Выявленные дефекты"];
  constants_appVariables.hvsEtajiPercent.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsEtajiName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.hvsEtajiOcenka, loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsEtajiName]["Оценка"], true);

  // Внутренний пожарный водопровод
  constants_appVariables.hvsVnPozharProvodDefecty.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsVnPozharProvodName]["Выявленные дефекты"];
  constants_appVariables.hvsVnPozharProvodPercent.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsVnPozharProvodName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.hvsVnPozharProvodOcenka, loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.hvsVnPozharProvodName]["Оценка"], true);

  // Вся система
  constants_appVariables.vseHvsDefecty.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.vseHvsName]["Выявленные дефекты"];
  constants_appVariables.vseHvsPercent.value = loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.vseHvsName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.vseHvsOcenka, loadData["Результаты выборочного обследования"]["ХВС"][constants_appVariables.vseHvsName]["Оценка"], true);

  // Канализация
  // Тех.подполье/тех.этаж
  constants_appVariables.kanalizaciaTehPodpolieDefecty.value = loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.kanalizaciaTehPodpolieName]["Выявленные дефекты"];
  constants_appVariables.kanalizaciaTehPodpoliePercent.value = loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.kanalizaciaTehPodpolieName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.kanalizaciaTehPodpolieOcenka, loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.kanalizaciaTehPodpolieName]["Оценка"], true);

  // Этажи
  constants_appVariables.kanalizaciaEtajiDefecty.value = loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.kanalizaciaEtajiName]["Выявленные дефекты"];
  constants_appVariables.kanalizaciaEtajiPercent.value = loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.kanalizaciaEtajiName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.kanalizaciaEtajiOcenka, loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.kanalizaciaEtajiName]["Оценка"], true);

  // Вся система
  constants_appVariables.vseKanalizaciaDefecty.value = loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.vseKanalizaciaName]["Выявленные дефекты"];
  constants_appVariables.vseKanalizaciaPercent.value = loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.vseKanalizaciaName]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.vseKanalizaciaOcenka, loadData["Результаты выборочного обследования"]["Канализация"][constants_appVariables.vseKanalizaciaName]["Оценка"], true);

  // Мусоропроводы
  constants_appVariables.musoroprovodyDefecty.value = loadData["Результаты выборочного обследования"]["Мусоропроводы"]["Выявленные дефекты"];
  constants_appVariables.musoroprovodyPercent.value = loadData["Результаты выборочного обследования"]["Мусоропроводы"]["% деф. части"];
  clickGenerator_clickGenerator(constants_appVariables.musoroprovodyOcenka, loadData["Результаты выборочного обследования"]["Мусоропроводы"]["Оценка"], true);

  // Связь с ОДС
  constants_appVariables.odsDefecty.value = loadData["Результаты выборочного обследования"]["Связь с ОДС"]["Выявленные дефекты"];
  constants_appVariables.odsPosledneeObsled.value = loadData["Результаты выборочного обследования"]["Связь с ОДС"]["№ и дата последнего обслед."];
  constants_appVariables.odsOrganizacia.value = loadData["Результаты выборочного обследования"]["Связь с ОДС"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.odsOcenka, loadData["Результаты выборочного обследования"]["Связь с ОДС"]["Оценка"], true);

  // Вентиляция
  constants_appVariables.ventilaciaDefecty.value = loadData["Результаты выборочного обследования"]["Вентиляция"]["Выявленные дефекты"];
  constants_appVariables.ventilaciaPosledneeObsled.value = loadData["Результаты выборочного обследования"]["Вентиляция"]["№ и дата последнего обслед."];
  constants_appVariables.ventilaciaOrganizacia.value = loadData["Результаты выборочного обследования"]["Вентиляция"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.ventilaciaOcenka, loadData["Результаты выборочного обследования"]["Вентиляция"]["Оценка"], true);

  // Система промывки и прочистки стволов мусоропроводов
  constants_appVariables.musoroChistSistemaDefecty.value = loadData["Результаты выборочного обследования"]["Система промывки и прочистки стволов мусоропроводов"]["Выявленные дефекты"];
  constants_appVariables.musoroChistSistemaPosledObsled.value = loadData["Результаты выборочного обследования"]["Система промывки и прочистки стволов мусоропроводов"]["№ и дата последнего обслед."];
  constants_appVariables.musoroChistSistemaOrganizacia.value = loadData["Результаты выборочного обследования"]["Система промывки и прочистки стволов мусоропроводов"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.musoroChistSistemaOcenka, loadData["Результаты выборочного обследования"]["Система промывки и прочистки стволов мусоропроводов"]["Оценка"], true);

  // ОЗДС (охранно-защитная дератизационная система)
  constants_appVariables.ozdsDefecty.value = loadData["Результаты выборочного обследования"]["ОЗДС (охранно-защитная дератизационная система)"]["Выявленные дефекты"];
  constants_appVariables.ozdsPosledObsled.value = loadData["Результаты выборочного обследования"]["ОЗДС (охранно-защитная дератизационная система)"]["№ и дата последнего обслед."];
  constants_appVariables.ozdsOrganizacia.value = loadData["Результаты выборочного обследования"]["ОЗДС (охранно-защитная дератизационная система)"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.ozdsOcenka, loadData["Результаты выборочного обследования"]["ОЗДС (охранно-защитная дератизационная система)"]["Оценка"], true);

  // Газоходы
  constants_appVariables.gazohodyDefecty.value = loadData["Результаты выборочного обследования"]["Газоходы"]["Выявленные дефекты"];
  constants_appVariables.gazohodyPosledObsled.value = loadData["Результаты выборочного обследования"]["Газоходы"]["№ и дата последнего обслед."];
  constants_appVariables.gazohodyOrganizacia.value = loadData["Результаты выборочного обследования"]["Газоходы"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.gazohodyOcenka, loadData["Результаты выборочного обследования"]["Газоходы"]["Оценка"], true);

  // Лифты
  constants_appVariables.liftyDefecty.value = loadData["Результаты выборочного обследования"]["Лифты"]["Выявленные дефекты"];
  constants_appVariables.liftyPosledObsled.value = loadData["Результаты выборочного обследования"]["Лифты"]["№ и дата последнего обслед."];
  constants_appVariables.liftyOrganizacia.value = loadData["Результаты выборочного обследования"]["Лифты"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.liftyOcenka, loadData["Результаты выборочного обследования"]["Лифты"]["Оценка"], true);

  // Подъёмное устройство для маломобильной группы населения
  constants_appVariables.podyomnikDefecty.value = loadData["Результаты выборочного обследования"]["Подъёмное устройство для маломобильной группы населения"]["Выявленные дефекты"];
  constants_appVariables.podyomnikPosledObsled.value = loadData["Результаты выборочного обследования"]["Подъёмное устройство для маломобильной группы населения"]["№ и дата последнего обслед."];
  constants_appVariables.podyomnikOrganizacia.value = loadData["Результаты выборочного обследования"]["Подъёмное устройство для маломобильной группы населения"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.podyomnikOcenka, loadData["Результаты выборочного обследования"]["Подъёмное устройство для маломобильной группы населения"]["Оценка"], true);

  // Устройство для автоматического опускания лифта
  constants_appVariables.autoSpuskLiftDefecty.value = loadData["Результаты выборочного обследования"]["Устройство для автоматического опускания лифта"]["Выявленные дефекты"];
  constants_appVariables.autoSpuskLiftPosledObsled.value = loadData["Результаты выборочного обследования"]["Устройство для автоматического опускания лифта"]["№ и дата последнего обслед."];
  constants_appVariables.autoSpuskLiftOrganizacia.value = loadData["Результаты выборочного обследования"]["Устройство для автоматического опускания лифта"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.autoSpuskLiftOcenka, loadData["Результаты выборочного обследования"]["Устройство для автоматического опускания лифта"]["Оценка"], true);

  // Система ЭС
  constants_appVariables.systemEsDefecty.value = loadData["Результаты выборочного обследования"]["Система ЭС"]["Выявленные дефекты"];
  constants_appVariables.systemEsPosledObsled.value = loadData["Результаты выборочного обследования"]["Система ЭС"]["№ и дата последнего обслед."];
  constants_appVariables.systemEsOrganizacia.value = loadData["Результаты выборочного обследования"]["Система ЭС"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.systemEsOcenka, loadData["Результаты выборочного обследования"]["Система ЭС"]["Оценка"], true);

  // ВКВ (второй кабельный ввод)
  constants_appVariables.vkvDefecty.value = loadData["Результаты выборочного обследования"]["ВКВ (второй кабельный ввод)"]["Выявленные дефекты"];
  constants_appVariables.vkvPosledObsled.value = loadData["Результаты выборочного обследования"]["ВКВ (второй кабельный ввод)"]["№ и дата последнего обслед."];
  constants_appVariables.vkvOrganizacia.value = loadData["Результаты выборочного обследования"]["ВКВ (второй кабельный ввод)"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.vkvOcenka, loadData["Результаты выборочного обследования"]["ВКВ (второй кабельный ввод)"]["Оценка"], true);

  // АВР (автоматическое включение резервного питания)
  constants_appVariables.avrDefecty.value = loadData["Результаты выборочного обследования"]["АВР (автоматическое включение резервного питания)"]["Выявленные дефекты"];
  constants_appVariables.avrPosledObsled.value = loadData["Результаты выборочного обследования"]["АВР (автоматическое включение резервного питания)"]["№ и дата последнего обслед."];
  constants_appVariables.avrOrganizacia.value = loadData["Результаты выборочного обследования"]["АВР (автоматическое включение резервного питания)"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.avrOcenka, loadData["Результаты выборочного обследования"]["АВР (автоматическое включение резервного питания)"]["Оценка"], true);

  // ППАиДУ
  constants_appVariables.ppaiduDefecty.value = loadData["Результаты выборочного обследования"]["ППАиДУ"]["Выявленные дефекты"];
  constants_appVariables.ppaiduPosledObsled.value = loadData["Результаты выборочного обследования"]["ППАиДУ"]["№ и дата последнего обслед."];
  constants_appVariables.ppaiduOrganizacia.value = loadData["Результаты выборочного обследования"]["ППАиДУ"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.ppaiduOcenka, loadData["Результаты выборочного обследования"]["ППАиДУ"]["Оценка"], true);

  // Система оповещения о пожаре
  constants_appVariables.pozharOpoveshenDefecty.value = loadData["Результаты выборочного обследования"]["Система оповещения о пожаре"]["Выявленные дефекты"];
  constants_appVariables.pozharOpoveshenPosledObsled.value = loadData["Результаты выборочного обследования"]["Система оповещения о пожаре"]["№ и дата последнего обслед."];
  constants_appVariables.pozharOpoveshenOrganizacia.value = loadData["Результаты выборочного обследования"]["Система оповещения о пожаре"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.pozharOpoveshenOcenka, loadData["Результаты выборочного обследования"]["Система оповещения о пожаре"]["Оценка"], true);

  // Система ГС
  constants_appVariables.sistemaGsDefecty.value = loadData["Результаты выборочного обследования"]["Система ГС"]["Выявленные дефекты"];
  constants_appVariables.sistemaGsPosledObsled.value = loadData["Результаты выборочного обследования"]["Система ГС"]["№ и дата последнего обслед."];
  constants_appVariables.sistemaGsOrganizacia.value = loadData["Результаты выборочного обследования"]["Система ГС"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.sistemaGsOcenka, loadData["Результаты выборочного обследования"]["Система ГС"]["Оценка"], true);

  // Система видеонаблюдения
  constants_appVariables.sistemaVideonabDefecty.value = loadData["Результаты выборочного обследования"]["Система видеонаблюдения"]["Выявленные дефекты"];
  constants_appVariables.sistemaVideonabPosledObsled.value = loadData["Результаты выборочного обследования"]["Система видеонаблюдения"]["№ и дата последнего обслед."];
  constants_appVariables.sistemaVideonabOrganizacia.value = loadData["Результаты выборочного обследования"]["Система видеонаблюдения"]["Специализированная организация"];
  clickGenerator_clickGenerator(constants_appVariables.sistemaVideonabOcenka, loadData["Результаты выборочного обследования"]["Система видеонаблюдения"]["Оценка"], true);
  constants_appVariables.dopolnitDannye.value = loadData["Результаты выборочного обследования"]["Дополнительные данные"];
  clickGenerator_clickGenerator(constants_appVariables.recomendatciiPoUtepleniuSten, loadData["Результаты выборочного обследования"]["Рекомендации по утеплению стен"], true);
  constants_appVariables.recomendatciiPoDopRabotam.value = loadData["Выводы по результатам обследования"]["РЕКОМЕНДАЦИИ по ремонтно-восстановительным работам"];

  // Подписывающие лица
  // for (let i = 1; i < appVariables.signatoriesRows.length; i++) {
  // 	if (!appVariables.signatoriesRows[i].querySelector("#comp_12340")) {
  // 		continue;
  // 	}
  // 	appVariables[i]["licaOt"].value = loadData["Подписывающие лица"]["Представители от"][i];
  // 	appVariables[i]["LicaDoljnost"].value = loadData["Подписывающие лица"]["Должность и наименование организации"][i];
  // 	appVariables[i]["licaFio"].value = loadData["Подписывающие лица"]["ФИО должностного лица"][i];
  // }

  localStorage.setItem("DataLoaded", JSON.stringify({
    address: loadData.address.address
  }));
  constants_appVariables.pasteButton.textContent = "Вставлено";
  constants_appVariables.pasteButton.classList.add("main__button_done");
  setTimeout(() => {
    constants_appVariables.pasteButton.textContent = "Вставка отчета";
    constants_appVariables.pasteButton.classList.remove("main__button_done");
  }, 1500);
};
;// ./server/appComponents/downloadPhotos.js


const downloadPhotos = evt => {
  evt.preventDefault();
  if (!appData.availableFunctions.downloadPhotos) {
    return;
  }
  // Если страница не подходит для вставки фото - выдаем ошибку и выходим из функции
  if (!buttonError_buttonError(constants_appVariables.submitButton, constants_appVariables.currentPage, "photo", "Загрузить")) {
    return;
  }
  const files = constants_appVariables.formInput.files;
  let counter = 0;
  if (files.length < 1) {
    constants_appVariables.submitButton.classList.add("form__button_error");
    constants_appVariables.submitButton.value = "Ошибка!";
    setTimeout(() => {
      constants_appVariables.submitButton.classList.remove("form__button_error");
      constants_appVariables.submitButton.value = "Загрузить";
    }, 1500);
    return;
  }
  const interval = setInterval(upload, 3000);
  const saveButton = constants_appVariables.html.querySelector("#buttonFormSave");
  const addImgBtnContainer = constants_appVariables.html.querySelector("#\\32 1184 > caption");
  const addImgButton = addImgBtnContainer.querySelector(".button");
  function upload() {
    // 1. Клик по кнопке добавления поля
    addImgButton.click();
    const photoTable = constants_appVariables.html.querySelector("#\\32 1184");
    const downloadInputs = photoTable.querySelectorAll(".fileLoad");
    const downloadInput = downloadInputs[downloadInputs.length - 1];
    const textareas = photoTable.querySelectorAll("textarea");
    const currentTextarea = textareas[textareas.length - 1];
    const currentFile = files[`${counter}`];
    const prepareDate = constants_appVariables.inputDate.value.split("-");
    const downloadDate = `Дата загрузки: ${prepareDate[2]}.${prepareDate[1]}.${prepareDate[0]} г.`;
    currentTextarea.value = downloadDate;

    // Копируем данные файла из расширения
    const fileObj = {
      type: `${currentFile.type}`,
      size: currentFile.size,
      webkitRelativePath: `${currentFile.webkitRelativePath}`,
      lastModified: `${currentFile.lastModified}`,
      lastModifiedDate: `${currentFile.lastModifiedDate}`
    };
    const myFile = new File(["file"], `${currentFile.name}`, fileObj);
    if (myFile.lastModified < 1) {
      return;
    }

    // 2. Выделяем инпут для подгрузки фото и вставляем в него данные
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(currentFile);
    downloadInput.files = dataTransfer.files;
    downloadInput.dispatchEvent(new Event("change"));
    counter++;
    // 3. Сохраняем после добавления всех файлов
    if (counter >= files.length) {
      clearInterval(interval);
      setTimeout(() => {
        saveButton.click();
        constants_appVariables.submitButton.value = "Сохранено";
        constants_appVariables.submitButton.classList.add("form__button_done");
        setTimeout(() => {
          constants_appVariables.submitButton.value = "Загрузить";
          constants_appVariables.submitButton.classList.remove("form__button_done");
        }, 1500);
      }, 3000);
    }
  }
};
;// ./server/appComponents/openCloseFakeSelect.js
const openFakeSelect = selectList => {
  if (appVariables.htmlBody.querySelector(".fakeSelect_opened")) {
    closeFakeSelect(appVariables.htmlBody.querySelector(".fakeSelect_opened"));
  }
  selectList.classList.add("fakeSelect_opened");
};
const closeFakeSelect = selectList => {
  selectList.classList.remove("fakeSelect_opened");
};
;// ./server/appComponents/createFakeSelects.js




const createFakeSelects = () => {
  if (!appData.availableFunctions.createFakeSelects) {
    return;
  }
  if (!buttonError_buttonError(constants_appVariables.copyButton, constants_appVariables.currentPage, "main", "Всплывающие поля")) {
    return;
  }
  const fakeSelectList = appData.appLayout.fakeSelectList;
  const selectsValues = appData.defectsData;

  // Поиск полей отчета
  searchAllInputs();
  let counterItems = 1;
  constants_resultsDefectsInputs.inputs.forEach(input => {
    const groupTable = input.closest(".groupBorder");
    const container = input.parentElement;
    const rowName = container.previousElementSibling.querySelector("span").textContent;
    const groupName = groupTable.querySelector("legend").textContent;
    input.style.boxSizing = "border-box";
    if (selectsValues[groupName]) {
      if (rowName !== "Все элементы" && rowName !== "Вся система") {
        if (!container.querySelector(".fakeSelect")) {
          container.style.position = "relative";
          container.insertAdjacentHTML("afterBegin", fakeSelectList);
          const currentSelect = container.querySelector(".fakeSelect");
          const currentSelectList = currentSelect.querySelector(".fakeSelect__list");
          const currentSelectOpenButton = container.querySelector(".fakeSelect__selector");
          const currentSelectCloseBtn = currentSelect.querySelector(".fakeSelect__close-selector");
          currentSelectOpenButton.addEventListener("click", () => {
            openFakeSelect(currentSelect);
          });
          currentSelectCloseBtn.addEventListener("click", () => {
            closeFakeSelect(currentSelect);
          });
          let listOptions, conditionNode, objAddress, objAddressOpt, objAddressGroup, objAddressRow;
          try {
            objAddress = selectsValues[`${groupName}`][`${rowName}`][`conditionNode`]["appVariables"] || selectsValues[`${groupName}`][`${rowName}`][`conditionNode`];
            objAddressOpt = objAddress[0];
            objAddressGroup = objAddress[1];
            objAddressRow = objAddress[2];
            conditionNode = constants_appVariables[objAddressOpt][objAddressGroup][objAddressRow];
          } catch {}
          if (conditionNode) {
            const conditionValue = `${conditionNode.value}`;
            const conditions = selectsValues[`${groupName}`][`${rowName}`][`conditions`];
            listOptions = conditions[`${conditionValue}`];
          } else {
            console.info(`${groupName}: ${rowName} - безусловно`);
            if (!selectsValues[`${groupName}`][`${rowName}`]) {
              listOptions = ["#", "#"];
            } else {
              listOptions = selectsValues[`${groupName}`][`${rowName}`][`conditions`]["Безусловно"];
            }
          }
          listOptions.forEach(item => {
            const listItem = `
                            <div class="fakeSelect__item-wrapper">
                                <input type="checkbox" id="fakselect-item-${counterItems}" />
                                <label for="fakselect-item-${counterItems}">${item}</label>
                            </div>`;
            currentSelectList.insertAdjacentHTML("beforeend", listItem);
            counterItems += 1;
          });
          const allGroupItems = currentSelectList.querySelectorAll(".fakeSelect__item-wrapper");
          currentSelectCloseBtn.addEventListener("click", () => {
            const resultValue = [];
            allGroupItems.forEach(item => {
              const checkbox = item.querySelector("input");
              const value = item.querySelector("label");
              if (checkbox.checked) {
                if (!input.value.includes(value.textContent)) {
                  resultValue.push(value.textContent);
                }
              } else {
                const sentences = splitBySentences(input.value);
                const toDelete = sentences.find(str => `${str}.` === value.textContent);
                if (toDelete) {
                  input.value = input.value.trimStart().trimEnd().replace(`${toDelete}.`, "");
                }
              }
            });
            input.value = `${input.value.trimStart().trimEnd()} ${resultValue.join(" ").trimStart().trimEnd()}`.trimStart().trimEnd();
          });
        }
      }
    }
  });
  constants_appVariables.fakeSelectsButton.textContent = "Создано!";
  constants_appVariables.fakeSelectsButton.classList.add("main__button_done");
  setTimeout(() => {
    constants_appVariables.fakeSelectsButton.textContent = "Всплывающие поля";
    constants_appVariables.fakeSelectsButton.classList.remove("main__button_done");
  }, 1500);
};
;// ./server/appComponents/createPopup.js











const createPopup = currentPage => {
  const popupLayout = appData.appLayout.popupLayout;
  const stylesLayout = appData.appLayout.stylesLayout;
  constants_appVariables.htmlHead.insertAdjacentHTML("beforeEnd", stylesLayout);
  constants_appVariables.htmlBody.insertAdjacentHTML("afterBegin", popupLayout);
  constants_appVariables.app = constants_appVariables.htmlBody.querySelector(".mji-manager-app");
  constants_appVariables.tabs = constants_appVariables.app.querySelectorAll(".tabs__button");
  constants_appVariables.tabsContent = constants_appVariables.app.querySelectorAll(".content");
  constants_appVariables.dragIco = constants_appVariables.app.querySelector(".header__drag-button");
  constants_appVariables.inputDate = constants_appVariables.app.querySelector("#date");
  constants_appVariables.cleanButton = constants_appVariables.app.querySelector("#cleanButton");
  constants_appVariables.minimizeButton = constants_appVariables.app.querySelector("#minimizeButton");
  constants_appVariables.closeButton = constants_appVariables.app.querySelector("#closeButton");
  constants_appVariables.copyButton = constants_appVariables.app.querySelector("#copy");
  constants_appVariables.clearDataButton = constants_appVariables.app.querySelector("#clean");
  constants_appVariables.pasteButton = constants_appVariables.app.querySelector("#paste");
  constants_appVariables.fakeSelectsButton = constants_appVariables.app.querySelector("#fakeSelects");
  constants_appVariables.photoDownload = constants_appVariables.app.querySelector(".form");
  constants_appVariables.submitButton = constants_appVariables.photoDownload.querySelector(".form__button");
  constants_appVariables.formInput = constants_appVariables.app.querySelector("#file");
  constants_appVariables.userLogin = constants_appVariables.app.querySelector(".account-info__login").querySelector("span");

  // Обработчики действий пользователя
  constants_appVariables.dragIco.addEventListener("mousedown", dragApp_startDraggingDiv);
  constants_appVariables.dragIco.addEventListener("dragstart", removeDefaultDrag);
  constants_appVariables.cleanButton.addEventListener("click", clearCache_clearCache);
  constants_appVariables.minimizeButton.addEventListener("click", minimizeApp_minimizeApp);
  constants_appVariables.closeButton.addEventListener("click", closeApp);
  constants_appVariables.clearDataButton.addEventListener("click", clearData);
  constants_appVariables.copyButton.addEventListener("click", saveData);
  constants_appVariables.pasteButton.addEventListener("click", loadData);
  constants_appVariables.photoDownload.addEventListener("submit", downloadPhotos);
  constants_appVariables.fakeSelectsButton.addEventListener("click", createFakeSelects);
  constants_appVariables.tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      changeTab(tab);
    });
  });

  // Подстановка имени и логина пользователя
  constants_appVariables.userLogin.textContent = `${currentFio}, ${login}`;

  // Установка табов и контента под текущую страницу
  currentPage === "main" ? constants_appVariables.tabs[0].classList.add("tabs__button_active") : constants_appVariables.tabs[1].classList.add("tabs__button_active");
  currentPage === "main" ? constants_appVariables.tabsContent[1].classList.add("content_deactive") : constants_appVariables.tabsContent[0].classList.add("content_deactive");
  constants_appVariables.html.addEventListener("keyup", evt => {
    minimizeAppByEscape(evt);
  });
};
;// ./server/appComponents/setInitialDate.js
const setInitialDate = tag => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  tag.value = `${year}-${month}-${day}`;
};
;// ./server/appComponents/setRatings.js


const setRatings = () => {
  if (!appData.availableFunctions.setRatings) {
    return;
  }
  const ratesData = appData.ratesData;
  searchAllInputs();
  for (let key in constants_appVariables) {
    if (key.includes("Ocenka") && !key.includes("Proshl")) {
      const name = key.replace("Ocenka", "");
      if (!allRatesPercentsInputs[name]) {
        allRatesPercentsInputs[name] = new Object();
      }
      allRatesPercentsInputs[name]["Ocenka"] = constants_appVariables[key];
    }
    if (key.includes("Percent")) {
      const name = key.replace("Percent", "");
      if (!allRatesPercentsInputs[name]) {
        allRatesPercentsInputs[name] = new Object();
      }
      allRatesPercentsInputs[name]["Percent"] = constants_appVariables[key];
      allRatesPercentsInputs[name]["Group"] = constants_appVariables[key].closest(".groupBorder").querySelector("legend").textContent;
    }
    if (key.includes("Name")) {
      const name = key.replace("Name", "");
      if (!allRatesPercentsInputs[name]) {
        allRatesPercentsInputs[name] = new Object();
      }
      allRatesPercentsInputs[name]["name"] = constants_appVariables[key];
    }
  }
  for (let key in allRatesPercentsInputs) {
    if (!allRatesPercentsInputs[key]["Percent"]) {
      break;
    }
    const dataElement = allRatesPercentsInputs[key]["Ocenka"].parentElement.nextElementSibling;
    const listItems = dataElement.querySelectorAll("li");
    allRatesPercentsInputs[key]["Percent"].addEventListener("change", evt => {
      checkPercentValidity(evt.target.value, evt.target);
      checkRatePercent(evt.target.value, "Percent", evt.target, dataElement);
    });
    listItems.forEach(item => {
      item.addEventListener("click", () => {
        checkRatePercent(item.textContent, "Ocenka", item, allRatesPercentsInputs[key]["Percent"]);
      });
    });
  }
  function checkRatePercent(value, inputType, input, siblingInput) {
    let rowName, validPercent, conditions, rate, percentToValidRateIsEqual;
    const groupName = input.closest(".groupBorder").querySelector("legend").textContent;
    if (inputType === "Percent") {
      rowName = input.parentElement.parentElement.firstElementChild.nextElementSibling.querySelector("span").textContent;
      const valueToNumber = Number(value);
      conditions = ratesData[groupName][rowName];
      if (availableFunctions.algorythms) {
        for (let ocenka in conditions) {
          if (conditions[ocenka] === "algorythm A") {
            algorythmA(allRatesPercentsInputs, input, groupName);
            return;
          }
          if (conditions[ocenka] === "algorythm B") {
            algorythmB(allRatesPercentsInputs, input, groupName);
            return;
          }
          if (conditions[ocenka] === "algorythm C") {
            algorythmC(allRatesPercentsInputs, input, groupName);
            return;
          }
        }
      }
      for (let ocenka in conditions) {
        try {
          validPercent = conditions[ocenka].find(num => num == valueToNumber);
        } catch {
          console.info("valid percent not found");
        }
        if (validPercent) {
          rate = ocenka;
        }
      }
      if (!rate) {
        return;
      }
      const siblingItem = siblingInput.parentElement.querySelector("input");
      if (siblingItem.value !== rate) {
        siblingItem.parentElement.classList.add("inputErrorValidity");
      } else {
        siblingItem.parentElement.classList.remove("inputErrorValidity");
        input.classList.remove("inputErrorValidity");
        input.style.borderColor = "#D0D0D0 !important";
      }
    }
    if (inputType === "Ocenka") {
      rowName = input.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.querySelector("span").textContent;
      conditions = ratesData[groupName][rowName];
      const validRatesArr = conditions[value];
      if (typeof validRatesArr == "string") {
        return;
      }
      if (validRatesArr) {
        percentToValidRateIsEqual = validRatesArr.find(num => num === Number(siblingInput.value));
      }
      if (!percentToValidRateIsEqual || !validRatesArr) {
        siblingInput.classList.add("inputErrorValidity");
      } else {
        siblingInput.classList.remove("inputErrorValidity");
        input.parentElement.parentElement.previousElementSibling.classList.remove("inputErrorValidity");
        input.parentElement.parentElement.previousElementSibling.classList.remove("dataMarker");
      }
    }
  }
  function checkPercentValidity(value, input) {
    const numRegexp = /^\d*$/;
    if (!numRegexp.test(input.value)) {
      input.value = "";
    }
    if (input.value === "") {
      return;
    }
    const validValues = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
    if (value < 3) {
      input.value = 3;
    }
    for (let i = 1; i < validValues.length; i += 2) {
      const low = Math.abs(Number(value) - validValues[i - 1]);
      const mid = Math.abs(Number(value) - validValues[i]);
      const high = Math.abs(Number(value) - validValues[i + 1]);
      if (low > 2 && mid > 2 && high > 2) {
        continue;
      }
      const differs = [low, mid, high];
      const result = differs.indexOf(Math.min(...differs));
      let end = false;
      switch (result) {
        case 0:
          {
            input.value = validValues[i - 1];
            end = true;
            break;
          }
        case 1:
          {
            input.value = validValues[i];
            end = true;
            break;
          }
        case 2:
          {
            input.value = validValues[i + 1];
            end = true;
            break;
          }
        default:
          {
            continue;
          }
      }
      if (end) {
        break;
      }
    }
  }
  function algorythmA(rowsInputs, input, groupName) {
    if (!availableFunctions.algorythms) {
      return;
    }
    const rates = [];
    let resultRate = "";
    let rowNameTranslite = "";
    let maxPercent = 0;
    for (let row in rowsInputs) {
      if (rowsInputs[row]["Group"] === groupName) {
        if (rowsInputs[row]["name"] === "Все элементы") {
          rowNameTranslite = row;
          break;
        }
        if (maxPercent < rowsInputs[row]["Percent"].value) {
          maxPercent = rowsInputs[row]["Percent"].value;
        }
        rates.push({
          RowName: `${rowsInputs[row]["name"]}`,
          Percent: rowsInputs[row]["Percent"].value,
          Ocenka: rowsInputs[row]["Ocenka"].value
        });
      }
    }
    input.value = maxPercent;
    if (rates.find(rate => rate["Ocenka"] === "А")) {
      resultRate = "А";
      clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
      return;
    }
    if (resultRate !== "") {
      return;
    }
    rates.forEach(rate => {
      switch (rate.RowName) {
        case "Стропильная система":
          if (rate.Ocenka === "ОГР") {
            resultRate = "ОГР";
            clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
          }
          return;
        case "Покрытие ж/б":
          if (rate.Ocenka === "ОГР") {
            resultRate = "ОГР";
            clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
          }
          return;
      }
    });
    if (resultRate !== "") {
      return;
    }
    rates.forEach(rate => {
      switch (rate.RowName) {
        case "Кровля":
          if (rate.Ocenka === "Н") {
            resultRate = "Н";
            clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
            return;
          }
          break;
        case "Свесы":
          if (rate.Ocenka === "Н") {
            resultRate = "Н";
            clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
            return;
          }
          break;
        case "Чердак":
          if (rate.Ocenka === "Н") {
            resultRate = "Н";
            clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
            return;
          }
          break;
      }
    });
    if (resultRate !== "") {
      return;
    }
    resultRate = "Р";
    clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
  }
  function algorythmB(rowsInputs, input, groupName) {
    if (!availableFunctions.algorythms) {
      return;
    }
    const rates = [];
    let resultRate = "";
    let rowNameTranslite = "";
    let maxPercent = 0;
    for (let row in rowsInputs) {
      if (rowsInputs[row]["Group"] === groupName) {
        if (rowsInputs[row]["name"] === "Все элементы" || rowsInputs[row]["name"] === "Вся система") {
          rowNameTranslite = row;
          break;
        }
        if (maxPercent < rowsInputs[row]["Percent"].value) {
          maxPercent = rowsInputs[row]["Percent"].value;
        }
        rates.push({
          RowName: `${rowsInputs[row]["name"]}`,
          Percent: rowsInputs[row]["Percent"].value,
          Ocenka: rowsInputs[row]["Ocenka"].value
        });
      }
    }
    input.value = maxPercent;
    if (rates.find(rate => rate["Ocenka"] === "А")) {
      resultRate = "А";
      clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
      return;
    }
    if (resultRate !== "") {
      return;
    }
    if (rates.find(rate => rate["Ocenka"] === "ОГР")) {
      resultRate = "ОГР";
      clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
      return;
    }
    if (resultRate !== "") {
      return;
    }
    resultRate = "Р";
    clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
  }
  function algorythmC(rowsInputs, input, groupName) {
    if (!availableFunctions.algorythms) {
      return;
    }
    const rates = [];
    let resultRate = "";
    let rowNameTranslite = "";
    let maxPercent = 0;
    for (let row in rowsInputs) {
      if (rowsInputs[row]["Group"] === groupName) {
        if (rowsInputs[row]["name"] === "Все элементы" || rowsInputs[row]["name"] === "Вся система") {
          rowNameTranslite = row;
          break;
        }
        if (maxPercent < rowsInputs[row]["Percent"].value) {
          maxPercent = rowsInputs[row]["Percent"].value;
        }
        rates.push({
          RowName: `${rowsInputs[row]["name"]}`,
          Percent: rowsInputs[row]["Percent"].value,
          Ocenka: rowsInputs[row]["Ocenka"].value
        });
      }
    }
    input.value = maxPercent;
    if (rates.find(rate => rate["Ocenka"] === "А")) {
      resultRate = "А";
      clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
      return;
    }
    if (resultRate !== "") {
      return;
    }
    if (rates.find(rate => rate["Ocenka"] === "Н")) {
      resultRate = "Н";
      clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
      return;
    }
    if (resultRate !== "") {
      return;
    }
    resultRate = "Р";
    clickGenerator(constants_appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
  }
};
;// ./server/appComponents/index.js





const launchApp = (currentFio, login, loginIsPossible, launchStatus, appDataString) => {
  appData = JSON.parse(appDataString);

  // Предотвращение двойного старта
  if (!localStorage.getItem("status")) {
    setToStorage(false, launchStatus, null, null);
  } else {
    const storageData = JSON.parse(localStorage.getItem("status"));
    if (storageData.init) {
      return;
    } else {
      if (loginIsPossible) {
        setToStorage(false, launchStatus, null, null);
      }
    }
  }

  // Верстка внутреннего попапа со стилями и верстка выпадающих окон

  // Определение наличия iFrame на странице встраивания
  constants_appVariables.html = document.querySelector("#formCanvas").contentWindow.document.querySelector("html") || document.querySelector("html");
  constants_appVariables.wholeAddress = document.querySelector("#title")?.textContent;

  // Определение тегов head и body в документе
  constants_appVariables.htmlHead = constants_appVariables.html.querySelector("head");
  constants_appVariables.htmlBody = constants_appVariables.html.querySelector("body");

  // Определение страницы встраивания с фото или с отчетом
  constants_appVariables.form = constants_appVariables.htmlBody.querySelector("#formData107") || constants_appVariables.htmlBody.querySelector("#formData181");
  if (constants_appVariables.form.id === "formData107") {
    constants_appVariables.currentPage = "photo";
  }
  // } else {
  if (constants_appVariables.form.id === "formData181") {
    constants_appVariables.currentPage = "main";
  }
  createPopup(constants_appVariables.currentPage);
  setToStorage(true, true, null, null);
  setInitialDate(constants_appVariables.inputDate);

  // Встраивание верстки приложения в страницу
  createPopup(currentPage);
  setRatings();
};