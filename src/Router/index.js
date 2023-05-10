import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom';
const Home = lazy(
  async () => await import('../Pages/Home')
);

const Test = lazy(
  async () => await import('../Pages/Test')
);



function Index() {
  const element = useRoutes([
    {
      path: '/',
      element: <Test></Test>,
    },
  ])
  return (
    <div>
      <Suspense fallback={<p>loading</p>}>
          {element}
      </Suspense>

    </div>

  )
}

export default Index