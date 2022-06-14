<template>
  <div class="wrapper">
    <div class="businesses">
      <div class="">
        <div class="container rima_det">
          <!-- <p class="welcome">Security</p> -->
          <div class="text-h3 header__text">Projects</div>

          <p class="dett">
            We have handled a remarkable <br />
            number of projects <br />
          </p>

          <!-- <q-btn class="btn"> <span>Contact Us</span></q-btn> -->
        </div>
      </div>
    </div>
    <div class="first_sec container">
      <!-- <p class="desc">
        A full integration of the various components of the group will achieve
        high efficiency,
      </p> -->

      <div class="row items-center">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="header_textt">Our Works</div>

          <div class="longer_desc no_pad q-pr-md">
            We offer a wide variety of services ranging from construction works
            which has been at the heart of business for over some years now. Our
            services on contruction of building are based on specialised
            expertise. The works performed are residential building
            construction, commercial building construction, underground
            construction, construction of sport facilities and the construction
            of street light, Roads, Bridges and calvert facilities and we offer
            construction and building services in all aspects of enginnering and
            infrastructural development.
          </div>
        </div>

        <div class="col-md-6 col-sm-12 col-xs-12">
          <img src="/images/cons1.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="projects container">
      <div class="header_text q-pb-md">Projects Summary</div>

      <p class="desc">
        A full integration of the various components of the group will achieve
        high efficiency,
      </p>

      <div class="longer_desc">
        Nigeria imports about 90% of the wheat consumed locally estimated at
        five million metric tons, worth Annually. This is not sustainable
        because it puts a serious strain on the economy. However, the country
        has everything it needs to be self-sufficient in wheat. Dawib Group
        plans to use its experience in the Agribusiness sector close the gap in
        production through a robust out grower network to complement the
        production of wheat on its 1000Ha farm located in Sokoto. In addition,
        the Company will invest in full value chain development and integrate
        same to compliment each other to achieve optimization.
      </div>

      <!-- <div class="lists">
        <ul class="list">
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"
                >Security Company -
              </span>
              owing to the peculiarity of the geography, a security firm has
              been set up to provide security to the entire assets of the Group
              to forestall exposure to risk and theft.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"> The Farm - </span>
              1000Ha will be put into full cultivation of wheat with an added
              5000Ha out grower scheme where farmers will be supported with
              input credits, capacity building for best practices, extension
              service, mechanization, security, logistics, and guaranteed
              buy-back from Dawib Group.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"> Mill - </span>
              Will offtake and process wheat from the farm and process into
              flour and wheat brand. For sustainability, special mills that
              utilize minimum power will be deployed to utilize farm wastes and
              crop residues as source of power.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"
                >Inputs Company -
              </span>
              Will supply inputs credits support and manage out grower scheme
              for optimal wheat production, recovery and guaranteed buy back
              from farmers.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary">Feed Mill - </span>
              Will process wheat brand into animal feeds for Livestock.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"
                >Livestock Farm -
              </span>
              Will utilize animal feed for meat and milk production and process
              them for the market.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary">Power Plant - </span>
              Will utilize farm wastes and crop residues to generate clean
              energy, thereby earning carbon credits.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"
                >Engineering and Logistics company -
              </span>
              will provide engineering and logistics support to other arms of
              the business.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"
                >Fertilizer company -
              </span>
              will utilize by-product of the power plant, and process cattle
              dung to probiotics and organic fertilizer.
            </p>
          </li>
          <li>
            <div class="dots"></div>
            <p>
              <span class="text-weight-bold text-primary"
                >Marketing company –
              </span>
              will market the range of products from the Group.
            </p>
          </li>
        </ul>
      </div> -->
    </div>
    <div class="stats">
      <p class="text-center">
        We want to achieve 20% local production of the annual consumption of
        wheat within five years, and self-sufficiency in ten years.
      </p>
    </div>
    <ProjectOutline />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Gallery from "../components/About/Gallery.vue";
import ProjectOutline from "../components/ProjectOutline.vue";
export default {
  components: {
    Footer,
    Gallery,
    ProjectOutline,
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.first_sec {
  margin: 3rem auto;
}
.businesses {
  position: relative;
  z-index: 2;
  height: 70vh;
  background: url("/images/proj.jpg") no-repeat center top/cover;
}

.businesses::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: linear-gradient(
    85.18deg,
    #000000 -10.88%,
    rgba(51, 51, 51, 0) 115.22%
  );
  mix-blend-mode: multiply;
  background-blend-mode: multiply;
  opacity: 0.5;
  z-index: 1;
}

.welcome {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.37);
  border-radius: 83.4527px;

  margin-bottom: 1rem;
  width: 222px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005be3;
}

.header__text {
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
.btn {
  border-radius: 100px;
  color: white;
  padding: 0.75rem;
  width: 202px;
  background: linear-gradient(107.77deg, #005be3 33.83%, #3ebd93 69.63%);
  border-radius: 100px;
}

.rima_det {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 25%;
  transform: translate(-25%, -50%);
  color: #fff;
}

.rima_det p.dett {
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 104.4%;
  /* or 50px */

  color: #ffffff;
}

.list li {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0.65rem 0;
  font-size: 16px;
}
.list li .dots {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #005be3;
}

.header_text {
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #005be3;
  /* padding: 2rem 0 1rem; */
}

.header_textt {
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
  color: #005be3;
}

.projects p.desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #000000;
}

.longer_desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 162% */
  margin: 1rem 0;

  color: #000000;
}

.stats {
  background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
  border-radius: 40px 40px 0px 0px;
  padding: 2rem;
  margin: 2rem 0;
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

img {
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
}
img:hover {
  transform: scale(1.1);
}

@media (max-width: 800px) {
  .longer_desc {
    font-size: 18px;
  }
  .projects p.desc {
    font-size: 18px;
  }
  .stats p {
    font-size: 18px;
  }
}
</style>
