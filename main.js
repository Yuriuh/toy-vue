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
    ],
    imgSrc: 'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
    red: 'red',
  },
  methods: {
    handleKeydown(event) {
      console.log('event', event)
    }
  },
  created() {
    console.log('created')
  }
})