<template>
  <div class="wrapper">
    <div class="why q-py-xl">
      <div class="row items-center justify-between q-pt-xl container">
        <div class="col-md-6 col-sm-12 addMargin col-xs-12">
          <div class="holderr">
            <div class="hold">
              <h6 class="why_heading">Security Company</h6>
              <p class="why_subtext">
                owing to the peculiarity of the geography, a security firm has
                been set up to provide security to the entire assets of the
                Group to forestall exposure to risk and theft.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">The Farm</h6>
              <p class="why_subtext">
                1000Ha will be put into full cultivation of wheat with an added
                5000Ha out grower scheme where farmers will be supported with
                input credits.
                <!-- capacity building for best practices, extension service, <br />
                mechanization, security, logistics, and guaranteed buy-back from
                Dawib Group. -->
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Mill</h6>
              <p class="why_subtext">
                Will offtake and process wheat from the farm and process into
                flour and wheat brand.
                <!-- For sustainability, special mills that utilize minimum power
                will be deployed <br />
                to utilize farm wastes and crop residues as source of power. -->
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Inputs Company</h6>
              <p class="why_subtext">
                Will supply inputs credits support and manage out grower scheme
                for optimal wheat production, recovery and guaranteed buy back
                from farmers.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Feed Mill</h6>
              <p class="why_subtext">
                Will process wheat brand into animal feeds for Livestock.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Livestock Farm</h6>
              <p class="why_subtext">
                Will utilize animal feed for meat and milk production and
                process them for the market.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Power Plant</h6>
              <p class="why_subtext">
                Will utilize farm wastes and crop residues to generate clean
                <br />
                energy, thereby earning carbon credits.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Engineering and Logistics company</h6>
              <p class="why_subtext">
                will provide engineering and logistics support to other arms of
                the business.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Fertilizer company</h6>
              <p class="why_subtext">
                will utilize by-product of the power plant, and process cattle
                dung to probiotics and organic fertilizer.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Marketing company</h6>
              <p class="why_subtext">
                will market the range of products from the Group.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col col-md-6 no_padding col-sm-12 q-mt-lg q-pl-xl col-xs-12"
        >
          <div class="img">
            <img class="bg" src="/images/cons.jpg" />
            <!-- <div
              class="trans_det row items-center justify-between bg-white q-pa-md"
            >
              <div class="left">
                <p class="text-weight-bold">N 20,000 K</p>
                <small class="">Received</small>
              </div>

              <div class="right">
                <i class="ri-check-fill"></i>
              </div>
            </div> -->
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
img {
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}
img:hover {
  transform: scale(1.1);
}
.why {
  position: relative;
  z-index: 2;
  padding-top: 3 2rem;
}
p {
  margin-bottom: 0;
}

.why_heading {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  /* or 104% */
}

.why_subtext {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0.7rem;

  color: #2f4858;
}
.button {
  border: none;
  padding: 1rem;
  background-color: #c0e5b72b;
}

.holderr {
  border-left: 4px solid #2f4858;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0, 0.5);
  margin: 0 auto;
  position: relative;
  padding-left: 3rem;
  text-align: left;
  /* width: 70%; */
  height: 1140px;
}

.holderr .hold::after {
  position: absolute;
  display: block;
  /* top: 50%; */
  transform: translateY(-50%);
}

.holderr .hold:nth-child(1),
.holderr .hold:nth-child(2),
.holderr .hold:nth-child(3),
.holderr .hold:nth-child(4),
.holderr .hold:nth-child(5),
.holderr .hold:nth-child(6),
.holderr .hold:nth-child(7),
.holderr .hold:nth-child(8),
.holderr .hold:nth-child(9),
.holderr .hold:nth-child(10) {
  position: relative;
  height: 124px;
  padding: 0.3rem;
}
.holderr .hold:nth-child(1)::after {
  content: "\f542";
  font-family: "FontAwesome";
  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;

  color: #fff;
  border-radius: 10px;
  padding: 1rem;
  left: -4.6rem;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(2)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(3)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  color: #fff;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(4)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(5)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(6)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(7)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(8)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(9)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(10)::after {
  content: "\f542";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.img {
  position: relative;
  width: 100%;
}

.img .bg {
  position: relative;
  z-index: 2;
  width: 90%;
  height: 100%;
  margin-top: 2rem;
  left: 50%;
  transform: translateX(-50%);
}
.img::before {
  content: "";
  position: absolute;
  border: 6px solid rgba(0, 91, 227, 0.5);
  background-color: #005be3;
  background-repeat: no-repeat;
  background-position: 30%;
  width: 100%;
  left: 50%;
  height: 75%;
  border-radius: 8px;
  transform: translateX(-50%);
}

.trans_det {
  box-shadow: 0px 4px 47px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 50%;
  height: 130px;
  position: absolute;
  bottom: 6%;
  z-index: 2;
}

.trans_det .left p {
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: #2f4858;
}

@media (max-width: 800px) {
  .trans_det {
    width: 80%;
  }
  .addMargin {
    margin-bottom: 5rem;
  }
  .holderr .hold:nth-child(1),
  .holderr .hold:nth-child(2),
  .holderr .hold:nth-child(3),
  .holderr .hold:nth-child(4) {
    padding: 0rem;
    margin-bottom: 2rem;
  }

  .why_subtext {
    font-size: 14px;
  }
  .img .bg {
    width: 100%;
  }

  .holderr {
    height: 1280px;
  }
}
@media (max-width: 400px) {
  .holderr .hold:nth-child(1)::after {
    content: "\f09d";
    top: 9%;
  }
  .holderr .hold:nth-child(2)::after {
    content: "\e06c";
    top: 9%;
  }
  .holderr .hold:nth-child(3)::after {
    content: "\f118";
    top: 9%;
  }
  .holderr .hold:nth-child(1),
  .holderr .hold:nth-child(2),
  .holderr .hold:nth-child(3),
  .holderr .hold:nth-child(4) {
    padding: 0rem;
    /* margin-bottom: 10rem; */
  }
}
</style>
