import { Router } from 'express'
import { CreateUserController } from '../controllers/create-user-controller'
import { GetAllUsersController } from '../controllers/get-all-users-controller'
import { GetOneUserController } from '../controllers/get-one-user-controller'
import { RefreshSignInController } from '../controllers/refresh-sign-in-controller'
import { SignInUserController } from '../controllers/sign-in-user-controller'

export const userRoutes = Router()

const createUserController = new CreateUserController()
const getAllUsersController = new GetAllUsersController()
const getOneUserController = new GetOneUserController()
const signInUserController = new SignInUserController()
const refreshSignController = new RefreshSignInController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/all', getAllUsersController.handle)
userRoutes.get('/one', getOneUserController.handle)
userRoutes.post('/signIn', signInUserController.handle)
userRoutes.post('/refreshToken', refreshSignController.handle)