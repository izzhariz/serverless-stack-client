import * as Sentry from "@sentry/react";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
    if (isLocal) {
        return;
    }

    Sentry.init({
        dsn: "https://910611bb63e34af5958793763212e4f4@o478062.ingest.sentry.io/5519991"
      });
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    if(!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url
    }

    logError(error, errorInfo)
    
    alert(message);
}