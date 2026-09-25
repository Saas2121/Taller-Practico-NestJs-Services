import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<import("./entities/order.entity").OrderEntity[]>;
    findRecentPending(): Promise<import("./entities/order.entity").OrderEntity[]>;
    findPendingQueue(): Promise<{
        totalPending: number;
        showing: number;
        orders: import("./entities/order.entity").OrderEntity[];
    }>;
    getPriority(id: string): Promise<{
        orderId: number;
        status: string;
        quantity: number;
        priority: string;
        message: string;
    }>;
    estimatePreparationTime(id: string): Promise<{
        orderId: number;
        status: string;
        estimatedMinutes: number;
    }>;
    findOne(id: string): Promise<import("./entities/order.entity").OrderEntity>;
    create(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").OrderEntity>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("./entities/order.entity").OrderEntity>;
    markAsReady(id: string): Promise<import("./entities/order.entity").OrderEntity>;
}
