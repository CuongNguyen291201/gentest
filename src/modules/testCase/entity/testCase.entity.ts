import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('test_case')
export class TestCaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    projectId: number;

    // Mapping with auth.user from supabase
    @Column('uuid')
    userId: string;

    @Column()
    title: string;

    @Column()
    description: string;

    

}