import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWorkDayDto } from './dto/create-work_day.dto';
import { WorkDay } from './work_days.model';

@Injectable()
export class WorkDaysService {
    constructor(@InjectModel(WorkDay) private workDaysRepository: typeof WorkDay){}

    async createWorkDay(dto : CreateWorkDayDto){
        const work_day = await this.workDaysRepository.create(dto);
        return work_day;
    }

    async getAll(){
        const work_days = await this.workDaysRepository.findAll();
        if(work_days.length === 0) throw new HttpException({message: 'Рабочие дни не найдены'}, HttpStatus.NOT_FOUND);
        return work_days;
    }

    async getWorkDayById(id: number){
        const work_day = await this.workDaysRepository.findOne({where: {id: id}});
        if(work_day === null) throw new HttpException({message: 'День не найден'}, HttpStatus.NOT_FOUND);
        return work_day;
    }

    async getgetWorkDayByIdByNameDay(name: string){
        const work_day = await this.workDaysRepository.findOne({where: {day_week: name}});
        if(work_day === null) throw new HttpException({message: 'Тип игры не найден'}, HttpStatus.NOT_FOUND);
        return work_day;
    }
}
