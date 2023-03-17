import { rest } from 'msw';

const EMAIL = 'admin@gmail.com';
const PASSWORD = 'qwerty123456';

export const handlers = [
    rest.post('/api/form', async (req, res, ctx) => {
        const body = await req.json();

        if (body.email === EMAIL && body.password === PASSWORD) {
            return res(ctx.json({ login: true }));
        } else {
            return res(
                ctx.status(403),
                ctx.json({
                    error: 'Invalid email or password.',
                }),
            );
        }
    }),
];
