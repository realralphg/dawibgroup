<template>
  <div class="wrapper">
    <div class="experience">
      <div class="row q-py-xl flexer container items-center">
        <div
          class="col-md-6 q-x-sm col-sm-12 col-xs-12 items-center justify-center"
        >
          <img src="/images/oil.jpg" alt="" />
          <!-- <div class="row col-md-12 q-x-sm col-sm-12 col-xs-12 items-center">
            <div
              class="col-md-6 col-sm-12 col-xs-12 items-center justify-center"
            >
              <img class="img_height" src="/images/exp2.png" alt="" />
            </div>
            <div
              class="col-md-6 q-px-sm col-sm-12 col-xs-12 items-center justify-center"
            >
              <img src="/images/exp3.png" alt="" />
              <img class="q-mt-sm" src="/images/exp4.png" alt="" />
            </div>
          </div> -->
        </div>
        <div class="col-md-6 q-pl-xl no_pad q-mb-lg col-sm-12 col-xs-12">
          <div class="text-h3 header__text">Our Experience</div>

          <p class="sec_desc">
            We have experience across all the major sectors of the Nigerian
            economy from Construction to Solar panel intallations to Oil and Gas
            to Agriculture among others. Our abilities are diverse and our
            competence is well established and generally recognised and endorsed
            by our clients...
          </p>

          <q-btn class="btn">
            <span>View More</span> <i class="ri-arrow-right-line q-ml-lg"></i
          ></q-btn>
        </div>
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
  clip-path: polygon(0 10%, 100% 0%, 100% 80%, 0% 100%);
  background-image: linear-gradient(135deg, #f5f5f5 0%, #3333 100%);
  color: white;
}
.header__text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  color: #005be3;
  margin-bottom: 2rem;
}

.sec_desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 196.4%;
  color: rgba(51, 51, 51, 0.92);
  margin: 2rem 0;
}

.btn {
  background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
  border-radius: 100px;
  color: white;
  padding: 0.75rem;
  width: 202px;
}

img {
  transition: all 0.5s ease-in-out;
  margin: 0.65rem;
  border-radius: 10px;
  /* width: 80%; */
}

img:hover {
  transform: scale(0.9);
}

@media (max-width: 800px) {
  .experience {
    padding: 3rem 0;
    clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
    background-image: linear-gradient(135deg, #f5f5f5 0%, #3333 100%);

    /* background-image: linear-gradient(135deg, #ce9ffc 0%, #7367f0 100%); */
    color: white;
  }

  .sec_desc {
    font-size: 18px;
  }
  .btn {
    background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
    border-radius: 100px;
    color: white;
    padding: 0.55rem;
    font-size: 14px;
    width: 180px;
  }
}
</style>
