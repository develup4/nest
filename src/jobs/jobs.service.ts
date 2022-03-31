import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { CUTE, PIAT, SimpulatorTest } from './entities/simpulator-test/simpulator-test.model';

@Injectable()
export class JobsService {

  create(createJobDto: CreateJobDto) {
    return 'This action adds a new job';
  }

  async findAll() {

    let newjob: Job = new Job();
    newjob.inputParams = {asdfsdf:"asfsdaffsd"};
    newjob.simpulatorTest = new PIAT();
    await newjob.simpulatorTest.save();
    await newjob.save();

    return `This action returns all jobs`;
  }

  async findOne(id: number) {

    let found: Job = await Job.findOne(id);
    return {
      name: found.inputParams.name,
      simpulatorTest: found.simpulatorTest.getStatus()
    }
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
