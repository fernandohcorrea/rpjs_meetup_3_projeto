const {
    RABBIT_USER: user = "root",
    RABBIT_PASS: pass = "1q2w3e4r",
    RABBIT_HOST: host = "rabbitmq",
    RABBIT_PORT: port = "5672",
    QUEUE_QUIKDEV: queue_quikdev = "quikdev",
} = process.env;

const options = {
    user,
    pass,
    host,
    port,
    queue_quikdev
};

const url = `amqp://${user}:${pass}@${host}:${port}`;

module.exports = {
    options,
    url
}