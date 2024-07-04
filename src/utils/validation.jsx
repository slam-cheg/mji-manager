const checkEmail = (input) => {
	const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (!emailRegexp.test(input.value)) {
		return false;
	}
	return true;
};

const checkFio = (input) => {
	const nameRegexp = /[а-яА-Я]/i;
	const fioToArr = input.value.split("");
	const resultArr = [];

	fioToArr.forEach((letter) => {
		if (nameRegexp.test(letter)) {
			resultArr.push(letter);
		}
	});
	const maskedValue = maskFio(resultArr.join(""));

	if (maskedValue === "" || maskedValue.length < 4) {
		return false;
	}

	return maskedValue;
};

const maskFio = (string) => {
	if (string === "" || string.length < 4) {
		return string;
	}
	const firstLetter = `${string[0].toUpperCase()}.`;
	const secondLetter = `${string[1].toUpperCase()}.`;
	const thirdLetter = `${string[2].toUpperCase()}`;
	const lastLetters = `${string.slice(3, string.length)}`;

	return `${firstLetter} ${secondLetter} ${thirdLetter}${lastLetters}`;
};

const checkPassword = (input) => {
	const passwordRegexp = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
	if (input.length < 8) {
		return false;
	}

	if (!passwordRegexp.test(input.value)) {
		return false;
	}

	return true;
};

export { checkEmail, checkFio, checkPassword };
