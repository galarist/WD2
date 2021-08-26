window.addEventListener("scroll", function () {
    var elementTarget = document.getElementById("header");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        document.getElementById('nav').classList.add('fixed');
    } else {
        document.getElementById('nav').classList.remove('fixed');
    }
});

function myFunction(x) {
    x.classList.toggle("change");
    if (x.classList.contains("change")) {
        var element = document.getElementById("myDIV");
        element.classList.add("mystyle");
    } else {
        var element = document.getElementById("myDIV");
        element.classList.remove("mystyle");
    }
}


document.write(`
    <header id="header">
        <div class="bg-image">
            <div class="bg-text">
                <h1>ABC Optical</h1>
                <h2>We sell ophthalmic glasses, sunglasses and contact lenses. We specialise in optical requirements for children.</h2>
                <img src="img/logo.png" alt="">
            </div>
        </div>
    </header>
    <nav id="nav">
    <ul>
    <div class="container" onmouseover="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div id="myDIV" class="dropdown-content">
        <ul>
            <li>
                <a href="./">Home</a>
            </li>
            <li>
                <a href="./details.html">Details</a>
            </li>
            <li>
                <a href="./book.html">Booking</a>
            </li>
            <li>
                <a href="./blog.html">Blog</a>
            </li>
            <li>
                <a href="./contact.html">Contact</a>
            </li>
        </ul>
        </div>
    </div>
        <li>
            <a href="./">Home</a>
        </li>
        <li>
            <a href="./details.html">Details</a>
        </li>
        <li>
            <a href="./book.html">Booking</a>
        </li>
        <li>
            <a href="./blog.html">Blog</a>
        </li>
        <li>
            <a href="./contact.html">Contact</a>
        </li>
    </ul>
    </nav>
    `);