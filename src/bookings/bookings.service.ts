import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './bookings.model';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
    constructor(@InjectModel(Booking) private bookingsRepository: typeof Booking){}

    async createBooking(dto : CreateBookingDto){
        const booking = await this.bookingsRepository.create(dto);
        return booking;
    }

    async getAll(){
        const bookings = await this.bookingsRepository.findAll();
        if(bookings.length === 0) throw new HttpException({message: 'Брони не найдены'}, HttpStatus.NOT_FOUND);
        return bookings;
    }

    async getBookingById(id: number){
        const booking = await this.bookingsRepository.findOne({where: {id: id}});
        if(booking === null) throw new HttpException({message: 'Бронь не найдена'}, HttpStatus.NOT_FOUND);
        return booking;
    }
}
