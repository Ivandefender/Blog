import Layout from "../components/layout";
import utilsStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

// Компонент Link(із Next) забезпечує навігацію на стороні клієнта між декількома сторінками в одному NextJS-проєкті. Коли компонент Link з'являється у вікні перегляду браузера NextJS автоматично попередньо завантажує код пов'язаної сторінки

// Автоматична розбивка коду - завантажується тільки сторінка, яку ми запитуємо

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilsStyles.headingMd}>
        <h2 className={utilsStyles.headingLg}>Posts:</h2>
        <ul>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
