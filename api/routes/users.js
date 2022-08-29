const { Channel, connect, Connection } = require("amqplib");
const rabbitConfig  = require("../config/rabbitmq");
const express = require('express');
const router = express.Router();

router.post('/', async function(req, res, next) {
  
  try {
    const queue = rabbitConfig.options.queue_quikdev;

    const rabbitConn = await connect(rabbitConfig.url);
    const rabbitChannel = await rabbitConn.createChannel();
    await rabbitChannel.assertQueue(queue);

    const buffer = Buffer.from(JSON.stringify(req.body), "utf8");

    rabbitChannel.sendToQueue(queue, buffer);
    
    res.send({success: true}, 201);
  } catch (error) {
    console.error(error);
    res.send("error", 500);
  } 

});

module.exports = router;
