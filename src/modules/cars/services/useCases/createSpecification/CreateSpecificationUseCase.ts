import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../../repositories/ISpecificatonsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  execute({ name, description }: IRequest) {
    const specificationExists = this.specificationsRepository.findByName(name);

    if (specificationExists) {
      throw new Error('Specification already exists');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
