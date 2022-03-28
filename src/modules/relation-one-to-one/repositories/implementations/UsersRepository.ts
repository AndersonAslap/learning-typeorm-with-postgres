import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create(): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async all(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async update(): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(): Promise<User> {
        throw new Error("Method not implemented.");
    }

}