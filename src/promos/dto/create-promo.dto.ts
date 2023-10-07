import { ApiProperty } from "@nestjs/swagger";
import { Game } from "src/games/games.model";
import { TypeGame } from "src/types_game/types_game.model";

export class CreatePromoDto{
    @ApiProperty({example: 'Промо 1', description: 'Название промо', required: true})
    name: string;

    @ApiProperty({example: 'Бонусы или скидка', description: 'Тип промо', required: false})
    type: string;

    @ApiProperty({example: 'Процент или фиксированная', description: 'Если скидка указана в предыдущем, то какой тип, иначе NULL', required: false})
    sale_type: string | null;

    @ApiProperty({example: 1000, description: 'Числовое значение скидки или количества бонусов', required: true})
    count: number;

    @ApiProperty({example: '2022-10-05', description: 'Дата окончания действия', required: false})
    expired_date: Date | null;

    @ApiProperty({example: 'game', description: 'Игры, на которые распространяется промо', required: false})
    games: Game[];

    @ApiProperty({example: 'type_game', description: 'Типы игр, на которые распространяется промо', required: false})
    types_game: TypeGame[];

    @ApiProperty({example: 1000, description: 'Количество использований'})
    count_of_uses: number | null;
}