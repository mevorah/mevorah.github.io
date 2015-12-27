//Import SVG
$.get("./img/amp-column-vector2.svg", function(data){
    var $svg = $(data).find('svg');
    $svg = $svg.removeAttr('xmlns:a');
    console.log($svg);
    $('#svg-area').append($svg);
}, 'xml');