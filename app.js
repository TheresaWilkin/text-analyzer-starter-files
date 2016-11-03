$(document).ready(function(){

	$("#analyze").click(function(event){
		event.preventDefault();
		$("dl").show();	
		var txt = $("#user-text").val();
		var txtTwo = txt;
		var sentences = txtTwo.split(".");
		var characters = txt.length;
		var words = txt.split(" ");
		$(".js-word-count").text(words.length);
		var wordLength = characters / words.length;
		$(".js-word-length").text(wordLength);
		var sentLength = characters / sentences.length;
		$(".js-sent-length").text(sentLength);
		
		var wordList = [];
		var wordCount = 0;

		words.forEach(function(word) {
			if (!wordList.includes(word)) {
				wordCount++;
				wordList.push(word);
			}
		});

		$(".js-uniq-word-count").text(wordCount);

	});


})