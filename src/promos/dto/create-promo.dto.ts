import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Min, ValidateIf, IsDate, IsInt } from "class-validator";
import { Game } from "src/games/games.model";
import { TypeGame } from "src/types_game/types_game.model";

export class CreatePromoDto{
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Промо 1', description: 'Название промо', required: true})
    name: string;

    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Бонусы или скидка', description: 'Тип промо', required: false})
    type: string;

    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 'Процент или фиксированная', description: 'Если скидка указана в предыдущем, то какой тип, иначе NULL', required: false})
    sale_type: string | null;

    @IsNumber({}, {message: 'Должно быть числом'})
    @Min(0, {message: 'Не может быть меньше 0'})
    @ApiProperty({example: 1000, description: 'Числовое значение скидки или количества бонусов', required: true})
    count: number;

    @IsDate({message: 'Должно быть датой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: '2022-10-05', description: 'Дата окончания действия', required: false})
    expired_date: Date | null;

    @ApiProperty({example: 'game', description: 'Игры, на которые распространяется промо', required: false})
    games: Game[];

    @ApiProperty({example: 'type_game', description: 'Типы игр, на которые распространяется промо', required: false})
    types_game: TypeGame[];

    @IsInt({message: 'Должно быть числом'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 1000, description: 'Количество использований'})
    count_of_uses: number | null;
}