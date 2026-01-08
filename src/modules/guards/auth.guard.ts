import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new UnauthorizedException();

    const token = authHeader.replace('Bearer ', '');

    try {
      const payload = this.jwtService.verify(token);
      req.user = {
        id: payload.sub,
        role: payload.role,
      };
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
