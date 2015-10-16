$(document).scroll(function() {

y = $(window).height()+$(document).scrollTop();
  if (y >= $(document).height() -500) {
    $('#ad').slideDown().fadeIn(125);
  } else {
   $('#ad').slideUp().fadeOut(125);
  }
});

// $(function(){
// 	$("#closeList").click(function(){
// 		$('#userInput').hide(20);
// 		$('#addNew').show(20);
// 	});

// });


function removeUserinput(){
	
		$('#userInput').slideUp('slow');
		$('#addNew').show();
        $('#closeList').hide('fast');

};

$(function(){
	$("#close").click(function(){
		$('#ad').slideUp('slow');
	});

});

$(function(){
	$('#addNew').click(function(){
		$('#userInput').slideDown();
		$('#addNew').hide(20);
	});

});




function del(){
	var $list = $('li');


for (var i = 0; i < $list.length; i++) {
 // if (list[i].getAttribute("class") === "hot"){
	if ($list[i].hasAttribute("class") == true){ 
   $list[i].removeAttribute("class");
   addTolist();
  }
}

};

function clearList(){
	$('li').remove();
	addTolist();
	}


$(function(){
	$('button').click(function(){
		$('#sideMenu').toggle('slow');

	});



});



$(document).on({
    mouseenter: function () {
        $('#userInput').append('<div id="closeList"> <img onClick="removeUserinput()" id="closeAddlist" src="assets/images/close.png"></div>');
    },
    mouseleave: function () {
        $('#closeList').detach();
    },
}, "#userInput");


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
		var arr = ["Red Salad", "Quinoa", "Bleu Cheese", "Soy Sauce", "Kale", "Almond Milk", "Cashew Nut Butter", "Organic Free Range Eggs", "Apples", "Pears", "Carrots", "Leeks", "Avocado", "Coconut", "Baby Leaf Spinach", "Goats Cheese", "Red Onions", "Ginger", "Garlic", "Figs", "Pine Nuts", "Organic Honey", "Balsamic Vinegar", "Linguine", "Cream", "Coconut Milk", "Mushrooms", "Organic Bacon", "Strawberries", "Rice Crackers", "Brie", "Organic Thai Rice", "Japanese Imported Green Tea", "Vine Ripened Tomatoes", "Bananas", "Red Kidney Beans", "Haricot Beans", "Organic Lettuce", "Organic Brown Rice Vinegar", "Sushi Nori", "Chili Oil", "Sourdough Bread", "Coconut Oil", "Lemons","Potato Chips", "Daves Killer Bread", "Beets", "Cherries", "Hot Dogs", "Organic Free Range Chicken", "Organic Beef", "Organic Pork", "Organic Dark Chocolate Chips", "Organic Fiji Apples", "Ravens Brew Dark Roast Coffee Beans", "Limes"]
		var randomArr = arr[Math.floor(Math.random()*arr.length)];
	newLi(randomArr);
	addTolist();

}



function addUserShit(){
	var arr = document.getElementsByTagName('input')[0].value;
	
 var frm = document.getElementsByName('foodList')[0];

   frm.reset();  // Reset

	newLi(arr);
	addTolist();
}


function newLi(text) {
	var list = document.getElementsByTagName('ul')[0];	
	var newElm = document.createElement('li');
	var newtxt = document.createTextNode(text);
	$(newElm).slideDown(250).append(newtxt);

	//newElm.appendChild(newtxt);
	
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
	else if(match = /(chevy|ford|toyota|honda|iphone)/i.exec(text)){
		return alert(" "+match[1].toUpperCase()+" IS NOT FOOD!");
	}

	if (text.length < 1){

		return alert("Error Must Be Over 1 Character");
	}
	//list.appendChild(newElm);
	$(list).slideDown(250).append(newElm);

}






$('.buttonDel').click(function(){





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

	});

//annoying ad
function blinker() {
    $('.adWrapper > button > span').fadeOut(200).fadeIn(100);
};

setInterval(blinker, 1000); 
$(function (){addTolist();});

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();