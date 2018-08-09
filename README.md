# pts-starter-kit
This is a sample app to help you get started with **[Pts](https://ptsjs.org)**
using **yarn** (an npm wrapper)  and **webpack**.

Pts is a library for visualizaton and creative coding. Learn more at [https://ptsjs.org](https://ptsjs.org).

![screenshot](./screenshot.png)

# Getting yarn
1. Run `npm i -g yarn`.

# Running the sample app
1. Clone or download this repo.
2. Go to the folder in terminal, and run `yarn`.
3. Then run `yarn start`
4. Open `index.html` and you should see your app running like the image above
5. Edit `src/app.js` to make changes to the sample app

# Building for production
Run `yarn build`. This uses [babel-minify](https://github.com/babel/minify) to minify the code in es6.

Note that the Pts library uses es6 features such as extending built-in classes like Array.

# Future Improvements
- Webpack's "tree-shaking" doesn't seem to work in dependencies.
- Please [file an issue](https://github.com/williamngan/pts-starter-kit/issues) if you have suggestions or encounter errors.

# License
Apache 2.0 License. See [LICENSE](./LICENSE.md) file.
