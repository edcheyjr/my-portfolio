import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ErrorBoundary } from 'react-error-boundary'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary
      // reset the state of your app so the error doesn't happen again
      onReset={() => {
        return <div>We are fixing it!!!</div>
      }}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className='w-full h-full flex flex-col items-center justify-center space-y-6'>
          <div className='text-black text-xl capitalize'>
            There was an error!
          </div>
          <div className='text-red-500 font-medium italic '>
            {process.env.NODE_ENV !== 'production' && error.message}
          </div>
          <button className='heroButton' onClick={() => resetErrorBoundary()}>
            Try again
          </button>
        </div>
      )}
    >
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default MyApp
