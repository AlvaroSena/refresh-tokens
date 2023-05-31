import { Request, Response } from 'express'
import { UserRepository } from '../repositories/user-repository'
import { CreateUserUseCase } from '../use-cases/create-user-usercase'

export class CreateUserController {
  run(req: Request, res: Response) {
    try {
      const { name, email } = req.body

      const userRepository = UserRepository.getInstance()
      const createUserUseCase = new CreateUserUseCase(userRepository)

      const user = createUserUseCase.run({ name, email })

      return res.status(201).json(user)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}