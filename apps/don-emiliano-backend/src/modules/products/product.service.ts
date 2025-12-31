import { Injectable } from '@nestjs/common'
import { ProductRepository } from './repositories/product.repository'
import { CategoryRepository } from './repositories/category.repository'
import { CreateProductDto } from './dtos/create-product.dto'
import { CreateCategoryDto } from './dtos/create-category.dto'
import { UpdateCategoryDto } from './dtos/update-category.dto'

@Injectable()
export class ProductService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  async getAllProducts() {
    return this.productRepository.getAll()
  }

  async createProduct(productData: CreateProductDto) {
    return this.productRepository.create(productData)
  }

  async getAllCategory() {
    return this.categoryRepository.getAll()
  }

  async createCategory(categoryData: CreateCategoryDto) {
    return this.categoryRepository.create(categoryData)
  }

  async updateCategory(categoryId: number, categoryData: UpdateCategoryDto) {
    return this.categoryRepository.update(categoryId, categoryData)
  }
}
