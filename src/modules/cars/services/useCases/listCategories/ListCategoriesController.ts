import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategotiesUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategotiesUseCase.execute();

    return response.json(all);
  }
}
