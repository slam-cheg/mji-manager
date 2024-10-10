export const buttonError = (button, currentPage, needPage, stdValue) => {
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
}