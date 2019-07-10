import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    usuarioLogs: { type: 'file', filename: 'logs/usuario.log' },
    console: { type: 'console' }
  },
  categories: {
    usuario: { appenders: ['console', 'usuarioLogs'], level: 'ALL' },
    default: { appenders: ['console', 'usuarioLogs'], level: 'ALL' }
  }
});

export const logger = log4js.getLogger('usuario');
