import { IsEmail, IsOptional, IsString } from 'class-validator';

export class OnboardDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;
}
