<template>
  <div class="wrapper">
    <div class="businesses">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="container rima_det">
          <p class="welcome">Security</p>
          <div class="text-h3 header__text">RIMA GUARDS</div>

          <p class="dett">
            We are provide you with the <br />
            best security
          </p>

          <!-- <q-btn class="btn"> <span>Contact Us</span></q-btn> -->
        </div>
      </div>
    </div>
    <div class="q-pt-xl">
      <div class="">
        <div class="container">
          <div class="row items-center">
            <div class="col-md-6 q-pr-lg col-sm-12 col-xs-12">
              <div class="text-h3 header__sutext q-mb-md">Dawib Security</div>

              <p class="su_dett">
                Dawib recently got licensed to operate a security company to
                meet the security needs of the company. This will provide needed
                security in the fields. Our security company will provide all
                round security to our assets and operations in liaison with the
                security agencies. Owing to the peculiarity of the geography, we
                have set up this security firm to provide security to the entire
                assets of the Group to forestall exposure to risk and theft.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="/images/guardd.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Trusted />
    <Footer />
  </div>
</template>

<script>
import Trusted from "../components/Trusted.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Trusted,
    Footer,
  },
};
</script>

<style scoped>
.businesses {
  position: relative;
  z-index: 2;
  height: 70vh;
  background: url("/images/rimaguard.jpg") no-repeat center top/cover;
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
  opacity: 0.8;
  z-index: 1;
}

img {
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}
img:hover {
  transform: scale(1.1);
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
  font-weight: 700;
}

.header__text {
  font-style: normal;
  font-weight: 900;
  font-size: 54.3307px;
  line-height: 63px;

  color: #ffffff;

  margin-top: 1rem;
  margin-bottom: 1rem;
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

.header__sutext {
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;

  color: #005be3;
}

.su_dett {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 199.4%;
  /* or 32px */

  color: #000000;
}

@media (max-width: 500px) {
  .header__text {
    font-size: 44.3307px;
  }

  .rima_det p.dett {
    font-size: 30px;
  }
}
</style>
