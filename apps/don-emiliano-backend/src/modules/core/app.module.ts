import { Module } from '@nestjs/common'
import { typeOrmModule } from '@config/database.config'
import { envConfig } from '@config/env.config'

import { UserModule } from '@modules/user'
import { ProductModule } from '@modules/products'
import { AuthModule } from '@modules/auth/auth.module'

@Module({
  imports: [
    envConfig(),
    typeOrmModule(),
    UserModule,
    AuthModule,
    ProductModule,
  ],
})
export class AppModule {}
