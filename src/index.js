const app = require('http').createServer((request, response) => console.log(request, response))
const io = require('socket.io')(app);
const {EVENT_CONNECTION} = require('../constants/event-constant')

const PORT = process.env.NODE_PORT || 3000

app.listen(PORT, () => {
  console.log('>--------------------------------------------------');
  console.log('>--------------------------------------------------');
  console.log('>--------------------------------------------------');
  console.log('> URL: http://localhost:' + PORT);
  console.log('> ENV: ' + process.env.NODE_ENV);
  console.log('> INIT DATE: ' + new Date);
  console.log('>--------------------------------------------------');
  console.log('>--------------------------------------------------');
  console.log('>--------------------------------------------------');
});

const connectionEvent = require('./controllers/connection-controller')
io.on(EVENT_CONNECTION, connectionEvent);

const {EVENT_CATEGORY_CONNECTION} = require('../constants/category/event-constant')
const connectionCategoryEvent = require('./controllers/category/connection-controller')

const categorySocket = io.of('/category')
  .on(EVENT_CATEGORY_CONNECTION, (socket) => connectionCategoryEvent(categorySocket, socket))