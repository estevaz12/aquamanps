'use client';

import Link from 'next/link';
import styles from './Contact.module.css';
import Check from '@/public/icons/send-check-fill.svg';
import Failed from '@/public/icons/send-x-fill.svg';
import { useState } from 'react';

export default function FormModal({ t }) {
  // init = 0, success = 200, error = 500
  const [status, setStatus] = useState(0);
  const [submitting, setSubmitting] = useState(false);

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
    <dialog id='contactForm' className={styles.contactForm}>
      <article>
        <header>
          <Link
            href='#contact'
            aria-label='Close'
            className='close'
            onClick={async (e) => {
              const toggleModal = (await import('@/app/lib/modal')).default;
              toggleModal(e);
            }}
          />
          {t.header}
        </header>

        {(() => {
          switch (status) {
            case 0:
              return (
                <>
                  <div className='spacer'>
                    <small>
                      <em className='muted'>
                        <span className='error'>*</span> {t.required}
                      </em>
                    </small>
                  </div>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='grid'>
                      <label htmlFor='firstname'>
                        {t.first}
                        <input
                          type='text'
                          id='firstname'
                          name='firstname'
                          placeholder={t.first}
                          disabled={submitting}
                          required
                        />
                      </label>

                      <label htmlFor='lastname'>
                        {t.last}
                        <input
                          type='text'
                          id='lastname'
                          name='lastname'
                          placeholder={t.last}
                          disabled={submitting}
                          required
                        />
                      </label>
                    </div>

                    <label htmlFor='email'>
                      {t.email}
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder={t.email}
                        disabled={submitting}
                        required
                      />
                    </label>
                    <label htmlFor='tel'>
                      {t.phone}
                      <input
                        type='tel'
                        id='tel'
                        name='tel'
                        placeholder='(XXX) XXX-XXX'
                        disabled={submitting}
                        required
                      />
                    </label>

                    <label htmlFor='message'>
                      {t.message.label}
                      <textarea
                        id='message'
                        name='message'
                        placeholder={t.message.placeholder}
                        rows={3}
                        disabled={submitting}
                        required
                      ></textarea>
                    </label>

                    {!submitting ? (
                      <button className='contrast' type='submit'>
                        {t.submit}
                      </button>
                    ) : (
                      <button className='contrast' aria-busy='true'>
                        {t.submitting}...
                      </button>
                    )}
                  </form>
                </>
              );

            case 200:
              return (
                <div className='center-text submitted'>
                  <Check width='5rem' height='5rem' />
                  <h1>{t.success.title}</h1>
                  {t.success.description}
                </div>
              );

            default:
              // status === error
              return (
                <div className='center-text submitted'>
                  <Failed width='5rem' height='5rem' />
                  <h1>{t.failure.title}</h1>
                  {t.failure.description}
                </div>
              );
          }
        })()}
      </article>
    </dialog>
  );
}
