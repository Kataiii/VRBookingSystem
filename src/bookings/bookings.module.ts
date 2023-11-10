import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoomsModule } from 'src/rooms/rooms.module';
import { BookingsController } from './bookings.controller';
import { Booking } from './bookings.model';
import { BookingsService } from './bookings.service';

@Module({
  controllers: [BookingsController],
  providers: [BookingsService],
  imports: [
    SequelizeModule.forFeature([Booking]),
    RoomsModule
  ],
  exports: [
    BookingsService
  ]
})
export class BookingsModule {}
