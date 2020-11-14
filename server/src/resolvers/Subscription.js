const newMessageSubscribe = (parent, args, context, info) => {
    return context.pubsub.asyncIterator("NEW_MSG")
};
  
const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload => {
        return payload
    },
};

module.exports = {
    newMessage,
};