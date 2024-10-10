export const setToStorage = (layout, init, authorized, uid) => {
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
}