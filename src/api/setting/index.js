import { get, post, del } from '../request';

// 设置团队
// 请求get
const gteam = (data) => get('/api/app/team', data);

// 添加post
const cteam = (data) => post('/api/app/team', data);

// 删除delete
const dteam = (data) => del(`/api/app/team/${data}`);

// user查邮箱
const gusersemail = (data) => get(`/api/identity/users/by-email/${data}`);

// SocialAccount
// post
const socialAccountp = (data) => post('/api/app/social-account', data);

export { gteam, cteam, dteam, gusersemail, socialAccountp };
