import { UserRepository } from '../repositories/user-repository'

type CreateUserPayload = {
  name: string
  email: string
}

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  run({ name, email }: CreateUserPayload) {
    const user = this.userRepository.create({ name, email })
    return user
  }
}