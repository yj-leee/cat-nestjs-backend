import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/libs/database/database.module';

@Module({
  imports: [DatabaseModule],
})
export class AppModule {}
