// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconBrandChrome
};
const i = () => {
  return <i className='iconfont icon-reports'></i>
}
const Reports = {
  id: 'Reports',
  title: <FormattedMessage id="Reports" />,
  icon: i,
  type: 'group',
  url: '/Reports'
};

export default Reports;
