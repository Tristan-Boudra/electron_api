import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetteModule } from './recette/recette.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'tristan',
        password: 'pass',
        database: 'pizzapi',
        autoLoadEntities: true,
        synchronize: true,
    }),
    RecetteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
