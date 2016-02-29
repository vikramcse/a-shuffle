# a-shuffle
Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle

## Install

```sh
$ npm install --save a-shuffle
```

## Example

```js
var shuffle = require('a-shuffle');
console.log(shuffle([1, 2, 3, 4, 5, 6]));
//=> [3, 5, 4, 1, 2, 6]
```

#### `require('a-shuffle')(array)`

**Arguments**:
- `[array]`: list

**Returns**: Returns a shuffled copy of the list

## License

&copy; 2016 vikram. MIT License
