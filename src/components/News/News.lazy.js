import React, { lazy, Suspense } from 'react';

const LazyNews = lazy(() => import('./News'));

const News = props => (
  <Suspense fallback={null}>
    <LazyNews {...props} />
  </Suspense>
);

export default News;
