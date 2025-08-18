import { authService } from '@/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';

export const useAuth = () => {
  const handleLogin = useMutation({
    mutationFn: authService.login,

    onError: error => console.log(error),
  });
  return { handleLogin };
};
