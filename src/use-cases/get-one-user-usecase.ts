import { UserRepository } from '../repositories/user-repository'

type GetOneUserPaylod = {
  email: string
} 

export class GetOneUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  run({ email }: GetOneUserPaylod) {
    const user = this.userRepository.findByEmail({ email })

    if (!user) {
      throw new Error("User not found.")
    }

    return user
  }
}