import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { AppError } from "../infra/shared/errors/AppError";

export class FindAllUsersUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(): Promise<User[]> {
    const findAllUsers = await this.userAccountRepository.findAllUsers();
    if (findAllUsers.length === 0) {
      throw new AppError("No data found!");
    }

    return findAllUsers;
  }
}
