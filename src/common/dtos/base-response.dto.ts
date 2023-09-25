import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDTO {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  statusName: string;
}
