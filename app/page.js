import Image from 'next/image';
import BeforeAfterFig from './components/figure/Figure';
import Carousel from './components/carousel/Carousel';
import BigNum from './components/bigNum/BigNum';
import Script from 'next/script';

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

        <section id='experience' className='container main-bg-color'>
          <h1>
            EXPERIENCE YOU CAN <u>TRUST</u>
          </h1>
          <Carousel elements={carouselImgs} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            nulla ligula. Pellentesque at libero volutpat, accumsan tellus eu,
            hendrerit urna.
          </p>
          <BigNum num={20} caption='Years of experience' />
          <BigNum num={250} caption='Satisfied customers over the years' />

          <div id='map'></div>
        </section>
      </main>

      <Script src='https://polyfill.io/v3/polyfill.min.js?features=default' />
      <Script
        src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDkWJAgWZsii-WMLU9OxUad0PFBl2zzVuo&callback=initMap'
        strategy='lazyOnload'
      />
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
