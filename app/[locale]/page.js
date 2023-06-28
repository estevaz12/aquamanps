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
  const services = [
    {
      name: t('services.hayward'),
      element: (
        <Image
          src={haywardServPic}
          alt={t('services.hayward')}
          loading='lazy'
        />
      ),
    },
    {
      name: t('services.pentair'),
      element: (
        <Image src={pentairPic} alt={t('services.pentair')} loading='lazy' />
      ),
    },
    {
      name: t('services.pool'),
      element: <Water color='#039be5' width={75} height={75} />,
    },
    {
      name: t('services.equipment'),
      element: <Tools color='#415462' width={75} height={75} />,
    },
  ];

  return (
    <>
      <main className='center-text container'>
        <p id='description'>{t('intro')}</p>

        <section id='services'>
          <h1>{t('services.title')}</h1>
          <div className='row'>
            {services.map((service, i) => (
              <div key={i} className='col-md-6 col-xl-3'>
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
            <BeforeAfterFig caption={t('beforeAfter')} />
          </Suspense>
        </section>

        <section id='experience'>
          <h1
            dangerouslySetInnerHTML={{ __html: t.raw('experience.title') }}
          ></h1>

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

          <p>{t('experience.description')}</p>
          <div className='row'>
            <div className='col-md-6'>
              <BigNum num={20} interval={30} caption={t('experience.years')} />
            </div>
            <div className='col-md-6'>
              <BigNum
                num={250}
                interval={2}
                caption={t('experience.customers')}
              />
            </div>
          </div>

          <Map />
          <h5>{t('experience.locations')}</h5>
          <Link href='#' role='button'>
            {t('experience.learnMore')}
          </Link>
        </section>
      </main>
    </>
  );
}

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