import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuthGuard } from 'src/user/auth.gaurd';

import { LaunchService } from './launch.service';

@Resolver('Launch')
export class LaunchResolver {
  constructor(private launchService: LaunchService) {}

  @Query()
  @UseGuards(new AuthGuard())
  launches() {
    return this.launchService.getAllLaunches();
  }

  @Query()
  launch(@Args('id') id: number) {
    return this.launchService.getLaunchById(id);
  }
}
