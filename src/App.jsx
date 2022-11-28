import React from 'react';
import MainProducts from './react-query/components/MainProducts';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TestComponent from './test/components/TestComponent';

const queryClient = new QueryClient();

export default function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <MainProducts />
    //   <ReactQueryDevtools initialIsOpen={true} />
    // </QueryClientProvider>
    <TestComponent />
  );
}
