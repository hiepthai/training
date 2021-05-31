# JSX What and Why

```
<h1>Hello word</h1>
```

- This can be Html or JSX since both of theme nearly the same. JSX is a JS library with nearly Html syntax which help you simply call or create Html elements in JS file.
- But in JSX attribute of elements should be translate to kebap case like 'on-click' to 'onClick', 'class' to 'className'
- Another is objective params, in the sample below. Attribute id is wrapped by a '{}' and style double it wrapper '{{}}'

```
const divId = 'root'
...
// Html
<div id="$divId" style={ background-color: 'red' }></div>

// JSX
<div id={id} style={{ backgroundColor: 'red' }} />
```
