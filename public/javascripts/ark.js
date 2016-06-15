/**
 * Created by Administrator on 2016-6-14.
 */
$(function () {
    $('#gSelect').click(function () {
        $('.gSelect.modal').modal('show');
    });

    $(".action input")
        .popup({on:'focus'});

    $('.combo.dropdown')
        .dropdown({
            action: 'combo'
        })
    ;
});