import Image from 'next/image';
import BeforeAfterFig from '../components/figure/Figure';
import LoopSlider from '../components/loopSlider/LoopSlider';
import BigNum from '../components/bigNum/BigNum';
import Map from '../components/map/Map';
import Link from 'next/link';
import Water from '@/public/icons/water.svg';
import Tools from '@/public/icons/tools.svg';
import './styles.css';
import haywardPic from '@/public/logos/hayward/hayward5.jpg';
import haywardServPic from '@/public/logos/hayward/hayward2.jpg';
import pentairPic from '@/public/logos/pentair/pentair1.png';
import cpoPic from '@/public/logos/cpo/cpo2.png';
import { Suspense } from 'react';
import Loading from './loading';
import { useTranslations } from 'next-intl';

export const metadata = {};

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <main className='center-text container'>
        <p id='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          nulla ligula. Pellentesque at libero volutpat, accumsan tellus eu,
          hendrerit urna.
        </p>

        <section id='services'>
          <h1>{t('services.title')}</h1>
          <div className='row'>
            {services.map((service) => (
              <div key={service.id} className='col-md-6 col-xl-3'>
                <article>
                  {service.element}
                  <footer>{service.name}</footer>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id='before-after'>
          <Suspense fallback={<Loading />}>
            <BeforeAfterFig />
          </Suspense>
        </section>

        <section id='experience'>
          <h1>
            EXPERIENCE YOU CAN <mark>TRUST</mark>
          </h1>

          <LoopSlider>
            {carouselImgs.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt={img.name}
                width={img.width}
                height={img.height}
              />
            ))}
          </LoopSlider>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            nulla ligula. Pellentesque at libero volutpat, accumsan tellus eu,
            hendrerit urna.
          </p>
          <div className='row'>
            <div className='col-md-6'>
              <BigNum num={20} interval={35} caption='Years of experience' />
            </div>
            <div className='col-md-6'>
              <BigNum
                num={250}
                interval={3}
                caption='Satisfied customers over the years'
              />
            </div>
          </div>

          <Map />
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
        src={haywardServPic}
        alt='Hayward Warranty Servicing'
        loading='lazy'
      />
    ),
  },
  {
    id: 1,
    name: 'Pentair Warranty Servicing',
    element: (
      <Image src={pentairPic} alt='Pentair Warranty Servicing' loading='lazy' />
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
  {
    src: haywardPic,
    name: 'Hayward Logo',
    width: 200,
    height: 32,
  },
  {
    src: cpoPic,
    name: 'CPO Logo',
    width: 100,
    height: 100,
  },
  {
    src: pentairPic,
    name: 'Pentair Logo',
    width: 200,
    height: 75,
  },
];
