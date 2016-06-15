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
    });

    $('.ui.search')
        .search({
            type          : 'category',
            minCharacters : 3,
            apiSettings   : {
                url        : '//api.github.com/search/repositories?q={query}',
                onResponse : function(githubResponse) {
                    var
                        response = {
                            results : {}
                        }
                        ;
                    if(!githubResponse || !githubResponse.items) {
                        return;
                    }
                    // translate GitHub API response to work with search
                    $.each(githubResponse.items, function(index, item) {
                        var
                            language   = item.language || 'Unknown',
                            maxResults = 8
                            ;
                        if(index >= maxResults) {
                            return false;
                        }
                        // create new language category
                        if(response.results[language] === undefined) {
                            response.results[language] = {
                                name    : language,
                                results : []
                            };
                        }
                        // add result to category
                        response.results[language].results.push({
                            title       : item.name,
                            price: 11,
                            image:"favicon.ico",
                            description : item.description,
                            url         : item.html_url,

                        });
                    });
                    return response;
                }
            }
        });

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