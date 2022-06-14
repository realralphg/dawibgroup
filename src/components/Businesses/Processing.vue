<template>
  <div class="wrapper">
    <div class="processing container">
      <h5 class="header_text">Vegetables Processing Factory</h5>

      <p class="header_desc">
        We have been involved in vegetable farming in the last 15 years with
        focus on onions, tomatoes, and peppers where we have grown a community
        of over 7,000 farmers in three states namely Kebbi, Katsina and Katsina
        with a total area of over 10,000 hectares under cultivation. Our
        business model provides for input credits, mechanization and extension
        service delivery and capacity building for farmers and guaranteed access
        to market. At harvest Dawib aggregates all harvest from out growers and
        arrange bulk uptake to stem post-harvest losses, considering the
        perishability of vegetables. Proceeds from harvest are then paid to
        farmers and cost of inputs credits deducted. In 2020 Dawib invested $10m
        in an onion processing facility in a bid to take advantage of the import
        substitution of the Federal Government, when installed it will process
        ….MT of fresh onions to flakes valued at $.... annually for supply to
        spices companies locally and export the surplus.
      </p>

      <div style="gap: 1rem" class="row add_wrap_big q-pt-xl no-wrap">
        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="img_holder">
            <img style="height: 555px" src="/images/process1.png" alt="" />
            <p>Onions</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="img_holder">
            <img src="/images/process2.png" alt="" />
            <p>Tomato</p>
          </div>

          <div class="img_holder">
            <img src="/images/process3.png" alt="" />
            <p>Pepper</p>
          </div>
        </div>

        <div class="col-md-4 flex_dir col-sm-12 col-xs-12">
          <div class="row no-wrap">
            <i class="ri-group-fill"></i>
            <div class="stats_det">
              <p>7k</p>
              <span>Farmers</span>
            </div>
          </div>
          <div class="row no-wrap">
            <i class="ri-flag-fill"></i>
            <div class="stats_det">
              <p>10k</p>
              <span>Hecters</span>
            </div>
          </div>
          <div class="row no-wrap">
            <i class="ri-line-chart-fill"></i>
            <div class="stats_det">
              <p>$10M</p>
              <span>Invested in 2020</span>
            </div>
          </div>
        </div>
      </div>

      <div class="values">
        <div class="hold">
          <div class="img_holder">
            <img src="/images/process1.jpeg" alt="" />
            <p></p>
          </div>
        </div>
        <div class="hold">
          <div class="img_holder">
            <img src="/images/process2.jpeg" alt="" />
            <p></p>
          </div>
        </div>
        <div class="hold">
          <div class="img_holder">
            <img src="/images/process3.jpeg" alt="" />
            <p></p>
          </div>
        </div>
        <div class="hold">
          <div class="img_holder">
            <img src="/images/process4.jpeg" alt="" />
            <p></p>
          </div>
        </div>
        <div class="hold">
          <div class="img_holder">
            <img src="/images/process5.jpeg" alt="" />
            <p></p>
          </div>
        </div>
        <div class="hold">
          <div class="img_holder">
            <img src="/images/process6.jpeg" alt="" />
            <p></p>
          </div>
        </div>
        <div class="hold">
          <div class="img_holder">
            <img src="/images/process7.jpeg" alt="" />
            <p></p>
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
.processing {
  padding-top: 5rem;
}
img {
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}

.hold img {
  height: 350px;
  /* object-fit: contain; */
}
.header_text {
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #005be3;
  margin: 1rem 0;
}

.header_desc {
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 203% */

  color: #333333;
}
.flex_dir {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
}

.flex_dir .row {
  gap: 2rem;
  align-items: center;
}

.stats_det p {
  font-style: normal;
  font-weight: 700;
  font-size: 40.2727px;
  /* font-size: 47.2727px; */
  line-height: 50px;
  /* identical to box height, or 0% */

  /* text-align: center; */

  color: #000000;
}

.stats_det span {
  font-style: normal;
  font-weight: 400;
  font-size: 20.6364px;
  /* font-size: 23.6364px; */
  line-height: 20px;
  /* identical to box height, or 0% */

  color: #000000;
}

i {
  font-size: 3rem;
  color: #005be3;
}

.img_holder {
  position: relative;
  margin: 0.55rem 0;
}
.img_holder img {
  position: relative;
}
.img_holder p {
  position: absolute;
  background: linear-gradient(
    192.25deg,
    rgba(0, 0, 0, 0) 25.69%,
    #000000 92.11%
  );
  width: 100%;
  height: 120px;
  bottom: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 25.6857px;
  /* font-size: 31.6857px; */
  line-height: 58px;
  color: #ffffff;
  padding: 2rem;
}

p {
  margin-bottom: 0;
}

.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
}

.span {
  font-size: 22px;
}

@media (max-width: 800px) {
  .values {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .stats_det p {
    text-align: left;
    font-size: 30px;
  }
  i {
    font-size: 1.5rem;
    color: #005be3;
  }
  .flex_dir .row {
    gap: 1rem;
    align-items: center;
  }
}
</style>
