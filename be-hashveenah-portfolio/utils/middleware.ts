import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()){
        next();
    } else {
        res.status(404).send('forbidden');
    }   
}

 // eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    if (err instanceof Error) {
        res.status(500).send('error: ' + err.message);
    } else {
        res.status(500).send('unknown error occured')
    }
}