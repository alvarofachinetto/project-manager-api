import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { TasksRepositoryService } from '../../infrastructure/database/tasks.repository.service';
import { ITask } from '../interfaces/task.interface';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';

@Injectable()
export class GetAllTasksService implements BaseUseCase {

    constructor(

        private readonly usersRepository: UsersRepositoryService,

        private readonly tasksRepository: TasksRepositoryService,
    ) {}

    async execute(payload: { userId: number }): Promise<ITask[]> {
        // fetch user data
        const userData = await this.usersRepository.findById(payload.userId);
        if (!userData) {
        
            throw new Error('Usuário não encontrado');
        }
        
        const tasks = await this.tasksRepository.findAll(payload.userId);
        if (!tasks) {
        
            throw new Error('Erro ao listar tarefas');
        }
        return tasks;

    }
}