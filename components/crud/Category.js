import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';
import { isAuth } from '../../actions/auth';

const Category = () => {
  const [values, setValues] = useState({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false,
    reload: false
  });

  const { name, error, success, categories, removed, reload } = values;
  const token = getCookie('token');

  useEffect(() => {
    loadCategories();
  }, [reload]);

  const loadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, categories: data });
      }
    });
  };

  const showCategories = () => {
    return categories.map((c, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(c.slug)}
          title="Double click to delete"
          key={i}
          className="btn btn-outline-warning mr-1 ml-1 mt-5"
        >
          {c.name}
        </button>
      );
    });
  };

  const deleteConfirm = slug => {
    let answer = window.confirm('Are you sure you want to delete this category? Only administrators can delete categories and tags.');
    if (answer) {
      deleteCategory(slug);
    }
  };

  const deleteCategory = slug => {
    removeCategory(slug, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
      }
    });
  };

  const clickSubmit = e => {
    e.preventDefault();
    create({ name }, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({ ...values, error: false, success: true, name: '', removed: '', reload: !reload });
      }
    });
  };

  const handleChange = e => {
    setValues({ ...values, name: e.target.value.toLowerCase(), error: false, success: false, removed: '' });
  };

  const showSuccess = () => {
    if (success) {
      return <p className="text-success">Category has been created</p>;
    }
  };

  const showError = () => {
    if (error) {
      return <p className="text-danger">Category already exists</p>;
    }
  };

  const showRemoved = () => {
    if (removed) {
      return <p className="text-danger">Category has been removed</p>;
    }
  };

  const mouseMoveHandler = e => {
    setValues({ ...values, error: false, success: false, removed: '' });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="blog-title">Categories</label>
        <input type="text" className="form-control" onChange={handleChange} value={name} required />
      </div>
      <div>
        <button type="submit" className="btn btn-warning">
          Create
        </button>
      </div>
    </form>
  );

  return (
    <React.Fragment>
      {showSuccess()}
      {showError()}
      {showRemoved()}
      <div onMouseMove={mouseMoveHandler}>
        {newCategoryForm()}
        {showCategories()}
      </div>
    </React.Fragment>
  );
};

export default Category;
