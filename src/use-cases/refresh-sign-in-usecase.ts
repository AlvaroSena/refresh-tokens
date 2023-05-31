import { GenerateRefreshToken } from '../lib/generate-refresh-token'
import { GenerateAccessToken } from '../lib/generate-token'
import { RefreshTokenRepository } from '../repositories/refresh-token-repository'

type Props = {
  id: string
}

export class RefreshSignInUseCase {
  private constructor(
    private refreshTokenRepository: RefreshTokenRepository
  ) {}

  run(props: Props) {
    const refreshTokenExists = this.refreshTokenRepository.findById({ id: props.id })

    if (!refreshTokenExists) {
      throw new Error("Refresh token is invalid!")
    }

    const generateAccessToken = new GenerateAccessToken()
    const generateRefreshToken = new GenerateRefreshToken(this.refreshTokenRepository) 
    
    const accessToken = generateAccessToken.spawn({ id: refreshTokenExists.userId })
    const refreshToken = generateRefreshToken.spawn({ userId: refreshTokenExists.userId })

    return { accessToken, refreshToken }
  }
}