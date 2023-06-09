import Image from 'next/image';
import Globe from '../../../public/icons/globe2.svg';

export default function Language() {
  return (
    <details role='list'>
      <summary aria-haspopup='listbox' role='link'>
        <Globe />
      </summary>
      <ul role='listbox'>
        <li>
          <a href='#'>Español</a>
        </li>
      </ul>
    </details>
  );
}
