# reactorjs
Reactor JS is a highly modular and powerful framework designed to help you create custom web designs with much less code.


GETTING STARTED
To get started quickly, Reactor JS has only two dependencies. The Jquery library and Angular JS. Reactor utilizes Angular to load pages and allow them to communicate with each other. Reactor relies on this functionality to function properly.

The only other dependency is naturally Jquery, as Reactor JS is written in Jquery and Javascript.

CDN
You can use the Reactor Framework by copying the link below from our cdn or downloading it from our server.

<script src="https://scorpionedge.com/reactorjs.js"></script>Copy
WHAT IS REACTOR JS?
Reactor JS is a highly modular and powerful framework designed to help you create custom web designs with much less code.

The Reactor JS framework enables a web developer to build an instance of an html component and pass that component to another page where it is rendered as many times as you like. Then, initiating your variables as data-ids in your html elements, you can produce the required output.

If that sounds complicated, here's an example to make it very simple.

EXAMPLE DEMO
We would like to design a featured products page component for an e-commerce website. We go ahead and design the component as shown below. We can first create a new page to write this code in. Let's name it productComponent.html. This page is called a Provider page in ReactorJS



productComponent.html
<div class="reactorapp" data-appid="1">
	
</div>Copy
The first thing we do is wrap our code in a div with class name "reactorapp". Every component in Reactor must be contained inside the reactorapp div. We also initialize the app id of the reactorapp div through the data attribute "appid". We'll set data-appid="1" since it is our first app.

Next we will add our main html elements with which we wish to build our products, as we would do in normal html design.

<div class="reactor">
    <img src='{img1}'>
    <h4>{title}</h4>
    <p>{price}</p>
    <hr/>
    <p>{descript}</p>
    <button>Add To Cart</button>
</div>Copy
The code above seems like perfectly normal code except for a few things worth to note.

First, a reactor component is always written inside the indentifier class div called "reactor".Second, the content of that variable element must contain the variable name surrounded by brackets as so: {varname}. Images & videos are the only exception, the variable goes inside the src attribute as displayed above.

Now we must declare those variables before we can use them so that they can be processed by Reactor. This can be done like so. (this code is added above or below the previous code.

<reactor-vars>{title, price, descript}</reactor-vars>
<reactor-imgs>{img1}</reactor-imgs>Copy
This part is self-explanatory. We are simply declaring the variables we wish to use in our component above. Note that all variables are declared in the reactor-vars tag except images, which are declared in the reactor-imgs tag.

Our final code for the productComponents.html page should look like this.

<!DOCTYPE HTML>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Product Component</title>
    </head>
	<body>
        <div class="reactorapp" data-appid="1">
            <reactor-vars>{img, title, price, descript}</reactor-vars>
			<reactor-imgs>{img1}</reactor-imgs>

            <div class="reactor">
                <img src='{img1}'>
                <h4>{title}</h4>
                <p>{price}</p>
                <hr/>
                <p>{descript}</p>
                <button>Add To Cart</button>
            </div>
		</div>
	</body> 
</html>Copy
Now we can go ahead and create our Products page which will contain our featured products as displayed in an online shopping website. This page is called the Receiver page in ReactorJS.

Here we wish to create 3 different products. We can do the following.

Our products.htmlpage must first contain the following:

We wrap our page content inside a div with class "app1" to reference our productComponent which has the data attribute app1, so that they may communicate. Then we add to the body the typical ng-app attribute:

<body ng-app="">
    <div class="app1">
		
	</div>
</body>Copy
We must also have Angular import our productComponent page.

<div ng-include="'flex.html'"></div>Copy
Then our page content will contain each product we wish to display. We iniate the data-ids for each div. the convention is "data-" followed by our variable names, like so:

<div class="container"> <!-- container class name is not important, any class name can be provided-->
                    
    <reactor-x data-img1="images/p1.jpg" data-title="Women's Dresses" data-price="$450.00" data-descript="Quality women's tops made with authentic wool."></reactor-x>
    <reactor-x data-img1="images/p2.jpg" data-title="Women's Skirts" data-price="$350.00" data-descript="Quality Women's skirts shirts made to last. Fit and stretch"></reactor-x>
    <reactor-x data-img1="images/p3.jpg" data-title="Men's T-Shirts" data-price="$150.00" data-descript="Strecth quality men's button shirts made to last."></reactor-x>
            
</div>Copy
The requirements are the following.

The product containers must be tags called reactor-x. The data attributes must match the variables we declared back in the productComponent page. Therefore we have data attributes data-img1, data-title, data-price, etc.

That completes the designing of the products page using Reactor JS.

RESULT
The result is a powerful, flexible and modular method of designing multiple components of different features. All this done with as minimal coding as possible.

This design can be extended to every page we create. Each Provider Page should contain the reactorapp div, followed by the data attribute "data-appid(n)", where n is any number greater or equal to 0. Each Receiver Page contains simply the class name app(n), where n is the matching value of the data attribute in the Provider page page which imports the receiver page. In other words if the provider page contains the data attribute "appid1", then the receiever page must contain the main div with class "app1". This ensures the provider page communicates appropriately with the receiver page.

DOWNLOAD STARTER PROJECT
Download this starter project to quickly get started with a demo project made with Reactor JS. Use it to learn and get familiar with the framework, so you can udnerstand how to make use of its powerful features and modular structure for your web designs and other projects.

Download Reactor JS v2.2.1
FLEXIBILITY
Reactor JS is highly flexible and modular. We can make use of multiple different pages (or apps) in a modular fashion and import them all on one page through angular imports, or we can store multiple apps on a single page, each having its own appid. For instance, in flexibility terms, we can have multiple provider apps stored in one single page and they can all individually link (communicate) with multiple receiver apps also stored in a single page. In modularity terms we can also use a single app per page to keep components modular and organized.
