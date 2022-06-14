<template>
  <div class="wrapper">
    <div class="businesses">
      <div class="">
        <q-carousel
          style="height: 85vh"
          animated
          v-model="slide"
          control-color="white"
          navigation-icon="radio_button_unchecked"
          navigation
          infinite
          autoplay="true"
        >
          <q-carousel-slide
            class="slider"
            :name="1"
            img-src="/images/build.jpg"
          >
            <div
              style="height: 55vh"
              class="justify-center smaller hero__text items-start container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>
              <h4 class="semi_text">Building Construction</h4>

              <p data-testid="hero_subtitle" class="hero_subtitle">
                Our Construction activities are performed by its own
                construction <br />
                plant and equiments. In other areas, construction is
                subcontracted <br />
                to reliable local...
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="2"
            img-src="/images/roadcons.jpg"
          >
            <div
              style="height: 55vh"
              class="justify-center smaller hero__text items-start text-left q-pr-sm container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>
              <h4 class="semi_text">Road Construction</h4>

              <p data-testid="hero_subtitle" class="hero_subtitle">
                We are a premier leader in developing, managing and <br />
                constructing civil infrastructure. We have a wealth of
                experience <br />
                in road construction and maintainance...
              </p>
            </div>
          </q-carousel-slide>

          <q-carousel-slide
            class="slider"
            :name="3"
            img-src="/images/bore.jpeg"
          >
            <div
              style="height: 55vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>

              <h4 class="semi_text">Water Works</h4>

              <p class="hero_subtitle">
                From dredging, drilling of borehole to Dam construction and
                <br />
                installation of overhead tanks and water reservoirs,
                construction, <br />
                and installation of irrigation...
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide class="slider" :name="4" img-src="/images/oil.jpg">
            <div
              style="height: 55vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>

              <h4 class="semi_text">Oil and Gas</h4>

              <p class="hero_subtitle">
                We provide process facilities and offer fluid transportation
                systems including <br />
                pipeline and pumping...
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="5"
            img-src="/images/solar.jpg"
          >
            <div
              style="height: 55vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>

              <h4 class="semi_text">Solar Energy Division</h4>

              <p class="hero_subtitle">
                we are reputed for conceptualizing, planning, designing and
                deploying <br />
                solar powered solutions to meet the growing private and <br />
                industrial needs...
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="6"
            img-src="/images/comput.jpg"
          >
            <div
              style="height: 55vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>

              <h4 class="semi_text">
                Computer Networking, Installation and Maintainance
              </h4>

              <p class="hero_subtitle">
                we are a reputable and a professional organization which has for
                years been involved <br />
                in the installation of computers, networking and maintainance...
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide class="slider" :name="7" img-src="/images/fur.jpg">
            <div
              style="height: 55vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>

              <h4 class="semi_text">Supply of office furnitures</h4>

              <p class="hero_subtitle">
                We represent world leaders in supplying and procurement of Home,
                Office and Business <br />
                furniture in conjuction with our overseas partners. <br />
                We provide complete solutions...
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <BusinessList />

      <!-- <div class="row q-py-xl container items-center">
        <div class="col-md-6 q-mb-lg q-pl-lg no_pad col-sm-12 col-xs-12">
          <div class="text-h3 header__text"></div>
          <div class="text-h3 header__subtext">
            Easy to find your next perfect place
          </div>

          <p class="sec_desc">
            Find a luxury residence that suits your taste, We will help you to
            find the most suitable residence for you.
          </p>
        </div>
        <div
          class="col-md-6 q-x-sm col-sm-12 col-xs-12 flex items-center justify-center"
        >
          <img class="img_height" src="/images/businesses1.png" alt="" />
          <div
            class="row col-md-12 q-x-sm col-sm-12 col-xs-12 flex items-center"
          >
            <div
              class="col-md-6 col-sm-12 col-xs-12 flex items-center justify-center"
            >
              <img src="/images/businesses2.png" alt="" />
            </div>
            <div
              class="col-md-6 q-px-sm col-sm-12 col-xs-12 flex items-center justify-center"
            >
              <img src="/images/businesses3.png" alt="" />
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- <Processing /> -->

    <div class="row q-py-xl container items-center">
      <div class="col-md-6 q-pl-lg no_pad q-mb-lg col-sm-12 col-xs-12">
        <div class="text-h3 header__text">Logistics and marketing</div>
        <!-- <div class="text-h3 header__subtext">Building Sustainable Futures.</div> -->

        <p class="sec_desc">
          <span class="text-weight-bold text-primary"
            >The modern way to commute across cities,
          </span>
          This arm of the company handles logistics of inputs supply and
          marketing of the company’s products.
        </p>

        <!-- <q-btn class="btn">
          <span>Contact us</span> <i class="ri-arrow-right-line q-ml-lg"></i
        ></q-btn> -->
      </div>
      <div
        class="col-md-6 q-x-sm col-sm-12 col-xs-12 flex items-center justify-center"
      >
        <div class="">
          <img src="/images/logis.jpg" alt="" />
          <!-- <p>
            Civil and Road <br />
            Construction
          </p> -->
        </div>
      </div>
    </div>
    <div class="row q-py-xl flexer container items-center">
      <div
        class="col-md-6 q-x-sm col-sm-12 col-xs-12 flex items-center justify-center"
      >
        <div class="">
          <img src="/images/guardd.jpg" alt="" />
        </div>
      </div>
      <div class="col-md-6 q-pl-xl no_pad q-mb-lg col-sm-12 col-xs-12">
        <div class="text-h3 header__text">Rima Guards</div>
        <!-- <div class="text-h3 header__subtext">Building Sustainable Futures.</div> -->

        <p class="sec_desc">
          <span class="text-weight-bold text-primary">Dawib,</span>
          recently got licensed to operate a security company to meet the
          security needs of the company. This will provide needed security in
          the fields and inputs.
        </p>

        <q-btn to="/rima" class="btn">
          <span>Learn More</span> <i class="ri-arrow-right-line q-ml-lg"></i
        ></q-btn>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref } from "vue";
