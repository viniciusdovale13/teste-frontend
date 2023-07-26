
'use client';

import { FC } from 'react';

interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center h-screen'>
      <h2 className='text-3xl'>Parece que algo deu errado!</h2>
      <button onClick={() => reset()} className='btn btn-error'>
        Tentar novamente
      </button>
    </div>
  );
};

export default error;