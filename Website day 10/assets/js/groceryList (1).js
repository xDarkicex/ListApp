$(document).scroll(function() {

y = $(window).height()+$(document).scrollTop();
  if (y >= $(document).height() -500) {
    $('#ad').slideDown().fadeIn(125);
  } else {
   $('#ad').slideUp().fadeOut(125);
  }
});

$(function(){
	$("#close").click(function(){
		$('#ad').hide(125);
	});

});


function del(){
	var $list = $('li');
	console.log($list);

for (var i = 0; i < $list.length; i++) {
 // if (list[i].getAttribute("class") === "hot"){
	if ($list[i].hasAttribute("class") == true){ 
   $list[i].removeAttribute("class");
  }
}
console.log($list);
};

function odd(){
	var $list = $('li');
	console.log($list);
	for (var i = 0; i < $list.length; i+=2 ){
		
			$list[i].setAttribute("class", "cool");
		}

	}


/*
 $( "li" ).hover(
  function() {
    $( this ).addClass( "cool" );
  }, function() {
    $( this ).removeClass( "cool" );
  }
);

*/

$(document).on({
    mouseenter: function () {
        $( this ).addClass( "cool" );
    },
    mouseleave: function () {
        $( this ).removeClass( "cool" );
    },

    click: function() {
    	if(/complete/.test($(this).class)) {
    		
    	}
    	else {
  		  $( this ).addClass( "favorite" );
    	}
    	$( this ).removeClass( "complete");
    	addTolist();
    },
    dblclick: function(){
	    $( this ).removeClass( "favorite");
	    $(this).addClass("complete");
	    addTolist();
	    $(this).animate({opacity:0.0, left: '+=240'},300, 'swing', function() {
	    	$('ul').append($(this).detach());
	    	$(this).animate({opacity: 1,left: '-=240'}, 300, 'swing');
	    });
	}

}, "li"); //pass the element as an argument to .on

function save () {
	localStorage.setItem("list",JSON.stringify($("li")));
	// var muhlist = [];
	// $("li").each(function(index,element) {
	// 	muhlist[muhlist.length] = element.textContent;
	// 	//console.log(element.textContent);
	// });
	// localStorage.setItem("list",muhlist.stringify;
	console.log(localStorage.list);
}
function load () {
	$("ul").html(JSON.parse(localStorage.list));
}

$(document).on({
	click : function(e) {
		if(e.target.id != "whateverthefuck"){
			console.log(e);
			window.open("http://www.gnc.com/home/index.jsp");
		}
	}

}, ".adWrapper");

function addTolist(){
	var list = [];
	$('li.favorite').each(function(index,element) {
		list[list.length] = element.textContent;
	});
	$('p#notes').html(list.join("<br />"));
	$('#counter').text($('li').length);
}


function add(){
		var arr = ["Red Salad", "bleu Cheese", "chet","Potato Chips", "Toast", "Beets", "Cherries", "Hot Dogs", "chicken", "Beef", "Pork", "Chips", "Apples", "Tea", "Limes"]
		var randomArr = arr[Math.floor(Math.random()*arr.length)];
	newLi(randomArr);
}



function addUserShit(){
	var arr = document.getElementsByTagName('input')[0].value;
	newLi(arr);
}

function newLi(text) {
	var list = document.getElementsByTagName('ul')[0];	
	var newElm = document.createElement('li');
	var newtxt = document.createTextNode(text);
	newElm.appendChild(newtxt);
	
	var match;
	if (/ch[e3]+[t7]/i.test(text)){
		return alert("Error chet Not Valid NAME!");
	}

	else if(/(?:\w{3,}\:\/{2,})?(?:\S+\.){1,}\S+(?:\/\.+?)?/i.test(text)){
			return alert("Error No URL!");
	}

	else if(/[^\w\s]/i.test(text)){
		return alert("Error Not Valid input!");
	}
	else if(match = /(chevy|car|ford|toyota|honda|iphone)/i.exec(text)){
		return alert(" "+match[1].toUpperCase()+" IS NOT FOOD!");
	}

	if (text.length < 1){

		return alert("Error Must Be Over 1 Character");
	}
	list.appendChild(newElm);
}
function remove(){

	var arr = document.getElementsByTagName('li');
	var arr2 = document.getElementsByTagName('ul')[0];
	var removeThisShit=[];
	for(var i = 0; i < arr.length; i++){
			if (/complete/.test(arr[i].getAttribute("class"))) {
				//arr2.removeChild(arr[i]);	
				removeThisShit[removeThisShit.length] = arr[i];
			}
	}
	for(var i=0; i< removeThisShit.length; i++) {
		arr2.removeChild(removeThisShit[i]);
	}
	addTolist();
}


//annoying ad
function blinker() {
    $('.adWrapper > button > span').fadeOut(200).fadeIn(100);
};

setInterval(blinker, 1000); 
$(function (){addTolist();});

