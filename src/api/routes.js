import { Homepage } from '../pagecode/home/Home';
import Work from '../pagecode/work/Work';
import Select from '../pagecode/select/Select';
import WorkResult from '../pagecode/work/WorkResult';

/**
 * 路由.
 */
const routes = [{
    path: '/',
    component: Homepage,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: '/work',
    component: Work,
    exact: true,
    breadcrumbName: 'Work'
  },
  {
    path: '/work/result',
    component: WorkResult,
    exact: true,
    breadcrumbName: 'WorkResult'
  },
  {
    path: '/select',
    component: Select,
    exact: true,
    breadcrumbName: 'Select'
  }
];

export default routes;