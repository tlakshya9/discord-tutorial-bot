module.exports.run = (client, message, args, api) => {
    let mesg = args.join(" ");
    if (!mesg) return message.channel.send("Please say something.");
   
    api.chatbot(mesg).then(msg => {
        message.channel.send(msg);
    })
}

module.exports.help = {
    name: "chat"
};
