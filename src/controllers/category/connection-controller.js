const {
  EVENT_CATEGORY_RECEIVE_ALL,
  EVENT_CATEGORY_SEND_ALL
} = require('../../../constants/category/event-constant')
const {getCategories} = require('../../models/category-model')

const connectionCategoryEvent = (socket) => {
  socket.emit(EVENT_CATEGORY_RECEIVE_ALL, [{
    id: 1,
    description: 'CATEGORIAS'
  }])

  socket.on(EVENT_CATEGORY_SEND_ALL, () => {
    getCategories()
      .then((data) => {
        console.log(data)
        socket.emit(EVENT_CATEGORY_RECEIVE_ALL, data)
      })
      .catch(console.error)
  })
}

module.exports = connectionCategoryEvent;
