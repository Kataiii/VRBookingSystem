import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
import { Min } from "class-validator/types/decorator/decorators";

export class CreateWorkDayDto{
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Понедельник', description: 'Название недели или сокращенного дня', required: true})
    day_week: string;

    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: '10:00', description: 'Время начала работы', required: false})
    start_time: string;

    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: '20:00', description: 'Время окончания работы', required: false})
    end_time: string;

    @IsInt({message: 'Должно быть числом'})
    @Min(0, {message: 'Не может быть отрицательным'})
    @ApiProperty({example: 100, description: 'Количество очков', required: false})
    count_glasses: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'Не может быть меньше 0'})
    @ApiProperty({example: 60, description: 'Время одной брони в минутах', required: false})
    booking_time: number;
}