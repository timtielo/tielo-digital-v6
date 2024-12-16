import React from 'react';
import { useRouter } from './router/useRouter';
import { Layout } from './components/Layout/Layout';

export default function App() {
  const { Component, params, useLayout } = useRouter();

  if (!Component) {
    return null;
  }

  if (!useLayout) {
    return <Component {...params} />;
  }

  return (
    <Layout>
      <Component {...params} />
    </Layout>
  );
}