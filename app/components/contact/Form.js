import styles from './Contact.module.css';

export default function Form() {
  return (
    <dialog className={styles.contactForm} closed>
      <article>
        <header>
          <a href='#close' aria-label='Close' class='close'></a>
          Sen us a message
        </header>

        <form>
          <div className='grid'>
            <label for='firstname'>
              First name
              <input
                type='text'
                id='firstname'
                name='firstname'
                placeholder='First name'
                required
              />
            </label>

            <label for='lastname'>
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

          <label for='email'>
            Email
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              required
            />
          </label>

          <label for='message'>
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
