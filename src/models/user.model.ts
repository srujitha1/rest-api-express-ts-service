import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;
}

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string
}

export interface MessageResponse {
    message: string;
}