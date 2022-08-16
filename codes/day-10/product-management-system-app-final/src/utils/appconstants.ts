import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthService } from "src/app/auth/services/auth.service"
import { TokenInterceptorService } from "src/app/services/interceptors/token-interceptor.service"
import { TokenService } from "src/app/services/token.service"
import { environment } from "src/environments/environment"
import { ProductService } from "../app/products/services/product.service"

export const PRODUCT_SERVICE = 'PRODUCT_SERVICE'
export const PRODUCT_SERVICE_CLASS_NAME = ProductService

export const AUTH_SERVICE = 'AUTH_SERVICE'
export const AUTH_SERVICE_CLASS_NAME = AuthService

export const TOKEN_SERVICE = 'TOKEN_SERVICE'
export const TOKEN_SERVICE_CLASS_NAME = TokenService

export const INTERCEPTOR_SERVICE = HTTP_INTERCEPTORS
export const INTERCEPTOR_SERVICE_CLASS_NAME = TokenInterceptorService

export const PRODUCT_URL = 'PRODUCT_URL'
export const AUTH_URL = 'AUTH_URL'

export const PRODUCT_URL_VALUE = environment.productsUrl
export const AUTH_URL_VALUE = environment.authUrl

export const RETURN_URL = 'returnUrl'


