import { RefreshTokenRepository } from '../repositories/refresh-token-repository'
import { UserRepository } from '../repositories/user-repository'
import dayjs from 'dayjs'

type Props = {
  userId?: string
}

export class GenerateRefreshToken {
  constructor(
    private refreshTokenRepository: RefreshTokenRepository,
  ) {}

  spawn(props: Props) {
    const expiresIn = dayjs().add(15, 'second').unix()

    const refreshToken = this.refreshTokenRepository.create({
      expiresIn,
      userId: props.userId
    })

    return refreshToken
  }
}