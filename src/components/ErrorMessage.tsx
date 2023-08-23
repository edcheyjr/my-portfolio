type Props = {
  status: 404 | 500 | 401 | 403
}
/**
 *@deprecated
 *TODO:to remove if no longer need
 */
const ErrorMessage = ({ status }: Props) => {
  return (
    <div className='bg-red-500/30 w-full h-fit justify-center flex text-sm lg:text-lg text-zinc-700/90 text-center py-1 space-x-2'>
      <div className='text-red-500 font-bold'>{status} </div>{' '}
      <div>{' check your connection sanity cms'}</div>
    </div>
  )
}

export default ErrorMessage
