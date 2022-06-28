import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}
/**
 *  Definir o tipo de retorno
 *  Alerar o retorno do erro
 *  Acessar o repositorio
 */

@injectable()
class CreateCategoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category algready exists');
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
