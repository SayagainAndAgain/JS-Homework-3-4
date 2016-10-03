var questions=[{question:'Вопрос №1',answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']},
{question:'Вопрос №2',answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']},
{question:'Вопрос №3',answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']}];

var linkBootstrap=function (){
	var fileref=document.createElement('link');
	fileref.setAttribute('rel', 'stylesheet');
	fileref.setAttribute('type', 'text/css');
	fileref.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
	fileref.setAttribute('integrity', 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u');
	fileref.setAttribute('crossorigin', 'anonymous');
	document.getElementsByTagName('head')[0].appendChild(fileref);
}
linkBootstrap();

var page = {
	body : document.body,

	init : function(){
		document.body.innerHTML = '';
		document.body.style = 'background:lightgrey;';
	}(),

	addDiv : function (className){
		var div = document.createElement('div');
		div.className = className;
		div.style='text-align: center; width: 600px; margin: 0 auto; background:white;padding:20px;';
		this.wrapper = div;
		this.body.appendChild(div);
	},
	addH3 : function (text){
		var h3 = document.createElement ('h3');
		h3.innerHTML = text || '';
		this.wrapper.appendChild(h3);
		console.log('h3', this.body, this.wrapper);
	},
	addOl : function (text){
		var ol = document.createElement('ol');
		ol.innerHTML = text || '';
		ol.className = 'question-list';
		ol.style='text-align: left;'
		this.wrapper.appendChild(ol);
	},
	addQuestion : function (obj){
		var li = document.createElement('li');
		li.innerHTML = obj.question;
		var ol = document.getElementsByClassName('question-list')[0];
		ol.appendChild(li);
		for (var i in obj.answers){
			var label = document.createElement('label');
			label.style='display:block;'
			var input = document.createElement('input');
			input.type = 'checkbox';
			label.appendChild(input);
			label.innerHTML += obj.answers[i];
			ol.appendChild(label);

		}
	},
	addButton : function (text){
		var button = document.createElement('button');
		button.innerHTML = text;
		button.className ="btn btn-primary btn-lg";
		this.wrapper.appendChild(button);
	},
	drawPage : function(){
		this.addDiv('wrapper');
		this.addH3('Тест по программированию');
		this.addOl();

		for (var j in questions){
			this.addQuestion(questions[j]);
		}
		this.addButton('Проверить мои результаты');
	}

};

page.drawPage();
