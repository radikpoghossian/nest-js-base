import {
  Controller,
} from '@nestjs/common';

import {
  ApiTags,
} from '@nestjs/swagger';


import { AuthService } from './auth.service';


@ApiTags('Authentication management')
@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) { }
}
