import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import '../../static/css/styles.scss';

const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-warning mr-1 ml-1 mt-1">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-warning mr-1 ml-1 mt-1">{t.name}</a>
            </Link>
        ));

    return (
        <div className="lead pb-4">
            <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className="blog-title pt-1 pb-1 font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
            </header>
            <section className="mark-container">
                <p className="mark-formatting ml-1 pt-1 pb-1 pr-2 pl-2">
                    Written by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a className="link-formatting">{blog.postedBy.username}</a>
                    </Link>{' '}
                    | Published {moment(blog.updatedAt).fromNow()}
                </p>
            </section>

            <section>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
                <br />
                <br />
            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: '400px', width: '100%', objectFit: "contain" }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        <div className="excerpt-formatting pb-3">{renderHTML(blog.excerpt)}</div>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-warning pt-2">Read more</a>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Card;
