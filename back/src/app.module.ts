import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { User } from './entities/user.entity';
import { TodoModule } from './todo/todo.module';
import { SocketModule } from './socket/socket.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
const uri =
  'mongodb+srv://yashaba:ppQs3UUGVsBdOp1c@cluster0.gi9yo.mongodb.net/?retryWrites=true&w=majority';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: uri,
      database: 'okoora',
      entities: [Todo, User],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join( __dirname, '../front'),
    }),
    TodoModule,
    UsersModule,
    SocketModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { 
    console.log('dirname', __dirname)
  }
}
