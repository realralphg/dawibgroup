<template>
  <div class="wrap">
    <div class="video container">
      <div class="row flexer items-center">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <iframe
            width="100%"
            height="505"
            src="https://www.youtube.com/embed/K1nQCTQLgtI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-6 q-pl-lg no_pad col-sm-12 col-xs-12">
          <div class="header__text">Our Services</div>
          <p class="sec_desc">
            We are a robust company with several decades of experience, our
            services in construction among others is based on specialised
            expertise. We offer a wide range of construction/building services
            in all aspects of Engineering and Infrastructural development
            including but not limited - Civil and Road Construction, Building
            and Management, Oil and Gas, Water and Sanitation, Construction of
            Solar Powered Boreholes, Construction of Solar Powered Street Light
            and Transportation and Hydro Engineering Development. Our Security
            Company(Rima Guards) are deployed to bring safefy, We are also one
            of the largest producers of wheat and onions among others.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  margin-top: 5rem;
}
.sec_desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 196.4%;
  color: rgba(51, 51, 51, 0.92);
  margin: 1rem 0;
}

.header__text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  color: #21ba45;
  margin-bottom: 1rem;
}

@media (max-width: 800px) {
  .sec_desc {
    font-size: 18px;
  }
}
</style>
