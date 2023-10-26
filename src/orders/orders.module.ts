import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookingsModule } from 'src/bookings/bookings.module';
import { OrdersController } from './orders.controller';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    SequelizeModule.forFeature([Order]),
    BookingsModule
  ]
})
export class OrdersModule {}
