<template>
  <div class="wrapper">
    <div class="values container">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <span class="header_subtext bg-positive">Our Values</span>
          <!-- <div class="header_text">The Dawib Group</div> -->
          <p class="desc">
            We are driven by our approach to sustainability and desire for
            impact which goes beyond compliance with regulatory expectations. We
            are passionate about the desire to contribute to, and positively
            impact the development of our clients and society at large...
          </p>
        </div>
        <div class="col-md-6 col-sm-12 right col-xs-12">
          <small class="header_subtextright">Values</small>
          <div class="values_list">
            <div class="values_items">
              <i class="ri-open-arm-fill"></i>
              <p>Client First</p>
            </div>
            <div class="values_items">
              <i class="ri-sun-fill"></i>
              <p>Innovation</p>
            </div>
            <div class="values_items">
              <i class="ri-group-fill"></i>
              <p>Teamwork</p>
            </div>
            <div class="values_items">
              <i class="ri-hand-heart-fill"></i>
              <p>Respect</p>
            </div>
            <div class="values_items">
              <i class="ri-numbers-fill"></i>
              <p>Accountability</p>
            </div>
            <div class="values_items">
              <i class="ri-service-fill"></i>
              <p>Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.values {
  padding: 3rem 0;
}
.header_text {
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 42px;
  /* color: #ffffff; */
  margin: 2rem 0 0;
  /* margin: 1rem 0; */
}
.header_subtext {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 104.4%;
  border-radius: 10px;
  padding: 0.55rem;

  color: #ffffff;
  margin: 1rem 0;
}

.header_subtextright {
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 179.4%;
  font-weight: 800;
}

p.desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-top: 1rem;
  line-height: 179.4%;
}

.values_items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.values_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  align-items: center;
  /* margin-top: 2rem; */
}
.values_list i {
  font-size: 50px;
  color: #21ba45;
}
.values_list p {
  font-size: 18px;
  /* color: #21ba45; */
}

.right {
  border-left: 2px solid black;
  padding: 0 2rem;
}

@media (max-width: 800px) {
  p.desc {
    font-size: 18px;
  }
}
</style>
