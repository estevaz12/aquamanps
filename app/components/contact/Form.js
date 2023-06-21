'use client';

import Link from 'next/link';
import styles from './Contact.module.css';
import { useState } from 'react';
import Check from '@/public/icons/send-check-fill.svg';
import Failed from '@/public/icons/send-x-fill.svg';

export default function Form() {
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
    <>
      <button
        className='contrast'
        onClick={async (e) => {
          const { toggleModal } = await import('@/app/lib/modal');
          toggleModal(e);
        }}
      >
        Contact Form
      </button>

      <dialog id='contactForm' className={styles.contactForm}>
        <article>
          <header>
            <Link
              href='#contact'
              aria-label='Close'
              className='close'
              onClick={async (e) => {
                const { toggleModal } = await import('@/app/lib/modal');
                toggleModal(e);
              }}
            />
            Send us a message
          </header>

          {(() => {
            switch (status) {
              case 0:
                return (
                  <>
                    <div className='spacer'>
                      <small>
                        <em className='muted'>
                          <span className='error'>*</span> All fields required
                        </em>
                      </small>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className='grid'>
                        <label htmlFor='firstname'>
                          First name
                          <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            placeholder='First name'
                            disabled={submitting}
                            required
                          />
                        </label>

                        <label htmlFor='lastname'>
                          Last name
                          <input
                            type='text'
                            id='lastname'
                            name='lastname'
                            placeholder='Last name'
                            disabled={submitting}
                            required
                          />
                        </label>
                      </div>

                      <div className='grid'>
                        <label htmlFor='email'>
                          Email
                          <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            disabled={submitting}
                            required
                          />
                        </label>
                        <label htmlFor='tel'>
                          Phone Number
                          <input
                            type='tel'
                            id='tel'
                            name='tel'
                            placeholder='(XXX) XXX-XXX'
                            disabled={submitting}
                            required
                          />
                        </label>
                      </div>

                      <label htmlFor='message'>
                        Message
                        <textarea
                          id='message'
                          name='message'
                          placeholder="Hello! I am looking for Aquaman's pool services."
                          rows={3}
                          disabled={submitting}
                          required
                        ></textarea>
                      </label>

                      {!submitting ? (
                        <button className='contrast' type='submit'>
                          Send
                        </button>
                      ) : (
                        <button className='contrast' aria-busy='true'>
                          Sending...
                        </button>
                      )}
                    </form>
                  </>
                );

              case 200:
                return (
                  <div className='center-text submitted'>
                    <Check width='5rem' height='5rem' />
                    <h1>Sent</h1>
                    We will get in touch as soon as possible!
                  </div>
                );

              default: // status === error
                return (
                  <div className='center-text submitted'>
                    <Failed width='5rem' height='5rem' />
                    <h1>Failed to send message</h1>
                    Please try again later
                  </div>
                );
            }
          })()}
        </article>
      </dialog>
    </>
  );
}
