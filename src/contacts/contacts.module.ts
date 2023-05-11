import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [PrismaModule],
})
export class ContactsModule { }
