import { IUserPayload, MessageResponse, User } from '../models/user.model';
import { getRepository} from "typeorm";

export const getUser = async (id: number) : Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({id: id});
    if (!user) return null;
    return user;
}

export const createUser = async (body: IUserPayload) : Promise<User> => {
    const userRepository = getRepository(User);
    return await userRepository.save({
        ...body
    });
}

export const deleteUser = async (id: number) : Promise<MessageResponse> => {
    const userRepository = getRepository(User);
    await userRepository.delete({id: id});
    return {
        message: "Record found and deleted successfully"
    };
}