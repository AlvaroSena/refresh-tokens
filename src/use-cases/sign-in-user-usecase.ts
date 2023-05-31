import { GenerateRefreshToken } from '../lib/generate-refresh-token'
import { GenerateAccessToken } from '../lib/generate-token'
import { RefreshTokenRepository } from '../repositories/refresh-token-repository'
import { UserRepository } from '../repositories/user-repository'

type SignInPayload = {
  email: string
}

export class SignInUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  run({ email }: SignInPayload) {
    const user = this.userRepository.findByEmail({ email })

    if (!user) {
      throw new Error("User not found.")  
    }
    
    const generateAccessToken = new GenerateAccessToken()

    const refreshTokenRepository = RefreshTokenRepository.getInstance()
    const generateRefreshToken = new GenerateRefreshToken(refreshTokenRepository)

    const accessToken = generateAccessToken.spawn({ id: user?.id })
    const refreshToken = generateRefreshToken.spawn({ userId: user?.id })

    return { accessToken, refreshToken }
  }
}