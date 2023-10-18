import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from 'common/config/app.config';
import { JoiValidationSchema } from 'common/config/joi.validation';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
