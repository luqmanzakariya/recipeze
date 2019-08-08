// const axios = require('axios')
// const youtube = axios.create({
//     baseURL : 'https://www.googleapis.com/youtube'
// })

// class youtubeController {
//     static search (req, res, next) {
//         youtube.get('/v3/search')
//         .then(function ({ data }) {
//             if (req.query.search) {
//                 data = data.filter(newData => RegExp(req.query.search, 'i').test(newData.items))
//                 // console.log(data)
//             }
//             res.status(200).json(data)
//         })
//         .catch(next)
//     }
// }

// module.exports = youtubeController

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAwye9ifFpQSoShTuOa_nnbAhXbDsQaXOk&q=jagung&part=id