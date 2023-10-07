import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './orders.model';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order) private ordersRepository: typeof Order){}

    async createOrder(dto : CreateOrderDto){
        const order = await this.ordersRepository.create(dto);
        return order;
    }

    async getAll(){
        const orders = await this.ordersRepository.findAll();
        if(orders.length === 0) throw new HttpException({message: 'Заказы не найдены'}, HttpStatus.NOT_FOUND);
        return orders;
    }

    async getOrderById(id: number){
        const order = await this.ordersRepository.findOne({where: {id: id}});
        if(order === null) throw new HttpException({message: 'Заказ не найден'}, HttpStatus.NOT_FOUND);
        return order;
    }

    async getOrdersByClientId(id: number){
        const orders = await this.ordersRepository.findAll({where: {id_client: id}});
        if(orders === null) throw new HttpException({message: 'Заказы не найдены'}, HttpStatus.NOT_FOUND);
        return orders;
    }
}
