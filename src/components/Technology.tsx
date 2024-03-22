import React from 'react'
import Image from 'next/image'
import { Skill } from '@types.d'
import { urlFor } from '@lib/imageUrlResolver'

type Props = {
  tech: Skill
}

const Technology = ({ tech }: Props) => {
  return (
    <div key={tech._id} className='relative h-12 w-12 rounded-full '>
      <Image
        alt={tech?.title}
        title={tech?.title}
        className='object-contain'
        width={100}
        height={100}
        sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33.3vw'
        src={urlFor(tech?.image).url()}
      />
    </div>
  )
}

export default Technology
