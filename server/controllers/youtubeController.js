const axios = require('axios')
const youtube = axios.create({
    baseURL : 'https://www.googleapis.com/youtube'
})
const YOUTUBE_TOKEN = process.env.YOUTUBE_TOKEN

class youtubeController {
    static search (req, res, next) {
        youtube.get(`/v3/search${YOUTUBE_TOKEN}${req.query.search} food&part=id`)
        .then(function ({ data }) {
            if (req.query.search) {
                data = data.filter(newData => RegExp(req.query.search, 'i').test(newData))
            }
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = youtubeController

// AIzaSyAwye9ifFpQSoShTuOa_nnbAhXbDsQaXOk

// https://www.googleapis.com/youtube/v3/search=?key=AIzaSyACtpKsGX6kCjHm-PpC9gNIjZCRaN5RrMY&q=food&part=id