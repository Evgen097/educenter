var random = Math.floor((Math.random() * 400) + 1);
var width_of_game_field = $(".game_field" ).width()-100;
var time_for_append_word = 1000;
var time_for_mowing_word = 10000;
var time_for_remowing_word = 1000;
var size_for_moving_word = 1000;
var game_field_height = $( ".game_field" ).height();

var time_for_append_cards = 1000
var time_for_mowing_cards = 10000;
var current_game_score = 0;
var game_score_change_arrs = 0;
var move_progress_bar_step = 5;

var game_audio_bul = document.getElementsByTagName("audio")[0];
var game_audio_wrong = document.getElementsByTagName("audio")[1];
function random_func(max_numb) {
    random = Math.floor((Math.random() * max_numb) + 1);
    return random;
};


window.onresize = function () {
    width_of_game_field = $(".game_field" ).width()-100;
    game_field_height = $( ".game_field" ).height();
}

$("documetnt").ready(function() {
    //current_width = document.documentElement.clientWidth;
    current_height = document.documentElement.clientHeight;
    if(current_height < 750){
        $(".game_row" ).css("height", current_height + 'px');
        $(".game_field" ).css("height", current_height + 'px');
        game_field_height = $( ".game_field" ).height();
    }
});


//$( ".game_field" ).append( $( "<div class='game_world'/>" ).css('left', random + 'px').html('123') );
var word_arr = ['apple', 'pen', 'news', 'film', 'woter'];
var colors_arr = ['DarkSlateGrey', 'BlueViolet', 'DeepSkyBlue', 'Magenta', 'Chocolate', 'MediumSpringGreen'];
var key_word_arr = {
    apple: "яблоко",
    pen: "ручка",
    news: "новости",
    film: "фильм",
    woter: "вода",
    z: '25'
};

var pecture_arr = [];
var key_pecture_arr = [];
var pecture_arr_animals_1 = ['bat', 'beaver', 'behemoth',
    'bird', 'camel', 'chicken', 'chipmunk', 'cow', 'crab', 'crocodile'];
var key_pecture_arr_animals_1 = {
    bat: "img/word_picture/animals/1/bat",
    beaver: "img/word_picture/animals/1/beaver",
    behemoth: "img/word_picture/animals/1/behemoth",
    bird: "img/word_picture/animals/1/bird",
    camel: "img/word_picture/animals/1/camel",
    chicken: "img/word_picture/animals/1/chicken",
    chipmunk: "img/word_picture/animals/1/chipmunk",
    cow: "img/word_picture/animals/1/cow",
    crab: "img/word_picture/animals/1/crab",
    crocodile: "img/word_picture/animals/1/crocodile",
    z: '25'
};

/*
var pecture_arr_vegitable = ['apple', 'carrot', 'cherry',
    'cucumber', 'eggplant', 'onion', 'orange', 'pepper', 'pineapple', 'whatermelon'];
var key_pecture_arr_vegitable = {
    apple: "img/word_picture/vegitable/apple",
    carrot: "img/word_picture/vegitable/carrot",
    cherry: "img/word_picture/vegitable/cherry",
    cucumber: "img/word_picture/vegitable/cucumber",
    eggplant: "img/word_picture/vegitable/eggplant",
    onion: "img/word_picture/vegitable/onion",
    orange: "img/word_picture/vegitable/orange",
    pepper: "img/word_picture/vegitable/pepper",
    pineapple: "img/word_picture/vegitable/pineapple",
    whatermelon: "img/word_picture/vegitable/whatermelon",
    z: '25'
};

var pecture_arr_animals = ['beaver', 'cow', 'fox', 'fish',
    'octopus', 'shark', 'whale'];
var key_pecture_arr_animals = {
    beaver: "img/word_picture/animals/beaver",
    cow: "img/word_picture/animals/cow",
    fish: "img/word_picture/animals/fish",
    fox: "img/word_picture/animals/fox",
    octopus: "img/word_picture/animals/octopus",
    shark: "img/word_picture/animals/shark",
    whale: "img/word_picture/animals/whale",
    z: '25'
};
var pecture_arr_sport = ['billiards', 'bowling', 'chess', 'darts',
    'golf'];
var key_pecture_arr_sport = {
    billiards: "img/word_picture/sport/billiards",
    bowling: "img/word_picture/sport/bowling",
    chess: "img/word_picture/sport/chess",
    darts: "img/word_picture/sport/darts",
    golf: "img/word_picture/sport/golf",
    z: '25'
};
*/


