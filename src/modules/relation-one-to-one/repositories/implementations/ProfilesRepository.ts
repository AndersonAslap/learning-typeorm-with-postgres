import { getRepository, Repository } from "typeorm";
import { Profile } from "../../entities/Profile";
import { IProfilesRepository } from "../IProfilesRepository";

class ProfilesRepository implements IProfilesRepository {

    private repository: Repository<Profile>;

    constructor() {
        this.repository = getRepository(Profile);
    }

    async create(): Promise<Profile> {
        throw new Error("Method not implemented.");
    }

    async all(): Promise<Profile[]> {
        throw new Error("Method not implemented.");
    }

    async update(): Promise<Profile> {
        throw new Error("Method not implemented.");
    }

    async delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(): Promise<Profile> {
        throw new Error("Method not implemented.");
    }
}

export { ProfilesRepository };