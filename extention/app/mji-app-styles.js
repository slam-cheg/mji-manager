export const mjiAppStyles = `
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap");
.mji-manager-app {
  font-family: Inter;
  z-index: 999;
  background: #ffffff;
  width: 410px;
  top: 50px;
  right: 20px;
  border-radius: 10px;
  padding: 20px 10px;
}
.mji-manager-app_minimized {
  top: unset !important;
  bottom: 0 !important;
  left: unset !important;
  max-height: 48px;
  width: auto;
}
.mji-manager-app_minimized .header__drag-button,
.mji-manager-app_minimized #cleanButton {
  display: none;
}
.mji-manager-app_minimized #minimizeButton {
  transform: rotate(180deg);
}
.mji-manager-app_not-auth {
  width: 330px;
}
.mji-manager-app_not-auth #cleanButton {
  display: none;
}
.mji-manager-app_not-auth .tabs {
  display: none !important;
}
.mji-manager-app_not-auth .main {
  display: none !important;
}
.mji-manager-app_not-auth .auth {
  display: block !important;
}
.mji-manager-app .header {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 10px;
  border-bottom: 1px solid #e9e9e9;
}
.mji-manager-app .header__title-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.mji-manager-app .header__logo {
  width: 24px;
}
.mji-manager-app .header__title {
  color: #181818;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.mji-manager-app .header__drag-button {
  position: absolute;
  top: 2px;
  left: calc(50% - 10px);
  height: 6px;
  display: flex;
  align-items: center;
  cursor: grab;
}
.mji-manager-app .header__buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}
.mji-manager-app .header__button {
  outline: none;
  border: none;
  display: flex;
  width: 20px;
  height: 20px;
  transition: opacity 0.3s;
  background-color: transparent;
  cursor: pointer;
  align-items: flex-end;
}
.mji-manager-app .header__button:hover {
  opacity: 0.7;
  transition: opacity 0.3s;
}
.mji-manager-app .auth_hidden {
  display: none;
}
.mji-manager-app .auth__form {
  display: none;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
.mji-manager-app .auth__form_active {
  display: flex;
}
.mji-manager-app .auth__input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
  border: none;
}
.mji-manager-app .auth__input {
  width: 100%;
  padding: 10px;
  border: 1px solid #1f5473;
  color: #1a1a18;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  height: 34px;
  outline: none;
  box-sizing: border-box;
}
.mji-manager-app .auth__error {
  color: #9f0000;
  font-size: 14px;
  position: absolute;
  right: 10px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}
.mji-manager-app .auth__error_visible {
  opacity: 1;
  transition: opacity 0.3s;
}
.mji-manager-app .auth__button {
  background: #1f5473;
  border: none;
  outline: none;
  padding: 10px 30px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  height: 34px;
  cursor: pointer;
  transition: opacity 0.3s;
}
.mji-manager-app .auth__button:hover {
  opacity: 0.7;
  transition: opacity 0.3s;
}
.mji-manager-app .app_minimized .header {
  gap: 20px;
}
.mji-manager-app .animation {
  animation: colorChange;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-direction: normal;
  animation-iteration-count: 1;
}
@keyframes colorChange {
  0% {
    fill: #787878;
  }
  50% {
    fill: #00931a;
  }
  100% {
    fill: #787878;
  }
}
.mji-manager-app .tabs {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 20px;
}
.mji-manager-app .tabs__button {
  outline: none;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  background: #e9e9e9;
  width: 50%;
  padding: 8px;
  color: #181818;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.mji-manager-app .tabs__button:hover {
  opacity: 0.7;
  transition: 0.3s;
}
.mji-manager-app .tabs__button_active {
  background: #1f5473;
  color: #ffffff;
}
.mji-manager-app .main {
  padding: 0 10px 20px 10px;
}
.mji-manager-app .content_deactive {
  display: none !important;
}
.mji-manager-app .content#main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.mji-manager-app .main__button {
  outline: none;
  border: none;
  color: #181818;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  background: #e9e9e9;
  padding: 10px 0;
  transition: opacity 0.3s;
}
.mji-manager-app .main__button:hover {
  transition: opacity 0.3s;
  opacity: 0.7;
  cursor: pointer;
}
.mji-manager-app .main__button_done {
  color: #00931a !important;
}
.mji-manager-app .main__button_error {
  color: #9f0000 !important;
}
.mji-manager-app .form__field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
}
.mji-manager-app .form__label {
  color: #1a1a18;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.mji-manager-app .form__input[type=file]::file-selector-button {
  width: 190px;
  border: none;
  background: #1f5473;
  padding: 10px 30px;
  margin-right: 10px;
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.3s;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.mji-manager-app .form__input[type=file]::file-selector-button:hover {
  transition: opacity 0.3s;
  opacity: 0.7;
}
.mji-manager-app .form__input[type=date] {
  width: 190px;
  border: 1px solid #1f5473;
  padding: 11px 10px;
  color: #1a1a18;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  outline: none;
}
.mji-manager-app .form__button {
  width: 190px;
  outline: none;
  border: none;
  background: #1f5473;
  color: #ffffff;
  transition: 0.3s;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  cursor: pointer;
  padding: 10px 30px;
}
.mji-manager-app .form__button:hover {
  transition: 0.3s;
  opacity: 0.7;
}
.mji-manager-app .form__button .form__button_done {
  background: #00931a !important;
}
.mji-manager-app .logged {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mji-manager-app .logged_hidden {
  display: none;
}
.mji-manager-app .logged__top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.mji-manager-app .logged__user, .mji-manager-app .logged__login {
  margin: 0 5px 0 0;
  font-family: Inter;
  font-size: 18px;
}
.mji-manager-app .logged__login {
  color: #1f5473;
  font-weight: 800;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
}
.mji-manager-app .logged__login:hover {
  opacity: 0.7;
  transition: 0.3s;
}
.mji-manager-app .logged__bottom button {
  outline: none;
  border: none;
  background: #1f5473;
  color: #ffffff;
  transition: 0.3s;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  cursor: pointer;
  padding: 10px 30px;
}
.mji-manager-app .logged__bottom button:hover {
  transition: 0.3s;
  opacity: 0.7;
}
.mji-manager-app .loader {
  display: none;
}
.mji-manager-app .loader_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
.mji-manager-app .loader_loading svg {
  animation: load;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.mji-manager-app .server-error {
  margin: 0;
  padding-top: 10px;
  font-size: 18px;
  color: #e2000f;
  display: none;
}
.mji-manager-app .server-error_visible {
  display: initial;
}
.mji-manager-app .update {
  position: absolute;
  top: 5px;
  right: 20px;
  color: #181818;
  font-size: 10px;
}
.mji-manager-app .account {
  border-top: 1px solid #e2000f;
  margin-top: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mji-manager-app .account_hidden {
  display: none;
}
.mji-manager-app .account__login {
  font-size: 18px;
  color: #181818;
}
.mji-manager-app .account__fio {
  border: none;
  padding: 4px;
  font-size: 18px;
  color: #181818;
  border-bottom: 1px solid #1f5473;
  outline: none;
  font-style: normal;
  transition: 0.3s;
}
.mji-manager-app .account__fio_saved {
  border: 1px solid #00931a;
  transition: 0.3s;
}
.mji-manager-app .account__fio_error {
  border: 1px solid #9f0000;
  transition: 0.3s;
}
</style>`;
