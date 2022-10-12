import React from 'react'
import SectionTitle from './SectionTitle'
import { useForm, SubmitHandler, Resolver } from 'react-hook-form'
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { SubmitErrorHandler } from 'react-hook-form/dist/types'

// prop types
type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const resolver: Resolver<Inputs> = async (values: Inputs) => {
  return {
    values: values ? values : {},
    errors: !values.name
      ? {
          name: {
            type: 'required',
            message: 'please let me know you.😉',
          },
        }
      : !values.email
      ? {
          email: {
            type: 'required',
            message: 'your email is required',
          },
        }
      : !values.subject
      ? {
          subject: {
            type: 'required',
            message: 'Write a subject please',
          },
        }
      : !values.message
      ? {
          message: {
            types: {
              required: true,
            },
            message: 'say a word or two atleast 😁',
          },
        }
      : {},
  }
}
function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // send to my email through email server
    // send a success messaage back should be a modal thank you for contacting.I will get back to you through your email, looking forward to knowing and interacting with you
  }
  console.log(errors)
  return (
    <div className='relative flex flex-col text-center md:text-left xl:flex-row max-w-7xl xl:px-10 min-h-screen justify-center mx-auto items-center'>
      <SectionTitle>contact me</SectionTitle>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-2xl md:text-4xl text-bold text-center first-letter:capitalize'>
          i got what you need{' '}
          <span className='underline decoration-primary/50 underline-offset-4'>
            let&#39;s talk
          </span>
        </h4>
        <div className='flex flex-col space-y-6'>
          <div className='flex items-center justify-center space-x-3'>
            <EnvelopeIcon className='text-primary animate-pulse w-7 h-7' />
            <p className='text-2xl font-light'>edwin.kibet@neurallabs.africa</p>
          </div>
          <div className='flex items-center justify-center space-x-3'>
            <PhoneIcon className='text-primary animate-pulse w-7 h-7' />
            <p className='text-2xl font-light'>+254701200709</p>
          </div>
          <div className='flex items-center justify-center space-x-3'>
            <MapPinIcon className='text-primary animate-pulse w-7 h-7' />
            <p className='text-2xl font-light'>Nairobi,west park towers</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-fit space-y-3 mx-auto'
        >
          {errors.name?.message ||
          errors.message?.message ||
          errors.email?.message ||
          errors.subject?.message ? (
            <div className='w-auto py-3 px-6 text-red-500 bg-red-400/20 font-semibold text-sm md:text-base rounded-lg space-y-2'>
              {errors.name?.message ||
                errors.message?.message ||
                errors.subject?.message ||
                errors.email?.message}
            </div>
          ) : (
            ''
          )}
          <div className='space-x-3'>
            <input
              type='text'
              {...register('name')}
              className='contactInput'
              placeholder='name'
            />
            <input
              type='email'
              {...register('email')}
              className='contactInput'
              placeholder='email'
            />
          </div>
          <input
            type='text'
            {...register('subject')}
            className='contactInput'
            placeholder='subject'
          />
          <textarea
            className='contactInput'
            placeholder='message'
            {...register('message')}
          />
          <button
            type='submit'
            className='bg-primary/90 py-4 px-10 rounded-md text-gray-800 font-bold hover:bg-primary transition duration-200 ease-in-out'
          >
            submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
