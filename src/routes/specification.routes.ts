import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/services/useCases/createSpecification/CreateSpecificaionController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
