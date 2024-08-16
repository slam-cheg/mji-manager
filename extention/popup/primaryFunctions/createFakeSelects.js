// Добавляет на странице отчета во все поля раскрывающийся список с параметрами для выбора
import { searchAllInputs } from "./searchAllInputs.js";
import { buttonError } from "../buttonError.js";
import openFakeSelect from "../openFakeSelect.js";
import closeFakeSelect from "../closeFakeSelect.js";
import { splitBySentences } from "./splitBySentences.js";

export const createFakeSelects = (appVariables, availableFunctions, resultsDefectsInputs, selectsValues, fakeSelectList, resultsDefectsInputs) => {
	if (!buttonError(appVariables.copyButton, appVariables.currentPage, "main", "Всплывающие поля")) {
		return;
	}

	// Поиск полей отчета
	searchAllInputs(appVariables, availableFunctions, resultsDefectsInputs);

	let counterItems = 1;

	resultsDefectsInputs.inputs.forEach((input) => {
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
					let listOptions, conditionNode, objAddress, objAddressOpt, objAddressGroup, objAddressRow;

					currentSelectOpenButton.addEventListener("click", () => {
						openFakeSelect(appVariables, currentSelect);
					});
					currentSelectCloseBtn.addEventListener("click", () => {
						closeFakeSelect(currentSelect);
					});

					try {
						objAddress = selectsValues[`${groupName}`][`${rowName}`][`conditionNode`]["appVariables"] || selectsValues[`${groupName}`][`${rowName}`][`conditionNode`];
						objAddressOpt = objAddress[0];
						objAddressGroup = objAddress[1];
						objAddressRow = objAddress[2];
						conditionNode = appVariables[objAddressOpt][objAddressGroup][objAddressRow];
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

					listOptions.forEach((item) => {
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
						allGroupItems.forEach((item) => {
							const checkbox = item.querySelector("input");
							const value = item.querySelector("label");

							if (checkbox.checked) {
								if (!input.value.includes(value.textContent)) {
									resultValue.push(value.textContent);
								}
							} else {
								const sentences = splitBySentences(input.value);
								const toDelete = sentences.find((str) => `${str}.` === value.textContent);
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

	appVariables.fakeSelectsButton.textContent = "Создано!";
	appVariables.fakeSelectsButton.classList.add("main__button_done");
	setTimeout(() => {
		appVariables.fakeSelectsButton.textContent = "Всплывающие поля";
		appVariables.fakeSelectsButton.classList.remove("main__button_done");
	}, 1500);
}
