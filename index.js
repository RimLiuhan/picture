let $div_global = $('.global');

let main = function() {

    setInterval(function() {
        let $divs = $('<div class = add_div>杂鱼~💖~</div>');
        $divs.css({
            position: "absolute",
            top: Math.random() * 1000,
            left: Math.random() * 1600,
            "text-align": "center",
            "line-height": "100px"
        });
        $div_global.append($divs);
    }, 500);
    
}

export {main}