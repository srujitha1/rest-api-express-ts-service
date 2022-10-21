import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { UserService, IUserService } from '../service/user.service';
import logger from '../utils/logger';

const router = express.Router();
const userservice : IUserService = new UserService();

router.get('/ping', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await userservice.getMessageService("Hello Srujitha!");
        if (!response) res.status(404).send({message: "No message found"})
        return res.send(response);
    } catch (err: any) {
        logger.error(err.message);
        next(err);
    }
});

router.get('/users/:id',  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await userservice.getUserService(req.params.id);
        if (!response) return res.status(404).send({message: "No user found"})
        return res.send(response);
    } catch (err: any) {
        logger.error(err.message);
        next(err);
    }
});

router.post('/users',  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await userservice.createUserService(req.body);
        if (!response) return res.status(404).send({message: "User creation unsuccessful"})
        return res.send(response);
    } catch (err: any) {
        logger.error(err.message);
        next(err);
    }
});

router.delete('/users/:id',  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await userservice.deleteUserService(req.params.id);
        if (!response) return res.status(404).send({message: "User deletion unsuccessful"})
        return res.send(response);
    } catch (err: any) {
        logger.error(err.message);
        next(err);
    }
});

export default router;