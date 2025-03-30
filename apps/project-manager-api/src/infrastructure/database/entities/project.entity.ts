import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TasksEntity } from 'apps/tasks/src/infrastructure/entities/tasks.entity';
import { UserEntity } from './user.entity';
import { ITask } from 'apps/tasks/src/domain/interfaces/task.interface';

@Entity('project')
export class ProjectEntity implements IProject {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'name', nullable: false })
    name: string;
    
    @Column({ name: 'description', nullable: false })
    description: string;
    
    @OneToMany(() => TasksEntity, (task) => task.project)
    tasks: ITask[];
    
    @ManyToOne(() => UserEntity, (user) => user.projects)
    @JoinColumn()
    user: IUser;
}