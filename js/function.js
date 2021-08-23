async function header() {
    content.innerHTML = await (await fetch('inc/header.html')).text();
}