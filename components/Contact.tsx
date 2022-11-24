import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { PageInfo } from '../typings'
import Modal from './Modal'

const currentEmail = 'edwin.kibet@neurallabs.africa'
const currentName = 'edwin chebii'
// prop types
type Props = {
  pageInfo: PageInfo
}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}
type EmailTemplate = {
  from_email: string
  from_name: string
  to_email: string
  to_name: string
  subject: string
  message: string
}

function Contact({ pageInfo }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string>('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitting(true)
    // send to my email through email server
    const templateEmailParam: EmailTemplate = {
      from_email: data.email,
      from_name: data.name,
      to_email: pageInfo?.email || currentEmail,
      to_name: pageInfo?.name || currentName,
      subject: data.subject,
      message: data.message,
    }
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateEmailParam,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result: any) => {
          console.log(result)
          if (result?.status == 200) {
            setShowModal(true)
            setIsSubmitting(false)
          }
        },
        (error: any) => {
          setError(error?.text)
          setIsSubmitting(false)
        }
      )
    // send a success messaage back should be a modal thank you for contacting.I will get back to you through your email, looking forward to knowing and interacting with you
  }
  return (
    <div className='relative flex flex-col text-center md:text-left xl:flex-row max-w-7xl px-10  min-h-screen w-screen justify-center mx-auto items-center'>
      <SectionTitle>contact me</SectionTitle>
      <div className='flex flex-col space-y-4 xl:space-y-10 pt-24'>
        <h4 className='text-xl lg:text-2xl xl:text-3xl text-bold text-center first-letter:capitalize'>
          got what you need ?{' '}
          <span className='underline decoration-primary/50 underline-offset-4'>
            let&#39;s talk
          </span>
        </h4>
        <div className='flex flex-col space-y-6'>
          <div className='flex items-center justify-center space-x-3'>
            <EnvelopeIcon className='text-primary animate-pulse w-7 h-7' />
            <p className='text-lg lg:text-2xl font-light'>
              {pageInfo?.email || currentEmail}
            </p>
          </div>
          <div className='flex items-center justify-center space-x-3'>
            <PhoneIcon className='text-primary animate-pulse w-7 h-7' />
            <p className='text-lg lg:text-2xl font-light'>
              {pageInfo?.phoneNumber}
            </p>
          </div>
          <div className='flex items-center justify-center space-x-3'>
            <MapPinIcon className='text-primary animate-pulse w-7 h-7' />
            <p className='text-lg lg:text-2xl font-light'>
              {pageInfo?.address || 'west park towers Nairobi, Kenya'}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-fit space-y-3 mx-auto py-5'
        >
          {errors.name?.message ||
          errors.message?.message ||
          errors.email?.message ||
          errors.subject?.message ||
          error ? (
            <div className='w-auto py-3 px-6 text-red-500 bg-red-400/20 font-semibold text-sm md:text-base rounded-lg space-y-2'>
              {errors.name?.message ||
                errors.message?.message ||
                errors.subject?.message ||
                errors.email?.message ||
                error}
            </div>
          ) : (
            ''
          )}
          <div className='flex flex-wrap w-full gap-3'>
            <input
              type='text'
              {...register('name', { required: 'please let me know you.😉' })}
              className='contactInput w-full md:w-auto'
              placeholder='name'
            />
            <input
              type='email'
              {...register('email', {
                required: 'your email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'incorrect email, check your email format',
                },
              })}
              className='contactInput w-full md:w-auto'
              placeholder='email'
            />
          </div>
          <input
            type='text'
            {...register('subject', { required: 'Write a subject please' })}
            className='contactInput'
            placeholder='subject'
          />
          <textarea
            className='contactInput'
            placeholder='message'
            {...register('message', {
              required: 'say a word or two atleast 😁',
            })}
          />
          <button
            type='submit'
            className='bg-primary/90 py-4 px-10 rounded-md text-gray-800 font-bold hover:bg-primary transition duration-200 ease-in-out'
          >
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>

          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            title={'Successful delivered'}
            info={'Thank you for your feedback!, I will get back to you soon.'}
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
