# resume-nuxt

A resume generator using Nuxt 3 and Tailwind CSS that deploys to a responsive static site hosted on Netlify. Visit https://resume.jcheng.ca to view an example using my personal resume.

The data for the resume is importmed from the `resume.json` file in the `utils` folder. The file follows the structure of the open-source [JSONResume](https://jsonresume.org/) standard.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Nuxt 3](https://nuxt.com/)
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxt.dev/)
- [@nuxt/test-utils-edge](https://nuxt.com/docs/getting-started/testing)
- [Vitest](https://vitest.dev/)

## Getting Started

1.  Fork this repo for your own use.

2.  Install the dependencies with `npm install`.

3.  Start the development server with `npm run dev -- -o` to automatically open the page on `localhost:3000`.

4.  Edit the values in `utils/resume.json` to your resume details.

5.  Adjust the Tailwind classes as necessary to alter CSS to your liking.

6.  Print your resume with `Ctrl + P` to save as a PDF.

7.  Deploy to Netlify with the build command as `npm run generate`, setting the publish directory as `/dist`.

8.  Share your resume and best of luck on your job search!

## To-do

- [x] update README
- [x] responsive design
- [ ] write script to generate PDF after build step and before deployment
- [ ] Implement the [`@nuxt/content`](https://content.nuxtjs.org/) to allow for writing and saving cover letters on your local server in the [`content`](https://nuxt.com/docs/guide/directory-structure/content) directory (add the directory to `.nuxtignore` to skip it during the build process).
- [ ] Finish writing tests when Nuxt 3 develops more testing utilities.
- [ ] Use Nuxt's [`layouts`](https://nuxt.com/docs/guide/directory-structure/layouts) directory to try to include more resume styles for others to use.
