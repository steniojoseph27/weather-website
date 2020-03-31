const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/db960adf7f455d5f039aadc16b699b6e/' + latitude + ',' + longitude

    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            return callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            return callback('Unable to find location. Try another search', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast