import { ApiProperty } from "@nestjs/swagger";

export class CreateRuleDto{
    @ApiProperty({example: 'Если у clients количество bookings больше 5, то назначить package 3', description: 'Правило назначения промокодов и пакетов', required: true})
    string_rule: string;
}