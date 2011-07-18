# strftime
Just another attempt at formatting JavaScript dates using the ** cough ** familiar strftime syntax.
I wrote this for a tool that enables you to build up the strftime format string interactively. You can check it out in [action here](http://haochi.github.com/strftime/).

# usage
`strftime` is a method on the Date object as well as Date.prototype. To for a specific instance of the Date object, you can do 

    var date = new Date(2011, 0, 1);
    date.strftime("%s"); // returns 1293858000, the number of seconds since the Epoch
or if you would like to format the current time:

    Date.strftime("%s");

# tests
I haven't gotten around to write tests yet, so use with care!
