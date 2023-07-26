import Image from 'next/image'
import { detailCharacter } from '@/utils/api';
import { FC } from 'react';

interface CharacterPageProps {
  params: {
    id: string;
  }
}

const CharacterPage: FC<CharacterPageProps> = async ({ params }) => {
  const { id } = params; 
  const character = await detailCharacter(id)
  const {thumbnail, name, description} = character.results[0];
  console.log("env", process.env.API_BASE_URL)
  return (
    <div className='container flex flex-col gap-5 items-center'>
      <Image 
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
        width={500}
        height={400}
      />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className='text-3xl font-bold'>{name}</h1>
        <p className='text-sm font-light'>{description}</p>
      </div>
    </div>
  )
}

export default CharacterPage;