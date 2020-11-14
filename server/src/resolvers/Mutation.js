let pubInterval;

const command = (root, {name, message}, context) => {    
    switch (name) {
        case 'FLY':
            if (!pubInterval) {
                pubInterval = setInterval(() => {
                    let newMsg = Math.floor(Math.random() * 1000) + 1;
                    context.pubsub.publish("NEW_MSG", `${newMsg}`);
                }, 1000);
            }
            break;
        case 'LAND':
            clearInterval(pubInterval);
            pubInterval = null;
            context.pubsub.publish("NEW_MSG", `${message}`);
            break;
    }

    return "success";
};

module.exports = {
    command,
};