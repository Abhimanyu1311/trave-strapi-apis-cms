import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { OnboardDto } from './dto/onboard.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('onboard')
  onboard(@Body() dto: OnboardDto): Promise<AuthResponseDto> {
    return this.authService.onboard(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(dto.email, dto.password);
  }
}
