import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { getPostgresConfig } from './configs/postgres.config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import * as path from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getPostgresConfig
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static')
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {

}
