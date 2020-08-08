import Vuette from './src/core/index.js'

window.app = new Vuette({
  el: '#app',
  data: {
    list: [
      { name: 'panda', age: 11 },
      { name: 'monkey', age: 12 },
      { name: 'elephant', age: 18 },
    ],
    nestList: [
      {
        innerList: [
          { name: 'panda', age: 11 },
          { name: 'monkey', age: 12 },
        ]
      },
      {
        innerList: [
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

    }
  },
  created() {
    console.log('created')
  }
})