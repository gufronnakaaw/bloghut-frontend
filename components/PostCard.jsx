import Link from "next/link";

export default function PostCard(props) {
  const { slug, author, img, title, createdAt } = props;

  return (
    <div className="block-21 mb-4 d-flex">
      <div
        className="blog-img mr-4"
        style={{ background: `url(${img})` }}
      ></div>
      <div className="text">
        <h3 className="heading">
          <Link href={`${slug}`}>{title}</Link>
        </h3>
        <div className="meta">
          <div>{createdAt}</div>
          <div>
            <Link href={`/authors/${author}`}>{author}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
