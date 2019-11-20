$(document).ready(function(){
    for(let i = 0; i < pictures.length; i++){
        var firstDiv = $('<div class="col-12 col-lg-3 col-md-4">')
        firstDiv.attr('id',pictures[i].id)
        $('#pict').append(firstDiv)
        var card = $('<div class="card lg-mx-3 my-3">')
        $(firstDiv).append(card)
        var image = $(' <img src="" class="card-img-top my-5" alt="..." id="round">')
        image.attr('src',pictures[i].url)
        var cardBody = $('<div class="card-body1 text-center">')
        $(card).append(image,cardBody)
        var h5 = $('<h5 class="card-title"></h5>')
        h5.html(pictures[i].title)
        var p = $('  <p class="card-text"></p>')
        p.html(pictures[i].subtile)
        var secondDiv = $('<div class="d-flex align-itme-center" id="lik">')
        $(cardBody).append(h5,p,secondDiv)
        var a1 = $('<a href="#"></a>')
        a1.attr('id',pictures[i].id)
        var i1 = $('<i class="fas fa-angry"></i>')
        $(a1).append(i1)
        var votes = $(' <p class="px-3"id="num"></p>')
        votes.attr('idvotes',pictures[i].id)
        votes.html(pictures[i].votes)
        var a2 = $('<a href="#"></a>')
        a2.attr('id2',pictures[i].id)
        var i2 = $('<i class="fas fa-heart">')
        $(a2).append(i2)
        $(secondDiv).append(a1,votes,a2)

        a1.click(function(){


                $(votes).html(function(i, val){
                    return val -1;
                })
                
        })
        console.log(a1)
            a2.click(function(){
            $("#num").html(function(i, val){
                return val *1+1;
            });
        });
    }

});