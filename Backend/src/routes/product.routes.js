import express from 'express'
import { getAllProducts, getSingleProduct } from '../controllers/product.controller.js'
import { verifyJWTToken } from '../middlewares/auth.middleware.js'

const productRoute = express.Router()


productRoute.get('/get-all-products',getAllProducts)
productRoute.get('/:productId',getSingleProduct)





export default productRoute;