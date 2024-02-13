import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { UserModule } from '@entities/user/user.module';
import { TypeOrmModule } from '@db/typeorm.module';

@Module({
  imports: [
    ConfigModule, // Должен быть первым, иначе будет ошибка (не считывает данные из env)
    UserModule,
    TypeOrmModule
  ]
})
export class AppModule {}
