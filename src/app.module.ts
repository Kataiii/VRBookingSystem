import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/rooms.model';
import { TypesGameModule } from './types_game/types_game.module';
import { TypeGame } from './types_game/types_game.model';
import { GamesModule } from './games/games.module';
import { OrdersModule } from './orders/orders.module';
import { BookingsModule } from './bookings/bookings.module';
import { PackagesModule } from './packages/packages.module';
import { ClientsModule } from './clients/clients.module';
import { RulesModule } from './rules/rules.module';
import { PackagesClientsModule } from './packages_clients/packages_clients.module';
import { PromosClientModule } from './promos_client/promos_client.module';
import { PhonesModule } from './phones/phones.module';
import { Rule } from './rules/rules.model';
import { Game } from './games/games.model';
import { Booking } from './bookings/bookings.model';
import { StatusesModule } from './statuses/statuses.module';
import { Order } from './orders/orders.model';
import { Client } from './clients/clients.model';
import { Status } from './statuses/statuses.model';
import { Phone } from './phones/phones.model';
import { PromoClient } from './promos_client/promos_client.model';
import { Package } from './packages/packages.model';
import { PackageClient } from './packages_clients/packages_clients.model';
import { PackagesTypesGameModule } from './packages-types_game/packages-types_game.module';
import { PackageTypeGame } from './packages-types_game/packages-types_game.model';
import { PromosModule } from './promos/promos.module';
import { PromoGame } from './promos/additionaly_models/promos_games.model';
import { PromoTypeGame } from './promos/additionaly_models/promos_types_game.model';
import { Promo } from './promos/promos.model';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { ClientRoles } from './roles/additionaly-models/client-roles.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Room,
        TypeGame,
        Rule,
        Game,
        Booking,
        Order,
        Status,
        Phone,
        PromoClient,
        Package,
        PackageClient,
        PackageTypeGame,
        Client,
        Promo,
        PromoGame,
        PromoTypeGame,
        Role,
        ClientRoles
      ],
      autoLoadModels: true
    }),
    RoomsModule,
    TypesGameModule,
    GamesModule,
    OrdersModule,
    BookingsModule,
    PackagesModule,
    RulesModule,
    PackagesClientsModule,
    PromosClientModule,
    PhonesModule,
    StatusesModule,
    PackagesTypesGameModule,
    ClientsModule,
    PromosModule,
    AuthModule,
    RolesModule,
  ]
})
export class AppModule {}
