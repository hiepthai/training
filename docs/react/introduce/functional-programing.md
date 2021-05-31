# Functional Programing

Make app become simple and codable without class

```tsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

compare with

```tsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

or

```tsx
const Welcome = (props) => <h1>Hello, {props.name}</h1>
```

** component name must start with uppercase or can not call like a JSX

## Passing props and declare type

```tsx
type Welcome = {
  name: string;
  age?: number;
}
const Welcome = ({ name, age }: Welcome) => <h1>Hello, {name}, {age || 'no age'}</h1>
```

## Render function inside a function (children prop)

```tsx
import { PropsWithChildren } from 'react'
type CustomButton = {
  backgroundColor?: string,
}
const CustomButton = ({ backgroundColor, children }: PropsWithChildren<CustomButton>) => <button style={{ backgroundColor }}>{children}</button>
```

then call it in Welcome

```tsx
const Welcome = ({ name }: Welcome) => (
  <div>
    <h1>Hello, {name}</h1>
    <CustomButton backgroundColor="red">
      <i>Inside the Button</i>
    </CustomButton>
  </div>
)
```
