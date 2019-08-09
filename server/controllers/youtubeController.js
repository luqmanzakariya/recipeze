const axios = require('axios')
const youtube = axios.create({
    baseURL : 'https://www.googleapis.com/youtube'
})
const YOUTUBE_TOKEN = process.env.YOUTUBE_TOKEN

class youtubeController {
    static search (req, res, next) {
        youtube.get(`/v3/search?part=snippet&q=${req.query.q}&type=video&key=${YOUTUBE_TOKEN}`)
        .then(function ({ data }) {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = youtubeController

// AIzaSyAwye9ifFpQSoShTuOa_nnbAhXbDsQaXOk
// AIzaSyACtpKsGX6kCjHm-PpC9gNIjZCRaN5RrMY
