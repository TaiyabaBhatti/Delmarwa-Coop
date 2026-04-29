import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cookieParser)
app.use(express.json({limit:'10kb'}))
app.use(express.urlencoded({limit:'10kb',extended:true}))
app.use(express.static('public'))
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


// Router paths

import userRoute from './routes/user.routes.js';
import productRoute from './routes/product.routes.js';

app.use('api/users',userRoute)
app.use('api/products',productRoute)



export default app