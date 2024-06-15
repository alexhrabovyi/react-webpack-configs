import { lazy } from 'react';

const LazyUserProfileAvatar = lazy(() => import('./Avatar'));
export default LazyUserProfileAvatar;
