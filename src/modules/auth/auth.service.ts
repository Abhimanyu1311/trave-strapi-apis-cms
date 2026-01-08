import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from '../../database/models/user.model';
import { Creator } from '../../database/models/creator.model';
import { OnboardDto } from './dto/onboard.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(Creator) private creatorModel: typeof Creator,
    private jwtService: JwtService,
  ) {}

  // SIGN UP
  async onboard(dto: OnboardDto): Promise<AuthResponseDto> {
    const existing = await this.userModel.findOne({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const user = await this.userModel.create({
      email: dto.email,
      passwordHash,
      name: dto.name,
      role: UserRole.USER,
    });

    // auto-create creator profile
    await this.creatorModel.create({
      userId: user.id,
    });

    return this.issueToken(user);
  }

  // LOGIN
  async login(email: string, password: string): Promise<AuthResponseDto> {
    const user = await this.userModel.findOne({ where: { email } });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.issueToken(user);
  }

  private issueToken(user: User) {
    const payload = {
      sub: user.id,
      role: user.role,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }
}
