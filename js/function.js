window.addEventListener("scroll", function () {
    var elementTarget = document.getElementById("header");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        document.getElementById('nav').classList.add('fixed');
    } else {
        document.getElementById('nav').classList.remove('fixed');
    }
});

function openFunction(x) {
    x.classList.toggle("change");
    var element = document.getElementById("dropdownContent");
    element.classList.add("mystyle");
}

function closeFunction(x) {
    x.classList.toggle("change");
    var element = document.getElementById("dropdownContent");
    element.classList.remove("mystyle");
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
    <div class="container" onmouseenter="openFunction(this)" onmouseleave="closeFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div id="dropdownContent" class="dropdown-content">
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
    <div class="name">ABC Optical</div>
    <a class="tinyLogo" href="./"><img src="img/tiny_logo.png" alt="Tiny Logo"></a>
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