import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ITask } from 'apps/tasks/src/domain/interfaces/task.interface';
import { TasksEntity } from 'apps/tasks/src/infrastructure/entities/tasks.entity';

@Entity('user')
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'firstName', nullable: false })
    firstName: string;

    @Column({ name: 'lastName' })
    lastName: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @OneToMany(() => ProjectEntity, (project) => project.user)
    projects: IProject[];

    @OneToMany(() => TasksEntity, (task) => task.user)
    tasks: ITask[];
}