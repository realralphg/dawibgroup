<template>
  <div class="contactUs">
    <div class="businesses">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="container rima_det">
          <div class="text-h3 header__text">Contact Us</div>

          <p class="dett">
            Lets get in touch <br />
            today
          </p>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <Contact />

      <Footer />
    </div>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Contact,
    Footer,
  },
};
</script>

<style scoped>
.businesses {
  position: relative;
  z-index: 2;
  height: 80vh;
  background: url("/images/contactus.jpg") no-repeat center top/cover;
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

@media (max-width: 500px) {
  .header__text {
    font-size: 44.3307px;
  }

  .rima_det p.dett {
    font-size: 30px;
  }
}
</style>
