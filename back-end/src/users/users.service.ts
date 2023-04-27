import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity/users.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>){}

        async getUsers(): Promise<UsersEntity[]> {
            return await this.usersRepository.find()
        }

        async getTypeUser(_id: number): Promise<UsersEntity> {
            return await this.usersRepository.find({
                where: [{ "id": _id }]
            })[0];
        }
        async findOne(username:string): Promise<UsersEntity | undefined> {
            let users= await this.usersRepository.find(
                {where : [{ "username":username }]})
            if (users.length==1) {
                return users[0]
            } else {
                return undefined
            }
        }


    async createUser(user:UsersEntity){
        if (user.password) {
            const password = user.password
            const saltOrRounds = 10
            const hash = await bcrypt.hash(password, saltOrRounds)
            user.password= hash
        }
        this.usersRepository.save(user)
    }


    async updateUser(user:UsersEntity){
        if (user.password) {
            const password = user.password
            const saltOrRounds = 10
            const hash = await bcrypt.hash(password, saltOrRounds)
            user.password= hash
        }
        this.usersRepository.save(user)
    }

    async deleteUser(user:UsersEntity){
        if (user.password) {
            const password = user.password
            const saltOrRounds = 10
            const hash = await bcrypt.hash(password, saltOrRounds)
            user.password= hash
        }
        this.usersRepository.delete(user)
    }
}
