const testRoutes = require('./test')

module.exports = (router) => {
    // Test
    router.use('/test', testRoutes)
}