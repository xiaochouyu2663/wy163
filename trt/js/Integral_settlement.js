window.onload=function(){

        Integral_settlement();
    function Integral_settlement(){
    	var body = document.querySelector('body');
    	var modify = document.querySelector('.modify');
    	var user_ipt = document.querySelector('.user-name-ipt');
    	var cell_ipt = document.querySelector('.cell-phone-ipt');
    	var address_ipt = document.querySelector('.address-ipt');
    	var user_p = document.querySelector('.user-p');
    	var cell_p = document.querySelector('.cell-p');
    	var address_p = document.querySelector('.address-p');
    	var btn_commodity_details = document.querySelector('.btn-commodity-details');
    	var commodity_box = document.querySelector('.commodity-box');
    	var b = true;
    	var back = document.querySelector('.back');
			 	back.onclick=function(){
			 		window.history.go(-1);
			 }
//  	modify.onclick=function(){
//  		if(b){
//	    		address_ipt.value=address_p.innerHTML;
//	    		cell_ipt.value=cell_p.innerHTML;
//	    		user_ipt.value=user_p.innerHTML;
//	    		
//	    		address_ipt.style.display="block";
//	    		cell_ipt.style.display="block";
//	    		user_ipt.style.display="block";
//	    		
//	    		address_p.style.display="none";
//	    		cell_p.style.display="none";
//	    		user_p.style.display="none";
//	    		b=false;
//  		}else{
//  			address_p.innerHTML=address_ipt.value;
//	    		cell_p.innerHTML=cell_ipt.value;
//	    		user_p.innerHTML=user_ipt.value;
//	    		
//	    		address_ipt.style.display="none";
//	    		cell_ipt.style.display="none";
//	    		user_ipt.style.display="none";
//	    		
//	    		address_p.style.display="block";
//	    		cell_p.style.display="block";
//	    		user_p.style.display="block";
//	    		b=true;
//  		}
//  	}
    	var q = true;
    	btn_commodity_details.onclick=function(){
    		if(q){
    		commodity_box.style.display="none";
    		}else{
    		commodity_box.style.display="block";
    		}
    		q=!q;
    	}
    }
}