import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity/users.entity';

@Controller('users')

export class UsersController {
    constructor(private service: UsersService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getTypeUser(params.id);
    }

    @Post()
    create(@Body() user: UsersEntity) {
        console.log(user);
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: UsersEntity) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
