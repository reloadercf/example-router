import styles from '~/styles/style.css';
import { Link } from "@remix-run/react";

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'stylesheet',
      href: '<link rel="preconnect" href="https://fonts.googleapis.com"> '
    },
    {
      rel: 'stylesheet',
      href: '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    },
    {
      rel: 'stylesheet',
      href: '<link href="https://fonts.googleapis.com/css2?family=Poor+Story&display=swap">'
    },
    {
      rel: 'stylesheet',
      href: '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet">'
    }
  ];
};

export const meta = () => {
  return {
    title: 'Welcome',
    description: 'This is a landing',
  };
};


export default function Index() {
  return (
    <div className='hero'>
      <section className='text'>
        <h2>
          Tú puedes aprenderlo todo
        </h2>
        <article>
          <img src='/improve.svg' alt='improve' className='imgHero' />
          <p> Sólo necesitas perseverancia y pasciencia, acompañadas de práctica y dedicación, soltar el celular un par de horas para practicar ayuda mucho.</p>
        </article>
      </section>
      <Link to="/elements"><button>Vamos a practicar</button></Link>
    </div>
  );
}