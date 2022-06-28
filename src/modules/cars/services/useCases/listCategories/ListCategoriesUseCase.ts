import { inject, injectable } from 'tsyringe';

import { Category } from '../../../entities/Category';
import { ICategoriesRepository } from '../../../repositories/ICategoriesRepository';

@injectable()
export class ListCategoriesUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
