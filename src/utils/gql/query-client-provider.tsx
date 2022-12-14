import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: ReactNode }) => (
  <TanstackQueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </TanstackQueryClientProvider>
);

export default QueryClientProvider;
