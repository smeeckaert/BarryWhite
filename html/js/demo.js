$(document).ready(function () {
    var $source = $('.source');

    $('.row.demo').each(function () {
        var $demo = $(this);
        $demo.find('.content').each(function () {
            var $content = $(this);
            var sources = $content.html().trim();
            if (sources.length) {

                var $pre = $("<pre/>").html(htmlEncode(sources)).addClass("brush: xml");
                var $newBtn = $source.clone(true);
                $newBtn.find('.src-container').append($pre);
                $newBtn.removeClass('hidden');
                $content.prepend($newBtn);

            }
        });
    });

    SyntaxHighlighter.all();

    $('body').on('click', '.source', function () {
        $(this).toggleClass('active');
    });

    function htmlEncode(value) {
        return $('<div/>').text(value).html();
    }

    function htmlDecode(value) {
        return $('<div/>').html(value).text();
    }

});