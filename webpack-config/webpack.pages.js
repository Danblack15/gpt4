const path = require('path');
const fs = require('fs');

const LAYOUT_PATH = 'local/templates/gpt4/layout';

const PATHS = {
    src: path.join(__dirname, `../${LAYOUT_PATH}/src`),
    dist: path.join(__dirname, `../${LAYOUT_PATH}/dist`),
    assets: 'assets',
};

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.pug'));

const MODALS_DIR = `${PATHS.src}/modals/`;
const MODALS = fs
    .readdirSync(MODALS_DIR)
    .filter(fileName => fileName.endsWith('.pug'));

module.exports = { LAYOUT_PATH, PATHS, PAGES_DIR, PAGES, MODALS_DIR, MODALS }
