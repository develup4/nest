import { json } from "stream/consumers";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
//import { LiveTest } from "../sub-jobs/live-test/live-test.model";
import { SimpulatorTest } from "./simpulator-test/simpulator-test.model";

@Entity()
export class Job extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    // Json Field
    @Column({type: 'json'})
    inputParams:  any;

    // one to one
    @OneToOne(()=>SimpulatorTest, {eager: true})
    @JoinColumn()
    simpulatorTest: SimpulatorTest;

    // one to one
    //liveTest: LiveTest;
    
}
