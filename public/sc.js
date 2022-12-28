alert("Hello, how are you ?");
// We can add <script> tag in <Head> section and it will run perfectly,
// but it will affect loading time of your page.
// if we want to add any analytics(google or other SEO),
// related script inside the page then we can write it inside the 
// <Head> tag.  <Head> is provided by "next/head" which is used for to edit or manipulate head section 
//of any page directally.
//Same thing is available for the script. "next/script" provide <Script> where we can add
// any script and we can schedule loading time of the script like before page loading or afterpage loading
//or lazyload.
//with the help of "strategy" keyword we can set schedule of script loading.
// <Script> is not usable inside the <Head>.
