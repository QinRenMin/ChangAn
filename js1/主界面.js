var imgList=document.getElementById('img').getElementsByTagName('li');

var list=document.getElementById('index').getElementsByTagName('li');

var prev = document.getElementById('prev');

var next = document.getElementById('next');

var index=0;

var timer;

var moveImg=function(list,index) {

    for(var i=0;i<list.length;i++){

        if(list[i].className==='opa-on'){

            list[i].className='';

        }

    }

    list[index].className='opa-on';

};


var moveIndex=function(list,num){

    for(var i=0;i<list.length;i++){

        if(list[i].className==='on'){

            list[i].className='';

        }

    }

    list[num].className='on';

};


var preMove=function(){

    index-=1;

    if(index<0){

        index=4;

    }

    moveImg(imgList,index);

    moveIndex(list,index);

};


var nextMove=function(){

    index+=1;

    if(index>4){

        index=0

    }

    moveImg(imgList,index);

    moveIndex(list,index);

};


prev.onclick = function() {

    clearInterval(timer);

    preMove();

    play();

};


next.onclick = function() {

    clearInterval(timer);

    nextMove();

    play();

};


for(var i=0;i<list.length;i++){

    list[i].index=i;

    list[i].onmouseover= function () {

        var clickIndex=this.index;

        index=clickIndex;

        moveImg(imgList,index);

        moveIndex(list,index);

        clearInterval(timer);

    };

    list[i].onmouseout= function () {

        play();

    };

}


var play=function(){

    timer=setInterval(function(){

        nextMove();

    },3000);

};


play();


