import { BaseEntity, ChildEntity, Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm"
import { SubJob } from "../sub-job.interface";

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class SimpulatorTest extends BaseEntity implements SubJob {

  @PrimaryGeneratedColumn()
  id: number;

  abstract trigger(): boolean;
  abstract check(): boolean;
  abstract getStatus(): object;
}

@ChildEntity()
export class PIAT extends SimpulatorTest {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  jenkinsId: number;

  trigger(): boolean {
    throw new Error("Method not implemented.");
  }
  
  check(): boolean {
    throw new Error("Method not implemented.");
  }
  
  getStatus(): object {
    throw new Error("Method not implemented.");
  }
}

@ChildEntity()
export class CUTE extends SimpulatorTest {

  @PrimaryGeneratedColumn()
  id: number;

  trigger(): boolean {
    throw new Error("Method not implemented.");
  }

  check(): boolean {
    throw new Error("Method not implemented.");
  }

  getStatus(): object {
    throw new Error("Method not implemented.");
  }
}
