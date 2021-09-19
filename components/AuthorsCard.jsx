import Link from 'next/link'

export default function AuthorsCard({ name, title, img }) {
    return (
        <div className="col-lg-6 mb-5">
            <div className="card author-box card-primary">
                <div className="card-body">
                    <div className="author-box-left">
                        <img alt="image" src={"/img/avatar1.png"} className="rounded-circle author-box-picture" />
                    </div>
                    <div className="author-box-details">
                        <div className="author-box-name">
                            <Link href={`/authors/${name}`}>Hasan Basri</Link>
                        </div>
                        <div className="author-box-job">{title + 'okok'}</div>
                        <div className="author-box-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                        </div>
                            <div className="float-right mt-sm-0 mt-3">
                                <Link href={`/authors/${name}`}><a>View Posts</a></Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
