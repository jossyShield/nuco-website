

const MenuContent = () => {
  return (
    <div class="kingster-main-menu" id="kingster-main-menu" >
        <ul id="menu-main-navigation-1" class="sf-menu">
        <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6208 current_page_item menu-item-6836 kingster-normal-menu">
            <a href="/index">Home</a>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227 kingster-normal-menu sfHover">
          <a href="/about" class="sf-with-ul-pre sf-with-ul">About Us</a>
          <ul className="sub-menu" style={{display: 'none'}}>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314" data-size="60">
              <a href="/about/#vision">Our Vision</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314" data-size="60">
              <a href="/about/#philosophy">Our Philosophy</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314" data-size="60">
              <a href="/about/#proprietor">The Proprietor</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314" data-size="60">
              <a href="/about/#staff">Our Staff</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314" data-size="60">
              <a href="/about/#communities">Our Communities</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314" data-size="60">
              <a href="/about/#board">Board of Directors</a>
            </li>
            {/* <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5218" data-size="60"><a href="#" class="sf-with-ul-pre sf-with-ul">Features</a>
              <ul class="sub-menu" style="display: none;">
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5219"><a href="#" class="sf-with-ul-pre sf-with-ul">Set 1</a>
                <ul class="sub-menu" style="display: none;">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5233"><a target="_blank" href="https://demo.goodlayers.com/features/">Accordions &amp; Toggles</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5234"><a target="_blank" href="https://demo.goodlayers.com/features/alert-box/">Alert Box</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5235"><a target="_blank" href="https://demo.goodlayers.com/features/blockquotes/">Blockquotes</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5236"><a target="_blank" href="https://demo.goodlayers.com/features/buttons/">Buttons</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5237"><a target="_blank" href="https://demo.goodlayers.com/features/call-to-action/">Call To Action</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5238"><a target="_blank" href="https://demo.goodlayers.com/features/column-services/">Column Services</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5239"><a target="_blank" href="https://demo.goodlayers.com/features/columns/">Columns</a></li>
                </ul>
            </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5221"><a href="#" class="sf-with-ul-pre sf-with-ul">Set 2</a>
                <ul class="sub-menu" style="display: none;">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5240"><a target="_blank" href="https://demo.goodlayers.com/features/counters/">Counters</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5241"><a target="_blank" href="https://demo.goodlayers.com/features/count-down/">Count Down</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5242"><a target="_blank" href="https://demo.goodlayers.com/features/dividers/">Dividers</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5243"><a target="_blank" href="https://demo.goodlayers.com/features/dropcaps/">Dropcaps</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5244"><a target="_blank" href="https://demo.goodlayers.com/features/featured-boxes/">Featured Boxes</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5245"><a target="_blank" href="https://demo.goodlayers.com/features/flip-boxes/">Flip Boxes</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5246"><a target="_blank" href="https://demo.goodlayers.com/features/icon-list/">Icon Lists</a></li>
                </ul>
            </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5222"><a href="#" class="sf-with-ul-pre sf-with-ul">Set 3</a>
                <ul class="sub-menu" style="display: none;">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5247"><a target="_blank" href="https://demo.goodlayers.com/features/icons/">Icons</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5248"><a target="_blank" href="https://demo.goodlayers.com/features/images/">Images</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5249"><a target="_blank" href="https://demo.goodlayers.com/features/price-table/">Price Table</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5250"><a target="_blank" href="https://demo.goodlayers.com/features/promo-boxes/">Promo Boxes</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5251"><a target="_blank" href="https://demo.goodlayers.com/features/skill-bar/">Skill Bar</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5252"><a target="_blank" href="https://demo.goodlayers.com/features/skill-circle/">Skill Circle</a></li>
                </ul>
            </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5223"><a href="#" class="sf-with-ul-pre sf-with-ul">Set 4</a>
                <ul class="sub-menu" style="display: none;">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5253"><a target="_blank" href="https://demo.goodlayers.com/features/social-shares/">Social Shares</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5254"><a target="_blank" href="https://demo.goodlayers.com/features/stunning-texts/">Stunning Texts</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5256"><a target="_blank" href="https://demo.goodlayers.com/features/tabs-vertical/">Tabs Vertical</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5257"><a target="_blank" href="https://demo.goodlayers.com/features/testimonial/">Testimonial</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5258"><a target="_blank" href="https://demo.goodlayers.com/features/titles/">Titles</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5259"><a target="_blank" href="https://demo.goodlayers.com/features/typography/">Typography</a></li>
                </ul>
            </li>
              </ul>
            </li> */}
          </ul>
        </li>
        <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6849 kingster-normal-menu">
            <a href="/admissions">Admissions</a>
        </li>
        <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6849 kingster-normal-menu">
            <a href="/school-life">School Life</a>
        </li>
        <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6849 kingster-normal-menu">
            <a href="/facilities">Facilities</a>
        </li>
        <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6849 kingster-normal-menu">
            <a href="/calendar">Events Calendar</a>
        </li>
        <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6849 kingster-normal-menu">
            <a href="/contact">Contact Us</a>
        </li>
        </ul>
    </div>
  )
}

export default MenuContent
