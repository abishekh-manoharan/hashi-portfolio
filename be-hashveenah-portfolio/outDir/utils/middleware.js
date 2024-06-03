export const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.status(404).send('forbidden');
    }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err, _req, res, _next) => {
    if (err instanceof Error) {
        res.status(500).send('error: ' + err.message);
    }
    else {
        res.status(500).send('unknown error occured');
    }
};
