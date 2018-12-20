webpackJsonp([16],{h9az:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={name:"vuex-core-action",mixins:[s("SZs6").a]},e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"v-vuex-core-action"},[s("p",{staticClass:"v-title"},[t._v("\n    action类似于mutation，不同之处在于：\n  ")]),t._v(" "),s("ul",{staticClass:"v-lists"},[s("li",{staticClass:"v-list"},[t._v("Action提交的是mutation，而不是直接变更状态")]),t._v(" "),s("li",{staticClass:"v-list"},[t._v("action可以包含任意异步操作")])]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      const store = new Vuex.Store({\n        state: {\n          count: 14,\n        mutations: {\n          increment(state) {\n            state.count++\n          }\n        },\n        actions: {\n          increment (context) {\n            context.commit('increment')\n          }\n        }\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    Action函数接受一个与store实例具有相同属性和方法的context对象，因此，我们可以调用context.commit提交一个mutation，或者通过context.state和context.getters来获取state和getter\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[s("b",[t._v("注意：")]),t._v("context对象不是store实例本身\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    实践中，我们经常使用es6的参数解构来简化代码\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      actions: {\n        increment ({ commit }) {\n          commit('increment')\n        }\n      }\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("\n    分发Action\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      this.$store.dispatch('increment');\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    action支持同样的载荷方式和对象方式进行分发\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      // 以载荷形式分发\n      store.dispatch('incrementAsync', {\n        amount: 10\n      })\n\n      // 以对象形式分发\n      store.dispatch({\n        type: 'incrementAsync',\n        amount: 10\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("\n    在组件中分发action\n  ")]),t._v(" "),s("ul",{staticClass:"v-lists"},[s("li",{staticClass:"v-list"},[t._v("一、使用 this.$store.dispatch('xxx') 分发 action。")]),t._v(" "),s("li",{staticClass:"v-list"},[t._v("二、使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）。")])]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("\n    组合Action\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[s("b",[t._v("首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：")])]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      actions: {\n        actionA ({ commit }) {\n          return new Promise((resolve, reject) => {\n            setTimeout(() => {\n              commit('someMutation')\n              resolve()\n            }, 1000)\n          })\n        }\n      }\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    现在，我们可以这样做\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      this.$store.dispatch('actionA').then(() => {\n        // ...\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    在另外一个action中也可以这样做\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      actions: {\n        // ...\n        actionB ({ dispatch, commit }) {\n          return dispatch('actionA').then(() => {\n            commit('someOtherMutation')\n          })\n        }\n      }\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    最后，如果我们利用 async / await，我们可以如下组合 action：\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      // 假设 getData() 和 getOtherData() 返回的是 Promise\n      actions: {\n        async actionA ({ commit }) {\n          commit('gotData', await getData())\n        },\n        async actionB ({ dispatch, commit }) {\n          await dispatch('actionA') // 等待 actionA 完成\n          commit('gotOtherData', await getOtherData())\n        }\n      }\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n    一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。\n  ")])])}]},i=s("VU/8")(a,e,!1,null,null,null);n.default=i.exports}});
//# sourceMappingURL=16.c31550da3b95af708587.js.map