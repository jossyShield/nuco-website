
import bgImage from "../../assets/img/statistics/school_call1.jpg";

const Statistics = () => {
  const bgImg = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center'
  };

  return (
    <section class="statistics">
        <div class="gdlr-core-pbf-wrapper " style={{padding: '90px 0px 60px 0px'}}  id="gdlr-core-wrapper-3" >
          <div class="gdlr-core-pbf-background-wrap"  ></div>
          <div class="gdlr-core-pbf-wrapper-content gdlr-core-js "   >
            <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container-custom" style={{maxWidth: '1280px'}} >
                <div class="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"  id="gdlr-core-column-63300" style={ bgImg }>
                  <div class="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{boxShadow: '0 20px 40px rgba(10, 10, 10,0.2)', mozBoxShadow: '0 20px 40px rgba(10, 10, 10,0.2)', webkitBoxShadow: '0 20px 40px rgba(10, 10, 10,0.2)', padding: '100px 0px 70px 0px', borderRadius: '8px 8px 8px 8px', mozBorderRadius: '8px 8px 8px 8px', webkitBorderRadius: '8px 8px 8px 8px'}} >
                      <div class="gdlr-core-pbf-background-wrap" style={{borderRadius: '8px 8px 8px 8px', mozBorderRadius: '8px 8px 8px 8px', webkitBorderRadius: '8px 8px 8px 8px'}}  >
                        <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={ bgImg }  data-parallax-speed="0"  ></div>
                      </div>
                      <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js " style={{maxWidth: '620px' }} >
                        <div class="gdlr-core-pbf-element" >
                            <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom: '45px'}}  >
                              
                              <div class="gdlr-core-title-item-title-wrap clearfix" >
                                  <h3 class="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize: '42px', fontWeight: '300', letterSpacing: '0px', textTransform: 'none', color: '#ffffff'}}  >
                                    <span style={{fontWeight: '500'}}>Our Mission</span>
                                  </h3>
                              </div>
                              <span class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize: '13px', fontWeight: '600', fontStyle: 'normal', letterSpacing: '1px', textTransform: 'uppercase', color: '#8dd7e5', marginBottom: '20px'}}  >
                                To provide an environment where children independently and confidently become lifelong learners who can relate intelligently and socially with other individuals and are also able to think outside the box.
                              </span>
                              <div class="gdlr-core-title-item-title-wrap clearfix" >
                                  <h3 class="gdlr-core-title-item-title gdlr-core-skin-title " style= {{fontSize: '42px', fontWeight: '300', letterSpacing: '0px', textTransform: 'none', color: '#ffffff' }} >
                                    <span style={{fontWeight: '500'}}>Our Vision</span>
                                  </h3>
                              </div>
                              <span class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize: '13px', fontWeight: '600', fontStyle: 'normal', letterSpacing: '1px', textTransform: 'uppercase', color: '#8dd7e5', marginBottom: '20px'}}  >
                                To help children develop high self-esteem by using self-help skills to foster love for learning and intelligence as they relate with other individuals
                              </span>
                            </div>
                        </div>
                        <div class="gdlr-core-pbf-element" >
                            <div class="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align"  >
                              <a class="gdlr-core-button  gdlr-core-button-solid gdlr-core-center-align gdlr-core-button-no-border" href="/started"   id="gdlr-core-button-id-5917"  >
                                <span class="gdlr-core-content" >Get Started</span>
                              </a>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Statistics
