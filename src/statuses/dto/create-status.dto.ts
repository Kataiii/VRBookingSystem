import { ApiProperty } from "@nestjs/swagger";

export class CreateStatusDto{
    @ApiProperty({example: "Магистр", description: 'Название', required: true})
    name: string;

    @ApiProperty({example: 10, description: 'Коэффициент кешбека бонусами', required: true})
    ratio: number;
}