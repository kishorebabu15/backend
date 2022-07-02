const Place = require("../models/place")

exports.addRecord = (req, res) => {
    res.send("kasjdand")
}



const addd = new Place({
    placeName: "Bengaluru",
    data: [
        {
            date: Date.now(),
            market: [
                {
                    name: "62c02877bf4a232cfcd23f9c",
                    price : 100
                },
                {
                    name: "62c029755c9f90292cbea8ba",
                    price : 120
                }
            ]
        }
    ]
})

addd.save((err, data) => {
    if (err) { console.log(err) }
    console.log("savesdd")
})

