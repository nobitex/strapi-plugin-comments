import { useQuery } from '@tanstack/react-query';
import { useAPI } from './useAPI';

export const useAllSections = () => {
  const api = useAPI();
  return useQuery({
    queryKey: api.comments.findAllSections.getKey(),
    queryFn: () => api.comments.findAllSections.query(),
    initialData: { sections: [] },
    retry: 1,
  });
};