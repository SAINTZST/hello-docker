
var helloDocker = ((req, res) => {
    return res.status(200).send('Hello Docker')
})

module.exports = {
    helloDocker
}