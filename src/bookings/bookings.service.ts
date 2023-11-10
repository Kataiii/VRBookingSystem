import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Room } from 'src/rooms/rooms.model';
import { RoomsService } from 'src/rooms/rooms.service';
import { Booking } from './bookings.model';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
    constructor(@InjectModel(Booking) private bookingsRepository: typeof Booking,
                private roomsService: RoomsService){}

    async createBooking(dto : CreateBookingDto){
        this.checkBooking(dto);
        if(dto.id_room == null){
            const room = await this.findRoomForBooking(dto)[0];
            dto.id_room = room.id;
        }
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

    private async checkBooking(dto: CreateBookingDto){
        const bookings = await this.bookingsRepository.findAll();
        bookings.map(item => {
            if(item.id_room == dto.id_room && item.start_time == dto.start_time){
                throw new HttpException({message: `Бронь не может быть зарегистрирована в ${item.start_time} комнаты заняты`}, HttpStatus.BAD_REQUEST)
            }
        })
    }

    private async findRoomForBooking(dto: CreateBookingDto){
        const rooms = await this.roomsService.getAll();
        const bookings = await this.bookingsRepository.findAll();

        const occupidedRooms: Room[] =
            bookings.map(item => {
                if(dto.start_time == item.start_time){
                    return rooms.find(room => room.id == item.id_room);
                }
            })

        let freeRooms = rooms.filter(item => !~occupidedRooms.indexOf(item));
        if(freeRooms.length == 0){
            throw new HttpException({message: `Бронь не может быть зарегистрирована в ${dto.start_time} комнаты заняты`}, HttpStatus.BAD_REQUEST)
        }
        return freeRooms;
    }

    async getFreeTimes(){

    }
}
