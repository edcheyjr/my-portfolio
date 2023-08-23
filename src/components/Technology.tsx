import React from 'react'
import Image from 'next/image'
import { Skill } from '@types.d'
import { urlFor } from '@lib/imageUrResolver'

type Props = {
  tech: Skill
}

const Technology = ({ tech }: Props) => {
  return (
    <div key={tech._id} className='relative h-12 w-12 rounded-full '>
      <Image
        alt={tech?.title}
        title={tech?.title}
        className=''
        layout='fill'
        objectFit='contain'
        src={urlFor(tech?.image).url()}
      />
    </div>
  )
}

export default Technology