# Quizzing Program
![alt tag](https://c6608a5e15a32ee3c5f0-a85c761a6bd49913b8d52eb0d7ddeadd.ssl.cf2.rackcdn.com/GR49hBFran_1414168649834.jpg)

## Quizzing Program Objectives
* In this assignment we are going to make use of the following
  * Building an AngularJS view (using an HTML template)
  * Building one or more AngularJS controllers
  * Creating a service to access questions from a JSON file
  * Creating a service to store student answers in LocalStorage (you will read back scores from this)




###### Let's Get Started!

Here is an example of a JSON file. 
```
{
     "firstName": "Casper",
     "lastName": "Casper",
     "age": 18,
     "address":
     {
         "streetAddress": "1234 Russel Blvd",
         "city": "Texas",
         "state": "TX",
         "postalCode": "79xxx"
     },
     "phoneNumber":
     [
         {
           "type": "home",
           "number": "212 555-1234"
         },
         {
           "type": "fax",
           "number": "646 555-4567"
         }
     ]
 }

```


Here is an example of Local Storage
```
myModule.controller("MainController", ['$scope', 'LocalStorageService', 
                function($scope, LocalStorageService) {
                
myModule.factory("LocalStorageService", function($window, $rootScope) {
    
    angular.element($window).on('storage', function(event) {
        if (event.key === 'my-storage') {
            $rootScope.$apply();
        }
    });  

```