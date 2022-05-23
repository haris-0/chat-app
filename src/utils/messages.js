const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, coordinate) => {
    return {
        username,
        url: `https://google.com/maps?q=${coordinate.latitude},${coordinate.longitude}`,
        createdAt: new Date().getTime()}
}

module.exports = {
    generateMessage,
    generateLocationMessage
}