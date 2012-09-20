/**
 * @fileOverview This file contains functions related to jQuery FancyBox.
 * @author <a href="mailto:wolters.fl@gmail.com">Florian Wolters</a>
 * @version 1.0.0
 */

$(document).ready(function() {

    $('.fancybox').fancybox({
        maxWidth: 1920,
        maxHeight: 1080,
        fitToView: true,
        width: '100%',
        height: '100%',
        autoSize: true,
        closeBtn: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: false /*{ TODO The overlay helper destroys the layout up from version 2.1.0!
                opacity: 0.75,
                css: {
                    'background-color': '#000'
                }
            }*/,
            buttons: true,
            thumbs: {
                width: 75,
                height: 75
            }
        }
    });

    $('.fancybox img').each(function(){
        $(this).width($(this).width() * .5);
    });

});
