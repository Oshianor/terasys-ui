const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/')
routes.add('signin', '/signin')
routes.add('forgotPassword', '/forgotpassword')
routes.add('dashboard', '/dashboard/in')
routes.add('groups', '/dashboard/organisation')
routes.add('roles', '/dashboard/roles')
routes.add('user', '/dashboard/users')
routes.add('setting', '/dashboard/setting')
