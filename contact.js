//@charset Shift_jis

// �J�e�S���[�ʃ����N�̓���ݒ�
(function ($){
	
	function setToggel(id){
		return function (){
			
			$('.contact-category-now').removeClass('contact-category-now');
			
			if( $(id).css('display') === 'block' ){
				console.log('block����');
				$('div.contact-detail').hide();
			}
			else{
				console.log('block�Ȃ�');
				$("div.contact-detail").hide();
				$(id).css('display','block');
				$(this).parent('li').addClass('contact-category-now');
			}
			
			
			
		};
	}

	$('a.contact-category-linkElem').map(
		function (n,x){
			$(x).click( setToggel('div#contact-detail-'+$(x).attr('linkData')) );
		}
	);
})($jq183)


//�u��ʁv�u�r�W�l�X�v�̐؂�ւ�
(function ($){

//contact-normallyTel
//contact-businessTel

function flagListConst(){return ['contact1Business','contact3All','contact2Normally'];}

function getFlag(list){
	result = list.map(
		function (x){
			r = flagListConst().map(function (y){return x===y ? y : '';});
			return r.reduce(function (p,c){return p + c});
		}).filter(function (x){return x!=='';}
	);
	return result.length === 0 ? '' : (result.sort())[0] ;
}

function setUnshow(flag){
	
	f = function (select){console.log('hide()�̎��{->',select);$(select).hide();}
	
	if(flag==='contact1Business'){
		f('.contact-normallyTel');
	}
	else if(flag==='contact2Normally'){
		f('.contact-businessTel');
	}
	else{
	}
}

(function (list){
	console.log('list:=',list);
	console.log('getFlag(list):=',getFlag(list));
	setUnshow(getFlag(list))
})(location.search.substring(1).split('&'));

})($jq183);


