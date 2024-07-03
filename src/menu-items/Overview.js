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
  return <i className='iconfont icon-IO-overview-activity'></i>
}
const Overview = {
  id: 'Overview',
  title: <FormattedMessage id="Overview" />,
  icon: i,
  type: 'group',
  url: '/Overview'
};

export default Overview;
