'use client';

import Link from 'next/link';
import styles from './Contact.module.css';
import { useState } from 'react';
import Check from '@/public/icons/send-check-fill.svg';
import Failed from '@/public/icons/send-x-fill.svg';

export default function Form() {
  // init = 0, success = 200, error = 500
  const [status, setStatus] = useState(0);
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

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
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='grid'>
                      <label htmlFor='firstname'>
                        First name
                        <input
                          type='text'
                          id='firstname'
                          name='firstname'
                          placeholder='First name'
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
                          required
                        />
                      </label>
                    </div>

                    <label htmlFor='email'>
                      Email
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        required
                      />
                    </label>

                    <label htmlFor='message'>
                      Message
                      <textarea
                        id='message'
                        name='message'
                        placeholder="Hello! I am looking for Aquaman's pool services."
                        rows={3}
                      ></textarea>
                    </label>

                    <button type='submit'>Send</button>
                  </form>
                );

              case 200:
                return (
                  <div className='center-text submitted'>
                    <Check width='5rem' height='5rem' />
                    <h1 className='contrast'>Sent</h1>
                    We will be in touch as soon as possible!
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

// TODO: change all a tags to link components
// TODO: add loading animation to contact form button
