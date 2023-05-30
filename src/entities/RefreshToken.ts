import { v4 as uuidv4 } from 'uuid'

export class RefreshToken {
  id?: string
  expiresIn: number
  userId: string

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}