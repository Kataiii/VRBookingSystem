import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookingsController } from './bookings.controller';
import { Booking } from './bookings.model';
import { BookingsService } from './bookings.service';

@Module({
  controllers: [BookingsController],
  providers: [BookingsService],
  imports: [
    SequelizeModule.forFeature([Booking])
  ],
  exports: [
    BookingsService
  ]
})
export class BookingsModule {}
