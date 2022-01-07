# 为什么组件库要有核心

## 动机 :rabbit2:

先说原因，主要是有以下三点

1. 提高组件开发效率
2. 降低组件的维护成本
3. 抽离重复逻辑，缩小包体积


<br />
<br />
<br />


## 起因 :deer:

### props

这得从 `props` 说起，例如现在有一个年龄的 `prop` 👇
```html
<script>
    export default {
        props: ['age'] // 只声明age的存在
    }
</script>
```

在给别人用的组件中上边的这种没有对进行约束类型的 `prop` 写法是 <t-tag color="error">非常危险</t-tag> 的。  

这意味着用户可以随便传任何类型的参数。例如👇

```html
<script>
    export default {
        props: ['age'], // 此时用户传了个字符串类型，也不会报错
        methods: {
            incAge() {
                // 那么最终在运行时可能会出现莫名奇妙的错误
                const newAge = this.age++      
                return newAge
            }
        }
    }
</script>
```

所以为了避免类型错误，一般会限制 `prop` 的类型。例如 👇

```html
<script>
    export default {
        props: {
            age: Number // 约束 age 为数字类型
        }
    }
</script>
```

但这样又无法灵活的设置 `age` 的默认值，所以一般会这样写 👇

```html
<script>
    export default {
        props: {
            age: {
                type: Number,
                default: 18 // 默认值设置为 18
            }
        }
    }
</script>
```
但是这样又有一个问题，你需要每次都写 `type` 和 `default`。  

这在少量的 `prop` 需求时是没有任何问题的，但当组件有大量的 `prop` 时，你需要花费大量的时间在这上边，同时会使得代码块超级无敌长。

所以我们需要有一个新的方案来解决这个问题。  

恰巧在 `typescript` 中有一种简便的类型推断，例如 👇

```ts
let age = 18 // age 将被推断为数字类型，同时默认值为 18 
```

这跟组件的 `prop` 十足的像，所以最终我们用 `js` 实现了类似的简单 `prop` 生成器 👇

```html
<script>
import { $P } from "..."

export default {
    props: $P({
        age: 18 // age将是一个数字类型且默认值为18
    })
}
</script> 
```
等价于

```html
<script>
export default {
    props: {
        age: {
            type: Number,
            default: 18
        }
    }
}
</script> 
```

当你有很多 `prop` 时，这种差异就更明显。例如 👇

```html
<script>
export default {
    props: {
        name: {
            type: String,
            default: '张三'
        },
        age: {
            type: Number,
            default: 18
        },
        disbaled: {
            type: Boolean,
            default: false
        },
        jobs: {
            type: Array,
            default: () => []
        },
        others: {
            type: Object,
            default: () => ({})
        },
        action: {
            type: Function,
            default: () => () => {}
        }
    }
}
</script>
```

而用 `prop` 生成器只需要这样 👇

```html
<script>
import { $P } from "..."

export default {
    props: $P({
        name: '张三',
        age: 18,
        disbaled: false,
        jobs: [],
        others: {},
        action: () => {}
    })
}
</script>
```
可以发现通过简单的生成器就可以把重复的工作让代码去做，提高组件的开发效率的同时降低代码量，而且维护性更高。

<br />
<br />

### computed

有了 `props` 生成器的例子，我们可以把这些生成器的 `idea` 扩展到其他的位置，例如计算属性👇

```html{14-18}
<!-- foo组件 -->
<template>
    <view :class="[applyDisabled]">我是一个占位</view>
</template>

<script>
import { $P } from "..."

export default {
    props: $P({
        disabled: false
    }),
    computed: {
        applyDisabled() {
            const { disabled } = this
            // disabled 为 true 时，应用 foo-disabled
            return disabled ? 'foo-disabled' : null
        }
    }
}
</script>

<style scoped>
.foo-disabled {
    opacity: 0.5;
}
</style>
```

如果你写过很多组件就会发现上边是一个常见的例子，当用户希望禁用时，让元素透明一点。而这些逻辑处理都会在计算属性中实现。  

那么这些逻辑能否用生成器实现呢？？  

答案当然也是可以的，就像这样👇
```html{12-15}
<!-- foo组件 -->
<template>
    <view :class="[Disabled]">我是一个占位</view>
</template>

<script>
import { $C, $P } from "..."
export default {
    props: $P({
        disabled: false
    }),
    computed: $C({
        // 它将自动获取 this.disabled，并在其为真时返回 foo-disabled
        Disabled: 'foo-disabled' 
    })
}
</script>

<style scoped>
.foo-disabled {
    opacity: 0.5;
}
</style>
```

计算属性生成器中的大写 `key` 在内部会找到 `this` 上小写的 `key`，例如上边的大写的 `Disabled` 会找小写的 `disabled`，即 `this.disabled`。

当然计算属性还有非常多的通用的逻辑处理，例如👇

```html
<script>
import { $C, $P } from "..."
export default {
    props: $P({
        rounded: 'lg',
        disabled: false,
        visible: false,
        theme: 'dark',
        size: 'base'
    }),
    computed: {
        Rounded() {
            const { rounded } = this
            return `rounded-${rounded}`
        },
        Disabled() {
            const { disabled } = this
            return disabled ? 'foo-disabled' : null
        },
        Visible() {
            const { visible } = this
            return visible ? 'foo-show' : 'foo-hidden'
        },
        Theme() {
            const { theme } = this
            const isDark = theme === 'dark'
            return isDark ? 'text-white' : 'text-primary'
        },
        Size() {
            const sizes = {
                lg: 'text-lg',
                md: 'text-md',
                sm: 'text-sm',
                xs: 'text-xs',
            }
            const { size } = this
            return sizes[size] || size
        }
    }
}
</script>
```

而用计算属性生成器去做就非常的简单👇
```html
<script>
import { $C, $P } from "..."
export default {
    props: $P({
        rounded: 'lg',
        disabled: false,
        visible: false,
        theme: 'dark',
        size: 'base'
    }),
    computed: $C({
        Rounded: 'rounded-$',
        Disabled: 'foo-disabled',
        Visible: ['foo-show', 'foo-hidden'],
        Theme: ['dark', 'text-white', 'text-primary'],
        Size: {
            lg: 'text-lg',
            md: 'text-md',
            sm: 'text-sm',
            xs: 'text-xs'
        }
    })
}
</script>
```

当然还有很多复杂的情况只能依赖原生的计算属性实现，所以生成器对原生计算属性是兼容的👇

```html
<script>
import { $C, $P } from "..."
export default {
    props: $P({
        counter: 1
    }),
    computed: $C({
        Counter() {
            const { counter } = this
            return counter + 1
        }
    })
}
</script>
```

等价于

```html
<script>
import { $C, $P } from "..."
export default {
    props: $P({
        counter: 1
    }),
    computed: {
        Counter() {
            const { counter } = this
            return counter + 1
        }
    }
}
</script>
```

<br />
<br />
<br />

## 总结 :chipmunk:

所以你会发现为啥组件库需要有一个核心？？

无他，就是因为开头的那三个原因。

1. 提高组件开发效率
2. 降低组件的维护成本
3. 抽离重复逻辑，缩小包体积

所以如果你希望快速开发属于自己的组件库，不妨尝试先构建一个核心的库。

当然组件库的核心不仅仅包含上边生成器，还有非常多的有用的工具。  

更具体的实现与架构将会在后续的文章中讲解。

<br />
<br />
<br />

## 启发 :whale:

该模块受以下技术启发

   1. [Typescript](https://www.tslang.cn/)
   2. [@vue/reactivity](https://www.npmjs.com/package/@vue/reactivity)
