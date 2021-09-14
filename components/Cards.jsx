import Link from "next/link";

export default function Cards(props) {
  const { img, author, title, createdAt, slug } = props;

  return (
    <div className="col-md-4">
      <div className="blog-entry">
        <Link href={`/posts/${slug}`}>
          <a className="block-20" style={{ background: `url(${img})` }}></a>
        </Link>
        <div className="text px-4 pt-3 pb-4">
          <div className="meta">
            <div>{createdAt}</div>
            <div>
              <Link href={`/authors/${author}`}>
                <a style={{ color: "black" }}>{author}</a>
              </Link>
            </div>
          </div>
          <h3 className="heading">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h3>
          <p className="clearfix">
            <Link href={`/posts/${slug}`}>
              <a className="float-left read" style={{ color: "black" }}>
                Read more
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
