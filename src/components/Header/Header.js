import MenuLogo from './MenuLogo'
import MenuContent from './MenuContent'
import MenuSearch from './MenuSearch'

const Header = () => {
  return (
    <header class="kingster-header-wrap kingster-header-style-boxed  kingster-style-center-menu kingster-sticky-navigation kingster-style-slide" data-navigation-offset="75px"  >
      <div class="kingster-header-container clearfix  kingster-container">
        <div class="kingster-header-container-inner clearfix">
          <div class="kingster-header-background  kingster-item-mglr" >
          </div>
          <div class="kingster-header-container-item clearfix">
            {/* Logo Section */}
            <MenuLogo />

              <div class="kingster-navigation kingster-item-pdlr clearfix " >
                  {/* Menu Content Section  */}
                  <MenuContent />

                  {/* Menu Search Section */} 
                  <MenuSearch />
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}



export default Header
