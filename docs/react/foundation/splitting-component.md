# Splitting component

## The Same

```tsx
<div>
    <div>
        <h3>1</h3>
        <button>Select 1</button>
    </div>
    ...
    <div>
        <h3>n</h3>
        <button>Select n</button>
    </div>
</div>
```

Use loop for list of item

```tsx
<div>
    {Array(n).map((_, index) => (
        <div>
            <h3>index</h3>
            <button>Select {index}</button>
        </div>
    ))}
</div>
```

**It can be use condition to choice how to render different type of list item

## Similarity
```tsx
const Calculate = () => {
    const [value, setValue] = React.useState(0)
    const ref = React.useRef()
    const getValue = () => {
        const a = ref.current.a.value || '0'
        const b = ref.current.b.value || '0'
        return [parseInt(a), parseInt(b)]
    }
    const plus= () => {
        const [a, b] = getValue()
        setValue(a + b)
    }
    const minus = () => {
        const [a, b] = getValue()
        setValue(a + b)
    }
    const multiply = () => {
        const [a, b] = getValue()
        setValue(a + b)
    }
    const divide = () => {
        const [a, b] = getValue()
        setValue(a + b)
    }
    return (
        <div>
            <form ref={ref}>
                <input type="number" name="a" />
                <input type="number" name="b" />
            </form>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={multiply}>x</button>
            <button onClick={divide}>/</button>
            <div>{value}</div>
        </div>
    )
}
```

There are 4 similar buttons in code, and it should be objective rather than duplicate

```tsx
const CalculateButton = ({ type, getValue, updateResult }) => {
    const math = useMemo(() => {
        switch (type) {
            case '+':
                return (a, b) => a + b
            case '-':
                return (a, b) => a - b
            case 'x':
                return (a, b) => a * b
            default:
                return (a, b) => a / b
        }
    }, [type])
    const calculate = () => {
        const [a, b] = getValue()
        updateResult(math(a, b))
    }
    return <button onClick={calculate}>{type}</button>
}
```

```tsx
const Calculate = () => {
    const [value, setValue] = React.useState(0)
    const getValue = () => {
        const a = ref.current.a.value || '0'
        const b = ref.current.b.value || '0'
        return [parseInt(a), parseInt(b)]
    }
    return (
        <div>
            <form ref={ref}>
                <input type="number" name="a" />
                <input type="number" name="b" />
            </form>
            <CalculateButton type="+" getValue={getValue} updateResult={setValue} />
            <CalculateButton type="-" getValue={getValue} updateResult={setValue} />
            <CalculateButton type="x" getValue={getValue} updateResult={setValue} />
            <CalculateButton type="/" getValue={getValue} updateResult={setValue} />
            <div>{value}</div>
        </div>
    )
}
```

## Unrelated

```tsx
const ValidatedRegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    useEffect(() => {
        if (userName && (12 < userName.length < 6)) console.log('wrong user name')
    }, [userName])
    useEffect(() => {
        if (password && password.length < 8) console.log('wrong password')
    }, [password])
    useEffect(() => {
        if (repassword && password !== repassword) console.log('wrong repassword')
    }, [password, repassword])
    return (
        <form onSubmit={login}>
            <label htmlFor="userName">User name</label>
            <input id="userName" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label htmlFor="userPassword">User name</label>
            <input id="userPassword" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="userRePassword">User name</label>
            <input id="userRePassword" name="repassword" type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
            <button type="submit" >Login</button>
        </form>
    )
}
```

everything look ok, but if add console lock in root or return, it will log each time when any input have changed. It's mean there are something not related affect all component render.

It seems each state should be alone which it's element, Redux can be applied for this situation

