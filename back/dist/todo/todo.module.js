"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModule = void 0;
const common_1 = require("@nestjs/common");
const todo_controller_1 = require("./controllers/todo.controller");
const todo_service_1 = require("./services/todo.service");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("../entities/todo.entity");
let TodoModule = class TodoModule {
};
exports.TodoModule = TodoModule;
exports.TodoModule = TodoModule = __decorate([
    (0, common_1.Module)({
        controllers: [todo_controller_1.TodoController],
        providers: [todo_service_1.TodoService],
        imports: [typeorm_1.TypeOrmModule.forFeature([todo_entity_1.Todo])],
    })
], TodoModule);
//# sourceMappingURL=todo.module.js.map