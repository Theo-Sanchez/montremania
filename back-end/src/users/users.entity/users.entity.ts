import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:250})
    firstname:string;

    @Column({length:250})
    lastname:string;

    @Column({length:250, unique:true})
    email:string;

    @Column('text')
    password:string;
    
    @Column({nullable:true})
    refreshtoken:string;

    @Column({nullable:true})
    refrestokenexpires:string;
}
