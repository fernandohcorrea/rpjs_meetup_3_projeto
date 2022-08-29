const { Channel, connect, Connection } = require("amqplib");
const rabbitConfig  = require("./config/rabbitmq");

class Worker {

    constructor() {

    }

    async run (){
        const { queue_quikdev } = rabbitConfig.options;

        const rabbitConn = await connect(rabbitConfig.url);
        this.rabbitChannel = await rabbitConn.createChannel();
        this.rabbitChannel.assertQueue(queue_quikdev);
        this.rabbitChannel.prefetch(200);

        console.log(`Fila ${queue_quikdev} conectada`);

        await this.rabbitChannel.consume(queue_quikdev, async (message) => {
            if (!message) return;

            this.#workMessage(message)
              .then(() => this.rabbitChannel.ack(message))
              .catch((error) => {
                this.rabbitChannel.nack(message);
                console.error(error);
              });
          });

    }

    async #workMessage(message) {
        const msgObj = JSON.parse(message.content.toString());

        const sleep = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        await sleep(
            this.#between(1000, 6000)
        );

        console.log([new Date(), msgObj]);
    }

    #between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
    }
}

new Worker().run();