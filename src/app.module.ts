import { Module } from '@nestjs/common';
import { AgentsModule } from './agents/agents.module';
import { BranchsModule } from './branchs/branchs.module';
import { JobsModule } from './jobs/jobs.module';
import { TestcasesModule } from './testcases/testcases.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './jobs/entities/job.entity';
import { CUTE, PIAT, SimpulatorTest } from './jobs/entities/simpulator-test/simpulator-test.model';

@Module({
  imports: [AgentsModule, BranchsModule, JobsModule, TestcasesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Roqkfwk4$$',
    database: 'pipe',
    entities: [Job, SimpulatorTest, PIAT, CUTE],
    synchronize: true,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
