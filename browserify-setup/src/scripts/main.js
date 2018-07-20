const $ = require("jquery")

    $.ajax({
        url: "http://localhost:8088/food/3",
        method: "PUT",
        data: {
            "name": "Red Curry",
            "type": "curry",
            "ethnicity": "thai",
            "sideDishes": [
                "Chicken satee",
                "Samosa"
            ]
        }
    })
.then(() => {
    return $.ajax("http://localhost:8088/food")
})
.then(response => {
    console.log(response)
})