# Condition Rendering

Is the way to render what you need not all elements you have

## For small piece

Quite feasible to change color if gender changed

```tsx
const Greating = ({ name, gender }) => <div style={{ color: gender === 'male' ? 'blue' : 'pink'}}>Great, {name}!</div>
```

## For part of component

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

## For different component

3 types of item

```tsx
const Text = ({ text }) => <p>{text}</p>
const Image = ({ src }) => <img src={src} />
const Video = ({ src }) => <video src={src} />
```

function return component depends on type

```tsx
const renderComponent = (type) => {
    switch (type) {
        case 'video':
            return Video;
        case 'image':
            return Image;
        default:
            return Text;
    }
}
```

render corrected type item

```tsx
const Item = ({ type, ...rest }) => {
    const Component = useMemo(() => renderComponent(type), [type])
    return (
        <div>
            <Component />
        </div>
    )
}
```
