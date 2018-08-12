# pts-starter-kit
This is a sample app to help you get started with **[Pts](https://ptsjs.org)**
using **npm** or **yarn** (an npm wrapper) and **webpack**.

If you prefer to use Pts without build steps, you can also link it directly. For example:    
```html
<script type="text/javascript" src="https://unpkg.com/pts/dist/pts.min.js"></script>
```

And you can also try out Pts without any setup using the [live demo editor](http://ptsjs.org/demo/edit/?name=polygon.convexHull). 

Pts is a library for visualizaton and creative coding. Learn more at
[https://ptsjs.org](https://ptsjs.org).

![screenshot](./screenshot.png)

## Getting npm and yarn
1. **npm** is a package manager for Node, and it comes with Node installation. 
   If you don't have Node yet, [download it here](https://nodejs.org/).
2. **yarn** is an alternative to npm. Run `npm i -g yarn` to install, or [see here](https://yarnpkg.com/docs/install/) for more
   installation options. Skip this step if you would rather just use npm.

## Running the sample app
1. Clone or download this repo.
2. Go to the folder in terminal, and run `yarn` (or `npm install`).
3. Then run `yarn start` (or `npm start`).
4. Open `index.html` and you should see your app running like the image above
5. Edit `src/app.js` to make changes to the sample app

## Building for production
Run `yarn build` (or `npm run build`). This uses
[babel-minify](https://github.com/babel/minify) to minify the code in es6.

Note that the Pts library uses es6 features such as extending built-in classes like Array.

## Future Improvements
- Webpack's "tree-shaking" doesn't seem to work in dependencies.
- Please [file an issue](https://github.com/williamngan/pts-starter-kit/issues)
if you have suggestions or encounter errors.

## License
Apache 2.0 License. See [LICENSE](./LICENSE.md) file.
