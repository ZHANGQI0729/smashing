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
  return <i className='iconfont icon-shijiananpai'></i>
}
const Scheduling = {
  id: 'Scheduling',
  title: <FormattedMessage id="Scheduling" />,
  icon: i,
  type: 'group',
  url: '/Scheduling'
};

export default Scheduling;
