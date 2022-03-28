import { Profile } from "../entities/Profile";

interface IProfilesRepository {
    create(): Promise<Profile>;
    all(): Promise<Profile[]>;
    update(): Promise<Profile>;
    delete(): Promise<void>;
    findById(): Promise<Profile>;
}

export { IProfilesRepository };