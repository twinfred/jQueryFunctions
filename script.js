$(document).ready(function(){
    $('#click').click(function(){
        alert("Thank you for testing the .click jQuery function.");
    })
    $('#hide').click(function(){
        $('#hideAndSeek').hide();
    })
    $('#show').click(function(){
        $('#hideAndSeek').show();
    })
    $('#toggleButton').click(function(){
        $('.toggle').toggle( "fast" );
    })
    $('#slideDown').click(function(){
        $('#slide').slideDown( "slow" );
    })
    $('#slideUp').click(function(){
        $('#slide').slideUp( "fast" );
    })
    $('#fadeIn').click(function(){
        $('#fadeBox:hidden').fadeIn( "slow", function () {
            $('#fadeBar').fadeIn();
        });
    });
    $('#fadeOut').click(function(){
        $('#fadeBox').fadeOut( "slow", function () {
            $('#fadeBar').fadeOut();
        });
    });
    $('#addClass').click(function(){
        $('#class').addClass( "green" );
    })
    $('#removeClass').click(function(){
        $('#class').removeClass( "green" );
    })
    $('#addBefore').click(function(){
        $('#special').before( "<div class='pink'></div>" );
    })
    $('#addAfter').click(function(){
        $('#special').after( "<div class='pink'></div>" );
    })
    var jokeAnswer= 1;
    $('#jokeAnswer').click(function(){
        if(jokeAnswer === 1){
            $('#joke').append( " Tooth-hurty!" );
            jokeAnswer--;
        }
    })
    var funnyGif= 1;
    $('#showMeTheGif').click(function(){
        if(funnyGif === 1){
            $('#gif').html( "<img id='funnyGif' src='http://teamjimmyjoe.com/wp-content/uploads/2016/11/trump-clinton-godzilla-funny-gifs.gif' alt='funny gif'>" );
            funnyGif--;
        }
    })
    var appendAnswer= 1;
    $('#attributeAnswer').click(function(){
        if(appendAnswer === 1){
            $('#attributeAnswer').append(function() {
                var attClass = $("#attributeClass").attr("class");
                $("#AttrAns").append(attClass);
            });
            appendAnswer--;
        }
    })
    $('#valueTextBox').keyup(function(){
        var bird = $(this).val();
        $("#valueImitate").text(bird);
    })
    .keyup();

    var pineapple = 1;
    var areWeFriends = true;
    $("#yesPineapple").click(function() {
        if(pineapple == 1) {
            $("#value").data("pineappleLover", {answer: "Yes", friend: "Yes", smart: "Most definitely"});
            $("#pineappleAnswer").append($("#value").data("pineappleLover").answer);
            $("#friends").append(($("#value").data("pineappleLover").friend));
            $("#smart").append(($("#value").data("pineappleLover").smart));
            pineapple--;
        }
    })
    $("#noPineapple").click(function() {
        if(pineapple == 1) {
            $("#value").data("pineappleLover", {answer: "No", friend: "Probably not, sorry", smart: "No"});
            $("#pineappleAnswer").append($("#value").data("pineappleLover").answer);
            $("#friends").append(($("#value").data("pineappleLover").friend));
            $("#smart").append(($("#value").data("pineappleLover").smart));
            pineapple--;
        }
    })
})