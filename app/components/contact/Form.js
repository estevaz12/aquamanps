'use client';

import Link from 'next/link';
import styles from './Contact.module.css';
import { toggleModal } from '@/app/lib/modal';

export default function Form() {
  return (
    <>
      <button className='contrast' onClick={(e) => toggleModal(e)}>
        Contact Form
      </button>

      <dialog id='contactForm' className={styles.contactForm}>
        <article>
          <header>
            <Link
              href='#contact'
              aria-label='Close'
              className='close'
              onClick={(e) => toggleModal(e)}
            />
            Sen us a message
          </header>

          <form>
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
        </article>
      </dialog>
    </>
  );
}

// TODO: change all a tags to link components
// TODO: add loading animation to contact form button
