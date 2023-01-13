import Team from "./Team";

const ContactInfo = () => {
  return (
    <section class="contact-info">
      <div class="flex-container">
        <div class="flex-item-ctc border-shadow">
          <h4 class="upper-case">Contact Info</h4>

          <div class="contact-details">
            <p>
              #42, Udo Ette Street, Off Ikpa Road, Uyo, Akwa Ibom State,
              Nigeria.
            </p>
            <span class="details">
              <i class="fa fa-phone"></i>
              +234 703 6325 282. +234 806 1609 469
            </span>
            <span class="details">
              <i class="fa fa-mailbox"></i>
              info@nucoschools.com
            </span>
          </div>

          <div class="contact-social">
            <span>
              <i class="fa fa-facebook"></i>
            </span>
            <span>
              <i class="fa fa-twitter"></i>
            </span>
            <span>
              <i class="fa fa-instagram"></i>
            </span>
          </div>

          <div class="contact-team">
            <h4 class="upper-case title">Resource Persons</h4>
            <div class="flex-container">
              <article class="flex-item">
                <div
                  class="image-round image-card"
                  style={{
                    backgroundImage:
                      "url(../_includes/onlineschool/wp-content/uploads/sites/3/2020/06/testimonial-2-150x150.jpg)",
                  }}
                ></div>
                <h4>Frontdesk Personnel</h4>
                <p>Helen Uloko (+2348082232345)</p>
                
              </article>
              <article class="flex-item">
                <div
                  class="image-round image-card"
                  style={{
                    backgroundImage:
                      "url(../_includes/onlineschool/wp-content/uploads/sites/3/2020/06/testimonial-2-150x150.jpg)",
                  }}
                ></div>
                
                <h4>School Adviser</h4>
                <p>Emmanuel Mac (+2348082232345)</p>
              </article>
              <article class="flex-item">
                <div
                  class="image-round image-card"
                  style={{
                    backgroundImage:
                      "url(../_includes/onlineschool/wp-content/uploads/sites/3/2020/06/testimonial-2-150x150.jpg)",
                  }}
                ></div>
                <h4>Head Teacher</h4>
                <p>Sam Henderson (+2348082232345)</p>
              </article>
            </div>
          </div>
        </div>
        <div class="flex-item-ctc">Google Maps</div>
      </div>
    </section>
  );
};

export default ContactInfo;
