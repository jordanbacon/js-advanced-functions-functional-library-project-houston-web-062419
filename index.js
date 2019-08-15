const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const array = Object.values(collection)
      for (var i = 0; i < array.length; i++){                    
        callback(array[i]);    
      } 
      return collection
    },

    map: function(collection, callback) {
      let array = []
      let newArr = Object.values(collection)
      for (let i = 0; i < newArr.length; i++) {
        array.push(callback(newArr[i]))
      }
      return array
    },

    reduce: function(collection, callback, acc) {
      var initializing = arguments.length === 2;
      collection.forEach(function (val) {
        if (initializing) {
          initializing = false;
          acc = val;
        } else {
          acc = callback(acc, val);
        }
      })
      return acc
      // let sum = acc
      // let newArr = Object.values(collection)
      // for (let i = 0; i < newArr.length; i++) {
      //   sum += callback(acc = 0, newArr[i], newArr)
      // }
      // return sum
    },

    find: function(collection, predicate) {
      let newArr = Object.values(collection)
      for (let i = 0; i < newArr.length; i++) {
        if (predicate(newArr[i])) {
          return newArr[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []
      let arr = collection
      for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      let arr = Object.values(collection)
      return arr.length
    },

    first: function(array, n=1) {
      let x = array.slice(0, n)
      if (x.length > 1) {
        return x
      } else {
        return x[0]
      }
      },

      last: function(array, n=1) {
        let x = array.slice(-n)
        if (x.length > 1) {
          return x
        } else {
          return x[0]
        }
      },

      compact: function(array) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
          if (!!array[i]) {
            newArr.push(array[i])
          }
        }
        return newArr
      },

      sortBy: function(array, callback) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
          newArr.push(callback(array[i]))
        }
        return newArr.sort(function(a, b){return a - b})
      },

      // flatten: function(array, [shallow])
        
      // uniq: function(array, [isSorted], [callback])

      // keys: function(object)

      // values: function(object)

      // functions: function(object)



  }
})()

fi.libraryMethod()
