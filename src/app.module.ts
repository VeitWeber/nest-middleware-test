import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log/log.middleware';
import { UsersController } from './users/users.controller';
import { WorkoutsController } from './workouts/workouts.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, WorkoutsController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .exclude({ path: `/workouts`, method: RequestMethod.GET })
      .forRoutes(UsersController, WorkoutsController);
  }
}
