# Getting Started

Source code by [Brad Traversy](https://github.com/bradtraversy)!

## Usage

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
|:-----------------------|:---------------------------------------------------|
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Docker

In order to be able to perform the measurements regarding the energy efficiency of this web application, it is
necessary to run the individual components as independent [Docker](https://docs.docker.com/get-docker/) images. The following commands are available for
this purpose:

### `docker build -t astroimage:prod -f Dockerfile.prod .`

Creates docker image in the production mode.

### `docker run -it --rm -p 8080:8080 -d astroimage:prod`

Runs the production image / app on port 3000.