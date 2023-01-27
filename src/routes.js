const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookIdHandler } = require('./handler')

const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBookHandler
}, {
  method: 'GET',
  path: '/books',
  handler: getAllBookHandler
}, {
  method: 'GET',
  path: '/books/{id}',
  handler: getBookByIdHandler
}, {
  method: 'PUT',
  path: '/books/{id}',
  handler: editBookByIdHandler
}, {
  method: 'Delete',
  path: '/books/{id}',
  handler: deleteBookIdHandler
}]

module.exports = routes
