import Layout from '../components/Layout';
import Link from 'next/link';
import '../static/css/styles.scss';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="example">
                                CODE PARALLAXIS
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-2 pb-2">
                            <p className="lead">
                                Parallax - the effect whereby the position or direction of an object appears to differ when viewed from different positions. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            '../static/images/multiple-monitors.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">About</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/react">
                                        <a>
                                            <h3 className="h1">The Author</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Learn more about the author</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            '../static/images/desk.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Frameworks</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/node">
                                        <a>
                                            <h3 className="h1">JavaScript Tools</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        ReactJS, NextJS, NodeJS, etc...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            '../static/images/seo-blog.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">CS Concepts</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/nextjs">
                                        <a>
                                            <h3 className="h1">Data Structures</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Algorithms and core concepts critical to learning how data is stored and behaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;