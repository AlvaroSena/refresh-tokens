import { Request, Response } from 'express'
import { UserRepository } from '../repositories/user-repository'
import { SignInUseCase } from '../use-cases/sign-in-user-usecase'

export class SignInUserController {
  handle(req: Request, res: Response) {
    try {
      const { email } = req.body
      
      const userRepository = UserRepository.getInstance()
      const signInUserUseCase = new SignInUseCase(userRepository)
      
      const accessToken = signInUserUseCase.run({ email })

      return res.status(201).json(accessToken)
    } catch (err) {
      return res.status(401).json(err)
    }
  }
}