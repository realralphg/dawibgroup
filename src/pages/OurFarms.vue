<template>
  <div class="wrapper">
    <div class="hero">
      <div class="">
        <q-carousel
          style="height: 80vh"
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
            img-src="/images/farms2.jpg"
            style="background-position: top"
          >
            <div
              style="height: 49vh"
              class="justify-center smaller hero__text items-start container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB FARMS LIMITED
              </h1>

              <p data-testid="hero_subtitle" class="hero_subtitle">
                We own one of the largest farms in the country and we are as
                well one of the largest producers of onion, wheat and the likes.
                Our crops are also well preserved from pest attacks which has
                further helped us improve yeild.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="2"
            img-src="/images/wheatfield.jpg"
          >
            <div
              style="height: 49vh"
              class="justify-center hero__text smaller items-start text-left q-pr-sm container"
            >
              <h1 data-testid="hero_title" class="hero_title">WHEAT FARM</h1>

              <p data-testid="hero_subtitle" class="hero_subtitle">
                We own and maintain one of the largest wheat farms in the
                country and we are as well one of the largest cultivators of
                this crop. We have also found systems to ensure that our crops
                are well preserved.
              </p>

              <!-- <a
                href="https://www.gmail.com"
                style="border-radius: 100px"
                class="bg-white contact text-primary q-py-sm q-px-xl"
              >
                Contact Us
              </a> -->
            </div>
          </q-carousel-slide>

          <q-carousel-slide
            class="slider"
            :name="3"
            img-src="/images/onion.jpeg"
          >
            <div
              style="height: 49vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">ONION FARM</h1>

              <p class="hero_subtitle">
                Our onion farm is one of the largest country and we are as well
                one of the largest producers. Our systems of production and
                preservation also ensures that our yeild remains intact and that
                we do not incure losses.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="4"
            img-src="/images/oka.jpg"
            style="background-position: top"
          >
            <div
              style="height: 49vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">MAIZE FARM</h1>

              <p class="hero_subtitle">
                We maintain a farm of
                <span class="text-weight-bold"> 250 hectares</span> in Sokoto
                where maize and Soya are grown alternately with yields around
                500MT of maize and 200MT of soya annually.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="5"
            img-src="/images/livestock.jpg"
            style="background-position: center"
          >
            <div
              style="height: 49vh"
              class="justify-center smaller hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                LIVESTOCK FARM
              </h1>

              <p class="hero_subtitle">
                Dawib has a ranch of 200 heads of cattle, most of which are
                mixed breeds on semi-intensive management. The stock is being
                gradually being upgraded through artificial insemination to a
                fully commercial dairy farm.
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- <div class="row container q-py-xl items-center">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <p class="welcome">Agricultural Farming</p>
          <div class="text-h3 header__text">DAWIB FARM LIMITED</div>

          <p class="desc">
            To be number one Nigeria’s leading construstion civil/building
            <br />
            engineering, Procurement and related technical services <br />
            company, serving selected industry sectors and geographic <br />
            markets.
          </p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 items-center justify-center">
          <img src="/images/farms2.jpg" alt="" />
          <div class="row justify-center no-wrap add_wrap">
            <div class="col-md-4 q-ma-xs col-sm-12 col-xs-12">
              <div class="image_top">
                <img src="/images/our3.png" alt="" />
                <q-tooltip> Wheat Farm </q-tooltip>
              </div>
              <div class="img_below">
                <img src="/images/our4.png" alt="" />
                <q-tooltip>Soy Beans Farm</q-tooltip>
              </div>
            </div>
            <div class="col-md-4 q-ma-xs col-sm-12 col-xs-12">
              <div class="image_top">
                <img src="/images/our5.png" alt="" />
                <q-tooltip> Maize Farm</q-tooltip>
              </div>
              <div class="img_below">
                <img src="/images/our1.png" alt="" />
                <q-tooltip> Livestock </q-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="stats">
        <p>
          Project to set up an integrated farm that will provide end to end
          solution in <span class="text-weight-bold">wheat</span> and
          <span class="text-weight-bold">livestock</span> value chains.
        </p>
      </div>

      <div
        style="gap: 2rem"
        class="row q-py-xl wheat container no_pad add_wrap flexer no-wrap items-center"
      >
        <div
          class="col-md-6 col-sm-12 col-xs-12 flex items-center justify-center"
        >
          <img class="img_height" src="/images/wheat.jpeg" alt="" />
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="text-h3 header__text">Wheat Farm</div>

          <p>
            We own and maintain one of the largest wheat farms in the country
            and we are as well one of the largest producers. We have also found
            systems to ensure that our crops are well preserved from pest
            attacks which has further helped us improve yeild. Our produce are
            well stored in proper environments and storage facilities.
            <!-- Dawib undertook experimentations in the last three years by
            partnering farmers across five states to carry out field trials of
            five different varieties, namely: Imani, this enabled us to compare
            crop performance, tolerance, disease resistance and yields. Results
            from field trials over this period enabled us to come to an informed
            decision to adopt Imani wheat variety from Sudan. Consequently, we
            have contacted the company for technical partnership to commence the
            development foundation seed farm for the production of certified
            seeds for distribution to farmers within two years, while setting up
            our mill and farms. -->
          </p>
        </div>
      </div>
      <div class="row q-py-xl container items-center">
        <div class="col-md-6 col-sm-12 q-pr-lg col-xs-12">
          <div class="text-h3 header__text">Onion Farm</div>

          <p>
            We maintain one of the largest onion farms in the country and we
            have also been one of the largest producers of this vegetable across
            the years. Our oinions are also well preserved from pest attacks
            which has further helped us improve yeild. Our onions are well
            stored also in a cool, dry, and well-ventilated place.
          </p>
        </div>
        <div
          class="col-md-6 col-sm-12 col-xs-12 flex double_img items-center justify-center"
        >
          <img class="img_height" src="/images/onion.jpeg" alt="" />
          <img class="img_height small1" src="/images/womenonion.jpeg" alt="" />
          <img class="img_height small2" src="/images/onionbag.jpeg" alt="" />
        </div>
      </div>
      <div class="row q-py-xl bg items-center">
        <div class="col-md-6 q-px-md col-sm-12 col-xs-12">
          <div class="text-h3 header__text">Maize and Soybean Farm</div>

          <p>
            Dawib maintains a farm of
            <span class="text-weight-bold"> 250 hectares</span> in Sokoto where
            maize and Soya are grown alternately with yields around 500MT of
            maize and 200MT of soya annually.
          </p>
        </div>

        <div
          class="col-md-6 col-sm-12 col-xs-12 flex items-center justify-center"
        >
          <img class="img_height" src="/images/maizw.jpeg" alt="" />
        </div>
      </div>

      <div
        style="gap: 2rem"
        class="row flexer liv q-py-xl bg add_wrap no-wrap items-center"
      >
        <div
          class="col-md-6 col-sm-12 col-xs-12 flex items-center justify-center"
        >
          <img class="img_height" src="/images/livestock.jpg" alt="" />
        </div>
        <div class="col-md-6 to_left col-sm-12 col-xs-12">
          <div class="text-h3 header__text text-center text-primary">
            Livestock Farm
          </div>

          <p class="bg-primary text_live text-white q-pa-lg">
            Dawib has a ranch of 200 heads of cattle, most of which are mixed
            breeds on semi-intensive management. The stock is being gradually
            being upgraded through artificial insemination to a fully commercial
            dairy farm, 50 hectares of pasture is being developed and will be
            expanded to 500 hectares as herd size increases. We hope to attain a
            herd size of 5000 heads of cattle within 10 years. Milk from the
            ranch is processed to yoghurt and marketed under the brand name.
          </p>
        </div>
      </div>
    </div>

    <Processing />

    <Footer />
  </div>
