import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto{
    @ApiProperty({example: 1, description: 'Id игры', required: true})
    id_game: number;

    @ApiProperty({example: 1, description: 'Id комнаты', required: true})
    id_room: number;

    @ApiProperty({example: 1, description: 'Id заказа', required: true})
    id_order: number;
    
    @ApiProperty({example: true, description: 'Начало времени брони', required: false})
    start_time: Date;

    @ApiProperty({example: true, description: 'Окончание времени брони', required: false})
    end_time: Date;
}