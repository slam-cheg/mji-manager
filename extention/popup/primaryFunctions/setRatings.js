export const setRatings = (appVariables, availableFunctions, resultsDefectsInputs, allRatesPercentsInputs, appData) => {
	if (!availableFunctions.setRatings) {
		return;
	}
	const ratesData = appData.ratesData;
	searchAllInputs(appVariables, availableFunctions, resultsDefectsInputs);

	for (let key in appVariables) {
		if (key.includes("Ocenka") && !key.includes("Proshl")) {
			const name = key.replace("Ocenka", "");
			if (!allRatesPercentsInputs[name]) {
				allRatesPercentsInputs[name] = new Object();
			}
			allRatesPercentsInputs[name]["Ocenka"] = appVariables[key];
		}
		if (key.includes("Percent")) {
			const name = key.replace("Percent", "");
			if (!allRatesPercentsInputs[name]) {
				allRatesPercentsInputs[name] = new Object();
			}
			allRatesPercentsInputs[name]["Percent"] = appVariables[key];
			allRatesPercentsInputs[name]["Group"] = appVariables[key].closest(".groupBorder").querySelector("legend").textContent;
		}
		if (key.includes("Name")) {
			const name = key.replace("Name", "");
			if (!allRatesPercentsInputs[name]) {
				allRatesPercentsInputs[name] = new Object();
			}
			allRatesPercentsInputs[name]["name"] = appVariables[key];
		}
	}

	for (let key in allRatesPercentsInputs) {
		if (!allRatesPercentsInputs[key]["Percent"]) {
			break;
		}
		const dataElement = allRatesPercentsInputs[key]["Ocenka"].parentElement.nextElementSibling;
		const listItems = dataElement.querySelectorAll("li");

		allRatesPercentsInputs[key]["Percent"].addEventListener("change", (evt) => {
			checkPercentValidity(evt.target.value, evt.target);
			checkRatePercent(evt.target.value, "Percent", evt.target, dataElement);
		});
		listItems.forEach((item) => {
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
					validPercent = conditions[ocenka].find((num) => num == valueToNumber);
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
				percentToValidRateIsEqual = validRatesArr.find((num) => num === Number(siblingInput.value));
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
				case 0: {
					input.value = validValues[i - 1];
					end = true;
					break;
				}
				case 1: {
					input.value = validValues[i];
					end = true;
					break;
				}
				case 2: {
					input.value = validValues[i + 1];
					end = true;
					break;
				}
				default: {
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
					Ocenka: rowsInputs[row]["Ocenka"].value,
				});
			}
		}
		input.value = maxPercent;

		if (rates.find((rate) => rate["Ocenka"] === "А")) {
			resultRate = "А";
			clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
			return;
		}
		if (resultRate !== "") {
			return;
		}
		rates.forEach((rate) => {
			switch (rate.RowName) {
				case "Стропильная система":
					if (rate.Ocenka === "ОГР") {
						resultRate = "ОГР";
						clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
					}
					return;
				case "Покрытие ж/б":
					if (rate.Ocenka === "ОГР") {
						resultRate = "ОГР";
						clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
					}
					return;
			}
		});
		if (resultRate !== "") {
			return;
		}
		rates.forEach((rate) => {
			switch (rate.RowName) {
				case "Кровля":
					if (rate.Ocenka === "Н") {
						resultRate = "Н";
						clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
						return;
					}
					break;
				case "Свесы":
					if (rate.Ocenka === "Н") {
						resultRate = "Н";
						clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
						return;
					}
					break;
				case "Чердак":
					if (rate.Ocenka === "Н") {
						resultRate = "Н";
						clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
						return;
					}
					break;
			}
		});
		if (resultRate !== "") {
			return;
		}
		resultRate = "Р";
		clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
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
					Ocenka: rowsInputs[row]["Ocenka"].value,
				});
			}
		}
		input.value = maxPercent;

		if (rates.find((rate) => rate["Ocenka"] === "А")) {
			resultRate = "А";
			clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
			return;
		}
		if (resultRate !== "") {
			return;
		}
		if (rates.find((rate) => rate["Ocenka"] === "ОГР")) {
			resultRate = "ОГР";
			clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
			return;
		}
		if (resultRate !== "") {
			return;
		}
		resultRate = "Р";
		clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
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
					Ocenka: rowsInputs[row]["Ocenka"].value,
				});
			}
		}
		input.value = maxPercent;

		if (rates.find((rate) => rate["Ocenka"] === "А")) {
			resultRate = "А";
			clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
			return;
		}
		if (resultRate !== "") {
			return;
		}
		if (rates.find((rate) => rate["Ocenka"] === "Н")) {
			resultRate = "Н";
			clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
			return;
		}
		if (resultRate !== "") {
			return;
		}
		resultRate = "Р";
		clickGenerator(appVariables[`${rowNameTranslite}Ocenka`], resultRate, true);
	}
}
