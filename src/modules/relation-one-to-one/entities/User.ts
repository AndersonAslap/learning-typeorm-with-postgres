import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Profile } from "./Profile";

@Entity()
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}