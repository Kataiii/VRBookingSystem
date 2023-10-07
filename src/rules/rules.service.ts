import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRuleDto } from './dto/create-rule.dto';
import { Rule } from './rules.model';

@Injectable()
export class RulesService {
    constructor(@InjectModel(Rule) private rulesRepository: typeof Rule){}

    async createRule(dto : CreateRuleDto){
        const rule = await this.rulesRepository.create(dto);
        return rule;
    }

    async getAll(){
        const rules = await this.rulesRepository.findAll();
        if(rules.length === 0) throw new HttpException({message: 'Правила не найдены'}, HttpStatus.NOT_FOUND);
        return rules;
    }

    async getRuleById(id: number){
        const rule = await this.rulesRepository.findOne({where: {id: id}});
        if(rule === null) throw new HttpException({message: 'Правило не найдено'}, HttpStatus.NOT_FOUND);
        return rule;
    }

    async getRuleByName(string_rule: string){
        const rule = await this.rulesRepository.findOne({where: {string_rule: string_rule}});
        if(rule === null) throw new HttpException({message: 'Правило не найдено'}, HttpStatus.NOT_FOUND);
        return rule;
    }
}
