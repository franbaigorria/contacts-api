import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsOptional,
  IsNumber,
  IsEmail,
  IsArray,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  surName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  docType: string;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(7)
  @ApiProperty()
  docNum: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  landline: number[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  cellphone: number[];

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  street: string;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  height: number;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiProperty({ required: false })
  descriptionAdress?: string;
}
