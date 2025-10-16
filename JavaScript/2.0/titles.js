function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
const url = new URL(window.location)
const searchParams = url.searchParams
if searchParams.get('id') == '1' {
  TextContent('title', '2.0 вики-страницы')
}
