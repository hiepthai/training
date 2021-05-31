# React with HTML

Get started with a normal HTML

```html
<body>
  <div id="root"></div>
</body>
```

Add script to load React on head or bottom of html file

```html
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

<!-- Don't use this in production: -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Create a script to show something

```html
<script type="text/babel">
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
</script>
```

Run that html file with any browser and got React Hello world project

# Init React project


## Boiler plate

```
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript
```

and run `yarn start` on root of project folder to view your app

## Manual

Run terminal:
```
npm init
# or
yarn init
```

add basic info for app

```
question name (testdir): my-awesome-package
question version (1.0.0):
question description: The best package you will ever find.
question entry point (index.js):
question git repository: https://github.com/yarnpkg/example-yarn-package
question author: Yarn Contributor
question license (MIT):
question private:
success Saved package.json
✨  Done in ...s.
```

in package.json of root folder add these dependencies

```
{
  ...
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack",
    "dev": "cross-env NODE_ENV=development webpack --watch",
  },
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
  },
  "devDependencies": {
    "@types/react": "^17.0.1",
    "@types/react-dom": "^17.0.1",
    "webpack": "^5",
    "cross-env": "^7.0.2",
  }
  ...
}
```

create webpack.config.js

```js
module.exports = {
  mode: process.env.NODE_ENV || 'development',
}
```

*Package cross-env is only require for Windows, if no need remove them in devDependencies and remove cross-env NODE_ENV=develoment inside of script*

create app.tsx

```tsx
import React from 'react'

export default function App() {
  function onClick() {
    console.log('React button on click')
  }
  return (
    <div>
      <h1>Your React App</h1>
      <button onClick={onClick}>React now</button>
    </div>
  )
}
```

replace index.js with index.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const root = document.getElementById(root)
if (root) React.render(<App />, root)
```

run `yarn build` or `yarn dev` in terminal you will see dist folder in root
create index.html

```html
<script src="/dist/index.js"></script>
<body>
  <div id="root"></div>
</body>
```

open it on browser and finish your react project
