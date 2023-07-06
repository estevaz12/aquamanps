'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const FormModal = dynamic(() => import('./FormModal'), { ssr: false });

export default function Form({ translations }) {
  // init = 0, success = 200, error = 500
  const [status, setStatus] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const t = translations;

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // send data to API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setStatus(response.status);
  }

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

      <FormModal
        status={status}
        submitting={submitting}
        t={t}
        onSubmit={handleSubmit}
      />
    </>
  );
}
