import fs from "fs";
import path from "path";
import { createLogger, transports, format } from "winston";

// Create the log directory if it doesn't exist
const logDirectory = "./logs";
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Create the logger
const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        }),
        format.prettyPrint(),
    ),
    transports: [
        new transports.File({ filename: getLogFileName(), dirname: logDirectory }),
        new transports.Console(),
    ],
});

// Logging function to log data to the file
export class Logs {
    static info(data) {
        logger.info(data);
        return true;
    }
    static error(data) {
        logger.error(data);
        return true;
    }
    static warn(data) {
        logger.warn(data);
        return true;
    }
    static debug(data) {
        logger.debug(data);
        return true;
    }
}

// Function to get the log file name with current date
function getLogFileName() {
    const currentDate = new Date();
    const formattedDate = formatDateToYMD(currentDate);
    return `log-${formattedDate}.log`;
}

// Function to format date to Y-m-d format
function formatDateToYMD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
