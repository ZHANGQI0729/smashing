import { get, post, del } from '../request';

// collection（new collection）
// 请求get
const gcollection = (data) => get('/api/app/collection', data);

// 添加post
const pcollection = (data) => post('/api/app/collection', data);

// 删除delete
const dcollection = (data) => del(`/api/app/collection/${data}`);

export { gcollection, pcollection, dcollection };
