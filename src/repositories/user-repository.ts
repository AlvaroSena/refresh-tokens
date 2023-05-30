import { User } from '../entities/User'

export class UserRepository {
  private users: User[]

  private static INSTANCE: UserRepository

  constructor() {
    this.users = []
  }

  create({ name, email }: any) {
    const user = new User()

    user.name = name
    user.email = email

    this.users.push(user)
    return user
  }

  getAll(): User[] {
    return this.users
  }
}