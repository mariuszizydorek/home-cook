import { Service } from "typedi";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Category, CategoryInput } from "../../types/shop/shop-types";
import { CategoryService } from "../../services/shop/catogoryService";

@Service()
@Resolver((of) => Category)
export default class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query((returns) => [Category])
  async categories(): Promise<Category[]> {
    const categories = await this.categoryService.getCategories();
    console.log(categories);
    return categories;
  }

  @Mutation(() => Category)
  async addCategory(
    @Arg("categoryInput") categoryInput: CategoryInput
  ): Promise<Category> {
    return this.categoryService.addCategory(categoryInput);
  }
}
