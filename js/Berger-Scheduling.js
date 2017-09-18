/*
**贝格尔编排算法
**numOfTeam : 参赛队伍数组
**return : 对阵数组
*/
function BergerScheduling(teamArray) {
	//参赛队伍
    var teams = new Array();
    teams = teamArray;
    //参赛队伍数量
    var numOfTeam = teamArray.length;
	try{
        if(numOfTeam<=2)
            throw "请输入多于两个参赛队伍";
    }catch(err){
        alert(err);
    }
	//轮数数组
	//参赛队伍是偶数则返回数组长度为numberTeam-1,奇数的话长度就是numberTeam
    var rounds = new Array(numOfTeam % 2 == 0 ? numOfTeam - 1 : numOfTeam);
    //转动间隔数  
    var jump = parseInt((numOfTeam+numOfTeam%2-4)/2);
    //将数组编排成左右两竖排U型
    var divide = numOfTeam%2==0?numOfTeam/2:parseInt(numOfTeam/2)+1;
    //左侧
    var left = teams.slice(0,divide);
    //右侧
    var right = teams.slice(divide);
    //队伍数量为奇数往右侧最上加一个零
    if(right.length < left.length)
        right.push("轮空");
    //拿到U型阵右侧最上方一个元素
    var fixed = right.slice(-1)[0];
    //颠倒右侧数组，使
    right.reverse();
    for(var a=0; a<rounds.length; a++){
    	//tmp是每场比赛的对阵队伍，将其挨个压入轮数rounds数组中
        rounds[a] = new Array();
        var tmp = '';
        for(var b=0; b<right.length; b++){
            tmp = left[b]+'-'+right[b];
            rounds[a].push(tmp);
        }
        //rounds数组一行装满，开始逆时针旋转阵型
        var moveToLeft,moveToRight; 
        //a从0开始，即第奇次转换       
        if(a%2>0){
            left.shift();
            moveToleft = right.slice(0,jump+2).reverse();
            moveToRight = left.slice(-jump-1).reverse();                       
            left = moveToleft;
            right = moveToRight;
            right.unshift(fixed);            
        }else{//第偶次转换
            right.shift();
            moveToleft = right.slice(0,jump).reverse();
            moveToRight = left.slice(-jump-1).reverse();            
            left = moveToleft.concat(left.slice(0,left.length-jump-1));
            left.unshift(fixed);
            right = right.slice(jump).concat(moveToRight);
        }
    } 
    return rounds;    
}
