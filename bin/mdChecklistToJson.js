var md = require( "markdown" ).markdown;
var fs = require('fs');
fs.readFile( __dirname + '/sample.md', function (err, data) {
  if (err) {
    throw err;
  }
  var tree = md.parse( data.toString() );
  var json = {
    name:"",
    group_categories: []
  };
  var current_categories = -1;
  var current_group_categories = -1;
  var current_task= -1;
  var current_links = -1;
  tree.map((group,i) => {
    if(group[0] === 'header'){
       if(group[1].level === 1){
          json.name = group[2];

       }
       if(group[1].level === 2 ){
          current_group_categories++;
          current_categories = -1;
          json.group_categories[current_group_categories] = {title_group: group[2],categories:[]};
       }
       if(group[1].level === 3){
         current_categories++;
         current_task=-1;
         json.group_categories[current_group_categories].categories[current_categories] = {title: group[2], tasks: []};
       }
    }
    if(group[0] === 'bulletlist'){
      group.map((line) =>{
        current_links = -1;
        if(line !== 'bulletlist'){
          current_task++;
          json.group_categories[current_group_categories].categories[current_categories].tasks[current_task]={priority: "medium"};

          line.map((item) => {
            console.log(item);
            if(item !== 'listitem'){
              if(item instanceof Array){
                if(item[0] === 'inlinecode'){
                  if(json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].title === undefined){
                    json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].title = "";
                  }
                  json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].title += item[1];
                }
                if(item[0] === 'link'){
                  current_links++;
                  if(json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].links === undefined){
                    json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].links = [];
                  }
                  json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].links[current_links] = {
                    path: item[1].href,
                    text: item[2],
                    type: "link"
                  };
                }
              }else{
                if(json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].title === undefined){
                  json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].title = "";
                }
                json.group_categories[current_group_categories].categories[current_categories].tasks[current_task].title += item;
              }
            }
          });
        }
      });
    }
  });

  fs.writeFile("sample.json", JSON.stringify(json), function(err) {
    if(err) {
      throw err;
    }
    console.log("The file was converted and saved in bin/sample.json !");
  });
});
