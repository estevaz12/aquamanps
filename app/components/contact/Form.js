import styles from './Contact.module.css';

export default function Form() {
  return (
    <dialog className={styles.contactForm} closed='true'>
      <article>
        <header>
          <a href='#close' aria-label='Close' className='close'></a>
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
  );
}
