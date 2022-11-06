/* Copyright 2022, HST. */
/* eslint-disable no-console */
import 'dayjs/locale/zh-cn'; // 导入本地化语言

import dayjs from 'dayjs';

/*
Prints log messages depending on the debug level passed in. Defaults to 0.
0  Prints no logs.
1  Prints only errors.
2  Prints errors and warnings.
3  Prints errors warnings and trace.
4  Prints all logs.
*/
export enum LogLevel {
    DISABLED,
    ERROR,
    WARN,
    TRACE,
    INFO,
}
// type LogLevelStrings = keyof typeof LogLevel;
export default class Logger {
    private _logLevel: LogLevel;
    private log_prefix = 'HST-RTC_SDK: ';
    constructor(prefix: string, logLevel?: LogLevel) {
        this._logLevel = logLevel ?? LogLevel.DISABLED;
        this.log_prefix = prefix;
    }

    info(...args: any[]) {
        if (this._logLevel >= LogLevel.INFO) {
            console.info(
                `%c${this.log_prefix}[info][${dayjs().format('HH:mm:ss')}]`,
                'color: #1157fe; font-weight: bolder;',
                ...args,
            );
        }
    }

    trace(...args: any[]) {
        if (this._logLevel >= LogLevel.TRACE) {
            console.trace(
                `%c${this.log_prefix}[trace][${dayjs().format('HH:mm:ss')}]`,
                'color: #1157fe; font-weight: bolder;',
                ...args,
            );
        }
    }

    warn(...args: any[]) {
        if (this._logLevel >= LogLevel.WARN) {
            console.warn(
                `%c${this.log_prefix}[warn][${dayjs().format('HH:mm:ss')}]`,
                'color: #1157fe; font-weight: bolder;',
                ...args,
            );
        }
    }

    error(...args: any[]) {
        if (this._logLevel >= LogLevel.ERROR) {
            console.warn(
                `%c${this.log_prefix}[error][${dayjs().format('HH:mm:ss')}]`,
                'color: #1157fe; font-weight: bolder;',
                ...args,
            );
        }
    }
}
