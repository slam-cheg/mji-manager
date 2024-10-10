export const openFakeSelect = (selectList) => {
    if (appVariables.htmlBody.querySelector(".fakeSelect_opened")) {
        closeFakeSelect(appVariables.htmlBody.querySelector(".fakeSelect_opened"));
    }
    selectList.classList.add("fakeSelect_opened");
}

export const closeFakeSelect = (selectList) => {
    selectList.classList.remove("fakeSelect_opened");
}