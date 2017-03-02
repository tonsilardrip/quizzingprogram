var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'quizConstructor.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

app.factory('quizFactory', function() {
	var questions = [
		{
			question: "What is ng-app in AngularJS?",
			options: ["Expression", "Directive", "Modules", "Data-Binding"],
			answer: 1
		},
		{
			question: "What is this in AngularJS {{ example }} ?",
			options: ["Expression", "Modules", "Data-Binding", "Directive"],
			answer: 0
		},
		{
			question: "What does a Module do in AngularJS?",
			options: ["Defines the Data-Binding", "Defines the Expression", "Defines an Controller", "Defines an Application"],
			answer: 3
		},
		{
			question: "What name can you give the ng-controller?",
			options: ["myController", "chaseController", "aController", "All the Above"],
			answer: 3
		},
		{	
			question: "What does Data-Binding do in AngularJS?",
			options: ["Synchronize Data between the model and controller", "Synchronize Data between the model and the view", "Synchronize Data between the view and controlle", "Doesn't synchronize data between the two"],
			answer: 1
		}
	]; 

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});