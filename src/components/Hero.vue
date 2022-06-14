<template>
  <div class="wrapper">
    <div class="hero">
      <!-- <div class="row q-py-xl items-center">
        <div class="col-md-6 q-mb-lg col-sm-12 col-xs-12">
          <p class="welcome">Welcome</p>
          <div class="text-h3 header__text">
            DAWIB GROUP INVESTMET RESOURCES.
          </div>

          <p class="desc">
            Leading civil engineeriing, construction, consultancy,Procurement,
            supply and gerenal \contracting in Nigeria with a solid reputation
            acquired over a period of five decades.
          </p>

          <div class="input_wrap">
            <div class="input">
              <input
                placeholder="Enter your email here"
                type="text"
                name=""
                id=""
              />
              <q-btn class="btn"><i class="ri-arrow-right-line"></i></q-btn>
            </div>
            <div class="explore">
              <img class="" src="/images/explore.png" alt="" />
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-sm-12 col-xs-12 flex items-center justify-center"
        >
          <img src="/images/dawidhero.png" alt="" />
        </div>
      </div> -->

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
          <q-carousel-slide class="slider" :name="1" img-src="/images/bg1.jpg">
            <div
              class="justify-center smaller hero__text items-start container"
            >
              <h1 data-testid="hero_title" class="hero_title">DAWIB GROUP</h1>

              <p data-testid="hero_subtitle" class="hero_subtitle">
                We are a team of highly skilled individuals with decades of
                experience well equipped to tackle even the biggest projects, We
                are also a people who maintain a culture of integrity and
                values...
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="2"
            img-src="/images/cons1.jpg"
          >
            <div
              style="height: 49vh"
              class="justify-center hero__text hero__text2 items-start text-left q-pr-sm container"
            >
              <h1 data-testid="hero_title" class="hero_title">
                DAWIB INVESTMENT RESOURCES
              </h1>

              <p data-testid="hero_subtitle" class="hero_subtitle">
                Our Construction activities are performed by its own
                construction plant and equiments. In other areas, construction
                is subcontracted to reliable local...
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
            img-src="/images/farm3.jpg"
          >
            <div
              style="height: 49vh"
              class="justify-center smaller hero__text3 hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">DAWIB FARMS</h1>

              <p class="hero_subtitle">
                We maintain some of the largest farms in the country and we are
                as well one of the largest producers of onion, wheat and the
                likes. Our crops are also well preserved from pest attacks which
                has further helped us improve yeild.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            class="slider"
            :name="4"
            img-src="/images/rimaguard.jpg"
            style="background-position: top"
          >
            <div
              style="height: 49vh"
              class="justify-center smaller hero__text4 hero__text items-start text-left container"
            >
              <h1 data-testid="hero_title" class="hero_title">RIMA GUARDS</h1>

              <p class="hero_subtitle">
                We are licensed to operate security outfits to meet the security
                needs of our farms and investments. This will provide the needed
                security to mitigate risk of theft or investment sabotage.
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <!-- <div class="stats">
        <div class="left">
          <p>7k+</p>
          <small>Farmers</small>
        </div>
        <div class="middle">
          <p>10k+</p>
          <small>Hecters</small>
        </div>
        <div class="right">
          <p>$10m</p>
          <small>Invested in 2020</small>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
/* .hero img {
  width: 80%;
} */

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
  background: linear-gradient(
    108.57deg,
    #005be3 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  );
  height: 45vh;
  width: 60%;
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}
/* 
.hero__text2 {
  background: linear-gradient(
    108.57deg,
    #c10015 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  );
}
.hero__text3 {
  background: linear-gradient(
    108.57deg,
    #21ba45 -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  );
}
.hero__text4 {
  background: linear-gradient(
    108.57deg,
    #1d1d1d -42.41%,
    rgba(0, 0, 0, 0) 112.17%
  );
} */

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
}
img:hover {
  transform: scale(1.1);
}

@media (max-width: 800px) {
  .hero__text {
    height: 60vh;
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

.input input {
  border: none;
}

.input .btn {
  background: #005be3;
  border: 1.22828px solid #3ebd93;
  border-radius: 100px;
  color: #fff;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
  border-radius: 40px 40px 0px 0px;
  padding: 3rem;

  place-items: center;
}

.stats p {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 0px;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0;
}

.stats small {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
}

@media (max-width: 500px) {
  .stats {
    padding: 3rem 0;
  }
}
</style>
