// ==UserScript==
// @name         Daemun
// @version      0.1
// @description  쿄갤 대문 강제교체
// @author       케폭도
// @match        https://gall.dcinside.com/mgallery/board/lists?id=kyoani*
// @grant        none
// ==/UserScript==
const imgURL = "https://image.dcinside.com/viewimage.php?id=26a4df27ebdb&no=24b0d769e1d32ca73ced81fa11d02831edca684dcd73c50d611ea8794d07f848b9e51dff8fddf59852ee5faa864e76be10a21f944eb5eb17a5cda83f"
const imgBoxXpath = "/html/body/div[2]/div[2]/main/section[1]/article[1]/div/div/div[2]/div[1]/div[1]/a/img"
var imgbox = document.evaluate(imgBoxXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
imgbox.src = imgURL
