import { apiClient } from "../../config/api.client"

class AuthService {
    async login({email, password}:{email: string, password: string}){
        console.log(email, password)
        const response = await apiClient.post("https://todo-chellenge.onrender.com/auth/login", {email, password}, )
        return response
    }
}

export const authService = new AuthService()