import { environment } from "src/environments/environment"
import { ProductService } from "../app/products/services/product.service"

export const PRODUCT_SERVICE = 'PRODUCT_SERVICE'
export const SERVICE_CLASS_NAME = ProductService

export const PRODUCT_URL = 'PRODUCT_URL'
export const AUTH_URL = 'AUTH_URL'

export const PRODUCT_URL_VALUE = environment.productsUrl
export const AUTH_URL_VALUE = environment.authUrl
