import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { EcommerceApiGatewayController } from './ecommerce-api-gateway.controller';
import { EcommerceApiGatewayService } from './ecommerce-api-gateway.service';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL! as string,
      autoLoadEntities: true,
      synchronize: false,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [EcommerceApiGatewayController],
  providers: [EcommerceApiGatewayService],
})
export class EcommerceApiGatewayModule {
  constructor(private dataSource: DataSource) {}
}
