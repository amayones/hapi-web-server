const routes = [
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },

    //routing
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return `dashboard`;
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return `about`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {

            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        },
    },
]

module.exports = routes;