const {connect} = require('amqplib')

const HOST = process.env.RABBITMQ_HOST

module.exports = {rabbitConn: connect(`amqp://${HOST}`)}
