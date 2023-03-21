import { PREFIX } from '@/utils';

async function initMocks() {
    if (typeof window === 'undefined') {
        const { server } = await import('./server');
        server.listen({ onUnhandledRequest: 'bypass' });
    } else {
        const { worker } = await import('./browser');
        worker.start({
            onUnhandledRequest: 'bypass',
            // https://github.com/mswjs/msw/issues/690#issuecomment-849552403
            serviceWorker: {
                // Specify the worker script URL relative to the _root_.
                url: `${PREFIX}/mockServiceWorker.js`,
                options: {
                    // Override the scope to the root ("/").
                    // By default, the worker is scoped to its location on your server,
                    // which in this case would be "/prefix".
                    scope: `${PREFIX}/`,
                },
            },
        });
    }
}

initMocks();

export {};
