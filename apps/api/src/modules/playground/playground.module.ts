import { Module } from '@nestjs/common';
import { PlaygroundController } from './playground.controller';
import { PlaygroundService } from './playground.service';
import { PlaygroundResolver } from './playground.resolver';

@Module({
  controllers: [PlaygroundController],
  providers: [PlaygroundService, PlaygroundResolver]
})
export class PlaygroundModule {}
