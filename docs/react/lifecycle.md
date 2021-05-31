# State and Lifecycle in a Component

## Class

There are 2 spring in a class component:

** Do not use any method with `UNSAFE` prefix

### Init - Destroy

- constructor
- getDerivedStateFromProps
- render
- componentDidMount
- componentWilUnMount

### Update

- static getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate


### 1. Constructor

```tsx
class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
}
```

#### Lifetime

Calling each time when an instance of class is creating

#### Target

- Binding `this` to local method
- Defining `state`
- Binding `props` to `this.props` with `super(props)`

### 2. getDerivedStateFromProps

```tsx
static getDerivedStateFromProps(props, state) {
    return { count: 1 } || null
}
```

#### Lifetime

Calling each time before render, which depends on *PROPS* and *STATES*.

#### Target

- Update *STATES* if it depends on *PROPS*
- Return `null` to keep current states or `new State object` to update it
- Rarely usage

### 3. shouldComponentUpdate

```tsx
shouldComponentUpdate(nextProps, nextState) {
    return true || false
}
```

#### Lifetime

Calling between getDerivedStateFromProps and render, depends on *PROPS* and *STATES*.

** Not run on first round for initiation.

#### Target

- Checking changes in *Props* and *State* require component re-rendering
- Return true to rerender and false to keep current render

### 4. render

```tsx
render() {
    return (
        <div>
            <h1>Wellcome</h1>
        </div>
    )
}
```

#### Lifetime

Calling when ***First Level*** children of *PROPS* or *STATE* change

#### Target

- Return an JSX element | Portal | arrays | string | number | null
- If multi JSX elements need to return, split component or wrap them under fragment `<>...</>`

### 5. getSnapshotBeforeUpdate

```tsx
getSnapshotBeforeUpdate(prevProps, prevState) {
    return value || null
}
```

#### Lifetime

Calling after render and return before render has completed

#### Target

- Saving old props or state values to references if `return null`
- Or passing value to `componentDidUpdate` if `return value`

** Do not skip return

### 6. componentDidMount

```tsx
componentDidMount() {
    const data = API.loadData()
    this.setState({ count: data.length })
}
```

#### Lifetime

Calling after render first time

#### Target

Loading or initiating data for component

### 7. componentDidUpdate

```tsx
componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.id !== prevProps.id) {
        API.fecthData(this.props.id)
    }
}
```

#### Lifetime

Calling after render each time

#### Target

- Must be wrapped in a condition if it changes props or states.
- Used to waiting for async function

### 8. componentWillUnmount

```tsx
componentWillUnmount() {
    clearTimeout()
    clearInterval()
    document.removeEventListener()
    API.logOut()
}
```

#### Lifetime

Calling before component is destroyed

**It is not calling if component instance is replaced by it instance in the same DOM position

#### Target

- Cleaning up method, binding, time base function, listener => prevent memories leak
- Sending destroying event
- Not updating `States` since it never usage after

### 9. Class lifecycle

```
// run 1 time only when browser load this file on the first time
const initCount = 0

class Welcome extends React.Component {
  // run each time call this class in a new position of project
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // rarely usage, for updating state depend on props. Run first time after construct and before render every time
  getDerivedStateFromProps(props, state) {}

  // run before render since second time, return true to update prop and state for rerendering or false to keep everything not update
  shouldComponentUpdate(nextProps, nextState): boolean {}

  // run each time when the *first level* of props or state change
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }

  // run just after call render but return before render return each time to set old value of props or state to references
  getSnapshotBeforeUpdate(prevProps, prevState): any but not undefined or not return, usally null {}

  // run after render first time
  componentDidMount() {}

  // run after render since 2 time
  componentDidUpdate(prevProps, prevState, snapshot) {}

  // run before instance of class removed
  componentWillUnmount() {}
}
```

## In Function

In class, barely seen there are 2 spring 1 for init and destroy, 1 for update. While function simplify the lifecircle into one

```
// the same with above
const init = 0
const inCreaser = (i) => i++

const Welcome = (props) => {
  // only call on init function
  const count = useState(0)

  // call each time when first level of props or state change
  const unstopable = inCreaser(init)

  // call each time when first level of any dependency change
  const memory = useMemo(() => {}, [dependencies])

  // run each time one when first level of any dependency change
  useEffect(() => {}, [dependencies])

  // last event of function each time first level of props or state change
  return ()
}
```
