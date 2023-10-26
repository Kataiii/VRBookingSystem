import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from 'src/clients/clients.module';
import { PhonesModule } from 'src/phones/phones.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [ClientsModule, PhonesModule]
})
export class AuthModule {}
