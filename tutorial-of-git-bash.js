window.onload=function(){
 	
	function $(id){
		return document.getElementById(id);
	}
 	
		//为节点elem在某两个类名间切换,类名不得为空;
		function switchClasses(elem,className1,className2){
			if(!className1 || !className2){
				console.warn("switchClasses()失败,类名不得为空.");
				return false;
			}
			var	arr=elem.className.split(" "),
					hasClassName1=false,
					hasClassName2=false;
			for(var i in arr){
				if(arr[i]==className1){
					arr[i]=className2;
					hasClassName1=true;
				}
			}
			if(!hasClassName1){
				for(var i in arr){
					if(arr[i]==className2){
						arr[i]=className1;
						hasClassName2=true;
					}
				}
				if(!hasClassName2){
					console.warn("switchClasses()失败,两个类名均不存在.");
					return false;
				}
			}
			elem.className=arr.join(" ");
			return true;
		}
		
 	document.getElementsByClassName("small-img")[0].onclick=function(){
		switchClasses(this,"big-img","small-img");
		this.focus();
	}
 	
 	
 	
}
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
