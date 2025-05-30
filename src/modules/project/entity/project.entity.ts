import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity('project')
@Index('project_user_idx', ['id', 'userId', 'name'], { unique: true })
export class ProjectEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // Mapping with auth.user from supabase
    @Column('uuid')
    userId: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}
