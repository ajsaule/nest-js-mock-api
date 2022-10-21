import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemSchema } from './schemas/item.schema';

@Module({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  imports: [MongooseModule.forFeature({ name: 'Item', schema: ItemSchema })],
  // imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
