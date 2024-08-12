import { get, post } from '../request';

// 添加
const createadd = (data) => post('/api/app/post', data);

export { createadd };
