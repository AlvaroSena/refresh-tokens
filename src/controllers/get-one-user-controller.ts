import { Request, Response } from 'express'
import { UserRepository } from '../repositories/user-repository'
import { GetOneUserUseCase } from '../use-cases/get-one-user-usecase'

export class GetOneUserController {
  handle(req: Request, res: Response) {
    try {
      const { email } = req.body

      const userRepository = UserRepository.getInstance()
      const getOneUserUseCase = new GetOneUserUseCase(userRepository)

      const users = getOneUserUseCase.run({ email })

      return res.json(users)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}