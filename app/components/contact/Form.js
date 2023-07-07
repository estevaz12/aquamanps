'use client';

import dynamic from 'next/dynamic';

const FormModal = dynamic(() => import('./FormModal'), { ssr: false });

export default function Form({ translations }) {
  const t = translations;

  return (
    <>
      <button
        className='contrast'
        onClick={async (e) => {
          const toggleModal = (await import('@/app/lib/modal')).default;
          toggleModal(e);
        }}
      >
        {t.button}
      </button>

      <FormModal t={t} />
    </>
  );
}
