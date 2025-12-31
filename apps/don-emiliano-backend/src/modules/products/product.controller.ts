import { Controller, Get } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProduct() {
    return this.productService.getAllProducts()
  }

  // @Post()
  // createProduct(@Body() body: any) {}
}
