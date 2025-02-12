export const keygen = () => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let word = "";
	let key = "";
	let counter = 0;
	while (counter < 20) {
		word += letters.charAt(Math.floor(Math.random() * letters.length));
		counter++;
	}
	key = `${word.substr(0, 5)}-${word.substr(5, 5)}-${word.substr(10, 5)}-${word.substr(15, 5)}`;
	return key;
};
