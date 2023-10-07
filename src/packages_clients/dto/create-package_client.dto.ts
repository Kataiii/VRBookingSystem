import { ApiProperty } from "@nestjs/swagger";

export class CreatePackageClientDto{
    @ApiProperty({example: 1, description: 'Id пакета', required: true})
    id_package: number;

    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    id_client: number;

    @ApiProperty({example: true, description: 'Использованность', required: false})
    is_used: boolean;

    @ApiProperty({example: '2020-05-16', description: 'Дата начала действия акции', required: false})
    start_time: Date;

    @ApiProperty({example: '2020-05-16', description: 'Дата окончания действия акции', required: false})
    end_time: Date | null;
}