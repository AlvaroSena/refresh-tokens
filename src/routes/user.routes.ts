import { Router } from 'express'
import { CreateUserController } from '../controllers/create-user-controller'
import { GetAllUsersController } from '../controllers/get-all-users-controller'

export const userRoutes = Router()

const createUserController = new CreateUserController()
const getAllUsersController = new GetAllUsersController()

userRoutes.post('/', createUserController.run)
userRoutes.get('/all', getAllUsersController.run)