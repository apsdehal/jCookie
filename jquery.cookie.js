( function ( $ ) {

	/*@class Cookie
	 *
	 *Represents the class ot be used to interact with Javascript Cookies
	 *@constructor
	 */

	function Cookie () {
		//constructor
	}

	var CP = Cookie.prototype;

	/* function to create a cookie
	 *
	 * @param {string} name Name to be assigned to the key of cookie
	 * @param {string} value Value to be assigned to cookie
	 * @param {object} options Object to be passed with extra value of duration (value to be given in days), path, secure
	 *				   For e.g. {duration: 4, path: '/', domain: 'github.com', secure: ''} Defaults are {duration: '', path:'/',domain: '', secure:''}
	 */

	CP.create = function ( name, value, options ) {
		var expires, cookieString;

		/*You can set defaults by assigning an object to $.cookie.defaults
		this will be overridden by options passed in create function */
		options = $.extend( {}, this.defaults, options );

		if ( options.duration ) {
			var date = new Date();

			//Default duration is in day, Converting them to secondsx`
			date.setTime( date.getTime() + ( options.duration * 24 * 60 * 60 * 1000 ) );
			expires = '; expires=' + date.toGMTString();
		} else {
			expires = '';
		}

		//Create a string with all the data
		cookieString  = escape( name ) + '=' + escape( value ) + expires;
    	cookieString += options.path ? '; path=' + options.path : '';
    	cookieString += options.domain ? '; domain=' + options.domain : '';
    	cookieString += options.secure ? '; secure=' + options.secure : '';

		//Save cookie
		document.cookie = cookieString;
	};

	/* function to find a cookie with a certain index
	 *
	 * @param {string} name Name to be found ( index )
	 * @return {string|null} Value stored in cookie if found
	 */

	CP.get = function ( name ) {
		var nameEQ = escape( name ) + '=';
		var slices = document.cookie.split(';');//Split string on the bases of ;

		for ( var i = 0; i < slices.length; i++ ) {
			var slice = slices[i];
			//Get single slice which will contain different parameter
			while ( slice.charAt(0) === ' ' ) slice = slice.substring( 1, slice.length );
			//If its name of slice then return it
			if ( slice.indexOf( nameEQ ) === 0 ) return unescape( slice.substring( nameEQ.length, slice.length ) );
		}

		return null;
	};

	/* function to delete a cookie with a certain index
	 *
	 * @param {string} name Name to be deleted ( index )
	 */

	CP.erase = function ( name ) {
		this.create( name, '', -1 );
	};


	//Assign cookie object as jquery method
	$.cookie = new Cookie();

	//Set defaults for the cart
	$.cookie.defaults = {path: '/'};

} ( window.jQuery ) );