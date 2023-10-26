import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Booking } from './bookings.model';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@ApiTags('Bookings')
@Controller('bookings')
export class BookingsController {
    constructor(private bookingsService: BookingsService){}

    @ApiOperation({summary: 'Create booking'})
    @ApiResponse({ status: 200, type: Booking})
    @Post()
    create(@Body() dto: CreateBookingDto){
        return this.bookingsService.createBooking(dto);
    }

    @ApiOperation({summary: 'Get all bookings'})
    @ApiResponse({ status: 200, type: [Booking]})
    @ApiResponse({ status: 404, description: 'Брони не найдены'})
    @Get()
    getAll(){
        return this.bookingsService.getAll();
    }

    @ApiOperation({summary: 'Get booking by id'})
    @ApiResponse({status: 200, type: Booking})
    @ApiResponse({ status: 404, description: 'Бронь не найдена'})
    @Get('/id/:id')
    getGameById(@Param('id') id : number){
        return this.bookingsService.getBookingById(id);
    }
}
