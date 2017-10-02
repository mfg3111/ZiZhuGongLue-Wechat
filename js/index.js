
$(function(){
	setTimeout(function(){
		$('.page1').animate({'top':'-100%'},500);
	},3500);
	setTimeout(function(){
		$('.page2').animate({'top':'0'},500);
	},3500);


	// 页面2点击问题跳转效果
	$('.page2 .list .quest').click(function(){
		var c = $(this).index();
		$(this).css({'opacity':'0'}).siblings('.white').css({'opacity':'0'});
		$('.page1').animate({'top':'-200%'},500);
		$('.page2').animate({'top':'-100%'},500);
		$('.page3').animate({'top':'0%'},500);
		$('.page3_bg .Answer .radio span').removeClass('on');
		onoff=0;
	})
	

	//页面3点击单选答案
	var onoff=0;
	var re=null;
	$('.page3_bg .Answer .radio').click(function(){
		$('.page3_bg .Answer .radio span').removeClass('on');
		re=$(this).find('span');
		re.addClass('on');
		onoff=1;
	})

	// 页面3输入框输入理想答案
	$('.page3 .Answer textarea').click(function(){
		$(this).css({'opacity':'1'});
	})
	$('.page3 .Answer .tips').click(function(){
		$(this).css({'display':'none'});
	})
	

	//页面3就是他了按钮
	$('.p1_b1').click(function(){
		// var page3_cover = $('.page3_cover').height();
		var kacha = document.getElementById('kacha');	
		if(onoff!=1){
			alert('请选择一个吧');
		}
		if(onoff==1){
			$('.page3_cover').animate({'height':'50%'},300);
			$('.page3_cover').animate({'height':'0%'},300);
		kacha.play();
		}
	})

	//页面3换个问题按钮
	$('.btn_box .p1_b2').click(function(){
		$('.page3').animate({'top':'100%'},500);
			$('.page2').animate({'top':'0'},500);
			
			//页面2的问题背景色改变
			$('.quest').css({'opacity':'1'});
			$('.white').css({'opacity':'1'});
	})
})



window.onload=function(){
	var quest=document.getElementsByClassName('quest');
	var page3_bg=document.getElementsByClassName('page3_bg');
	var No1 = document.getElementsByClassName('No1_img')[0];
	var No2 = document.getElementsByClassName('No2_img')[0];
	var No4 = document.getElementsByClassName('No4_img')[0];

	//页面1的图片的动画
	function No1_img(){
		No1.style.opacity='1';
	}
	function No2_img(){
		No2.style.opacity='1';
	}
	function No4_img(){
		No4.style.opacity='1';
	}
	//页面1的图片的出来的时间
	setTimeout(No1_img,1000);
	setTimeout(No2_img,2000);
	setTimeout(No4_img,3000);


	//点击页面2的问题，跳转到不同的页面3
	for(var i=0;i<quest.length;i++){
		quest[i].index=i;
		quest[i].onclick=function(){
			for(var i=0;i<page3_bg.length;i++){
				page3_bg[i].style.display='none';
			}
			page3_bg[this.index].style.display='block';
		}
	}
}







