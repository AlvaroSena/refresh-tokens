import { UserRepository } from '../repositories/user-repository'

type CreateUserRequest = {
  name: string
  email: string
}

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  run({ name, email }: CreateUserRequest) {
    const user = this.userRepository.create({ name, email })
    return user
  }
}