import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationBar } from 'components/ui/NavigationBar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationBar title={'앱'}/>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
