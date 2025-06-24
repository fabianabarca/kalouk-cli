/**
 * Simple logger utility for CLI output
 */

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}

export class Logger {
  static log(level: LogLevel, message: string, ...args: any[]) {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

    switch (level) {
      case LogLevel.ERROR:
        console.error(prefix, message, ...args);
        break;
      case LogLevel.WARN:
        console.warn(prefix, message, ...args);
        break;
      case LogLevel.INFO:
        console.log(prefix, message, ...args);
        break;
      case LogLevel.DEBUG:
        if (process.env.DEBUG) {
          console.log(prefix, message, ...args);
        }
        break;
    }
  }

  static error(message: string, ...args: any[]) {
    Logger.log(LogLevel.ERROR, message, ...args);
  }

  static warn(message: string, ...args: any[]) {
    Logger.log(LogLevel.WARN, message, ...args);
  }

  static info(message: string, ...args: any[]) {
    Logger.log(LogLevel.INFO, message, ...args);
  }

  static debug(message: string, ...args: any[]) {
    Logger.log(LogLevel.DEBUG, message, ...args);
  }
}
