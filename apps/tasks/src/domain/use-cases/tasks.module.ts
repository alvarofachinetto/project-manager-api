import { Module } from '@nestjs/common';
import { GetAllTasksService } from './get-all-tasks.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';
import { UpdateTaskService } from './update-task.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { DatabaseModule } from '@project-manager-api/infrastructure/database/database.module';

@Module({
    imports: [InfrastructureModule, DatabaseModule],
    providers: [
        GetAllTasksService,
        GetTaskByIdService,
        CreateTaskService,
        UpdateTaskService
    ],
    exports: [
        GetAllTasksService,
        GetTaskByIdService,
        CreateTaskService,
        UpdateTaskService,
    ],
})
export class TasksModule {}