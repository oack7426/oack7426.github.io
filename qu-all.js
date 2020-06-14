//********答案不要往這裡找ＱＷＱ **********//

$(function () {
    // qu-1
    $('#qu-1 button').on('click', function () {
        var text = $('#qu-1 input').val();
        (text == "0910110633") ? alert('恭喜你答對啦'): alert('錯誤');
    });

    //qu-2
    $('#qu-2 button').on('click', function () {
        var text = $('#qu-2 input').val();
        (text == "addcn2020") ? alert('恭喜你答對啦'): alert('錯誤');
    });

    //qu-3
    $('#qu-3 button').on('click', function () {
        var text = $('#qu-3 input').val();
        (text == "133") ? alert('恭喜你答對啦'): alert('錯誤');
    });

    //qu-4
    if ($('#hidden').length > 0) {
        setTimeout(function () {
            $('#hidden').remove();
        }, 10);
    };
    $('#qu-4 button').on('click', function () {
        var text = $('#qu-4 input').val();
        (text == "run2020") ? alert('恭喜你答對啦'): alert('錯誤');
    });


});