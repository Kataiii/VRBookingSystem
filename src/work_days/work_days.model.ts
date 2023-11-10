import { ApiProperty } from "@nestjs/swagger";
import { Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

interface WorkDayCreationAttr{
    day_week: string;
    start_time: string;
    end_time: string;
    count_glasses: number;
    booking_time: number;
}

@Table({tableName: 'work_days'})
export class WorkDay extends Model<WorkDay, WorkDayCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: 'Понедельник', description: 'Название недели или сокращенного дня', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    day_week: string;

    @ApiProperty({example: '10:00', description: 'Время начала работы', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    start_time: string;

    @ApiProperty({example: '20:00', description: 'Время окончания работы', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    end_time: string;

    @ApiProperty({example: 100, description: 'Количество очков', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_glasses: number;

    @ApiProperty({example: 60, description: 'Время одной брони в минутах', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    booking_time: number;
}