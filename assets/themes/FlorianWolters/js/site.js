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
        closeBtn: true,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: false,
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
