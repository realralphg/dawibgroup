<template>
  <div class="wrapper">
    <div class="team">
      <h2>Our Projects</h2>
      <p class="desc">Amazing projects we have worked on</p>
      <div class="row container">
        <div class="column">
          <img src="/images/proj1.png" />
          <img src="/images/proj2.png" />
          <img src="/images/proj3.png" />
        </div>
        <div class="column">
          <img src="/images/proj8.png" />
          <img src="/images/proj9.png" />
          <img src="/images/proj5.png" />

          <!-- <img src="/images/proj11.png" />
          <img src="/images/proj12.png" />
          <img src="/images/proj12.png" /> -->
        </div>
        <div class="column">
          <img src="/images/proj11.png" />
          <img src="/images/proj12.png" />
          <!-- <img src="/images/proj12.png" /> -->
          <img src="/images/proj10.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.team {
  padding: 4rem 0;
}
.team h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 51.84%;
  color: #005be3;
  text-align: center;
}
p.desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  color: rgba(51, 51, 51, 0.92);
  text-align: center;
  margin: 1rem 0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: center;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

img {
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
}

img:hover {
  transform: scale(1.1);
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
  p.desc {
    font-size: 18px;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
