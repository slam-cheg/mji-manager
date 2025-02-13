export const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export const nameRegexp = /[а-яА-Я]/i;
export const passwordRegexp = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

export function validateEmail(email: string) {
    return emailRegexp.test(email);
}

export function validatePassword(password: string) {
    return passwordRegexp.test(password) && password.length >= 8;
}

export function validateFio(fio: string) {
    return fio.trim().length >= 4 && nameRegexp.test(fio);
}
