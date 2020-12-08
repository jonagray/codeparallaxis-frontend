import Layout from '../components/Layout';
import Link from 'next/link';
import '../static/css/styles.scss';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="example">
                                CODE PARALLAXIS
                            </h1>
                        </div>
                    </div>
                </div> */}


                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-2 pb-2">
                            {/* <p className="lead">
                                Parallax - the effect whereby the position or direction of an object appears to differ when viewed from different positions.
                            </p> */}
                        </div>
                    </div>
                </div>





                 {/* Start of boxes */}

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        height: 455,
                                        backgroundImage:
                                            'url(' +
                                            '../static/images/seo-blog.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1 main-title-styling main-page-mark">Programming Concepts</h2>
                                </div>
                                <div style={{height: 455}} className="back text-center">
                                    <Link href="/categories/react">
                                        <a className="link-formatting">
                                            <h3 className="h1">Code Parallaxis</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Parallax - the effect whereby the position or direction of an object appears to differ when viewed from different positions</p>
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
                                    <h2 className="text-shadow text-center h1 main-title-styling main-page-mark">About</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/node">
                                        <a className="link-formatting">
                                            <h3 className="h1">JavaScript Tools</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        ReactJS, NextJS, NodeJS, etc...
                                    </p>
                                </div>
                            </div>
                        

                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            '../static/images/hardware.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1 main-title-styling main-page-mark">Data Structures</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/nextjs">
                                        <a className="link-formatting">
                                            <h3 className="h1">Data Structures</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Algorithms and core concepts critical to learning how data is stored and behaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* // Original */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-2 pb-2">
                            {/* <p className="lead">
                                Parallax - the effect whereby the position or direction of an object appears to differ when viewed from different positions.
                            </p> */}
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
                                    <h2 className="text-shadow text-center h1 main-title-styling main-page-mark">Frameworks</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/react">
                                        <a className="link-formatting">
                                            <h3 className="h1">Code Parallaxis</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Parallax - the effect whereby the position or direction of an object appears to differ when viewed from different positions</p>
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
                                            '../static/images/interview.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1 main-title-styling main-page-mark">Interviewing</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/node">
                                        <a className="link-formatting">
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
                                            '../static/images/algorithms.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1 main-title-styling main-page-mark">Code Challenges</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/nextjs">
                                        <a className="link-formatting">
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
