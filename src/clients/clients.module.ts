import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientRoles } from 'src/roles/additionaly-models/client-roles.model';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { ClientsController } from './clients.controller';
import { Client } from './clients.model';
import { ClientsService } from './clients.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    SequelizeModule.forFeature([Client, Role, ClientRoles]),
    RolesModule
  ],
  exports: [
    ClientsService
  ]
})
export class ClientsModule {}
