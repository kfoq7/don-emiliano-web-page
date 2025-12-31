import { Module } from '@nestjs/common'
import { typeOrmModule } from '@config/database.config'
import { envConfig } from '@config/env.config'

import { UserModule } from '@modules/user'
import { ProductModule } from '@modules/products'

@Module({
  imports: [envConfig(), typeOrmModule(), UserModule, ProductModule],
})
export class AppModule {}
