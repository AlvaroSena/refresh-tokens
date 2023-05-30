import { UserRepository } from '../repositories/user-repository'

export class GetAllUsersUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  run() {
    const users = this.userRepository.getAll()
    return users
  }
}