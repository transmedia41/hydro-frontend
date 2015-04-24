$('.pannelClose').click(function() {
console.log('click');

$('footer').hide();

});


/*for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent*/
$('.pull-down').each(function() {
    $(this).css('margin-top', $(this).parent().height()-$(this).height()-25)
});


//Initialisation circle
var influence = $('.circle_1').attr('data-influence');
   $('#circle').circleProgress({
        value: influence,
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

    size: 80,
    value: influence,
    startAngle: Math.PI /2,
    thickness: 8,
    fill: {
            gradient: ['#9e1915']
        }
}).on('circle-animation-progress', function(event,progress, influence) {
	$(this).find('strong').html('<i>'+parseInt((influence*100))+'%</i>');
/*     $(this).find('strong').html(parseInt(100 * influence) + '<i>%</i>'); */
});



//-- XP Loader
var xp = $('.fill').attr('data-xp');
$('.fill').animate({
    width: xp+"%"
  }, 1000);
  
  



//---Galerie Image
$(function(){$('.imgGD').hide();})


$('.imgThumb').click(function() {
$(".imgGD").toggle();
});

 var DIR = 'img/soft-scraps-icons/';

    var nodes = null;
    var edges = null;
    var network = null;

    // Called when the Visualization API is loaded.
    function draw() {
      // create people.
      // value corresponds with the age of the person
      var DIR = 'img/';
      nodes = [
        {id: 1,  value: 15,  shape: 'image', label: 'Paolo Salvatore', title: 'BOSS', image: DIR + 'mafiosiAvatar.png'},
       
        {id: 2,  value: 12, shape: 'image', label: 'Marina Ferlichi', title: 'Ragazzina', image: DIR + 'mafiosiAvatar.png'},
        {id: 3,  value: 12, shape: 'image', label: 'Hecto Pravadelli', title: 'La Salamandre', image: DIR + 'mafiosiAvatar.png'},
        {id: 4,  value: 12, shape: 'image', label: 'Fabio Berazino', title: 'Lindo', image: DIR + 'mafiosiAvatar.png'},
       
        {id: 5,  value: 13, shape: 'image', label: 'Lucas Salvatore', title: 'Chicco', image: DIR + 'mafiosiAvatar.png'},
       
        {id: 6,  value: 12, shape: 'image', label: 'Alessandra Salvatore', title: 'Coscienza', image: DIR + 'mafiosiAvatar.png'},

        {id: 7,  value: 11,  shape: 'image', label: 'Luigi Salvatore', title: 'Luigi Gras Doigts', image: DIR + 'mafiosiAvatar.png'},
        {id: 8,  value: 10,  shape: 'image', label: 'Ruccio Ferlichi', title: 'La Gâchette', image: DIR + 'mafiosiAvatar.png'},
        
        {id: 9,  value: 11, shape: 'image', label: 'Tino Drucci', title: 'Le Dé', image: DIR + 'mafiosiAvatar.png'},
        {id: 10, value: 10, shape: 'image', label: 'Emilio Angello', title: 'Le Parleur', image: DIR + 'mafiosiAvatar.png'},
        
        {id: 11, value: 11, shape: 'image', label: 'Eleonora Gambino', title: 'Le Deux Lames', image: DIR + 'mafiosiAvatar.png'},
        {id: 12, value: 10, shape: 'image', label: 'Pietro Delua', title: 'Le Duc', image: DIR + 'mafiosiAvatar.png'}
      ];

      // create connetions between people
      // value corresponds with the amount of contact between two people
      edges = [
        {from: 1, to: 2, value: 2, color: '#14333d', title: 'Associés'},
        {from: 1, to: 3, value: 2, color: '#14333d', title: 'Associés'},
        {from: 1, to: 4, value: 2, color: '#14333d', title: 'Associés'},

        {from: 1, to: 5, value: 5, title: 'Sous-Boss'},

        {from: 1, to: 6, value: 5, title: 'Conseillère'},

        {from: 1, to: 7, value: 2, title: 'Capos'},
        {from: 7, to: 8, value: 2, title: 'Soldat'},

        {from: 1, to: 9, value: 2, title: 'Capos'},
        {from: 9, to: 10, value: 2, title: 'Soldat'},

        {from: 1, to: 11, value: 2, title: 'Capos'},
        {from: 11, to: 12, value: 2, title: 'Soldat'},
        /*
        {from: 1, to: 7, value: 1,color: 'lightgray', title: 'Soldat'},
        {from: 1, to: 8, value: 1, color: 'lightgray',title: 'Soldat'},
        {from: 1, to: 9, value: 1, color: 'lightgray',title: 'Soldat'},
        {from: 1, to: 10, value: 1,color: 'lightgray', title: 'Soldat'},
        {from: 1, to: 11, value: 1,color: 'lightgray', title: 'Soldat'},
        {from: 1, to: 12, value: 1, color: 'lightgray',title: 'Soldat'},
        //Sous-Boss
        {from: 2, to: 7, value: 1,color: 'lightgray', title: 'Soldat'},
        {from: 2, to: 8, value: 1, color: 'lightgray',title: 'Soldat'},
        {from: 2, to: 9, value: 1, color: 'lightgray',title: 'Soldat'},
        {from: 2, to: 10, value: 1,color: 'lightgray', title: 'Soldat'},
        {from: 2, to: 11, value: 1,color: 'lightgray', title: 'Soldat'},
        {from: 2, to: 12, value: 1, color: 'lightgray',title: 'Soldat'}
*/
      
      ];



      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };


      var options = {
         //hierarchicalLayout: true,
        width:  '100%',
        borderWidth: 1,
         

        nodes: {
          hover: true,
          widthMin: 50,  // min width in pixels
          widthMax: 150  // max width in pixels
        },

        edges: {
          widthMin: 1,
          widthMax:10,
          hover: false,
          click: false,
          selectable: false,
          color: '#817874',
          hoverWidth: 8
          
        }
      };
      network = new vis.Network(container, data, options);
      network.on("resize", function(params) {console.log(params.width,params.height)});
      network.on('select', function (properties) {
      console.log('selected nodes: ', properties.nodes);
});







    }
