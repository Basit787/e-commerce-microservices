import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EcommerceApiGatewayController } from './ecommerce-api-gateway.controller';
import { EcommerceApiGatewayService } from './ecommerce-api-gateway.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [EcommerceApiGatewayController],
  providers: [EcommerceApiGatewayService],
})
export class EcommerceApiGatewayModule {}