var previos_width_for_cards  = 0;
var height_for_apending_cards = 0;
var previos_arr_cards = 0;
var current_cards_arr = [];
function append_cards() {
    for (i = 0; i < 1; i++) {
        switch (game_score_change_arrs ) {
            case 0:
                pecture_arr = pecture_arr_animals_1;
                key_pecture_arr = key_pecture_arr_animals_1;
                current_cards_arr = [].concat(pecture_arr);
                break;
            case 10:
                pecture_arr = pecture_arr_animals_2;
                key_pecture_arr = key_pecture_arr_animals_2;
                current_cards_arr = [].concat(pecture_arr);
                break;
            case 20:
                pecture_arr = pecture_arr_animals_3;
                key_pecture_arr = key_pecture_arr_animals_3;
                current_cards_arr = [].concat(pecture_arr);
                break;
            case 30:
                pecture_arr = pecture_arr_animals_4;
                key_pecture_arr = key_pecture_arr_animals_4;
                current_cards_arr = [].concat(pecture_arr);
                break;
            case 40:
                pecture_arr = pecture_arr_home;
                key_pecture_arr = key_pecture_arr_home;
                current_cards_arr = [].concat(pecture_arr);
                break;
            case 55:
                pecture_arr = pecture_arr_profession;
                key_pecture_arr = key_pecture_arr_profession;
                current_cards_arr = [].concat(pecture_arr);
                break;
            case 70:
                pecture_arr = pecture_arr_trans_sport;
                key_pecture_arr = key_pecture_arr_trans_sport;
                current_cards_arr = [].concat(pecture_arr);
                break;
            case 85:
                pecture_arr = pecture_arr_vegitable ;
                key_pecture_arr = key_pecture_arr_vegitable ;
                current_cards_arr = [].concat(pecture_arr);
                break;

        };

        var random_width_of_field  = random_func(width_of_game_field);
        if(current_cards_arr.length == 0){current_cards_arr = [].concat(pecture_arr);}
        var apending_cards = $( "<div class='game_card'/>" );





        //console.log(current_cards_arr);
        //console.log(current_cards_arr);
        //current_cards_arr.splice(random_number_cards, 1);



        if (random_width_of_field<previos_width_for_cards){random_width_of_field-=100;}
        if (previos_width_for_cards<random_width_of_field){random_width_of_field+=100;}
        if (random_width_of_field>width_of_game_field){random_width_of_field=10;};
        if (random_width_of_field<0){random_width_of_field=width_of_game_field-80;};

        previos_width_for_cards = random_width_of_field;



        apending_cards = apending_cards.css('left', random_width_of_field + 'px');
        apending_cards = apending_cards.css('top', '10px');
        apending_cards  = apending_cards.css('top', '-100px');



        if ($('.win_card').length == 0) {
            if  (random_func(1)==1){
                var random_number_cards = random_func(current_cards_arr.length)-1;
                var random_world  = current_cards_arr[random_number_cards];
                current_cards_arr.splice(random_number_cards, 1);
                apending_cards = apending_cards.html(random_world);
                apending_cards = apending_cards.addClass("win_card");
                $( ".game_win_word_place" ).html(random_world);
                apending_cards = apending_cards.css('background-image', 'url(' + key_pecture_arr[random_world] + '.png)');
            }
        } else {
            var random_number_cards = random_func(pecture_arr.length)-1;
            var random_world  = pecture_arr[random_number_cards];
            apending_cards = apending_cards.html(random_world);
            apending_cards = apending_cards.css('background-image', 'url(' + key_pecture_arr[random_world] + '.png)');
        }

        $( ".game_field" ).append( apending_cards);

        switch (random_func(7)) {
            case 1:
                apending_cards = apending_cards.animate({left: width_of_game_field-50, top: game_field_height+50,}, time_for_mowing_cards);
                //console.log(1);
                break;
            case 2:
                apending_cards  = apending_cards.animate({left: 0, top: game_field_height+50,}, time_for_mowing_cards);
                //console.log(2);
                break;
            default:
                apending_cards  = apending_cards.animate({top: game_field_height+50,}, time_for_mowing_cards);
            //console.log("defalt");
        }

        if  (random_func(10)==1){apending_cards = apending_cards.addClass("roteting_word");};

        remowing_cards_func();
        console.log($(".game_card").length);
    }
};

var timer_append_cards = setInterval(append_cards, time_for_append_cards);
function remowing_cards_func() {
    $( ".game_card" ).each(function() {
        var position = $( this ).position();
        if(position.top>game_field_height){$( this ).remove();}
    });
}



