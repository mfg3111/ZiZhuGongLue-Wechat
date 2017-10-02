$(function(){
	// 页面1 图片动画
	setTimeout(function(){
		$('#page1 .biaoti').css({'opacity':'1'})
	},1500);
	setTimeout(function(){
		$('#page1 .ren').css({'opacity':'1'});
	},2000);
	setTimeout(function(){
		$('#page1 .han').css({'opacity':'1'});
	},2500);
	//让页面1向上滚动到看不到的地方
	setTimeout(function(){
		$('#page1').animate({'top':'-100%'},500);
		$('#page2').animate({'top':'0%'},450);
		$('#page3').animate({'top':'100%'},500);
	},3000);
	// 页面2问题点击变换背景颜色和跳转页面
	$('#page2 ul li').click(function(){
		var c = $(this).index();
		$('#page2 ul li').find('.red_font,.white_bj').css({'opacity':'1'});
		$(this).find('.red_font,.white_bj').css({'opacity':'0'}).siblings('li');
		$('#page2').animate({'top':'-100%'},500);
		$('#page3').animate({'top':'0'},500);
		$('#page3 .page3_list').eq(c).css({'display':'block'}).siblings('.page3_list').css({'display':'none'});
	$('#page3 .huida ul li').find('span').removeClass('gou');
	onoff=0;
	})

	// 页面3点击单选问题
	 var onoff=0;
	$('#page3 .huida ul li').click(function(){
		$('#page3 .huida ul li').find('span').removeClass('gou');
		$(this).find('span').addClass('gou');
		onoff=1;
	})

	// 页面3点击textarea和tips提示图片
	$('#page3 .huida textarea').click(function(){
		$(this).css('opacity','1');
		$('#page3 .huida .tips').css('display','none');
	})
	$('#page3 .huida .tips').click(function(){
		$(this).css('display','none');
		$('#page3 .huida textarea').css('opacity','1');
	})

	//页面3就是TA了
	var kacha=document.getElementById('audio');
	var slide=$('#page3 .slide');
	$('#page3 .is_TA').click(function(){
		if(onoff!=1){
			alert('请选择一个');
		}
		else{
			$('#page3 .slide').animate({'height':'50%'},500);
			$('#page3 .slide').animate({'height':'0'},500);
			setTimeout(function(){
				kacha.play();
			},500)
		}
	})


	//页面3换个问题
	$('#page3 .huan_wenti').click(function(){
		$('#page1').animate({'top':'-200%'},500);
		$('#page2').animate({'top':'0'},500);
		$('#page3').animate({'top':'100%'},500);
		$('#page2 .white_bj , #page2 .red_font').css({'opacity':'1'});
	})








})

























