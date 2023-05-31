import RootLayout from './layout';

const services = [
  'Hayward Warranty Servicing',
  'Pentair Warranty Servicing',
  'Pool Maintenance',
  'Equipment Installation and Maintenance',
];

export default function Home() {
  return (
    <RootLayout>
      <div id='description'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          nulla ligula. Pellentesque at libero volutpat, accumsan tellus eu,
          hendrerit urna.
        </p>
      </div>

      <section id='services'>
        <h1>SERVICES</h1>
        {services.map(service => 
        <article key={service}>{service}</article>
          )}
      </section>
    </RootLayout>
  );
}
