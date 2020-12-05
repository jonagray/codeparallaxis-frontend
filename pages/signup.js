import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import '../static/css/styles.scss';

const Signup = () => {
    return (
        <Layout>
            <h2 className="text-center pt-4 pb-4 blog-page-title-formatting">Signup</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SignupComponent />
                </div>
            </div>
        </Layout>
    );
};

export default Signup;
