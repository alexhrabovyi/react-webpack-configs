# React + React Router + SCSS webpack config 
This is a config for React, React Router, SCSS that uses Webpack, ESLint, Stylelint, Babel and other tools.

## Features
### HTML
- automatically creates HTML file;
- automatically connects JS and CSS files;

Production:
- minimizing;

### SCSS
- compilation SCSS to CSS;
- file names with contenthash;
- CSS Modules support;
- Stylelint with SCSS style rules;

Development:
- injects in HTML as an inline string to better rebuild performance;
- creates source maps;

Production:
- creates separate bundle file and separate chunk files;
- minimizing;
- adds vendor prefix by Autoprefixer;
- source maps aren't created;
- automatically executes `stylelint --fix`. If any unfixed errors left, build doesn't get created;

### JS | JSX
- React support
- React Router support 
- creates separate bundle and separate chunk files;
- file names with contenthash;
- ESLint with React support;

Development:
- creates source maps;

Production:
- minimizing;
- mangling
- treeshacking
- transpiles and adds polyfills
- automatically executes `eslint --fix`. If any unfixed errors left, build doesn't get created;

### Images
- automatically generates in bundle folder;
- file names with contenthash;

Production:
- minimizing;

### Fonts
- automatically generates in bundle folder;
- file names with contenthash;

### Favicons 
- automatically generates in bundle folder;
- automatically connects to HTML file;

Development:
- generates one icon for better performance

Production:
- generates all kinds of favicons for better compatibility;

### Performance
- creates separate vendor.js file that contains necessary node modules. Because it doesn't often change, it can be 
cached in users' browser;
- file names depend on their content, so name changes only if content of that file changes;

### Webpack Bundle Analyzer
- production and development build could be executed wtih Webpack Bundle Analyzer to see sizes of files;

### Other
- Webpack DevServer with HMR enabled;
- automatically cleans bundle folder before rebuilds

## Commands
- `eslint` - check files with eslint;
- `esling --fix` - check and fix files with eslint;
- `stylelint` - check files with stylelint;
- `stylelint --fix` - check and fix files with stylelint;
- `build:dev` - execute development build;
- `build:dev:analyzer` - execute development build with Webpack Bundle Analyzer stats;
- `build:production` - execute production build;
- `build:dev:production` - execute production build with Webpack Bundle Analyzer stats;
- `serve` - execute development build with Webpack DevServer;

## File Structure
bundle
src
|_assets
  |_favicons
  |_fonts
|_components
  |_common
|_contexts
|_hooks
|_pages
|_scss
|_static
  |_index.html
  |_main.jsx
  |_main.scss
|_utils

## File Structure Example 
bundle
src
|_assets
  |_favicons
    |_favicon.png
  |_fonts
    |_Roboto-Bold.ttf
|_components
  |_common
    |_Button
      |_Button.jsx		функция Button
    |_Input
      |_Input.jsx		функция Input
  |_ProductList
    |_List.jsx			функция ProductList
  |_ProductProfile
    |_Profile.jsx		функция ProductProfile
  |_UserProfile
    |_Avatar
      |_images
	|_avatar.png
      |_Avatar.jsx		функция UserProfileAvatar
      |_Avatar.lazy.jsx		функция LazyUserProfileAvatar
      |_Avatar.module.scss
    |_Description
      |_images
        |_background.png
      |_Description.jsx		функция UserProfileDescription
      |_Description.lazy.jsx	функция LazyUserProfileDescription
      |_Description.module.scss
    |_Profile.jsx		функция UserProfile
    |_Profile.module.scss	
|_contexts
  |_ThemeContext.jsx
|_hooks
  |_useThemeContext.jsx
|_pages
  |_ProductListPage
    |_ProductListPage.jsx	функция ProductListPage
  |_ProductProfilePage
    |_ProductProfilePage.jsx	функция ProductProfilePage
  |_UserProfilePage
    |_UserProfilePage.jsx	функция UserProfilePage
|_scss
  |_colors.scss
  |_fonts.scss
  |_mixins.scss
  |_reset.scss
|_static
  |_index.html
  |_main.jsx
  |_main.scss
|_utils
  |_productListAPI.json


