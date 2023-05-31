import { RefreshToken } from '../entities/RefreshToken'

export class RefreshTokenRepository {
  private refreshTokens: RefreshToken[]

  private static INSTANCE: RefreshTokenRepository

  private constructor() {
    this.refreshTokens = []
  }

  public static getInstance(): RefreshTokenRepository{
    if(!RefreshTokenRepository.INSTANCE) {
      RefreshTokenRepository.INSTANCE = new RefreshTokenRepository()
    }
    return RefreshTokenRepository.INSTANCE
  }

  create({ expiresIn, userId }: any) {
    const refreshToken = new RefreshToken()

    Object.assign(refreshToken, {
      expiresIn,
      userId,
    })

    this.refreshTokens.push(refreshToken)
    return refreshToken
  }

  findById({ id }: any) {
    const refreshToken = this.refreshTokens.find(item => item.id === id)
    return refreshToken
  }
}