import express from 'express'


const userRoute = express.Router();


userRoute.post('/login')
userRoute.post('/register')

export default userRoute;


