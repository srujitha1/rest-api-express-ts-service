import { User, IUserPayload, MessageResponse } from '../models/user.model';
import { getUser, createUser, deleteUser } from '../repository/user.repository';
import { Get, Post, Delete, Route, Tags, Path, Body,  Controller } from 'tsoa';

export interface IUserService {
  getMessageService(message: string) : Promise<MessageResponse>;
  getUserService(id: string) : Promise<User | null>;
  createUserService(body: IUserPayload) : Promise<User>;
  deleteUserService(id: string) : Promise<MessageResponse>;
}

@Route("users")
@Tags("User")
export class UserService implements IUserService {

  public async getMessageService(message: string) : Promise<MessageResponse> {
    return {
      message: message
    };
  }

  @Get("{id}")
  public async getUserService(@Path() id: string) : Promise<User | null> {
    return getUser(Number(id));
  }

  @Post("/")
  public async createUserService(@Body() body: IUserPayload) : Promise<User> {
    return createUser(body);
  }

  @Delete("{id}")
  public async deleteUserService(@Path() id: string) : Promise<MessageResponse> {
    return deleteUser(Number(id));
  }

}