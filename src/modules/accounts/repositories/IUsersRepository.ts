import { ICreateUserDTO } from '../dto/IUserCreateDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}
