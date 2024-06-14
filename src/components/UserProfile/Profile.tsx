import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import LazyUserProfileAvatar from './Avatar/Avatar.lazy';
import LazyUserProfileDescription from './Description/Description.lazy';
import Input from '../common/Input/Input';
import classes from './Profile.module.scss';

export default function Profile() {
  return (
    <div className={classes.flex}>
      <Link to="/products" className={classes.link}>products</Link>
      <hr />
      <Input />
      <Suspense fallback={<p>lazy-loading...</p>}>
        <LazyUserProfileAvatar />
      </Suspense>
      <Suspense fallback={<p>second lazy-loading...</p>}>
        <LazyUserProfileDescription text={'It\'s quite an awesome description! Good job!'} />
      </Suspense>
      <Outlet />
    </div>
  );
}
