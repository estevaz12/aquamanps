import Image from 'next/image';
import BeforeAfterFig from '../components/figure/Figure';
import LoopSlider from '../components/loopSlider/LoopSlider';
import BigNum from '../components/bigNum/BigNum';
import Water from '@/public/icons/water.svg';
import Tools from '@/public/icons/tools.svg';
import './styles.css';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

export const metadata = {};

const Map = dynamic(() => import('../components/map/Map'), {
  ssr: false,
  loading: () => (
    <div aria-busy='true' className='full-width map-container'></div>
  ),
});

export default function Home() {
  const t = useTranslations('Index');
  const services = [
    {
      name: t('services.hayward'),
      element: (
        <Image
          src='/logos/hayward/hayward2.jpg'
          alt={t('services.hayward')}
          width={200}
          height={75}
          loading='lazy'
        />
      ),
    },
    {
      name: t('services.pentair'),
      element: (
        <Image
          src='/logos/pentair/pentair1.png'
          alt={t('services.pentair')}
          width={200}
          height={75}
          loading='lazy'
        />
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
        <BeforeAfterFig caption={t('beforeAfter')} />
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
            <BigNum num={17} interval={35} caption={t('experience.years')} />
          </div>
          <div className='col-md-6'>
            <BigNum
              num={200}
              interval={4}
              caption={t('experience.customers')}
            />
          </div>
        </div>

        <Map />
        <h5>{t('experience.locations')}</h5>
        {/* <Link href='#' role='button'>
          {t('experience.learnMore')}
        </Link> */}
      </section>
    </main>
  );
}

const carouselImgs = [
  {
    src: '/logos/hayward/hayward5.jpg',
    name: 'Hayward Logo',
    width: 200,
    height: 32,
  },
  {
    src: '/logos/cpo/cpo2.png',
    name: 'CPO Logo',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/pentair/pentair1.png',
    name: 'Pentair Logo',
    width: 200,
    height: 75,
  },
];
