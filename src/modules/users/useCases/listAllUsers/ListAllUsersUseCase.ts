import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id as string);

    if (!user) {
      throw new Error("User does not exist");
    }
    if (user.admin === false) {
      throw new Error("User is not admin");
    }
    const users = this.usersRepository.list();
    console.log(users);

    return users;
  }
}

export { ListAllUsersUseCase };
