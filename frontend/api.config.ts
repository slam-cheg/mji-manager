export const API_ROUTES = {
  auth: {
    register: '/registration',
    login: '/login',
    activate: '/activation',
  },
  app: {
    getApp: '/get-app',
    getAppData: '/get-app-data',
    updateDefects: '/save-defects',
  },
  users: {
    getUserData: '/userdata',
    getAllUsers: '/allusersdata',
    updateFio: '/savefio',
    changePermissions: '/change-permissions',
    changeAccount: '/change-account',
    deactivateAccount: '/deactivate-account',
  },
  config: {
    changeFunctions: '/change-functions',
  },
  system: {
    checkResponse: '/check-response-from-server',
    getScripts: '/get-scripts',
  },
};
