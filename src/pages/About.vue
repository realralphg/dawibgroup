<template>
  <div class="wrapper">
    <div class="businesses">
      <div class="flex column justify-center hero__text items-start container">
        <div data-testid="hero_title" class="hero_title">About us</div>

        <p data-testid="hero_subtitle" class="hero_subtitle">
          Building a Sustainable <br />
          Future.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row q-mt-xl no_marg no_pad">
        <div class="col-md-6 col-sm-12 col-xs-12 q-pr-md">
          <div class="texts_desc">
            <div class="who">Who we are</div>

            <p>
              <span class="text-primary text-weight-bold"> We</span>
              are a foremost and leading Civil Engineering, Construction,
              Consultancy, Procurement, Supply and General Contracting company
              in Nigeria with a solid reputation acquired over a period of five
              decades.
            </p>
            <p class="q-mt-md">
              Our experience in Nigeria construction and General supply industry
              reflects itself in many ways and our competence is well <br />
              established and generally recognised by our clients.
            </p>
          </div>
        </div>
        <div class="col-md-6 q-pl-lg col-sm-12 col-xs-12">
          <img src="/images/aboutimg.jpg" alt="" />
        </div>
      </div>

      <div style="gap: 1rem" class="row no-wrap add_wrap terms">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="vision_wrap">
            <div class="vision">Our Vision</div>
            <p>
              To uphold and make stronger its core engineering business, <br />
              to develop new skills and activities, and to respond to the <br />
              changing needs of clients and marketers.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="vision_wrap">
            <div class="vision">Our Mission</div>
            <p>
              To be number one Nigeria’s leading construstion civil/building
              <br />
              engineering, Procurement and related technical services <br />
              company, serving selected industry sectors and geographic <br />
              markets.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="values">
      <div style="gap: 2rem" class="container values_div row add_wrap no-wrap">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="value">Our Core Values</div>
          <ul>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span>To ensure the quality of construction.</span>
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >To serve the best value for money and high return on
                projects.</span
              >
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >To acquiant clients with Residential and Commercial projects of
                standard.</span
              >
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >Serve with Environment and Professionalism, Team work and
                Excellence.</span
              >
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >To respect all environment rules,regulation and legal
                requirement.
              </span>
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span>To enhance customer value.</span>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="value">Our Obejective</div>
          <ul>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span>To ensure the quality of construction.</span>
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >To serve the best value for money and high return on
                projects.</span
              >
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >To acquiant clients with Residential and Commercial projects of
                standard.</span
              >
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >Serve with Environment and Professionalism, Team work and
                Excellence.</span
              >
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span
                >To respect all environment rules,regulation and legal
                requirement.
              </span>
            </li>
            <li>
              <i class="ri-question-answer-fill"></i
              ><span>To enhance customer value.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Values />
    <!-- <OurProjects /> -->
    <!-- <Gallery /> -->
    <Footer />
  </div>
</template>

<script>
import { ref } from "vue";
import OurProjects from "../components/About/OurProjects.vue";
import Values from "../components/About/Values.vue";
import Gallery from "../components/About/Gallery.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      slide: ref(1),
    };
  },
  components: {
    OurProjects,
    Gallery,
    Values,
    Footer,
  },
};
</script>

<style scoped>
.business .q-carousel__slide {
  padding: 0;
}
.businesses {
  position: relative;
  z-index: 2;
  height: 70vh;
  background: url("/images/busi_img1.jpg") no-repeat center top/cover;
}

.businesses::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: #005be3;
  mix-blend-mode: multiply;
  background-blend-mode: multiply;
  opacity: 0.5;
  z-index: 1;
}

.vision_wrap {
  box-shadow: hsla(210, 40%, 52%, 0.4) 2px 2px 22px;
  padding: 2rem;
  text-align: center;
  min-height: 270px;
}

.who {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 179.4%;
  margin-bottom: 0.2rem;
}

/* .hero__text {
  padding: 3rem;

  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
} */
.hero__text {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 25%;
  transform: translate(-25%, -50%);
}

.hero_title {
  font-style: normal;
  font-weight: 900;
  font-size: 54.3307px;
  line-height: 63px;

  color: #ffffff;

  margin-top: 1rem;
  margin-bottom: 1rem;
  /* background: linear-gradient(107.26deg, #005be3 -10.6%, #68fb77 88.4%); */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent; */
}

.hero_subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 104.4%;
  /* or 50px */

  color: #ffffff;
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
  font-size: 48px;
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
.vision {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 179.4%;
  /* or 36px */

  color: #005be3;
}

.texts_desc {
  margin: 5rem 0;
}
.texts_desc p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  /* or 36px */
}

.terms {
  margin: 3rem 0;
}
.terms p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  /* or 36px */
}

.values_div {
  position: relative;
  z-index: 10;
}

.values {
  background: url("/images/abt.jpg") center center/cover;
  background-attachment: fixed;
  position: relative;
  padding: 3rem;
}
.values::before {
  background: rgb(0, 0, 0, 0.5);
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  padding: 3rem;
}
img {
  border-radius: 10px;
}
.values ul {
  margin-top: 2rem;
}
.values ul li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  color: #ffffff;
}

.value {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 179.4%;
  /* or 57px */

  color: #ffffff;
}

@media (max-width: 800px) {
  .values ul {
    margin-top: 1rem;
  }
  .value {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 179.4%;
    color: #ffffff;
    margin-top: 2rem;
  }

  .hero_subtitle {
    font-size: 35px;
  }

  .hero__text {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
  }

  .texts_desc p {
    font-size: 18px;
  }
  .terms p {
    font-size: 18px;
  }

  .values ul li {
    font-size: 18px;
  }
}
@media (max-width: 500px) {
  .values {
    /* background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%); */
    padding: 2rem 0 1.4rem;
  }
  /* .hero__text {
    padding: 1rem;
  } */

  .texts_desc {
    margin: 2rem 0;
  }
}
</style>
