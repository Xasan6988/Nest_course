import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Post } from 'src/posts/posts.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';


export const getPostgresConfig = async (configService: ConfigService): Promise<SequelizeModuleOptions> => {
  return {
    dialect: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    models: [User, Role, UserRoles, Post],
    ...getPostgresOptions()
  }
}

const getPostgresOptions = () => ({
  autoLoadModels: true,
})
