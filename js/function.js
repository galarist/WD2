async function header() {
    content.innerHTML = await (await fetch('header.html')).text();
}