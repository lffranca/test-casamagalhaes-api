const {
  EVENT_CATEGORY_RECEIVE_ALL,
  EVENT_CATEGORY_SEND_ALL,
  EVENT_CATEGORY_NEW,
  EVENT_CATEGORY_EDIT,
  EVENT_CATEGORY_REMOVE
} = require('../../../constants/category/event-constant')
const {getCategories, updateCategory, createCategory, deleteCategory} = require('../../models/category-model')

const connectionCategoryEvent = (io, socket) => {
  getCategories()
    .then((data) => {
      // console.log(data)
      socket.emit(EVENT_CATEGORY_RECEIVE_ALL, data)
    })
    .catch(console.error)

  socket.on(EVENT_CATEGORY_NEW, (dataEvent) => {
    console.log(dataEvent)
    createCategory(dataEvent)
      .then(() => {
        return getCategories()
          .then((data) => {
            io.emit(EVENT_CATEGORY_RECEIVE_ALL, data)
          })
      })
      .catch(console.error)
  })

  socket.on(EVENT_CATEGORY_EDIT, (dataEvent) => {
    updateCategory(dataEvent)
      .then(() => {
        return getCategories()
          .then((data) => {
            io.emit(EVENT_CATEGORY_RECEIVE_ALL, data)
          })
      })
      .catch(console.error)
  })

  socket.on(EVENT_CATEGORY_REMOVE, (dataEvent) => {
    deleteCategory(dataEvent)
      .then(() => {
        return getCategories()
          .then((data) => {
            io.emit(EVENT_CATEGORY_RECEIVE_ALL, data)
          })
      })
      .catch(console.error)
  })

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
