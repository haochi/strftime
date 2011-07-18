# Can't find your favorite language?
Fork me! Adding your language can be as easy as adding one line of code to `languages.js`! Once you are done just put in a pull request.

# Example
Say you want to add support for Python, and Python supports %a, %A, %b, %B, etc. natively, then you will add a line like below to `languages.js`:

    strftime.languages.Python = strftime.inherit('aAbBcdHIjmMpSUwWxXyYZ%');

But you realized that Python is capable of formatting %D, %F, etc. by combining various formats that it supports natively, so you can add `strftime.extend_support`
to the second parameter of `strftime.inherit`, and passing in a string of extra stuff that the language can be extended to have. The acceptable characters are 
the keys for the `strftime.commons` object (which you can add new values to if you see fit).

    strftime.languages.Python = strftime.inherit('aAbBcdHIjmMpSUwWxXyYZ%', strftime.extend_support('DFntrRT'));

You can also pass a object to the second parameter of `strftime.extend_support` if you want to add extra stuff but don't want to update the `strftime.commons` object.

    strftime.languages.Python = strftime.inherit('aAbBcdHIjmMpSUwWxXyYZ%', strftime.extend_support('DFntrRT', {s: 'lolololol' }));
