import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import { API, DOMAIN, APP_NAME } from '../../config';
import '../../static/css/styles.scss';

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, totalCategories, categoriesLimit, categoriesSkip, totalTags, tagsLimit, tagsSkip, router }) => {
    const head = () => (
        <Head>
            <title>Programming blogs | {APP_NAME}</title>
            <meta
                name="description"
                content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/static/images/seo-blog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seo-blog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
        </Head>
    );

    const [limit, setLimit] = useState(blogsLimit);
    const [limitCategories, setLimitCategories] = useState(categoriesLimit);
    const [limitTags, setLimitTags] = useState(tagsLimit);

    const [skip, setSkip] = useState(0);
    const [skipCategories, setSkipCategories] = useState(0);
    const [skipTags, setSkipTags] = useState(0);

    const [size, setSize] = useState(totalBlogs);
    const [categoriesSize, setCategoriesSize] = useState(totalCategories);
    const [tagsSize, setTagsSize] = useState(totalTags);

    const [loadedBlogs, setLoadedBlogs] = useState([]);
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [loadedTags, setLoadedTags] = useState([]);


    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreCategories = () => {
        let categoriesToSkip = skipCategories + limitCategories;
        listBlogsWithCategoriesAndTags(categoriesToSkip, limitCategories).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setLoadedCategories([...loadedCategories, ...data.categories]);
                setCategoriesSize(data.size);
                setSkipCategories(categoriesToSkip);
            }
        });
    };

    const loadMoreTags = () => {
        let tagsToSkip = skipTags + limitTags;
        listBlogsWithCategoriesAndTags(tagsToSkip, limitTags).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setLoadedTags([...loadedTags, ...data.tags]);
                setTagsSize(data.size);
                setSkipTags(tagsToSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit && (<button className="bt btn-outline-warning btn-lg" onClick={loadMore}>Load more</button>)
        );
    };

    const loadMoreCategoriesButton = () => {
        return (
            categoriesSize > 0 && categoriesSize >= limitCategories && (<button className="bt btn-outline-warning btn-sm" onClick={loadMoreCategories}>Load all categories</button>)
        );
    };

    const loadMoreTagsButton = () => {
        return (
            tagsSize > 0 && tagsSize >= limitTags && (<button className="bt btn-warning btn-sm" onClick={loadMoreTags}>Load all tags</button>)
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <article key={i}>
                    <Card blog={blog} />
                    <hr />
                </article>
            );
        });
    };

    const showAllCategories = () => {
        return categories.slice(0, 3).map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-warning mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));
    };

    const showAllTags = () => {
        return tags.slice(0, 3).map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-outline-warning mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));
    };

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i}>
                <Card blog={blog} />
            </article>
        ));
    };

    const showLoadedCategories = () => {
        return loadedCategories.slice(3).map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-warning mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));
    };

    const showLoadedTags = () => {
        return loadedTags.slice(3).map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-outline-warning mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));
    };

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold text-center blog-page-title-formatting">
                                    All Posts
                                </h1>
                            </div>
                            <section>
                                {/* <div className="pb-5 text-center">
                                    {showAllCategories()}
                                    {loadMoreCategoriesButton()}
                                    <br />
                                    {showAllTags()}
                                </div> */}

                                <div className="pb-5 text-center">
                                {showAllCategories()}
                                {showLoadedCategories()}
                                {loadMoreCategoriesButton()}
                                <br />
                                {showAllTags()}
                                {showLoadedTags()}
                                {loadMoreTagsButton()}
                                </div>

                            </section>
                        </header>
                    </div>

                    <hr />

                    <div className="container-fluid">
                        {showAllBlogs()}
                    </div>

                    <div className="container-fluid">
                        {showLoadedBlogs()}
                    </div>

                    <div className="text-center pt-5 pb-5">
                        {loadMoreButton()}
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Blogs.getInitialProps = () => {
    let skip = 0;
    let skipCategories = 0;
    let skipTags = 0;

    let limit = 2;
    let numOfCategories = 2;
    let numOfTags = 2;

    return listBlogsWithCategoriesAndTags(skip, skipCategories, skipTags, limit, numOfCategories, numOfTags).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,

                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip,

                totalCategories: data.size,
                categoriesLimit: numOfCategories,
                categoriesSkip: skipCategories,

                totalTags: data.size,
                tagsLimit: numOfTags,
                tagsSkip: skipTags
            };
        }
    });
};

export default withRouter(Blogs);
