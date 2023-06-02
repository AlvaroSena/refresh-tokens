import { sign } from 'jsonwebtoken'

type Props = {
  id?: string
}

export const configProps = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  }
}

export class GenerateAccessToken {
  spawn(props: Props) {
    const { secret, expiresIn } = configProps.jwt

    if (secret) {
      const accessToken = sign({}, secret, {
        subject: props.id,
        expiresIn
      })

      return accessToken
    }
  }
}