window.addEventListener("scroll", function () {
    var elementTarget = document.getElementById("section-2");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        document.getElementById('nav').classList.add('fixed');
    } else {
        document.getElementById('nav').classList.remove('fixed');
    }
});

document.write(`
    <header id="section-2">
        <div class="bg-image">
            <div class="bg-text">
                <h1>ABC Optical</h1>
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
            <a href="./aboutus.html">About</a>
        </li>
        <li>
            <a href="./contact.html">Contact</a>
        </li>
    </ul>
    </nav>
    `);