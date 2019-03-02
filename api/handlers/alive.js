module.exports = function (fastify, opts, next) {
    const {redis, elasticsearch} = fastify;
    fastify.get('/alive', {
        schema: {
            description: 'simple server healthcheck',
            summary: 'server healthcheck',
        }
    }, async (request, reply) => {
        elasticsearch.ping({
            requestTimeout: 1000
        }, function (error) {
            if (error) {
                reply.send('elasticsearch cluster is down!');
            } else {
                reply.send('All is well');
            }
        });
    });
    next()
};