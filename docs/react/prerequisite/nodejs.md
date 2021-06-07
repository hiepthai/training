# Node JS

## What?

- A JavaScript runtime built on Chrome V8 engine
- Where js can run on apps rather than browser only

## Advantages

- Asynchronous event-driven js runtime
- Scalable network applications

synchronous

```node
const fs = require('fs');
const data1 = fs.readFileSync('/file1.md');
console.log(data1);
const data2 = fs.readFileSync('/file2.md');
console.log(data2);
```

asynchronous

```node
const fs = require('fs');
fs.readFile('/file1.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.readFile('/file2.md', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

** Details in [https://nodejs.org/en/about/](https://nodejs.org/en/about/) & [https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)

## Download

[https://nodejs.org/en/](https://nodejs.org/en/) (Don't need to download now)
