const axios = require('axios');

class BmiController {

    static getBmi(req, res, next) {
        const { weight, height } = req.body
        axios({
            method: `get`,
            url: `https://gabamnml-health-v1.p.rapidapi.com/bmi?weight=${Number(weight)}&height=${Number(height)/100}`,
            headers: {
                'X-RapidAPI-Key': `783caae55fmsh847910fcf055d06p1dc77ejsne42e1cd53737`,
                'X-RapidAPI-Host': `gabamnml-health-v1.p.rapidapi.com`
            }
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(next)
    }

}

module.exports = BmiController