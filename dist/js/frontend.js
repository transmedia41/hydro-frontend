$('.pannelClose').click(function() {
console.log('click');

$('footer').hide();

});


/*for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent*/
$('.pull-down').each(function() {
    $(this).css('margin-top', $(this).parent().height()-$(this).height())
});


//Initialisation circle
   $('#circle').circleProgress({
        value: 0.75,
        size: 80,
        thickness: 9,
        fill: {
            gradient: ["#333"]
        }
    });

   /*
 * Example 2:
 *   - default gradient
 *   - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
 */
$('.circle_1').circleProgress({
    value: 0.6, 
    size: 80,
    value: 0.75,
    thickness: 8,
    fill: {
            gradient: ["#9e1915"]
        }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});



//---Galerie Image
$(function(){$('.imgGD').hide();})


$('.imgThumb').click(function() {
$(".imgGD").toggle();
});


//organigramme
 $("#org").jOrgChart({
            chartElement : '#chart',
            dragAndDrop  : true
        });

  /* Custom jQuery for the example */
            $("#show-list").click(function(e){
                e.preventDefault();
                
                $('#list-html').toggle('fast', function(){
                    if($(this).is(':visible')){
                        $('#show-list').text('Hide underlying list.');
                        $(".topbar").fadeTo('fast',0.9);
                    }else{
                        $('#show-list').text('Show underlying list.');
                        $(".topbar").fadeTo('fast',1);                  
                    }
                });
            });
            
            $('#list-html').text($('#org').html());
            
            $("#org").bind("DOMSubtreeModified", function() {
                $('#list-html').text('');
                
                $('#list-html').text($('#org').html());
                
                prettyPrint();                
            });




