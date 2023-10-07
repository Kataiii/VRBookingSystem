import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @ApiOperation({summary: 'Create order'})
    @ApiResponse({ status: 200, type: Order})
    @Post()
    create(@Body() dto: CreateOrderDto){
        return this.ordersService.createOrder(dto);
    }

    @ApiOperation({summary: 'Get all orders'})
    @ApiResponse({ status: 200, type: [Order]})
    @ApiResponse({ status: 404, description: 'Заказы не найдены'})
    @Get()
    getAll(){
        return this.ordersService.getAll();
    }

    @ApiOperation({summary: 'Get order by id'})
    @ApiResponse({status: 200, type: Order})
    @ApiResponse({ status: 404, description: 'Заказ не найден'})
    @Get('/id/:id')
    getOrderById(@Param('id') id : number){
        return this.ordersService.getOrderById(id);
    }

    @ApiOperation({summary: 'Get orders by client id'})
    @ApiResponse({status: 200, type: [Order]})
    @ApiResponse({ status: 404, description: 'Заказы не найдены'})
    @Get('/client_id/:id')
    getOrdersByClientId(@Param('id') id: number){
        return this.ordersService.getOrdersByClientId(id);
    }
}
