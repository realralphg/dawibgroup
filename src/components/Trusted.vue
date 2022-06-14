<template>
  <section class="section-one q-pt-xl">
    <h6 class="text-center q-py-lg q-px-lg">
      We are trusted by the best companies
    </h6>
    <div class="com container">
      <div class="sponsor__content">
        <img src="/images/agip.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/total.jpg" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/sng.png" alt="" class="sponsor__img" />
      </div>

      <div class="sponsor__content">
        <img src="/images/will.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/del.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/ash.svg" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/spdc.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/nccd.jpeg" alt="" class="sponsor__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.section-one {
  /* margin-top: 6rem; */
  /* background-color: #e5e5e5; */
}

.sponsor__img {
  opacity: 0.4;
  width: 90px;
  /* filter: invert(0.7); */
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.sponsor__img:hover {
  opacity: 1;
  width: 90px;
  /* filter: invert(0.7); */
  transition: all 0.5s ease-in-out;
}

.com {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  justify-items: center;
  align-items: center;
  row-gap: 3.5rem;
}

@media (max-width: 500px) {
  .section-one {
    margin-top: 0rem;
  }
}
</style>
