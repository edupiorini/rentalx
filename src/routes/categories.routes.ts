import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/services/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/services/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/services/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);
export { categoriesRoutes };
