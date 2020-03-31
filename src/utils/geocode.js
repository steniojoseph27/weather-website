const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?types=address&access_token=pk.eyJ1Ijoic3Rlbmlvam9zZXBoIiwiYSI6ImNrODIxZ2tzbjBjeGozc253ZWJ6dHZ2OW8ifQ.xw0q0yySlgl4LQGFUPPNtw&limit=1'

    request({ url, json: true}, (error, { body }) => {
        if (error){
            return callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            return callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode