import Vuette from './src/core/index.js'

window.app = new Vuette({
  el: '#app',
  data: {
    content: 'panda',
    description: 'panda say hello',
    obj: {
      innerObj: {
        a: 1,
      },
      b: 2
    },
    list: [
      { name: 'panda', age: 11 },
      { name: 'monkey', age: 12 },
      { name: 'elephant', age: 18 },
    ],
    nestList: [
      {
        list: [
          { name: 'panda', age: 11 },
          { name: 'monkey', age: 12 },
        ]
      },
      {
        list: [
          { name: '猪', age: 13 },
          { name: '猴子', age: 14 },
        ]
      }
    ]
  }
})