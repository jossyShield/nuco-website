

const MenuSearch = () => {
  return (
    <div class="kingster-main-menu-right-wrap clearfix  kingster-item-mglr kingster-navigation-top kingster-navigation-right" >
        <div class="kingster-main-menu-search" id="kingster-top-search" >
            <i class="fa fa-search" style={{fontSize:'30px'}}></i>
        </div>
        <div class="kingster-top-search-wrap" >
            <div class="kingster-top-search-close" ></div>
            <div class="kingster-top-search-row" >
                <div class="kingster-top-search-cell" >
                    <form role="search" method="get" class="search-form" action="#">
                        <input type="text" class="search-field kingster-title-font" placeholder="Search..." value="" name="s" />
                        <div class="kingster-top-search-submit">
                        <i class="fa fa-search" ></i>
                        </div>
                        <input type="submit" class="search-submit" value="Search" />
                        <div class="kingster-top-search-close">
                        <i class="fa fa-times" ></i>
                        </div>
                        <input type="hidden" name="ref" value="course" />
                        <input type="hidden" name="post_type" value="lp_course" />	
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuSearch
