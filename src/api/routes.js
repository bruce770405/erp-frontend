import {
  Homepage
} from '../pagecode/home/Home';
import Work from '../pagecode/work/Work';
import Select from '../pagecode/select/Select';
import SelectDetail from '../pagecode/select/SelectDetail';
import WorkResult from '../pagecode/work/WorkResult';
import SelectEdit from '../pagecode/select/SelectEdit';
import SelectEditResult from '../pagecode/select/SelectEditResult';

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
  },
  {
    path: '/select/detail',
    component: SelectDetail,
    exact: true,
    breadcrumbName: 'SelectDetail'
  },
  {
    path: '/select/detail/edit',
    component: SelectEdit,
    exact: true,
    breadcrumbName: 'SelectEdit'
  },
  {
    path: '/select/detail/edit/result',
    component: SelectEditResult,
    exact: true,
    breadcrumbName: 'SelectEditResult'
  }

];

export default routes;