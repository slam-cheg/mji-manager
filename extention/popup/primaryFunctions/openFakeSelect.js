export const openFakeSelect =(appVariables, selectList) => {
    if (appVariables.htmlBody.querySelector(".fakeSelect_opened")) {
        closeFakeSelect(appVariables.htmlBody.querySelector(".fakeSelect_opened"));
    }
    selectList.classList.add("fakeSelect_opened");
}