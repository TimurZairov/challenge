import { apiClient } from "../../config/api.client"

class AuthService {
    async login({email, password}:{email: string, password: string}){
        const response = await apiClient.post("/auth/login", {email, password})
        return response
    }
}

export const authService = new AuthService()