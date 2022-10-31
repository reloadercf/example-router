import style  from '~/styles/styleElement.css'

export const links = () => {
  return [{
    rel: 'stylesheet',
    href: style
  }]
};

export const meta = () => {
  return {
    title: 'New path',
    description: 'This is a new path',
  };
};

export const action = async ({ request, params }) => {
  return null;
};

export const loader = async ({ request, params }) => {
  return null;
};

export default function LandingPage() {
  return (
    <section>
      <h2>Soy una nueva ruta</h2>
    </section>
  );
}