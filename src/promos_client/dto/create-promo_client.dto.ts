import { ApiProperty } from "@nestjs/swagger";

export class CreatePromoClientDto{
    @ApiProperty({example: 'http:/111111111111111111', description: 'Ссылка на промо', required: true})
    link: string;

    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    id_client: number;

    @ApiProperty({example: true, description: 'Использованность', required: false})
    is_used: boolean | null;

    @ApiProperty({example: '2022-08-16', description: 'Начало', required: true})
    start_time: Date;

    @ApiProperty({example: '2022-08-20', description: 'Конец', required: true})
    end_time: Date;
}