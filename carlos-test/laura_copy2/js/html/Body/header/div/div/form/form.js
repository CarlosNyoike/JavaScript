//parent = ../div
//child = []
import React
function FORM(){
  return(
    <form class="search-form d-flex align-items-center" method="POST" action="https://bootstrapmade.com/search/">
    <input type="text" value="" name="q" placeholder="Search" title="Enter search keyword">
    <button type="submit" title="Search">
      <svg class="icon icon-search" fill="currentColor">
        <use xlink:href="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#search" />
      </svg>
    </button>
  </form>
)
}
export default FORM //use in ../div.js
