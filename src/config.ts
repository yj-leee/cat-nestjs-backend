import { Logger } from '@nestjs/common';
import { IsBoolean, IsInt, IsString, Min, validateSync } from 'class-validator';

class Config {
  private readonly logger = new Logger(Config.name);

  @IsInt()
  @Min(3000)
  readonly PORT: number = Number(process.env.PORT);

  @IsString()
  readonly DATABASE_HOST: string = process.env.DATABASE_HOST as string;

  @IsInt()
  @Min(3000)
  readonly DATABASE_PORT: number = Number(process.env.DATABASE_PORT);

  @IsString()
  readonly DATABASE_NAME: string = process.env.DATABASE_NAME as string;

  @IsString()
  readonly DATABASE_USER: string = process.env.DATABASE_USER as string;

  @IsString()
  readonly DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD as string;

  @IsBoolean()
  readonly DATABASE_SYNC: boolean = process.env.DATABASE_SYNC === 'true';

  @IsBoolean()
  readonly DATABASE_LOGGING: boolean = process.env.DATABASE_LOGGING === 'true';

  constructor() {
    const error = validateSync(this);
    if (error.length) {
      this.logger.error('Config validation error: ' + JSON.stringify(error));
      process.exit(1);
    }
  }
}

export const config = new Config();
