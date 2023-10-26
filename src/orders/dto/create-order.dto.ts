import { ApiProperty } from "@nestjs/swagger";
import { Booking } from "src/bookings/bookings.model";

export class CreateOrderDto{
    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    id_client: number;

    @ApiProperty({type: [Booking], description: 'Массив броней', required: true})
    bookings: Booking[];

    @ApiProperty({example: 1, description: 'Id пакета', required: false})
    id_package: number | null;

    @ApiProperty({example: 10000, description: 'Стоимость заказа', required: true})
    cost: number;

    @ApiProperty({example: false, description: 'Использование бонусов при оплате', required: false})
    is_used_bonuses: boolean | null;

    @ApiProperty({example: 10000, description: 'Кол-во бонусов, использованных при оплате', required: false})
    used_bonuses: number | null;
}