// import Processing from "../components/Businesses/Processing.vue";
import BusinessList from "../components/Businesses/BusinessList.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      slide: ref(1),
    };
  },

  components: {
    // Processing,
    BusinessList,
    Footer,
  },
};
</script>

<style scoped>
.businesses {
  background: rgba(240, 240, 240, 0.4);
}
.business .q-carousel__slide {
  padding: 0;
}
.slider {
  position: relative;
  z-index: 2;
}

.hero__text {
  padding: 3rem;
  /* background: linear-gradient(
    108.57deg,
    #005be3 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  ); */
  background: linear-gradient(
    108.57deg,
    #c2b280 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  );
  height: 40vh;
  /* width: 60%; */
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}

.slider::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: #000000;
  mix-blend-mode: multiply;
  background-blend-mode: multiply;
  opacity: 0.5;
  z-index: 1;
}

.hero_title {
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin: 1rem 0;
}

.hero_subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 33px;
  color: #ffffff;
  margin: 1rem 0;
}

.semi_text {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 56px;
  color: #ffffff;
}

.header__text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  margin-bottom: 1.5rem;

  color: #005be3;
}
.header__subtext {
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 104.4%;
  margin-bottom: 1.5rem;

  color: #000000;
}

.sec_desc {
  font-style: normal;
  font-size: 20px;
  line-height: 179.4%;
  /* or 36px */
  margin-bottom: 1.5rem;
}

.btn {
  border-radius: 100px;
  color: white;
  padding: 0.75rem;
  width: 202px;
  background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
}

img {
  transition: all 0.5s ease-in-out;
  margin: 0.65rem;
  border-radius: 10px;
}
img:hover {
  transform: scale(1.1);
}

@media (max-width: 800px) {
  .hero__text {
    height: 60vh !important;
  }
}

@media (max-width: 900px) {
  .hero_title {
    font-size: 26px;
    line-height: 35px;

    margin: 0.75rem 0;
  }

  .hero_subtitle {
    font-size: 16px;
    line-height: 23px;
    margin: 0.75rem 0;
  }

  .semi_text {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 46px;
    color: #ffffff;
  }

  .header__text {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 1.5rem;

    color: #005be3;
  }
  .header__subtext {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 104.4%;
    margin-bottom: 1.5rem;

    color: #000000;
  }

  /* .smaller {
    height: 40vh !important;
  } */
}

@media (max-width: 800px) {
  .hero__text {
    padding: 1rem;
  }
  .hero__text {
    /* height: 70vh; */
    width: 90%;
  }
  .btn {
    padding: 0.55rem;
    width: 180px;
    font-size: 13px;
  }
}
@media (max-width: 400px) {
  .hero__text {
    /* height: 70vh; */
    width: 100%;
  }
  .contact {
    font-size: 11px;
    padding: 0.65rem;
    margin-top: 0.75rem;
  }
  .hero_title {
    font-size: 20px;
  }

  .hero_subtitle {
    font-size: 16px;
  }

  .semi_text {
    font-size: 18px;
  }
}

@media (max-width: 380px) {
  .smaller {
    height: 60vh !important;
  }
}
</style>
