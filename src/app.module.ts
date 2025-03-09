import { Module } from "@nestjs/common";
import { CatsModule } from "./cats/cats.module";
import { CoreModule } from "./core/core.module";
import { ContextLoggerModule } from "nestjs-context-logger";

@Module({
  imports: [
    ContextLoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: "pino-pretty",
        },
      },
    }),
    CatsModule,
    CoreModule,
  ],
})
export class AppModule {}
