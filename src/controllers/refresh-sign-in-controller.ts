import { Request, Response } from 'express'
import { RefreshTokenRepository } from '../repositories/refresh-token-repository'
import { RefreshSignInUseCase } from '../use-cases/refresh-sign-in-usecase'

export class RefreshSignInController {
  handle(req: Request, res: Response) {
    try {
      const { _refreshToken } = req.body

      const refreshTokenRepository = RefreshTokenRepository.getInstance()
      const refreshSignInUseCase = new RefreshSignInUseCase(refreshTokenRepository)

      const result = refreshSignInUseCase.run({ _refreshToken })      

      return res.json(result)
    } catch (err) {
      return res.status(404).json(err)
    }
  }
}