</template>

<script>
import { ref } from "vue";

import Processing from "../components/Businesses/Processing.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
    Processing,
  },
  data() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
/* hero area */
.slider {
  position: relative;
  z-index: 2;
}

.hero__text {
  padding: 3rem;
  background: linear-gradient(
    108.57deg,
    #21ba45 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  );
  /* background: linear-gradient(
    108.57deg,
    #005be3 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  ); */
  height: 45vh;
  width: 60%;
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}

.hero__text3 {
  background: linear-gradient(
    108.57deg,
    #21ba45 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  );
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
  font-size: 48px;
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
.double_img {
  position: relative;
}
.double_img .small1 {
  height: 200px;
  width: 40%;
  position: absolute;
  /* object-fit: contain; */
  bottom: -8%;
  left: -5%;
}
.double_img .small2 {
  height: 200px;
  width: 40%;
  position: absolute;
  /* object-fit: contain; */
  bottom: -8%;
  right: -5%;
}

img {
  transition: all 0.5s ease-in-out;
  margin: 0.65rem;
  position: relative;
}
img:hover {
  transform: scale(1.1);
  z-index: 200;
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

  .smaller {
    height: 40vh !important;
  }
}

@media (max-width: 800px) {
  .hero__text {
    padding: 1.5rem;
  }
  .hero__text {
    /* height: 70vh; */
    width: 90%;
  }
  .double_img .small1 {
    width: 35%;
    height: 100px;
  }
  .double_img .small2 {
    width: 35%;
    height: 100px;
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
}

@media (max-width: 380px) {
  .smaller {
    height: 40vh !important;
  }
}

.welcome {
  padding: 0.75rem;
  background: rgba(142, 237, 199, 0.35);
  border-radius: 51.2518px;
  margin-bottom: 1rem;
  width: 136.34px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005be3;
}

p.desc {
  font-size: 20px;
}

.header__text {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  margin: 1rem 0;
  background: linear-gradient(107.26deg, #005be3 -10.6%, #68fb77 88.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* hero area */
img {
  transition: all 0.5s ease-in-out;
  width: 100%;
  border-radius: 10px;
}

img:hover {
  transform: scale(1.1);
}
.bg {
  /* clip-path: polygon(0 10%, 100% 0%, 100% 80%, 0% 100%); */
  background-image: linear-gradient(135deg, #f4f4f4 0%, #e5e5e5 100%);
  color: black !important;
  padding: 5rem;
  /* height: 500px; */
}
p {
  font-size: 20px;
}
.welcome {
  padding: 0.75rem;
  background: rgba(142, 237, 199, 0.35);
  border-radius: 51.2518px;
  margin-bottom: 1rem;
  width: 222px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005be3;
}
.to_left {
  margin-left: -16%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
}
.header__text {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: linear-gradient(107.26deg, #005be3 -10.6%, #68fb77 88.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.text_live {
  font-size: 16px;
  position: relative;
  z-index: 100;
}
.input_wrap {
  display: flex;
  align-items: center;
  width: 50%;
}

.explore img {
  width: 75.19px;
  height: 55px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  display: flex;
  align-items: center;
  border: 1.22828px solid rgba(62, 189, 147, 0.6);
  border-radius: 100px;
  width: 270px;
  justify-content: space-between;
  padding-left: 1rem;
  margin: 2rem 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
  border-radius: 15px 15px 0px 0px;
  padding: 2rem;
  place-items: center;
}

.stats p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
}

.stats small {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
}

@media (max-width: 800px) {
  .to_left {
    margin-left: -0%;
  }

  .header__text.text-center {
    text-align: left;
  }
  .bg {
    height: 100%;
    padding: 3rem;
  }

  .wid {
    width: 90%;
    margin: 0 auto;
  }
  .wheat {
    margin-top: 3rem;
  }

  .liv {
    padding-top: 2rem;
  }

  p {
    font-size: 18px !important;
  }
}

@media (max-width: 500px) {
  .bg {
    padding: 1rem;
  }
}
</style>
