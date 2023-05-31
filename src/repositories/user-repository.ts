import { User } from '../entities/User'

export class UserRepository {
  private users: User[]

  private static INSTANCE: UserRepository

  private constructor() {
    this.users = []
  }

  public static getInstance(): UserRepository{
    if(!UserRepository.INSTANCE) {
        UserRepository.INSTANCE = new UserRepository()
    }
    return UserRepository.INSTANCE
  }

  create({ name, email }: any) {
    const user = new User()

    Object.assign(user, {
      name,
      email, 
    })

    this.users.push(user)
    return user
  }

  getAll(): User[] {
    return this.users
  }

  findByEmail({ email }: any) {
    const user = this.users.find(item => item.email === email)
    return user
  }

  findById({ id }: any) {
    const user = this.users.find(item => item.id === id)
    return user
  }
}