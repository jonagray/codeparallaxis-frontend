import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';
import '../../../static/css/styles.scss';

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 blog-page-title-formatting text-center">
                            <h2>Create a new post</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;
