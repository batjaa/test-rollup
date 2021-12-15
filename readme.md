### Install dependencies and run rollup:

```shell
npm i
rollup -c rollup.config.js
```

### Expected output

**dist.esm.js**

```javascript
function joinNormal(...rest) {
  return rest.join('/');
}

console.log(joinNormal('a', 'b'));
```

### Actual output

**dist.esm.js**

```javascript
import 'path';

function joinNormal(...rest) {
  return rest.join('/');
}

console.log(joinNormal('a', 'b'));
```
