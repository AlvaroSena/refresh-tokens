import { Request, Response } from 'express'
import { UserRepository } from '../repositories/user-repository'
import { GetAllUsersUseCase } from '../use-cases/get-all-users-usecase'

export class GetAllUsersController {
  handle(req: Request, res: Response) {
    try {
      const userRepository = UserRepository.getInstance()
      const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)

      const users = getAllUsersUseCase.run()

      return res.json(users)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}