window.addEventListener("scroll", function () {
    var elementTarget = document.getElementById("header");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        document.getElementById('nav').classList.add('fixed');
    } else {
        document.getElementById('nav').classList.remove('fixed');
    }
});

document.write(`
    <header id="header">
        <div class="bg-image">
            <div class="bg-text">
                <h1>ABC Optical</h1>
                <h4>We sell ophthalmic glasses, sunglasses and contact lenses. We specialise in optical requirements for children.</h4>

                <img src="img/logo.png" alt="">
            </div>
        </div>
    </header>
    <nav id="nav">
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
    </nav>
    `);