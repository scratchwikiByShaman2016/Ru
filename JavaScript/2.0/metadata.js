function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
const url = new URL(window.location)
const searchParams = url.searchParams
if searchParams.get('id') == '1' {
  TextContent('ogtitle', '2.0 страницы')
  TextContent('ogname', 'RuScratchWikiByShaman2016')
  TextContent('ogurl', 'https://scratchwikibyshaman2016.github.io/Ru/wiki/2.0?id=\"1\"')\
  TextContent('ogdesc', 'Вики страницы 2.0')
  TextContent('icon', '/icon.png')
  TextContent('description', 'ScratchWikiByShaman2016, RuWiki, страницы 2.0')
}
