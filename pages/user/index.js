import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import '../../static/css/styles.scss';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12 pt-5 pb-5 blog-page-title-formatting text-center">
                            <h2>User Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item mb-1">
                                    <a href="/user/crud/blog">New Post</a>
                                </li>

                                <li className="list-group-item mb-1">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item mb-1">
                                    <a href="/user/update">Update profile</a>
                                </li>

                                <li className="list-group-item mb-1">
                                    <Link href="/user/crud/category-tag">
                                        <a>Create a Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item mb-1">
                                    <Link href="/user/crud/category-tag">
                                        <a>Create a Tag</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;
