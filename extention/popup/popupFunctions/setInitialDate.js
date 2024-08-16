// Установка текущей даты
export const setInitialDate = (tag) => {
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
