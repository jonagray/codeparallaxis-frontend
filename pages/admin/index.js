import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import '../../static/css/styles.scss';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12 pt-5 pb-5 blog-page-title-formatting text-center">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item mb-1">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create a Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item mb-1">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create a Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item mb-1">
                                    <a href="/admin/crud/blog">Create a Post</a>
                                </li>

                                <li className="list-group-item mb-1">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Post</a>
                                    </Link>
                                </li>

                                <li className="list-group-item mb-1">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
