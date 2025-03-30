import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersModule } from 'src/domain/use-cases/users/users.module';
import { AuthService } from './auth.service';
import { AuthGuardService } from 'src/gateways/guards/auth-guard.service';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [AuthService, AuthGuardService],
    exports: [AuthService, AuthGuardService],
})    
export class AuthModule {}
