import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, Min, ValidateIf } from "class-validator";

export class CreateBookingDto{
    @IsInt({message: 'Должно быть числом'})
    @Min(1)
    @ApiProperty({example: 1, description: 'Id игры', required: true})
    id_game: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1)
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 1, description: 'Id комнаты', required: false})
    id_room?: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1)
    @ApiProperty({example: 1, description: 'Id заказа', required: true})
    id_order: number;
    
    @IsDate({message: 'Должно быть датой'})
    @ApiProperty({example: true, description: 'Начало времени брони', required: false})
    start_time: Date;

    @IsDate({message: 'Должно быть датой'})
    @ApiProperty({example: true, description: 'Окончание времени брони', required: false})
    end_time: Date;
}