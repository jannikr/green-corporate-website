## Not relevant for the measurement!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Docker

In order to be able to perform the measurements regarding the energy efficiency of this web application, it is
necessary to run the individual components as independent [Docker](https://docs.docker.com/get-docker/) images. The following commands are available for
this purpose:

### `docker build -t nextimage:dev -f Dockerfile.dev .`

Creates docker image in the development mode.

### `docker build -t nextimage:prod -f Dockerfile.< ssr / ssg >.prod .`

> next export is not yet available for next.js version 13 with app directory: SSG is not applicable!

Since Nextjs offers both static side rendering (SSG) and server side rendering (SSR), there are two production images. The SSG image is implemented with an nginx web server that can only deliver static files. This variant is suitable for comparison with the other frameworks. However, in order to also take SSR into account, the SSR image is delivered with a node server so that dynamic content can also be rendered.

### `docker run -it --rm -p 3000:3000 -d nextimage:prod`

Runs the production image / app on port 3000. You may use `nextimage:dev` instead of `nextimage:prod` in order to run 
the image / app in development mode. For SSG production image use port 8080:80 instead of 3000:3000.