var div_game_progress_bar = $( ".game_progress_bar" );;
var progress_bar_trigger = 1;
//$( ".game_field" ).mouseenter(function() {$( this ).css('cursor', 'pointer');})

$( ".game_field" ).mouseenter(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
    }else{
        $( this ).css('cursor', 'pointer');}
    if(progress_bar_trigger == 1){show_progress_bar(); progress_bar_trigger=0;}})
    .mouseleave(function() {progress_bar_trigger=1;});
function show_progress_bar() {
    div_game_progress_bar.animate({height: 80+'%'}, 500);
    div_game_progress_bar.animate({height: current_game_score+'%'}, 500);
    //div_game_progress_bar.css('height', current_game_score+'%' );
}

$(".game_field").on("click", ".game_card",
    function change_card_close (event) {
        event.stopPropagation();
        if($(this).html()==$( ".game_win_word_place" ).html()){
            event.stopPropagation();
            $(this).remove();
            $(".win_card").removeClass("win_card");
            $( ".game_win_word_place" ).html("!win!");
            current_game_score +=1;
            game_score_change_arrs +=1;
            if (game_score_change_arrs > 100){game_score_change_arrs = 0}
            $( ".game_score_current_div" ).html(current_game_score);
            move_progress_bar();
            game_audio_bul.play();
        }else{game_audio_wrong.play();}
    });
function move_progress_bar() {
    if (current_game_score < 80) {
        $( ".game_progress_bar" ).css('height', current_game_score+'%' );
    }else{
        $( ".game_progress_bar" ).css('display','none' );
        $( ".game_score" ).css('display','block' );
    }


}


//var timerId = setInterval(function() {console.log( "тик" );}, 5000);

