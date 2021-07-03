


### 优秀文章
- [一道js面试题引发的思考 ](https://github.com/kuitos/kuitos.github.io/issues/18)

```js
var scope = "global scope";
function checkScope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkScope()();
```