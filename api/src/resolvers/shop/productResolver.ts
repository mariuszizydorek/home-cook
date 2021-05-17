import { Service } from "typedi";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Category, Product, ProductInput } from "../../types/shop/shop-types";
import { ProductService } from "../../services/shop/catogoryService";

@Service()
@Resolver((of) => Product)
export default class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Mutation(() => Product)
  async addProduct(
    @Arg("productInput") productInput: ProductInput
  ): Promise<Category> {
    return this.productService.addProduct(productInput);
  }
}
