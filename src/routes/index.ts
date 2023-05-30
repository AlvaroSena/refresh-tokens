import { Router } from 'express'
import { userRoutes } from './user.routes'

export const routes = Router()

routes.use('/api/v1/users', userRoutes)