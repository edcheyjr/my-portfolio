type Props = {
  status: 404 | 500 | 401 | 403
}
/**
 *@deprecated
 *TODO:to remove if no longer need
 */
const ErrorMessage = ({ status }: Props) => {
  return (
    <div className='bg-red-500/30 w-full h-fit justify-center flex text-sm lg:text-lg text-zinc-400/90 text-center py-1 space-x-2'>
      <p className='text-red-500 font-bold'>{status} </p>{' '}
      <p>{' check your connection sanity cms'}</p>
    </div>
  )
}

export default ErrorMessage
