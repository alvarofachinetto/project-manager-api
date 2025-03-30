import { Module } from '@nestjs/common';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { UsersRepositoryService } from './repositories/users.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { ProjectEntity } from './entities/project.entity';
import { TasksEntity } from 'apps/tasks/src/infrastructure/entities/tasks.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProjectEntity, TasksEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
  ],
  providers: [
    ProjectsRepositoryService,
    UsersRepositoryService
  ],
  exports: [
    ProjectsRepositoryService,
    UsersRepositoryService
  ],
})
export class DatabaseModule {}
