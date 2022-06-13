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
class CreateCategoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryExists = this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category algready exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
