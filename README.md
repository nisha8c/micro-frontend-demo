# Micro Frontends Demo

## Steps done:
1. Create a folder named micro-frontend-demo
2. inside it, npx create-react-app app1
3. and npx create-react-app app2
4. installed dev dependencies in both app1 and app2: 

npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

Create a file called .babelrc (or babel.config.json) in your project root of app1 and app2 with this content:

{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
} 

5. Added webpack.config.js in both app1 and app2
6. App 1 has a component 'Button' and hence webpack.config.js of app1 has ModuleFederationPlugin plugin and exposes that button with headers: {
   'Access-Control-Allow-Origin': '*', // 👈 important for microfrontends
   },   and publicPath: 'auto' in output.
7. App2's webpack.config.js has remotes in ModuleFederationPlugin specifying app1's remoteEntry.js
8. Later used app1's Button component in app2's App.js
   const Button = React.lazy(() => import('app1/components/Button'));


