import Layout from "../../components/Layout";
import Cards from "../../components/Cards";

export default function Posts({ users }) {

  console.log(users)

  const posts = [
    {
      author: "gufronnakaaw",
      createdAt: "Feb, 20 Jan 2021",
      img: "/img/typing2.jpg",
      slug: "how-to-be-javascript-developer",
      title: "How To Be Javascript Developer",
    },
    {
      author: "sherlynagstn",
      createdAt: "Feb, 20 Jan 2021",
      img: "/img/typing3.jpg",
      slug: "how-to-be-golang-developer",
      title: "How To Be Golang Developer",
    },
    {
      author: "whoslemontea",
      createdAt: "Feb, 20 Jan 2021",
      img: "/img/art.jpg",
      slug: "how-to-be-php-developer",
      title: "How To Be PHP Developer",
    }
  ];

  return (
    <Layout title="Posts Page">
      <section id="hero-posts">
        <p>Posts</p>
      </section>
      <div className="container mt-5">
        <div className="row">
          {posts.map((post, index) => {
            return <Cards key={index} {...post} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
