Does having a timer value less in the setTimeout affect the execution of the code? Which one gets executed first, 
a setTimeout() with 100ms timeout value or a setTimeout() with 0ms timeout value?

Which one gets executed first, a Promise or a Web API like setTimeout()? 
Which has the higher priority? A microtask queue or a Web API queue?

A promise is encountered. Here, the priority of a promise is higher than a setTimeout() and hence, 
it will be pushed to a more priority queue called the Microtask queue. 
The callbacks from the Microtask que gets executed first and then the callbacks from the Web API are taken up.
A console statement is encountered - it will be printed instantly.
