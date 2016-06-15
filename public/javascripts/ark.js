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
    $('.dropdown.button')
        .dropdown({on:'click'});

    $('.sortable.table').tablesort();

    $('#viewSearch').click(function(){
        //post('/users',{page:2})
    })
});

function post(URL, PARAMS) {
    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";
    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        // alert(opt.name)
        temp.appendChild(opt);
    }
    document.body.appendChild(temp);
    temp.submit();
    return temp;
}

//调用方法 如
//post('pages/statisticsJsp/excel.action', {html :prnhtml,cm1:'sdsddsd',cm2:'haha'});