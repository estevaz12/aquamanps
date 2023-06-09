import Image from 'next/image';
import BeforeAfterFig from './components/figure/Figure';
import Carousel from './components/carousel/Carousel';
import BigNum from './components/bigNum/BigNum';
import Map from './components/map/Map';
import Link from 'next/link';
import Water from '../public/icons/water.svg';
import Tools from '../public/icons/tools.svg';
import './styles.css';

export const metadata = {};

export default function Home() {
  return (
    <>
      <main className='center-text container'>
        <p id='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          nulla ligula. Pellentesque at libero volutpat, accumsan tellus eu,
          hendrerit urna.
        </p>

        <section id='services'>
          <h1>SERVICES</h1>
          <div className='grid'>
            {services.map((service) => (
              <article key={service.id}>
                {service.element}
                <footer>{service.name}</footer>
              </article>
            ))}
          </div>
        </section>

        <section id='before-after'>
          <BeforeAfterFig />
        </section>

        <section id='experience' className='main-bg-color'>
          <h1>
            EXPERIENCE YOU CAN <mark>TRUST</mark>
          </h1>

          <Carousel className='full-width' elements={carouselImgs} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            nulla ligula. Pellentesque at libero volutpat, accumsan tellus eu,
            hendrerit urna.
          </p>
          <BigNum num={20} caption='Years of experience' />
          <BigNum num={250} caption='Satisfied customers over the years' />

          <br />

          <Map />
          <br />
          <h5>Serving customers all over the island</h5>
          <Link href='#' role='button'>
            Learn More
          </Link>
        </section>
      </main>
    </>
  );
}

const services = [
  {
    id: 0,
    name: 'Hayward Warranty Servicing',
    element: (
      <Image
        src='/logos/hayward/hayward2.jpg'
        alt='Hayward Warranty Servicing'
        width={200}
        height={76}
        loading='lazy'
      />
    ),
  },
  {
    id: 1,
    name: 'Pentair Warranty Servicing',
    element: (
      <Image
        src='/logos/pentair/pentair1.png'
        alt='Pentair Warranty Servicing'
        width={200}
        height={74}
        loading='lazy'
      />
    ),
  },
  {
    id: 2,
    name: 'Pool Maintenance',
    element: <Water color='#039be5' width={75} height={75} />,
  },
  {
    id: 3,
    name: 'Equipment Installation and Maintenace',
    element: <Tools color='#415462' width={75} height={75} />,
  },
];

const carouselImgs = [
  <Image
    key={0}
    src='/logos/hayward/hayward5.jpg'
    alt='Hayward Logo'
    width={200}
    height={32}
    loading='lazy'
  />,
  <Image
    key={1}
    src='/logos/cpo/cpo2.png'
    alt='CPO Logo'
    width={100}
    height={100}
    loading='lazy'
  />,
  <Image
    key={2}
    src='/logos/pentair/pentair1.png'
    alt='Pentair Logo'
    width={200}
    height={75}
    loading='lazy'
  />,
];

// TODO: change wherever I use styles.class to be interpolated with `${styles.class}`
