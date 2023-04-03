// import { NextApiRequest, NextApiResponse } from 'next';
// import auth0 from '../../../utils/auth0';

// const audience = process.env.AUTH0_AUDIENCE
// const scope = process.env.AUTH0_SCOPE

// function getUrls(req: NextApiRequest) {
//     const host = req.headers['host']
//     let url: string = ''
//     if (req.headers['referer']) {
//         url = req.headers['referer'].split('/').pop()!
//     }
//     const protocol = process.env.VERCEL_URL ? 'https' : 'http'
//     const redirectUri = `${protocol}://${host}/api/auth/callback`
//     const returnTo = `${protocol}://${host}/${url}`
//     return {
//         redirectUri,
//         returnTo
//     }
// }

// export default auth0.handleAuth({
//     async callback(req: NextApiRequest, res: NextApiResponse) {
//         try {
//             const { redirectUri } = getUrls(req)
//             await auth0.handleCallback(req, res, { redirectUri: redirectUri })
//         } catch (error: any) {
//             res.status(error.status || 500).end(error.message)
//         }
//     },

//     async login(req: NextApiRequest, res: NextApiResponse) {
//         try {
//             const { redirectUri, returnTo } = getUrls(req)

//             await auth0.handleLogin(req, res, {
//                 authorizationParams: {
//                     audience: audience,
//                     scope: scope,
//                     redirect_uri: redirectUri
//                 },
//                 returnTo: returnTo
//             })
//         } catch (error: any) {
//             res.status(error.status || 400).end(error.message)
//         }
//     },

//     async logout(req: NextApiRequest, res: NextApiResponse) {
//         // const { returnTo } = getUrls(req)
//         await auth0.handleLogout(req, res, {
//             returnTo: process.env.AUTH0_BASE_URL
//         })
//     }
// })

import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();