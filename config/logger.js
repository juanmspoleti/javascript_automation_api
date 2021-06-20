import log4js from "log4js";

log4js.configure({
  appenders: {
    fileAppender: { type: "file", filename: "./logs/logging.log" },
    console: { type: "console" },
  },
  categories: { default: { appenders: ["fileAppender"], level: "info" } },
});

export const logger = log4js.getLogger();
