import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../helpers/quill';
import '../../static/css/styles.scss';

const CreateBlog = ({ router }) => {
  const blogFromLS = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    if (localStorage.getItem('blog')) {
      return JSON.parse(localStorage.getItem('blog'));
    } else {
      return false;
    }
  };

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checked, setChecked] = useState([])
  const [checkedTag, setCheckedTag] = useState([])
  const [body, setBody] = useState(blogFromLS());
  const [values, setValues] = useState({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false,
    loading: false
  });

  const { error, sizeError, success, formData, title, hidePublishButton, loading } = values;
  const token = getCookie('token');

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initCategories();
    initTags();
  }, [router]);

  const initCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const publishBlog = e => {
    setValues({ ...values, loading: true })
    e.preventDefault();
    createBlog(formData, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({ ...values, loading: false, title: '', error: '', success: `A new post titled ${data.title} has been created` });
        setBody('');
        setCategories([]);
        setTags([]);
      }
    });
  };

  const handleChange = name => e => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: '' });
  };

  const handleBody = e => {
    setBody(e);
    formData.set('body', e);
    if (typeof window !== 'undefined') {
      localStorage.setItem('blog', JSON.stringify(e));
    }
  };

  const handleToggle = c => () => {
    setValues({ ...values, error: '' });
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set('categories', all);
  };

  const handleTagToggle = t => () => {
    setValues({ ...values, error: '' });
    const clickedTag = checked.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set('tags', all);
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2" />
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input onChange={handleTagToggle(t._id)} type="checkbox" className="mr-2" />
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };

  const createBlogForm = () => {
    return (
      <form className="new-blog-text-container" onSubmit={publishBlog}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={handleChange('title')} />
        </div>

        <div className="form-group">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write something amazing..."
            onChange={handleBody}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-warning">
            Publish
                    </button>
        </div>
      </form>
    );
  };

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
      {success}
    </div>
  );

  const showLoading = () => (
    <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
      Loading...
    </div>
  );


  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          {createBlogForm()}
          <div>
            {showError()}
            {showSuccess()}
            {showLoading()}
          </div>
        </div>

        <div className="col-md-4 tag-blog-text-container">
          <div>
            <div className="form-group pb-2">
              <h5>Featured image</h5>
              <hr />
              <label className="btn btn-warning mr-3">
                Upload featured image
                                <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
              </label>
              <small className="text-muted h6">Max size: 1mb</small>
            </div>
          </div>
          <div>
            <h5>Categories</h5>
            <hr />

            <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>
          </div>
          <div>
            <h5>Tags</h5>
            <hr />
            <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