/*


 var run_bottom_bar;
 function show_progress_bar() {
 progress_bar_trigger=0;
 //$(".game_progress_bar").css('background-color', colors_arr[random_func(5)]);
 var run_top_bar = setInterval(show_bar_top, 20);

 function show_bar_top() {
 if (show_progress_bar_step >= 80) {
 run_bottom_bar = setInterval(show_bar_bottom, 50);
 clearInterval(run_top_bar);
 } else {
 console.log('3');
 show_progress_bar_step += 5;
 $(".game_progress_bar").css('height', show_progress_bar_step + '%');
 }
 }

 function show_bar_bottom() {
 if (show_progress_bar_step <= move_progress_bar_step) {
 $( ".game_progress_bar" ).css('height', move_progress_bar_step+'%' );
 clearInterval(run_bottom_bar);
 } else {
 show_progress_bar_step -= 5;
 $(".game_progress_bar").css('height', show_progress_bar_step + '%');
 }
 }
 }


 $( ".game_field" ).mouseenter(function() {$( this ).css('cursor', 'pointer');})
 .mouseleave(function() {});

 function remowing_word_func() {
 $( ".game_world" ).each(function() {
 var position = $( this ).position();
 if(position.top>game_field_height){$( this ).remove();}
 });
 }


 var previos_width_for_word  = 0;
 var height_for_apending_word = 0;
 var previos_arr_word  = 0;
 function append_word() {
 for (i = 0; i < 1; i++) {
 var random_width_of_field  = random_func(width_of_game_field);
 //var random_height_of_field  = random_func(5)*10;
 var random_number_word = random_func(word_arr.length)-1;
 while(random_number_word==previos_arr_word ){random_number_word = random_func(word_arr.length)-1;};
 previos_arr_word=random_number_word;

 var random_world  = word_arr[random_number_word];
 var apending_word = $( "<div class='game_world'/>" );

 if (random_width_of_field<previos_width_for_word){random_width_of_field-=80;}
 if (previos_width_for_word<random_width_of_field){random_width_of_field+=80;}
 if (random_width_of_field>width_of_game_field){random_width_of_field=10;};
 if (random_width_of_field<0){random_width_of_field=width_of_game_field-10;};

 previos_width_for_word = random_width_of_field;

 apending_word = apending_word.css('left', random_width_of_field + 'px');

 apending_word = apending_word.css('top', '-50px');
 apending_word = apending_word.html(random_world);
 apending_word.css('background-color', colors_arr[random_func(5)]);

 if ($('.win_world').length == 0) {
 if  (random_func(1)==1){
 apending_word = apending_word.addClass("win_world");
 $( ".game_win_word_place" ).html(key_word_arr[random_world]);
 };
 };
 $( ".game_field" ).append( apending_word);

 //$(this).animate({left: "+="+i,}, 2000);
 //apending_word = apending_word.animate({top: 400,}, 10000);

 switch (random_func(5)) {
 case 1:
 apending_word = apending_word.animate({left: width_of_game_field, top: game_field_height+50,}, time_for_mowing_word);
 //console.log(1);
 break;
 case 2:
 apending_word = apending_word.animate({left: 0, top: game_field_height+50,}, time_for_mowing_word);
 //console.log(2);
 break;
 default:
 apending_word = apending_word.animate({top: game_field_height+50,}, time_for_mowing_word);
 //console.log("defalt");
 }
 if  (random_func(5)==1){apending_word = apending_word.addClass("roteting_word");};
 $( ".game_world" ).mouseenter(function() {$( this ).css('background-color', 'red');})
 .mouseleave(function() {$( this ).css('background-color', colors_arr[random_func(5)]);
 });
 remowing_word_func();
 //console.log($('.game_world').length);

 }
 };
 //var timer_append_word = setInterval(append_word, time_for_append_word);









 function remowing_word_func() {
 $( ".game_world" ).each(function() {
 //var position = $( this ).position();
 //var position_top = position.top + size_for_moving_word ;
 //if(position.top>$( ".game_field" ).height()){$( this ).remove();}
 //$( this ).css('top', position_top + 'px');
 //var position_top = position.top + size_for_moving_word ;
 //$( this ).css('top', position_top + 'px');
 var position = $( this ).position();
 if(position.top>game_field_height){$( this ).remove();}


 });
 }




 switch (random_func(3)) {
 case 1: apending_word = apending_word.animate({left: 400, top: 400,}, 10000);
 break;
 case 2: apending_word = apending_word.addClass("roteting_word").animate({left: 400, top: 400,}, 10000);
 break;
 default: apending_word = apending_word.animate({top: 400,}, 10000);
 }
 $(document).ready(function() {
 var rotation = function (){
 jQuery("#wrapper ul li").rotate({
 angle:30
 });
 }
 rotation();
 });


 var timer_mowing_word = setInterval(mowing_word_func, time_for_mowing_word);
 $("body").on("click", ".win_world",
 function change_width_close (event) {
 console.log($( this ).html());
 $(".win_world").remove();
 $( ".game_win_word_place" ).html("you gesssed!!!");


 });

 if (previos_width_for_word<random_width_of_field+80){
 random_width_of_field+=80;
 if (random_width_of_field>width_of_game_field){
 random_width_of_field-=width_of_game_field;
 };
 previos_width_for_word = random_width_of_field;
 };



 //function append_word() {
 for (i = 0; i < 1; i++) {
 var random_width_of_field  = random_func(width_of_game_field);
 var random_height_of_field  = random_func(100);
 var random_number_word = random_func(word_arr.length)-1
 var random_world  = word_arr[random_number_word];
 var apending_word = $( "<div class='game_world'/>" );
 apending_word = apending_word.css('left', random_width_of_field + 'px');
 apending_word= apending_word.css('top',  random_height_of_field+'px');
 apending_word = apending_word.html(random_world);

 var width_of_curent_word= apending_word.width();
 if (previos_width_for_word<random_width_of_field+width_of_curent_word){
 random_width_of_field+=width_of_curent_word;
 previos_width_for_word = random_width_of_field;
 };

 if ($('.win_world').length == 0) {
 apending_word = apending_word.addClass("win_world");
 $( ".game_win_word_place" ).html(key_word_arr[random_world]);}
 $( ".game_field" ).append( apending_word);
 }
 };

 var random_width_of_field  = random_func(width_of_game_field);
 function append_word() {
 var random_number_word = random_func(word_arr.length)-1
 var random_world  = word_arr[random_number_word];
 var apending_word = $( "<div class='game_world'/>" );
 $( ".game_field" ).append( $( "<div class='game_world'/>" ).css('left', random_width_of_field + 'px').css('top',  '0px').html(random_world) );
 $( ".game_win_word_place" ).html(key_word_arr.random_world);
 console.log($('.win_world').length);
 if ($('.win_world').length == 0) {
 $( ".game_field" ).append( $( "<div class='game_world'/>" ).addClass("win_world").css('left', random_width_of_field + 'px').css('top',  '0px').html(random_world));
 $( ".game_win_word_place" ).html(key_word_arr[random_world]);

 }

 function mowing_word_func() {
 //console.log('working')
 $( ".game_world" ).each(function( i ) {
 var top_koord = $(this).offset().top;
 top_koord= -0.0001;
 console.log($(this).offset().top);
 this.style.top = top_koord+"px";
 });
 }



 var nweItem = $("<p>This is a new</p>");
 $("#para2").html(newItem.html());
 */