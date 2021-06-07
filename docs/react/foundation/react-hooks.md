# React Hooks

## What is Hook

- Special function type which only run inside a *Function Component*
- Always start with `use` prefix
- Simplify routes and changes in a function

## useState

Declare get and set method of state

```tsx
const [count, setCount] = useState(0)
```

- Replacing `this.state` & `this.setState` of Class
- First variable `count` return value of state
- Second variable `setCount` return set method
- `useState` is a hook
- Param `0` is the init value for `count`

#### Usage

- Synchronous

```tsx
const [count, setCount] = useState(0)
const increase = () => {
    setCount(count++)
    console.log(count)
}
return (
    <button onclick={increase}>+</button>
)
```

Each time click button value of `count` is increasing

- Asynchronous

```tsx
const [count, setCount] = useState(0)
const increase = (index) => {
    setCount((old) => {
        const newCount = old + index
        console.log(newCount)
        return newCount
    })
}
console.log(count)
return (
    <div>
        {Array(2).map((_, index) => <button onclick={() => increase(index)}>+{index}</button>)}
    </div>
);
```

- Asynchronous is used to `Array.map` or pass set method to children
- In this way the `count` get in root is not change, but `old` param in set method is updated for all children get it.
- It is a benefit for sharing state for multi children without rerender parent component
- Do not overuse asynchronous

## useMemo

Declare a const with conditional update

```tsx
const memo = useMemo(callback, [dependencies])
```

- Const `memo` memorize the old value from `callback` when props or state changes which not 
includes `dependencies`
- It increases performance when `callback` function not run if `dependencies` not change.

### Usage

```tsx
const Button = ({ theme, label }) => {
    const style = useMemo(() => {
        console.log('update style')
        if (theme == 'dark') return { background: 'black', color: 'white' }
        return { background: 'white', color: 'black' }
    }, [theme])
    return <button style={style}>{label}</button>
}
```

Test if change label props, component Button not log update style.

## useEffect

Working similar with useMemo, but it does not declare a value, it declares a list of work when dependencies change

```tsx
useEffect(callback, [dependencies])
```

### Usage

```tsx
const IdleButton = () => {
    const [count, setCount] = useState(0)
    const [reward, setReward] = useState([])
    useEffect(() => {
        switch (count) {
            case 10:
                reward.push('newbie')
                setReward(reward)
                return
            case 20:
                reward.push('fresher')
                setReward(reward)
                return
            default:
                return
        }
    }, [count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <p>Reward: {reward.join(', ')}</p>
            <button onClick={() => setCount(count++)}>click</button>
        </div>
    )
}
```

** Change `case` to 0 and 1 to get the reward, you will lose your first reward

- Think it a bit different although this code still work well.
- Rule of hook require all changeable variable using in `callback` function must in dependencies.
- Since one of dependencies changes, the `callback` will get all updated variable in this time 
- If some variables are not in dependencies will be updated after variable in dependencies
- `Callback` will return wrong value since it miss some value was not updated

```tsx
    const [oldRewardlength, setOldRewardlength] = useState(0)
    useEffect(() => {
        switch (count) {
            case 10:
                if (oldRewardlength == 0) {
                    reward.push('newbie')
                    setOldRewardlength(reward.length)
                    setReward(reward)
                }
                return
            case 20:
                if (oldRewardlength == 1) {
                    reward.push('fresher')
                    setOldRewardlength(reward.length)
                    setReward(reward)
                }
                return
            default:
                return
        }
    }, [count, reward, oldRewardlength])
```

** Do not set state without condition in `callback`, it will lead to infinity loop.
