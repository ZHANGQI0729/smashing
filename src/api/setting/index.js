import { get, post } from '../request';

// 设置团队
const gteam = (data) => get('api/app/team', data);

export { gteam };
