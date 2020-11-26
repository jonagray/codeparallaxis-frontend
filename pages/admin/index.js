import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import '../../static/css/styles.scss';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 blog-title text-center">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item dashboard-text-container mb-3">
                                    <Link href="/admin/crud/category-tag">
                                        <a className="link-formatting font-weight-bold h5">Create a Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item dashboard-text-container mb-3">
                                    <Link href="/admin/crud/category-tag">
                                        <a className="link-formatting font-weight-bold h5">Create a Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item dashboard-text-container mb-3">
                                    <a href="/admin/crud/blog" className="link-formatting font-weight-bold h5">Create a Post</a>
                                </li>

                                <li className="list-group-item dashboard-text-container mb-3">
                                    <Link href="/admin/crud/blogs">
                                        <a className="link-formatting font-weight-bold h5">Update/Delete Post</a>
                                    </Link>
                                </li>

                                <li className="list-group-item dashboard-text-container mb-3">
                                    <Link href="/user/update">
                                        <a className="link-formatting font-weight-bold h5">Update Profile</a>
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
