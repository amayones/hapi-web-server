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
]

module.exports = routes;