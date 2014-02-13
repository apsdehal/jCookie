##jQuery Cookie Plugin

Simplified Javascript Cookie creation

###About
Plugin to create, read and delete cookies in javascript with ease.
###Usage

```html
<script type="text/javascript" src="jquery.js"/>
<!-- Must include jQuery before including plugin -->
<script type="text/javascript" src="jquery.cart.js">
```

$.cookie global variable contains all the method to set, read and delete cookies.

```javascript
$.cookie.create( name, value, options );
/* Function to create cookie with provided name and value
options: Object to be passed with extra value of duration (value to be given in days), path, secure
For e.g. {duration: 4, path: '/', domain: 'github.com', secure: ''} Defaults are {duration: '', path:'/',domain: '', secure:''}
*/

$.cookie.get( name );
//Method to get the value set in cookie with key = name

$.cookie.erase( name );
//Method to erase cookies with key = name
```

