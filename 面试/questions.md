## JavaScript

### String

#### [String.prototype.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串

语法：`str.slice(beginIndex[, endIndex])`

描述：

- slice()提取的新字符串包括`beginIndex`但不包括`endIndex`

#### [String.prototype.split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)

使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置

语法：`str.split([separator[, limit]])`

### Array

#### [Array.prototype.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

返回一个新的数组对象，这一对象是一个由begin和end决定的原数组的**浅拷贝**(包括begin，不包括end)

语法：`arr.slice([begin[, end]])`

slice方法可以用来将一个类数组对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。如：

```javascript
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

#### [Array.prototype.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

通过删除或替换现有元素或者添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组

语法：`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

#### [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

语法：`Array.from(arrayLike[, mapFn[, thisArg]])`

参数：

- `arrayLike`：想要转换成数组的伪数组对象或可迭代对象
- `mapFn`：如果指定了该参数，新数组中的每个元素会执行该回调函数
- `thisArg`：执行回调函数`mapFn`时的this对象

##### 示例：

###### 数组去重合并

```javascript
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));                     // [1, 2, 3]
```

#### [Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值

语法：`arr.map(callback(currentValue[, index[, array]])[, thisArg])`

### Function

#### [Function.prototype.apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

调用一个具有给定this值的函数，以及以一个数组(或类数组对象)的形式提供的参数

语法：`func.apply(thisArg, [argsArray])`

#### [数据结构和类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)

最新的ECMAScript标准定义了8种数据类型

- 七种基本数据类型
  - 布尔值(Boolean)
  - null
  - undefined
  - 数字(Number)
  - 任意精度的整数(BigInt)
  - 字符串(String)
  - 代表(Symbol)
- 引用数据类型
  - 对象(Object)

## 问题收集

#### 浅拷贝和深拷贝

对于对象或数组来说，浅拷贝只拷贝栈中的地址，不拷贝堆中实际的对象，新旧对象共享同一块堆内存，修改新对象也会修改原对象；深拷贝会创造另外一个一摸一样的对象，新对象跟旧对象不共享堆内存，修改新对象不会影响原对象

#### 将集合转化为数组的方法

- `Array.from(A)`
- `[].slice.apply()`
- `[...A]`
- `[].map.call(A, o => o)`

