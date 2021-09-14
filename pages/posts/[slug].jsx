import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  const data = [
    {
      slug: "test-1",
      author: "wildan",
      img: "/img/typing2.jpg",
      title: "test 1",
      createdAt: "20 Feb 2021",
    },
    {
      slug: "test-2",
      author: "wildan",
      img: "/img/art.jpg",
      title: "test 2",
      createdAt: "20 Feb 2021",
    },
    {
      slug: "test-3",
      author: "wildan",
      img: "/img/typing3.jpg",
      title: "test 3",
      createdAt: "20 Feb 2021",
    },
    {
      slug: "test-4",
      author: "wildan",
      img: "/img/write.jpg",
      title: "test 4",
      createdAt: "20 Feb 2021",
    },
    {
      slug: "test-5",
      author: "wildan",
      img: "/img/write2.jpg",
      title: "test 5",
      createdAt: "20 Feb 2021",
    },
  ];

  return (
    <Layout title={slug}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-lg-8">
            <p>
              <img src={"/img/typing2.jpg"} alt="" style={{ width: "100%" }} />
            </p>
            <h1>'test'</h1>
            <p>'test'</p>
          </div>
          <div className="col-lg-4">
            <h3 className="text-center">Latest Posts</h3>
            {data.map((post, index) => {
              return <PostCard key={index} {...post} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
