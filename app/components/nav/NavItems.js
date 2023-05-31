const items = ['CONTACT', 'SERVICES', 'EXPERIENCE', 'ABOUT'];

export default function NavItems() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <a href='#'>{item}</a>
        </li>
      ))}
    </ul>
  );
}
