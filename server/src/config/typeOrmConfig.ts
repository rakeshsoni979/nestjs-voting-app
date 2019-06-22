import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'afifia',
  password: '753951',
  database: 'votingapp',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  subscribers: [__dirname + '/../subscribers/*.subscriber{.ts,.js}'],
};
