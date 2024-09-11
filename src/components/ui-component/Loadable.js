import { Suspense } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => {
  // 使用命名函数组件  
  const LoadableComponent = (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

  // 为组件设置显示名称（可选，但有助于调试）  
  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'UnknownComponent'})`;

  return LoadableComponent;
};
export default Loadable;
