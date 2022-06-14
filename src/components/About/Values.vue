<template>
  <div class="wrapper">
    <div class="team container">
      <h2>Our Core Values</h2>
      <p class="desc">We are an organization with communal Attitude</p>

      <div class="values">
        <div class="hold">
          <i class="ri-open-arm-fill"></i>

          <p>
            <span class="span text-weight-bold">Client First:</span>
            We exist to serve our clients. Our success will be determined by how
            well we perdrom for our clients
          </p>
        </div>
        <div class="hold">
          <i class="ri-sun-fill"></i>

          <p>
            <span class="span text-weight-bold">Innovation:</span>
            We are instinctive, inquisitive, creative, sensible and bold, which
            allows us to create new ideas for our clients, our business and
            employees. These ideas come from anywhere throughout our global
            operation
          </p>
        </div>
        <div class="hold">
          <i class="ri-group-fill"></i>

          <p>
            <span class="span text-weight-bold">Team Work:</span>
            Success requires teamwork. We are collaborative and respect the
            contribution of each person to the team success.
          </p>
        </div>
        <div class="hold">
          <i class="ri-hand-heart-fill"></i>

          <p>
            <span class="span text-weight-bold">Respect:</span> We are a global
            company with many cultures. We respect and embrace people and
            perspectives from all over the world
          </p>
        </div>
        <div class="hold">
          <i class="ri-numbers-fill"></i>

          <p>
            <span class="span text-weight-bold">Accountability:</span>
            We do what we say we will do. We own a collective responsibility
            towards clients, colleagues, communities and shareholders.
          </p>
        </div>
        <div class="hold">
          <i class="ri-service-fill"></i>
          <p>
            <span class="span text-weight-bold">Service:</span>
            We are about service and delivering value.
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
.team {
  padding: 4rem 0 0;
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

.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
  align-items: center;
}
.values .hold {
  display: flex;
  gap: 1rem;
  /* align-items: center; */
}

.span {
  font-size: 22px;
}

.hold p {
  font-size: 18px;
  color: rgba(51, 51, 51, 0.92);
}
.hold i {
  font-size: 38px;
  color: #005be3;
  /* color: #21ba45; */
}

@media (max-width: 800px) {
  .values {
    grid-template-columns: 1fr;
  }
}
</style>
