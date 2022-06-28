import { Router } from 'express';

import { CreateCategoryController } from '../modules/cars/services/useCases/createCategory/CreateCategoryController';

const specificationRoutes = Router();

const createSpecificationController = new CreateCategoryController();
specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
