/*
JavaScript can create, read, and delete cookies with the document.cookie property



Create a Cookie with JavaScript
With JavaScript, a cookie can be created like this:
*/
document.cookie= "username=viniciosalgusto; expires= Thu, 1 January 2039 12:00:00 UTC; path=/";






/*
You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
*/
document.cookie= 'username= viniciosalgusto; expires= Thu, 18 Dec 2024 12:00:00 UTC';





/*
With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
*/
document.cookie= 'username= viniciosalgusto; expires= Thu, 18 Dec 2024 12:00:00 UTC; path=/';

//console.log(document.cookie);

document.getElementById('d').innerHTML= document.cookie;
/*
Read a Cookie with JavaScript
With JavaScript, cookies can be read like this:
*/
const cookie= document.cookie;



/*
document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
*/



/*
Change a Cookie with JavaScript
With JavaScript, you can change a cookie the same way as you create it:
*/
document.cookie= 'username= viniciosneves; expires= Thu, 18 Dec 2024 12:00:00 UTC; path=/';



/*
Delete a Cookie with JavaScript

Deleting a cookie is very simple.
You don't have to specify a cookie value when you delete a cookie.
Just set the expires parameter to a past date:
*/
//document.cookie= 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';


/*function Getcookie (cname){
    const cookie= "" + document.cookie;
    const 
}*/



function setCookie(cname, cvalue, cexpires){
    const dateExpires = new Date();
    dateExpires.setTime(dateExpires.getDate() + (cexpires * 24 * 60 * 60 * 1000));
    const expires = "expires=" + dateExpires.toUTCString();
    document.cookie= cname + '=' + cvalue + ';' + expires + ';path=/';
}

function deleteCookie(cname) {
    setCookie(cname, null, null);
}


setCookie("name", "nome1", 36);
setCookie("lastname", "nome2", 36);


console.log(document.cookie);
document.getElementById('d').innerHTML= document.cookie;
