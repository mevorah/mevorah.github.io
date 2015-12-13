//JQuery Stuff
$( document ).ready(function(){

    /*
    $( ".project-cell" ).hover(
        function(){
            //Enter
            var hovered_img = $( this );
            blur_others(hovered_img, 35);
        },
        function(){
            //Exit
            var hovered_img = $( this );
            blur_others(hovered_img, 0);
        }
    );*/
  
});

function blur_others(hovered_img, blur){
    $( ".project-cell" ).each(function(){
        var other_img = $( this );
        if(!hovered_img.is( other_img )){
            var blur_text = 'blur('+blur+'px)';
            $( other_img ).css("-webkit-filter", blur_text );
        }
    });
}


