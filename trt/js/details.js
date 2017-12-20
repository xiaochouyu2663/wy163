window.onload=function(){
	setFontSize();

        function setFontSize() {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        }
        details();
        function details(){
        	var reduce = document.querySelector('.reduce');
        	var plus = document.querySelector('.plus');
        	var num = document.querySelector('.numm');
        	var a = 1;
        	num.innerHTML = a;
        	reduce.onclick=function(){
        		
        		if(a<=1){
        			return;
        		}
        		a--;
        		num.innerHTML = a;
        	}
        	plus.onclick=function(){
        		a++;
        		num.innerHTML = a;
        	}
        }
}