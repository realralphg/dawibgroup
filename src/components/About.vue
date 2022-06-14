<template>
  <div class="wrapper">
    <div class="experience">
      <div class="row q-py-xl container items-center">
        <div class="col-md-6 q-pl-lg no_pad q-mb-lg col-sm-12 col-xs-12">
          <span class="text-h3 header__text">About us</span>
          <!-- <div class="text-h3 header__subtext">
            Building Sustainable <br />
            Futures.
          </div> -->

          <p class="sec_desc">
            <span class="text-weight-bold text-primary">DAWIB GROUP </span>
            is a leading group of companies that has revolutionalized the fields
            of Civil Engineering, Construction, Consultancy, Procurement, Supply
            and General Contracting company in Nigeria with a solid reputation
            acquired over a period of Five decades.
          </p>

          <q-btn to="/about" class="button">
            <div class="left"></div>
            Know More <i class="ri-arrow-right-line q-ml-lg"></i>
            <div class="right"></div>
          </q-btn>
          <!-- <q-btn to="/about" class="btn">
            <span>View More</span> <i class="ri-arrow-right-line q-ml-lg"></i
          ></q-btn> -->
        </div>
        <div
          class="col-md-6 q-x-sm col-sm-12 col-xs-12 items-center justify-center"
        >
          <img src="/images/constructionwork.jpg" alt="" />
          <!-- <img src="/images/about4.png" alt="" />
          <div class="row col-md-12 q-x-sm col-sm-12 col-xs-12 items-center">
            <div
              class="col-md-6 col-sm-12 col-xs-12 items-center justify-center"
            >
              <img src="/images/about1.png" alt="" />
            </div>
            <div
              class="col-md-6 q-px-sm col-sm-12 col-xs-12 items-center justify-center"
            >
              <img src="/images/about2.png" alt="" />

              <div
                class="row col-md-12 q-px-sm col-sm-12 col-xs-12 items-center justify-center"
              >
                <div
                  class="col-md-6 q-px-sm col-sm-12 col-xs-12 items-center justify-center"
                >
                  <img src="/images/about3.png" alt="" />
                </div>

                <div
                  class="col-md-6 col-sm-12 col-xs-12 items-center justify-center"
                >
                  <img src="/images/about5.png" alt="" />
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <q-space />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.experience {
  padding: 3rem 0;
  background: rgba(197, 195, 195, 0.425) center center/cover;
  mix-blend-mode: multiply;
  /* background-image: linear-gradient(135deg, #eece13 0%, #b210ff 100%); */
  color: black;

  clip-path: polygon(0 0%, 100% 0%, 100% 90%, 0% 100%);
}
.header__text {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  background: #005be3;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0.75rem;
}
.header__subtext {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 104.4%;
  margin-bottom: 1.5rem;

  color: #000000;
}

.sec_desc {
  font-style: normal;
  font-size: 20px;
  line-height: 179.4%;
  margin-bottom: 1.5rem;
  margin-top: 1.4rem;
}

.btn {
  border-radius: 100px;
  color: white;
  padding: 0.75rem;
  width: 202px;
  border: 1px solid #005be3;
  color: #005be3;
}

img {
  transition: all 0.5s ease-in-out;
  margin: 0.65rem;
  border-radius: 10px;
}

img:hover {
  transform: scale(1.1);
}

.button {
  position: relative;
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;

  text-transform: uppercase;
  font-size: 15px;
  /* background: white; */

  color: hsl(210, 80%, 42%);
  /* color: hsla(210, 50%, 85%, 1);

  background-color: hsl(210, 80%, 42%); */
  box-shadow: hsla(210, 40%, 52%, 0.4) 2px 2px 22px;
  border: 1px solid #005be3;
  border-radius: 4px;
  z-index: 0;
  overflow: hidden;
}

.button:focus {
  outline-color: transparent;
  box-shadow: hsl(210, 80%, 42%) 2px 2px 22px;
}

.right::after,
.button::after {
  content: "";
  display: block;
  position: absolute;
  white-space: nowrap;
  padding: 40px 40px;
  pointer-events: none;
}

.button::after {
  font-weight: 200;
  top: -30px;
  left: -20px;
}

.right,
.left {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.right {
  left: 66%;
}
.left {
  right: 66%;
}
.right::after {
  top: -30px;
  left: calc(-66% - 20px);

  background-color: #141218;
  color: transparent;
  transition: transform 0.4s ease-out;
  transform: translate(0, -90%) rotate(0deg);
}

.button:hover .right::after {
  transform: translate(0, -47%) rotate(0deg);
}

.button .right:hover::after {
  transform: translate(0, -50%) rotate(-7deg);
}

.button .left:hover ~ .right::after {
  transform: translate(0, -50%) rotate(7deg);
}
/* hsla(210, 50%, 85%, 1) */
/* bubbles */
.button::before {
  content: "";
  pointer-events: none;
  opacity: 0.6;
  background: radial-gradient(
      circle at 20% 35%,
      transparent 0,
      transparent 2px,
      #005be3 3px,
      #005be3 4px,
      transparent 4px
    ),
    radial-gradient(
      circle at 75% 44%,
      transparent 0,
      transparent 2px,
      #005be3 3px,
      #005be3 4px,
      transparent 4px
    ),
    radial-gradient(
      circle at 46% 52%,
      transparent 0,
      transparent 4px,
      #005be3 5px,
      #005be3 6px,
      transparent 6px
    );

  width: 100%;
  height: 300%;
  top: 0;
  left: 0;
  position: absolute;
  animation: bubbles 5s linear infinite both;
}

@keyframes bubbles {
  from {
    transform: translate();
  }
  to {
    transform: translate(0, -66.666%);
  }
}
@media (max-width: 800px) {
  .experience {
    padding: 3rem 0;
    background: rgba(197, 195, 195, 0.425) center center/cover;
    mix-blend-mode: multiply;
    /* background-image: linear-gradient(135deg, #eece13 0%, #b210ff 100%); */
    color: black;
    clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);

    /* clip-path: polygon(0 0%, 100% 0%, 100% 90%, 0% 100%); */
  }
  .texts_desc {
    margin: 2rem 0;
  }

  .header__text {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    padding: 0.65rem;
  }

  .sec_desc {
    font-style: normal;
    font-size: 18px;
    line-height: 179.4%;
    margin-bottom: 1.5rem;
    margin-top: 1.4rem;
  }

  .button {
    position: relative;
    padding: 8px 16px;

    font-size: 13px;
  }
}
@media (max-width: 500px) {
  .header__subtext {
    font-size: 30px;
  }
}
</style>
