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
                                            '../static/images/programming-concepts.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 style={{ color: "#f0ad4e" }} className="text-shadow h1 main-title-styling">Programming Concepts</h2>
                                </div>
                                <div style={{ height: 455 }} className="back text-center">
                                    <Link href="/categories/programming-concepts">
                                        <a>
                                            <h3 className="h1">Programming Concepts</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">What is binary? How would you perform shell scripting? Programming concepts that help make sense of how a program actually works go here!</p>
                                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                                    <a className="text-center text-muted" href="https://www.vecteezy.com/free-vector/machine-learning">Machine Learning Vectors by Vecteezy</a>
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
                                            '../static/images/about.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 style={{ color: "#f0ad4e" }} className="text-shadow h1 main-title-styling">About</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="https://www.linkedin.com/in/jonny-graybill">
                                        <a>
                                            <h3 className="h1">About</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Parallax - the effect whereby the position or direction of an object appears to differ when viewed from different positions. This blog is dedicated to everything programming and computer-related.
                                    </p>
                                    <br />
                                    <a className="text-center text-muted" href="https://www.vecteezy.com/free-vector/icons">Icons Vectors by Vecteezy</a>
                                </div>
                            </div>

                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            '../static/images/data-structures.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 style={{ color: "#f0ad4e" }} className="text-shadow h1 main-title-styling">Data Structures</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/data-structures">
                                        <a>
                                            <h3 className="h1">Data Structures</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Algorithms and core concepts critical to learning how data is stored and behaves</p>
                                    <br />
                                    <br />
                                    <a className="text-center text-muted" href="https://www.vecteezy.com/free-vector/programming">Programming Vectors by Vecteezy</a>
                                </div>
                            </div>
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
                                            '../static/images/frameworks.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 style={{ color: "#f0ad4e" }} className="text-shadow h1 main-title-styling">Frameworks</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/frameworks">
                                        <a>
                                            <h3 className="h1">Frameworks</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">React, Next, Redux, Angular, Vue, Gatsby, etc..., and any other popular coding framework</p>
                                    <br />
                                    <br />
                                    <a className="text-center text-muted" href="https://www.vecteezy.com/free-vector/computer">Computer Vectors by Vecteezy</a>
                                    
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
                                            '../static/images/interviewing.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 style={{ color: "#f0ad4e" }} className="text-shadow h1 main-title-styling">Interviewing</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/interviewing">
                                        <a>
                                            <h3 className="h1">Interviewing</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Interview tips, techniques, etiquette, and things you should know or do going into the event
                                    </p>
                                    <br />
                                    <br />
                                    <a className="text-center text-muted" href="https://www.vecteezy.com/free-vector/planning">Planning Vectors by Vecteezy</a>
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
                                            '../static/images/code-challenges.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 style={{ color: "#f0ad4e" }} className="text-shadow h1 main-title-styling">Code Challenges</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/code-challenges">
                                        <a>
                                            <h3 className="h1">Code Challenges</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Common problems seen in whiteboarding interviews and how to solve them</p>
                                    <br />
                                    <br />
                                    <a className="text-center text-muted" href="https://www.vecteezy.com/free-vector/technology">Technology Vectors by Vecteezy</a>
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
