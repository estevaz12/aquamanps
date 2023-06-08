import Image from 'next/image';
import BeforeAfterFig from './components/figure/Figure';
import Carousel from './components/carousel/Carousel';
import BigNum from './components/bigNum/BigNum';
import Script from 'next/script';
import Map from './components/map/Map';
import Link from 'next/link';

export const metadata = {};

export default function Home() {
  return (
    <>
      <main className='center-text'>
        <div className='container main-bg-color'>
          <div id='description'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget nulla ligula. Pellentesque at libero volutpat, accumsan
              tellus eu, hendrerit urna.
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
        </div>

        <section id='before-after' className='move-back sticky'>
          <BeforeAfterFig />
        </section>

        <section id='experience' className='main-bg-color'>
          <div className='conatainer'>
            <h1>
              EXPERIENCE YOU CAN <u>TRUST</u>
            </h1>
            <Carousel elements={carouselImgs} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget nulla ligula. Pellentesque at libero volutpat, accumsan
              tellus eu, hendrerit urna.
            </p>
            <BigNum num={20} caption='Years of experience' />
            <BigNum num={250} caption='Satisfied customers over the years' />
          </div>

          <br />

          <Map />
          <br />
          <div className='container'>
            <h5>Serving customers all over the island</h5>
            <Link href='#' role='button'>
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </>
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

const carouselImgs = [
  <Image
    key={0}
    src='/logos/hayward/hayward5.jpg'
    alt='Hayward Logo'
    width={200}
    height={200}
    loading='lazy'
  />,
  <Image
    key={1}
    src='/logos/cpo.png'
    alt='CPO Logo'
    width={200}
    height={200}
    loading='lazy'
  />,
  <Image
    key={2}
    src='/logos/pentair/pentair1.png'
    alt='Pentair Logo'
    width={200}
    height={200}
    loading='lazy'
  />,
];
