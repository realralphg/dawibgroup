<template>
  <div class="wrapper">
    <div class="sm_container">
      <div class="business">
        <div class="header_text text-center">Our Businesses</div>

        <div class="header_desc">
          As a diversified conglomerate, our interest in multiple industries
          indicates our determination <br />
          to cater to our vision of providing basic needs.
        </div>
      </div>

      <div class="business_ents">
        <div class="row flex_row no-wrap justify-center items-center">
          <div class="col-md-4 row_items col-sm-12 col-xs-12">
            <div class="top">
              <img src="/images/cons.jpg" alt="" />
            </div>
            <div class="details">
              <div class="details_head">DAWIB INVESTMENT RESOURCES</div>

              <div class="services">
                <ul>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Civil Engineering and Construction etc...
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Oil and Gas
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Solar Energy
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Vegetable Processing Factory
                  </li>
                </ul>
              </div>
            </div>
            <q-btn to="/our" class="btn">
              <span class="text-white">View More</span>
              <i
                style="font-size: 1.5rem"
                class="ri-arrow-right-line text-accent q-ml-lg"
              ></i
            ></q-btn>
          </div>
          <div class="col-md-4 row_items col-sm-12 col-xs-12">
            <div class="top">
              <img src="/images/farms3.jpg" alt="" />
            </div>
            <div class="details">
              <div class="details_head">DAWIB FARM LIMITED</div>

              <div class="services">
                <ul>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Wheat Farm
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Onion Farm
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Maize and Soya Beans Farm
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Livestock Farm
                  </li>
                </ul>
              </div>
            </div>
            <q-btn to="/farms" class="btn">
              <span class="text-white">View More</span>
              <i
                style="font-size: 1.5rem"
                class="ri-arrow-right-line text-primary q-ml-lg"
              ></i
            ></q-btn>
          </div>
          <div class="col-md-4 row_items col-sm-12 col-xs-12">
            <div class="top">
              <img src="/images/guardd.jpg" alt="" />
            </div>
            <div class="details">
              <div class="details_head">RIMA GUARDS</div>

              <div class="services">
                <ul>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    VIP Protection
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Private/Corporate Security
                  </li>
                  <li>
                    <div class="dot"><i class="ri-check-double-fill"></i></div>
                    Farm Rangers
                  </li>
                </ul>
              </div>
            </div>
            <q-btn to="/rima" class="btn">
              <span class="text-white">View More</span>
              <i
                style="font-size: 1.5rem"
                class="ri-arrow-right-line text-accent q-ml-lg"
              ></i
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f4f4f4"
        fill-opacity="1"
        d="M0,320L48,293.3C96,267,192,213,288,176C384,139,480,117,576,96C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding-top: 5rem;
}
.flex_row {
  gap: 1rem;
}
.row_items {
  /* background: #005be3; */
  height: 620px;
}
.row_items:nth-child(1) {
  background: #005be3;
  height: 620px;
}
.row_items:nth-child(3) {
  background: #005be3;
  height: 620px;
}
.row_items:nth-child(2) {
  background: #21ba45;
}
.row_items:nth-child(2) .dot i {
  background: #005be3 !important;
  border-radius: 50%;
  padding: 0.15rem;
}
.row_items:nth-child(2) .btn {
  border: 1px solid #005be3;
}

.row_items .details {
  /* background: #005be3; */
  padding: 1rem;
}

.row_items .details .details_head {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  height: 35px;
  margin-bottom: 1rem;
  color: #ffffff;
}

.btn {
  color: #ffffff;
  padding: 0rem 2rem;
  margin-top: 0.65rem;
}

.services {
  height: 80px;
  margin: 2rem 0;
}
.services .dot i {
  background-color: #21ba45;
  border-radius: 50%;
  padding: 0.15rem;
}

.services li {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin: 0.45rem 0;
}

.top img {
  height: 325px;
}

.header_text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 0px;
  color: #005be3;
}
.header_desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  margin: 2rem 0;
  text-align: center;
  color: #333333;
}

.btn {
  border: 1px solid #21ba45;
}

@media (max-width: 1100px) {
  .flex_row {
    flex-wrap: wrap !important;
  }
}
@media (max-width: 800px) {
  .flex_row {
    flex-wrap: wrap !important;
  }

  .row_items {
    background: #005be3;
    height: 630px;
  }
  .header_desc {
    font-size: 18px;
  }

  .services {
    height: 100px;
    margin: 0.65rem 0;
  }
  .row_items .details .details_head {
    font-size: 16px;
    line-height: 20px;
    height: 35px;
  }

  .services li {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  .top img {
    height: 245px;
  }

  .row_items {
    background: #005be3;
    height: 550px !important;
  }
  .row_items .details .details_head {
    margin-bottom: 1rem;
  }
  .services {
    height: 110px;
    margin: 1rem 0;
  }
}
</style>
