import { useQuery } from '@tanstack/react-query';
import { getCurrentuser } from '../api/authApi';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentuser,
    retry: false,
  });

  return { user, isLoading };
}
