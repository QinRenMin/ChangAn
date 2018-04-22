var t1;
var a;
var t = document.getElementsByClassName('page3-rage');
var divimg = document.getElementsByClassName('page3-rage1-img');
var img = document.getElementsByClassName('page3-rage-img');
// var page3_row = document.getElementsByClassName('page3-row');
haha(t,img);
function haha(haha,img){
	for(let i=0;i<25;i++)
	{
		img[0].className = "page3-rage-img"
		t[i].onclick = function(){
			var heights = document.getElementsByClassName('page3-row');
			for(let k = 0;k<5;k++)
			{
				heights[0].className = "page3-row-back";
			}
			for(let j=0;j<25;j++)
			{

				t[0].className="page3-rage1";
				a=3;
				if(j==24)
				{
					img = document.getElementsByClassName('page3-rage-img');
					t1 = document.getElementsByClassName('page3-rage1'); 
					xixi(t1,img);
				}
			}
		}
	}
}
function xixi(xixi,img){
	// 	for(let k=0 ;k<5;k++)
	// {
	// 	// page3_row[k].style.height = 120+"px";
	// 	// page3_row[k].style.left = 0+"px";
	// }
	for(let i=0;i<25;i++)
	{

		img[0].className = "page3-rage-img1"
		xixi[i].onclick = function(){
			var heights = document.getElementsByClassName('page3-row-back');
			for(let k = 0;k<5;k++)
			{
				heights[0].className = "page3-row";
			}
			for(let j=0;j<25;j++)
			{
				divimg[j].style.backgroundImage = "url(./img/"+i+".jpg)";
				t1[0].className="page3-rage";
				if(j==24){
					t = document.getElementsByClassName('page3-rage');
					img = document.getElementsByClassName('page3-rage-img1');
					haha(t,img);				
				}
			}
		}
	}
}