import { Service } from "typedi";
import {
  Category,
  CategoryInput,
  Product,
  ProductInput,
} from "../../types/shop/shop-types";
import { CategoryModel, ProductModel } from "../../model";

@Service()
export class CategoryService {
  async getCategories(): Promise<Category[]> {
    return CategoryModel.find().exec();
  }

  async addCategory(category: CategoryInput): Promise<Category> {
    return CategoryModel.create(category);
  }
}

@Service()
export class ProductService {
  async getProducts(): Promise<Product[]> {
    return ProductModel.find();
  }

  async addProduct(product: ProductInput): Promise<Product> {
    return ProductModel.create(product);
  }
}
