import Layout from '../../../components/Layout';
// import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Link from 'next/link';
import '../../../static/css/styles.scss';

const CategoryTag = () => {
    return (
        <Layout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2 className="blog-page-title-formatting text-center">Create Categories and Tags</h2>
                        </div>
                        <div className="col-md-6">
                            <Category />
                        </div>
                        <div className="col-md-6">
                            <Tag />
                        </div>
                    </div>
                </div>
        </Layout>
    );
};

export default CategoryTag;
