webpackJsonp([18],{JNH1:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={name:"promise-basic",mixins:[s("SZs6").a]},i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"container v-promise-basic"},[s("p",{staticClass:"v-title"},[e._v("基础代码如下：")]),e._v(" "),s("pre",{staticClass:"line-numbers"},[e._v("    "),s("code",{staticClass:"language-js"},[e._v("\n      new Promise(function(resolve, reject){\n        //做一些异步操作\n        setTimeout(function(){\n          console.log('执行完成');\n          resolve('随便什么数据');\n        }, 2000);\n      });\n    ")]),e._v("\n  ")]),e._v(" "),s("p",{staticClass:"v-title"},[e._v("输出：")]),e._v(" "),s("pre",[e._v("    "),s("code",{staticClass:"language-js"},[e._v("// 执行完成")]),e._v("\n  ")]),e._v(" "),s("p",{staticClass:"v-txt"},[e._v("\n    在上面的代码中，首先执行了一个异步操作，也就是setTimeout，在2秒后输出'执行完成'，并且调用resolve方法"),s("br"),e._v("\n    需要注意的是，在上面代码中，知识new了一个promise对象，并没有去调用它而它就执行了，所以在使用promise的时候一般把它封装在一个函数里，然后去运行这个函数，代码如下\n  ")]),e._v(" "),s("pre",{staticClass:"line-numbers"},[e._v("    "),s("code",{staticClass:"language-js"},[e._v("\n      function runAsync() {\n        return new Promise(function(resolve, reject) {\n          // 做一些异步操作\n          setTimeout(function(){\n            console.log('执行完成');\n            resolve('随便什么数据');\n          }, 2000)\n        })\n        runAsync()\n      }\n    ")]),e._v("\n  ")])])}]},r=s("VU/8")(t,i,!1,null,null,null);n.default=r.exports}});
//# sourceMappingURL=18.b02b3784de786a1a1c3d.js.map