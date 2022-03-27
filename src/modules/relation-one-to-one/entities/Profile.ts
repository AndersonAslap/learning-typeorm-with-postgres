import { Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

class Profile {

    @PrimaryColumn()
    id?: string;

    @Column()
    gender: string;

    @Column()
    photo: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}

export { Profile };