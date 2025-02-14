export const API_ROUTES = {
  auth: {
    register: '/auth/registration',
    login: '/auth/login',
    activate: '/auth/activation',
  },
  app: {
    getApp: '/api/get-app',
    getAppData: '/api/get-app-data',
    updateDefects: '/api/save-defects',
  },
  users: {
    getUserData: '/api/userdata',
    getAllUsers: '/api/allusersdata',
    updateFio: '/api/savefio',
    changePermissions: '/api/change-permissions',
    changeAccount: '/api/change-account',
    deactivateAccount: '/api/deactivate-account',
  },
  config: {
    changeFunctions: '/api/change-functions',
  },
  system: {
    checkResponse: '/api/check-response-from-server',
    getScripts: '/api/get-scripts',
  },
};
