import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { AuthGuardService } from './guards/auth-guard.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [ControllersModule],
    providers: [AuthGuardService, JwtService],
    exports: [AuthGuardService, JwtService],
})
export class GatewaysModule {}
