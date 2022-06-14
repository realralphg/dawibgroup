<template>
  <div class="wrapper">
    <div class="quality">
      <div class="quality_details">
        <div class="head">
          <h5>Quality Assurance</h5>
          <div class="line"></div>
        </div>

        <div class="quality_det">
          <p>
            Under the direction of the quality and control and quality assurance
            manager, who safeguard and ensure that work is carried out
            excellently according to the inherent internaltional standards,
            rules and procedures and that shall meet the quality requirements of
            its contract, its attached specificatins and special prescriptions.
            We are renowed as a quality - oriented organization, we use high
            quality raw materials throughout our service in every field.
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
.wrapper {
  background: url("/images/qua.jpg") center left/cover no-repeat;
  height: 650px;
  position: relative;
  /* height: 100%; */
  margin-top: 5rem;
}
.wrapper::before {
  background: rgb(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 100%;
}

.quality {
  /* height: 351px; */
  height: 60%;
  position: absolute;
  background: white;
  right: 0;
  /* width: 731px; */
  width: 58%;
  top: 85%;
  transform: translateY(-85%);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.head {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.head h5 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 18px;
  /* identical to box height, or 0% */

  color: #005be3;
}

.head .line {
  height: 2px;
  background: linear-gradient(180deg, #27ab83 0%, #27ab83 100%);
  width: 280px;
}

.quality_det p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #333333;
  margin-top: 3rem;
}

.btn {
  width: 30%;
  margin-top: 2rem;
}

@media (max-width: 800px) {
  .quality {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .head h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;

    color: #005be3;
  }
  .quality_det p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
    margin-top: 1rem;
  }
  .btn {
    width: 50%;
    margin-top: 1rem;
  }
  .quality {
    width: 88%;
    height: 50%;
  }
}

@media (max-width: 500px) {
  .quality {
    width: 88%;
    height: 65%;
  }
  .btn {
    width: 70%;
    margin-top: 1rem;
  }

  .quality {
    padding: 1.5rem;
  }
  .quality_det p {
    font-size: 12px;
  }
}
</style>
