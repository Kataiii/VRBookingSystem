import { ApiProperty } from "@nestjs/swagger";
import { PackageTypeGame } from "src/packages-types_game/packages-types_game.model";

export class CreatePackageDto{
    @ApiProperty({example: 'PackageTypeGame', description: 'Набор типов пакетов', required: true})
    types_game: PackageTypeGame[];

    @ApiProperty({example: 'Базовый', description: 'Наименование пакета', required: true})
    name: string;

    @ApiProperty({example: 'Базовый', description: 'Описание', required: false})
    description: string | null;

    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    count_per_min: number;

    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    count_per_max: number;

    @ApiProperty({example: 45, description: 'Продолжительность игры в минутах', required: true})
    count_hours: number;

    @ApiProperty({example: 15, description: 'Коэффициент скидки', required: true})
    discount_per: number;

    @ApiProperty({example: '2020-05-16', description: 'Дата начала действия пакета', required: false})
    start_time: Date | null;

    @ApiProperty({example: '2020-05-16', description: 'Дата окончания действия пакета', required: false})
    end_time: Date | null;

    @ApiProperty({example: 'Общий', description: 'Тип пакета', required: true})
    type_package: string;
}