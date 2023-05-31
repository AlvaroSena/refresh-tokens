import { sign } from 'jsonwebtoken'

type Props = {
  id?: string
}

export const configProps = {
  jwt: {
    secret: '03b62516184fb6ef591f45bd4974b753',
    expiresIn: '1d' 
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