import Image from 'next/image';

export default function Home() {
  return (
    <main className='container center-text'>
      <div id='description'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          nulla ligula. Pellentesque at libero volutpat, accumsan tellus eu,
          hendrerit urna.
        </p>
      </div>

      <section id='services'>
        <h1>SERVICES</h1>
        {services.map((service) => (
          <article key={service.id}>
            <Image
              src={service.img}
              alt={service.name}
              width={200}
              height={200}
              loading='lazy'
            />
            <footer>
              <strong>{service.name}</strong>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}

const services = [
  {
    id: 0,
    name: 'Hayward Warranty Servicing',
    img: '/logos/hayward/hayward2.jpg',
  },
  {
    id: 1,
    name: 'Pentair Warranty Servicing',
    img: '/logos/pentair/pentair1.png',
  },
  {
    id: 2,
    name: 'Pool Maintenance',
    img: '/icons/water.svg',
  },
  {
    id: 3,
    name: 'Equipment Installation and Maintenance',
    img: '/icons/tools.svg',
  },
];
