import { Contact } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ContactEntity implements Contact {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  surName: string;
  @ApiProperty()
  docType: string;
  @ApiProperty()
  docNum: number;
  @ApiProperty()
  age: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  landline: number[];
  @ApiProperty()
  cellphone: number[];
  @ApiProperty()
  city: string;
  @ApiProperty()
  street: string;
  @ApiProperty()
  height: number;
  @ApiProperty()
  descriptionAdress: string;
}
