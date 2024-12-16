import { useState, useEffect } from 'react';
import { routes } from './routes';
import { NotFound } from './components/NotFound';
import { matchRoute } from './utils/matchRoute';
import type { RouterResult } from './types/route';

export function useRouter(): RouterResult {
  const [currentRoute, setCurrentRoute] = useState<RouterResult>({
    Component: null,
    params: {},
    useLayout: true
  });

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      const { route, params } = matchRoute(path, routes);

      if (route) {
        setCurrentRoute({
          Component: route.component,
          params,
          useLayout: route.layout !== false
        });
      } else {
        setCurrentRoute({
          Component: NotFound,
          params: {},
          useLayout: true
        });
      }
    };

    // Initial route
    handleRoute();

    // Listen for navigation
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('pushstate', handleRoute);
    
    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('pushstate', handleRoute);
    };
  }, []);

  return currentRoute;
}