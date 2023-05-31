import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { configProps } from '../lib/generate-token'
import { UserRepository } from '../repositories/user-repository'

type Payload = {
  sub: string
}

export function ensureIsSignIn(req: Request, res: Response, next: NextFunction) {
  const { secret } = configProps.jwt
  const reqHeader = req.headers.authorization

  if (!reqHeader) {
    return res.status(401).json({ error: 'Token is missing!' })
  }

  const [, accessToken] = reqHeader.split(' ')
  
  const userRepository = UserRepository.getInstance()
  
  const { sub } = verify(accessToken, secret) as Payload

  const user = userRepository.findById({ id: sub })

  if (!user) {
    return res.status(404).json({ error: 'User not found.' })
  }

  req.user = {
    id: sub
  }

  next()
}