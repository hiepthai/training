# Handling event

## Single Event

### 1. onClick

This a normal `onClick` function without using any param

```tsx
export default function OnClickButton() {
    function onClick() {
        console.log('button clicked')
    }

    return (
        <button onClick={onClick}>
            Click on Button
        </button>
    )
}
```

Now we check a link when it should go and use event param

```tsx
export const Link = ({ link }) => {
    const onClick = (e) => {
        e.preventDefault()
        if (link.search('https://') == 0) window.open(link, '_blank')
    }
    return (
        <a href={link} onClick={onClick}>link</a>
    )
}
```

### 2. onChange

```tsx
const radioGroup = () => {
    const onChange = (e) => {
        const value = e.target.value
        console.log(value)
    }
    return (
        <div onChange={onChange}>
            <input type="radio" value={1} checked />
            <input type="radio" value={2} />
            <input type="radio" value={3} />
            <input type="radio" value={4} />
        </div>
    )
}
```

## Multiple events

### Form submit

```tsx
const LoginForm = () => {
    const login = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const password = e.target.password.value
        console.log(name, password)
    }
    return (
        <form onSubmit={login}>
            <label htmlFor="userName">User name</label>
            <input id="userName" name="name" />
            <label htmlFor="userPassword">User name</label>
            <input id="userPassword" name="password" />
            <button type="submit" >Login</button>
        </form>
    )
}
```

### Nested event

```tsx
const Dropdown = () => {
    const [open, setOpen] = useState(false)
    const keepOpen = (e) => e.stopPropagation()
    const toggle = () => setOpen(!open)

    return (
        <div onClick={toggle}>
            <div>dropdown</div>
            {open && (
                <div>
                    <div onClick={keepOpen}>keep open</div>
                    <div>close</div>
                </div>
            )}
        </div>
    )
}
```
