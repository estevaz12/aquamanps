import Image from "next/image";

export default function Language() {
  return (
    <details role='list'>
      <summary aria-haspopup='listbox' role='link'>
        <Image
          src='/icons/globe2.svg'
          width={16}
          height={16}
          alt='Change language'
        />
      </summary>
      <ul role='listbox'>
        <li>
          <a href='#'>Español</a>
        </li>
      </ul>
    </details>
  );
}
