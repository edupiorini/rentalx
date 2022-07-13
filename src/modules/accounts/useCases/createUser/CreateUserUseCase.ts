import { inject } from 'tsyringe';

import { ICreateUserDTO } from '../../dto/IUserCreateDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
    username,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
      username,
    });
  }
}
