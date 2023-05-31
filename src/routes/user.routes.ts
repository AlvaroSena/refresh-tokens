import { Router } from 'express'
import { CreateUserController } from '../controllers/create-user-controller'
import { GetAllUsersController } from '../controllers/get-all-users-controller'
import { GetOneUserController } from '../controllers/get-one-user-controller'
import { SignInUserController } from '../controllers/sign-in-user-controller'

export const userRoutes = Router()

const createUserController = new CreateUserController()
const getAllUsersController = new GetAllUsersController()
const getOneUserController = new GetOneUserController()
const signInUserController = new SignInUserController()

userRoutes.post('/', createUserController.run)
userRoutes.get('/all', getAllUsersController.run)
userRoutes.get('/one', getOneUserController.run)
userRoutes.post('/signIn', signInUserController.handle)