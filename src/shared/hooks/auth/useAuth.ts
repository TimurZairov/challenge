import { useMutation } from "@tanstack/react-query"
import { authService } from "../../../services/auth/auth.service"

export const useAuth = () => {
    const handleLogin = useMutation({
        mutationFn: authService.login,
        onSuccess: data=>console.log(data)
    })
    return {handleLogin}
}

