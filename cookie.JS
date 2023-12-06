/*
JavaScript can create, read, and delete cookies with the document.cookie property



Create a Cookie with JavaScript
With JavaScript, a cookie can be created like this:
*/
document.cookie= 'username= vinicios algusto';



/*
You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
*/
document.cookie= 'username= vinicios algusto; expires= Thu, 18 Dec 2024 12:00:00 UTC';



/*
With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
*/
document.cookie= 'username= vinicios algusto; expires= Thu, 18 Dec 2024 12:00:00 UTC; path=/';



/*
Read a Cookie with JavaScript
With JavaScript, cookies can be read like this:
*/
let cookie= document.cookie;



/*
document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
*/



/*
Change a Cookie with JavaScript
With JavaScript, you can change a cookie the same way as you create it:
*/
document.cookie= 'username= vinicios neves; expires= Thu, 18 Dec 2024 12:00:00 UTC; path=/';



/*
Delete a Cookie with JavaScript

Deleting a cookie is very simple.
You don't have to specify a cookie value when you delete a cookie.
Just set the expires parameter to a past date:
*/
document.cookie= 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'