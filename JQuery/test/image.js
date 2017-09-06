$(function() {

    var circus = $('img[name="circus"]');
    $('.headlead').bind('click',function(event){
        
        var dir = event.target.value;
        var top = circus.offset().top;
        var left = circus.offset().left;
        
        switch(dir){
                
            case "top":
                circus.offset({top:top-5,left:left});
                break;
                
            case "bottom":
                circus.offset({top:top+5,left:left});
                break;
                
            case "left":
                circus.offset({top:top,left:left-5});
                break;
                
            case "right":
                circus.offset({top:top,left:left+5});
                break;
            
            default:
                break;
        }
    });
    
        $('.headsize').bind('click',function(event){
        
        var dir = event.target.value;
        var width = circus.width();
        var height = circus.height();
        
        switch(dir){
                
            case "big":
                circus.width(width+5);
                circus.height(height+5);
                break;
                
            case "small":
                circus.width(width-5);
                circus.height(height-5);
                break;
                
            default:
                break;
        }
    });
    
})