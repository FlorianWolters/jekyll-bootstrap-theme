/**
 * @fileOverview This file has functions related to jQuery FancyBox.
 * @author <a href="mailto:florian.wolters.85@googlemail.com">Florian Wolters</a>
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
            overlay: {
                opacity: 0.75,
                css: {
                    'background-color': '#000'
                }
            },
            buttons: {
            },
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
