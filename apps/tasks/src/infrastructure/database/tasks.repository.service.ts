import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TasksEntity } from '../entities/tasks.entity';
import { ITask } from '../../domain/interfaces/task.interface';
import { ITasksRepository } from '../../domain/repositories/tasks-repository.interface';

@Injectable()
export class TasksRepositoryService implements ITasksRepository{

    private readonly taskRepository: Repository<TasksEntity>;
    
    constructor(datasource: DataSource) {
         this.taskRepository = datasource.getRepository(TasksEntity);
    }

    findAll(userId: number): Promise<ITask[]> {
        return this.taskRepository.findBy({ user: { id: userId } });
    }

    findById(id: number): Promise<ITask | null> {
        return this.taskRepository.findOneBy({ id });
    }
    
    add(payload: DeepPartial<ITask>): Promise<ITask> {
        return this.taskRepository.save(payload) as Promise<ITask>;
    }
    
    updateById(payload: DeepPartial<ITask>) {
        return this.taskRepository.update(payload.id as number, payload);
    }
}