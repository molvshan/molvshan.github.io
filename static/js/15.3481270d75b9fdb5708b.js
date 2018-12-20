webpackJsonp([15],{"+M8A":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"vuex-core-getter",mixins:[s("SZs6").a]},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-vuex-core-getter"},[s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      const store = new Vuex.Store({\n        state: {\n          todos: [\n            { id: 1, text: '...', done: true },\n            { id: 2, text: '...', done: false }\n          ]\n        }\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n    如果store中state有一个todos数组状态，此时我们需要从这个todos派生出另一个状态，这个状态的值是todos数组的length。我们可以在组件中这么写：\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      computed: {\n        doneTodosCount () {\n          return this.$store.state.todos.filter(todo => todo.done).length\n        }\n      }\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    如果有多个组件需要用到此属性，那么我们要么复制这个函数，要么将这个函数抽到一个共享函数中，然后去到处引用它。两种方法都不是很理想，所以就有了getter。\n  ")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n    Vuex允许我们在store中定义getter（getter可以看做是store的计算属性）。就像计算属性一样，getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。\n  ")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n    getter接受state作为其第一个参数\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      const store = new Vuex.Store({\n        state: {\n          todos: [\n            { id: 1, text: '...', done: true },\n            { id: 2, text: '...', done: false }\n          ]\n        },\n        getters: {\n          todosLength: state => {\n            return state.todos.filter(todo => todo.done).length;\n          }\n        }\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("通过属性访问")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n    getter会暴露为store.getters对象，我们可以通过属性方式来访问这些值：\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      this.$store.getters.todosLength\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("通过方法访问")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n    我们也可以通过让getter返回一个函数，来实现给getter传参。这对store数组进行查询时非常有用\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      const store = new Vuex.Store({\n        state: {\n          todos: [\n            {\n              id: '1',\n              label: 'a'\n            },\n            {\n              id: '2',\n              label: 'b'\n            },\n            {\n              id: '3',\n              label: 'c'\n            }\n          ]\n        },\n        getters: {\n          getTodoById: state => id => {\n            return state.todos.find(todo => todo.id === id)\n          }\n        }\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      this.$store.getters.getTodoById('2') // => {id: '2', label: 'b'}\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("mapGetters辅助函数")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    与上一节的mapState辅助函数用法类似，其作用是将store中的getter映射到局部计算属性。\n  ")])])}]},o=s("VU/8")(n,a,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=15.3481270d75b9fdb5708b.js.map