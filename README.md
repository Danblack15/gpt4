# gpt4
## Build Setup:

Node version ~16.18.0-18.12.1

```
# Install dependencies:
yarn

# Server with hot reload at http://localhost:8081/
yarn dev

# Output will be at dist/ folder
yarn build
```
## Project Structure:

- `src/blocks` - pug blocks, mixins
- `src/pages` - pug pages
- `src/templates` - pug templates, mixins/blocks includes
- `src/assets/sass` - base styles for project import to main.sass. Don't forget to import main.sass in `index.js`
- `src/assets/img` - put images here. Don't forget to use correct path: `/assets/img/some.jpg`
- `src/assets/sprite` - put svg images for sprite here.
- `src/js` - base scripts for project import to main.js
- `src/index.js` - main project file where you include/import all main files - main.js, main.sass...
- `static/` - folder with extra static assets that will be copied into output folder

