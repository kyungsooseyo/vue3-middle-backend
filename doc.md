### token生效问题

1.在用户登陆时，记录当前登录时间
2.制定一个失效时长
3.在接口调用时，根据*当前时间**对比登录时间，看是否超过了时效时长
如果未超过，则正常进行后续操作
如果超过，则进行退出登录操作