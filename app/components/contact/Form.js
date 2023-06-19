'use client';

import Link from 'next/link';
import styles from './Contact.module.css';
import { useState } from 'react';
import Check from '@/public/icons/send-check-fill.svg';

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
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

          {!submitted ? (
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

              <button type='submit'>Submit</button>
            </form>
          ) : (
            <div className='center-text submitted'>
              <Check width='5rem' height='5rem' />
              <h1 className='contrast'>Sent</h1>
              We will be in touch as soon as possible!
            </div>
          )}
        </article>
      </dialog>
    </>
  );
}

// TODO: change all a tags to link components
// TODO: add loading animation to contact form button
