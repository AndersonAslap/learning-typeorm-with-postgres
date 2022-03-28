import { User } from "../entities/User";

interface IUsersRepository {
    create(): Promise<User>;
    all(): Promise<User[]>;
    update(): Promise<User>;
    delete(): Promise<void>;
    findById(): Promise<User>;
}

export { IUsersRepository };