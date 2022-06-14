<template>
  <div class="wrapper q-pt-xl">
    <div class="header_text text-center">Works in progress</div>

    <div class="values container">
      <div class="hold">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/FdFaSa09v6M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hold">
        <iframe
          width="100%"
          height="315"
          src="https://youtube.com/embed/44NbIqA3iVo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hold">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/8B9LwIj276I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hold">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/7St3PFpiJbg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hold">
        <iframe
          width="100%"
          height="315"
          src="https://youtube.com/embed/JTP04btdsK0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hold">
        <iframe
          width="100%"
          height="315"
          src="https://youtube.com/embed/-avrXQFxfoM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
  align-items: center;
}
.header_text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  color: #005be3;
  margin: 2rem 0 3rem;
}

.span {
  font-size: 22px;
}
@media (max-width: 800px) {
  .values {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 800px) {
  .hero__text {
    height: 60vh;
  }
}
</style>
