import { ComponentType } from 'react';
import { Home } from '../pages/Home';
import { Blog } from '../pages/Blog';
import { BlogPost } from '../pages/BlogPost';
import { Login } from '../pages/Login';
import { BlogManagement } from '../pages/BlogManagement';
import { Services } from '../pages/Services';
import { ServicePage } from '../pages/ServicePage';
import { GratisGuide } from '../pages/GratisGuide';
import { GuideThankYou } from '../pages/GuideThankYou';
import { AnalysisThankYou } from '../pages/AnalysisThankYou';
import { Contact } from '../pages/Contact';
import { Privacy } from '../pages/Privacy';
import { Terms } from '../pages/Terms';
import { Cookies } from '../pages/Cookies';
import { Cases } from '../pages/Cases';

export interface Route {
  path: string;
  component: ComponentType<any>;
  layout?: boolean;
  params?: string[];
}

export const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/:slug', component: BlogPost, params: ['slug'] },
  { path: '/login', component: Login, layout: false },
  { path: '/blog-management', component: BlogManagement },
  { path: '/diensten', component: Services },
  { path: '/diensten/:serviceId', component: ServicePage, params: ['serviceId'] },
  { path: '/contact', component: Contact },
  { path: '/gratis-guide', component: GratisGuide },
  { path: '/gratis-guide/bedankt', component: GuideThankYou },
  { path: '/analysis-thank-you', component: AnalysisThankYou },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
  { path: '/cookies', component: Cookies },
  { path: '/cases', component: Cases }
];