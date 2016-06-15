
 gTableDesc = {
     mail:{
         name:"pay.notify",
         countkey:"cpprivate",
         orderkey:"transtime",
         kv:[
             {text:"玩家", dbkey:"cpprivate", class:"left aligned"},
             {text:"金钱", dbkey:"money", headtag:'<i class="yellow icon dollar"></i>'},
             {text:"时间", dbkey:"transtime"},
         ],
     },
     character:{
         name:"as_game.tb_character",
         countkey:"charnid",
         orderkey:"level",
         kv:[
             {text:"ID", dbkey:"charnid"},
             {text:"角色名", dbkey:"charsid", filter:"string"},
             {text:"职业", dbkey:"class"},
             {text:"等级", dbkey:"level", filter:"int"},
             {text:"最后上线时间", dbkey:"LastConnTime", type:"time"},
         ],
     }
 }