const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/db960adf7f455d5f039aadc16b699b6e/' + latitude + ',' + longitude

    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            return callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            return callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast