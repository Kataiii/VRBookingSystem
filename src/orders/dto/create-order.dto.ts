import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, Min } from "class-validator";
import { IsBoolean, ValidateIf } from "class-validator/types/decorator/decorators";
import { Booking } from "src/bookings/bookings.model";

export class CreateOrderDto{
    @IsInt({message:'Должно быть числом'})
    @Min(1, {message: 'Минимальное начение id 1'})
    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    id_client: number;

    @ApiProperty({type: [Booking], description: 'Массив броней', required: true})
    bookings: Booking[];

    @IsInt({message:'Должно быть числом'})
    @Min(1, {message: 'Минимальное начение id 1'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 1, description: 'Id пакета', required: false})
    id_package: number | null;

    @IsNumber({}, {message: 'Должно быть числом'})
    @Min(0, {message: 'Стоимость не может быть меньше 0'})
    @ApiProperty({example: 10000, description: 'Стоимость заказа', required: true})
    cost: number;

    @IsBoolean({message: 'Только булевое значение'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: false, description: 'Использование бонусов при оплате', required: false})
    is_used_bonuses: boolean | null;

    
    @IsNumber({}, {message: 'Должно быть числом'})
    @Min(0, {message: 'Количество бонусов не может быть отрицательным'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 10000, description: 'Стоимость заказа', required: true})
    @ApiProperty({example: 10000, description: 'Кол-во бонусов, использованных при оплате', required: false})
    used_bonuses: number | null;
}