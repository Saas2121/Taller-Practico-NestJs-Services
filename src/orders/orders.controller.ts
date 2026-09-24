import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }


  @Get('pending')
  findRecentPending() {
    return this.ordersService.findRecentPending();
  }


  @Get('pending-queue')
  findPendingQueue() {
    return this.ordersService.findPendingQueue();
  }


  @Get(':id/priority')
  getPriority(@Param('id') id: string) {
    return this.ordersService.getPriority(Number(id));
  }

  @Get(':id/estimate')
  estimatePreparationTime(@Param('id') id: string) {
    return this.ordersService.estimatePreparationTime(Number(id));
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(Number(id));
  }


  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(Number(id), updateOrderDto);
  }

  @Patch(':id/ready')
  markAsReady(@Param('id') id: string) {
    return this.ordersService.markAsReady(Number(id));
  }
}
