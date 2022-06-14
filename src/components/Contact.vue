<template>
  <div class="wrapper">
    <div class="wrap container">
      <div class="row contact_row no-wrap items-center">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="head_text">Schedule an Appointment with us</div>
          <div class="text-h3 head_desc q-py-md text-weight-bold">
            Better service starts here
          </div>

          <div class="inputs">
            <div class="input">
              <label for="">Full Name</label> <br />
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div class="input">
              <label for="">Email</label> <br />
              <input type="text" placeholder="Enter your email" />
            </div>
            <div class="input">
              <label for="">Phone</label> <br />
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div class="input">
              <label for="">What project are you interested in</label> <br />
              <input type="text" placeholder="Type here" />
            </div>
            <div class="input">
              <label for="">Location</label> <br />
              <input type="text" placeholder="Enter your location" />
            </div>

            <div class="input">
              <label for="">Ask your question</label> <br />
              <textarea name="" id="" cols="20" rows="10"></textarea>
            </div>

            <q-btn
              @click="bar = true"
              style="border-radius: 100px"
              class="bg-white text-secondary q-py-sm"
              >Send your message</q-btn
            >
          </div>
        </div>

        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="img">
            <img src="/images/contact.jpg" alt="" />
          </div>
        </div>
        <q-dialog v-model="bar" persistent>
          <div class="hold_dia">
            <div class="top">
              <div class="icon">
                <i class="ri-mail-fill"></i>
              </div>
              <p>Send us an email</p>
              <h4 class="text-weight-bold">Contact@Dawibgroup.com</h4>
            </div>
            <q-card-actions align="right">
              <q-btn
                style="border-radius: 8px"
                class="bg-primary q-px-lg q-py-sm text-white"
                flat
                @click="goBack"
                label="Close"
                color="primary"
              />
            </q-card-actions>
          </div>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      bar: ref(false),
    };
  },

  methods: {
    goBack() {
      this.bar = false;
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 3rem;
  position: relative;
  margin: 1rem 0 4rem;
  padding-bottom: 1rem;
}

.hold_dia {
  background: white;
  padding: 3rem 1rem;
}

.hold_dia .top {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;
}

.contact_row {
  gap: 2rem;
}

.head_text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
}
.icon {
  display: grid;
  place-items: center;
  animation: zoom 4s infinite;
  margin-bottom: 1rem;
  transition: all 0.5s ease-in-out;
}

.icon i {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c2b280;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
}

@keyframes zoom {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(0.9);
    opacity: 1;
    transform: scale(1);
  }
}

.head_desc {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 1rem;
}

label {
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 12.3667px;
  line-height: 20px;
}
input {
  border: none;
  background: rgba(197, 195, 195, 0.425);
}
.inputs .input input,
.inputs .input textarea {
  background-color: rgba(197, 195, 195, 0.425);
  padding: 0.85rem;
  width: 100%;
  margin: 1rem 0;
  border: none;
  border-radius: 3px;
}
.bg {
  width: 150px;
  position: absolute;
  right: 0;
  top: 0%;
}

.img {
  position: relative;
  height: 600px;
}

.img img {
  position: absolute;
  margin-top: 1rem;
  border-radius: 10px;
}

@media (max-width: 800px) {
  .contact_row {
    flex-wrap: wrap;
  }

  .img {
    position: relative;
    height: 300px;
  }
  h4 {
    font-size: 1.4rem;
  }
}
</style>
