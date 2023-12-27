"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("./entities/todo.entity");
const user_entity_1 = require("./entities/user.entity");
const todo_module_1 = require("./todo/todo.module");
const socket_module_1 = require("./socket/socket.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const users_module_1 = require("./users/users.module");
const uri = 'mongodb+srv://yashaba:ppQs3UUGVsBdOp1c@cluster0.gi9yo.mongodb.net/?retryWrites=true&w=majority';
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: uri,
                database: 'okoora',
                entities: [todo_entity_1.Todo, user_entity_1.User],
                synchronize: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'front'),
            }),
            todo_module_1.TodoModule,
            users_module_1.UsersModule,
            socket_module_1.SocketModule,
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map