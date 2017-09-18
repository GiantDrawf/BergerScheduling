/*
**用于显示结果的方法
**clean() : 清除输入框内的输入
**teams : 参赛队伍数组，这里我已经初始化了一部分参赛队伍
*/
function clean(){
<<<<<<< HEAD
	document.getElementById('name').value = "";
=======
    document.getElementById('name').value = "";
>>>>>>> gh-pages
}
window.onload = function(){
    var teams = ['华北电力大学','北京交通大学','南京信息工程大学','南京林业大学','复旦大学','北京人民大学','河北大学','EDG','RNG'];
    var listname = document.getElementById('show-list-name');
    var btn_save = document.getElementById('save');
    var btn_ok = document.getElementById('ok');
    var box = document.getElementById('show');
    btn_save.onclick = function(){
        var name = document.getElementById('name').value;
        if(name != ""){
            teams.push(name);
            var str = '<li class="list-group-item listHead">参赛队伍/共'+teams.length+'支</li>';
            for(var i in teams){
                str = str+'<li class="list-group-item">'+teams[i]+'</li>';
            }
            listname.innerHTML = str;
            clean();
        }else{
            alert('请输入正确的参赛队伍名');
        }
    };
    btn_ok.onclick = function(){
        var match = BergerScheduling(teams);
        var str = '';
        var key = new Array(),
            value = new Array();
        var rounds = match.length;
        var numOfEveryRounds = (rounds + rounds%2)/2;
        for(var i in match){
            for(var j in match[i]){
                key.push(match[i][j].split('-')[0]);
                value.push(match[i][j].split('-')[1]);  
            }
        }
        for(var i in match){
            str = str + '<div class="backstyle">'+
                        '<p class="rounds-list">第'+
                        (parseInt(i)+1)+'轮 :</p>';
            for(var j=0;j<numOfEveryRounds;j++){
                str = str +'<ul class="battle-group">'+
                       key.shift()+
                       '</li><p class="line"></p>'+
                       '<li class="value">'+
                       value.shift()+
                       '</li></ul>';
            }
            str = str + '</div>';
        }
        box.innerHTML = str;
    }
}