export const ServerConfig = {
  address: {
    production: {
      ip: "192.168.0.99",
      port: 80,
    },
    dev: {
      ip: "192.168.0.99",
      port: 3000,
    },
  },
  corsOptions: {
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
    credentials: false,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "device-remember-token",
      "Access-Control-Allow-Origin",
      "Origin",
      "Accept",
    ],
  },
  routes: {
    pages: {
      home: "/",
      node: "/node",
      registration: "/registration",
      login: "/login",
      profile: "/profile",
      defectEditor: "/defect-editor",
    },
    api: {
      registration: "/auth/registration",
      login: "/auth/login",
      activation: "/auth/activation",
      getApp: "/api/get-app",
      userData: "/api/userdata",
      allUsersData: "/api/allusersdata",
      saveDefects: "/api/save-defects",
      saveFio: "/api/savefio",
      activeFunctions: "/api/change-functions",
      changeUserPermissions: "/api/change-permissions",
      changeAccount: "/api/change-account",
      deactivateAccount: "/api/deactivate-account",
      getAppData: "/api/get-app-data",
      checkResponseFromServer: "/api/check-response-from-server",
      getScripts: "/api/get-scripts"
    },
  },
  dataBase: {
    host: "192.168.0.99",
    port: 3001,
    database: "Manager",
    user: "postgres",
    password: "Es12345678",
  },
};
