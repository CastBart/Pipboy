$(document).ready(() => {
    let weapons = [
        {
            "name": "44_pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        },
        {
            "name": "10mm_pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53
        },
        {
            "name": "assault_rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        }
    ]


    $(".item-list a").on("mouseenter", function (e) {
        let currentItem = $(e.currentTarget).attr("class");

        for(item in weapons){
            if(weapons[item].name == currentItem){
                let container = $(".item-stat-container");
                container.find(".damage").html(weapons[item].damage);
                container.find(".fire-rate").html(weapons[item].fire_rate);
                container.find(".accuracy").html(weapons[item].accuracy);
                container.find(".rage").html(weapons[item].range);
                container.find(".weight").html(weapons[item].weight);
                container.find(".value").html(weapons[item].value);
            }
        }
    });
})