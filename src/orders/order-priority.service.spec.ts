import { OrderEntity } from './entities/order.entity';
import { OrderPriorityService } from './order-priority.service';

describe('OrderPriorityService', () => {
  let service: OrderPriorityService;

  beforeEach(() => {
    // Instanciamos el servicio directamente en memoria sin módulos ni mocks de TypeORM
    service = new OrderPriorityService();
  });

  // Prueba 1: Un pedido pending con cantidad 1 devuelve normal
  it('devuelve normal para un pedido pending con cantidad 1', () => {
    // 1. Preparar el pedido para el escenario
    const order = {
      quantity: 1,
      status: 'pending',
    } as OrderEntity;

    // 2. Ejecutar service.classify(order)
    const result = service.classify(order);

    // 3. Comprobar el valor de priority y el mensaje con expect()
    expect(result.priority).toBe('normal');
    expect(result.message).toBe('Order has normal priority');
  });

  // Prueba 2: Un pedido pending con cantidad 3 devuelve medium
  it('devuelve medium para un pedido pending con cantidad 3', () => {
    const order = {
      quantity: 3,
      status: 'pending',
    } as OrderEntity;

    const result = service.classify(order);

    expect(result.priority).toBe('medium');
    expect(result.message).toBe('Order has medium priority');
  });

  // Prueba 3: Un pedido pending con cantidad 4 devuelve high
  it('devuelve high para un pedido pending con cantidad 4', () => {
    const order = {
      quantity: 4,
      status: 'pending',
    } as OrderEntity;

    const result = service.classify(order);

    expect(result.priority).toBe('high');
    expect(result.message).toBe('Prepare this order soon');
  });

  // Prueba 4: Un pedido ready con cantidad 5 devuelve completed
  it('devuelve completed para un pedido ready con cantidad 5', () => {
    const order = {
      quantity: 5,
      status: 'ready',
    } as OrderEntity;

    const result = service.classify(order);

    expect(result.priority).toBe('completed');
    expect(result.message).toBe('Order is ready');
  });
});