<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-md" elevated>
      <q-toolbar class="container no_pad justify-between">
        <div class="logo">
          <!-- <div class="text-h5 text-primary text-weight-bold">DAWIB GROUP</div> -->
          <img src="/images/logo.svg" alt="" />
        </div>
        <div class="nav__links">
          <q-tabs indicator-color="primary" dense active-color="primary">
            <q-route-tab
              style="color: black"
              label="Home"
              ripple
              no-caps
              class="text-black"
              to="/"
              exact
            />

            <q-route-tab
              style="color: black"
              label="About"
              ripple
              no-caps
              to="/about"
              exact
            />
            <q-btn-dropdown style="color: black" no-caps label="Our Businesses">
              <q-list>
                <q-item to="/our" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label class="text-weight-bold"
                      >DAWIB INVESTMENT RESOURCES</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item to="/farms" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label class="text-weight-bold"
                      >DAWIB FARMS LIMITED</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item to="/rima" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label class="text-weight-bold"
                      >RIMA GUARDS
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <!-- <q-route-tab
              style="color: black"
              label="Our Businesses"
              ripple
              no-caps
              to="/our"
              exact
            /> -->
            <!-- <q-route-tab
              style="color: black"
              label="Our Services"
              ripple
              no-caps
              to="/services"
              exact
            /> -->
            <q-route-tab
              style="color: black"
              label="Projects"
              ripple
              no-caps
              to="/projects"
              exact
            />
            <!-- <q-route-tab
              style="color: black"
              label="Blogs"
              ripple
              no-caps
              to="/blog"
              exact
            /> -->
          </q-tabs>
        </div>

        <div class="right">
          <div class="connect">
            <q-tabs dense active-color="primary">
              <q-route-tab
                label="Contact Us"
                ripple
                no-caps
                class="contact q-px-md q-py-sm text-white"
                to="/contactUs"
                exact
              />
            </q-tabs>

            <!-- <a
              href="https://www.gmail.com"
              target="_blank"
              no-caps
              style="width: 100%"
              class="contact q-px-md q-py-sm text-white"
            >
            </a> -->
          </div>
          <q-btn
            flat
            dense
            round
            color="black"
            icon="menu"
            aria-label="Menu"
            class="nav__toggler"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-tabs class="column" active-color="primary">
        <div
          style="width: 100%"
          class="column q-py-lg items-center side_bar justify-center"
        >
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/"
            exact
            label="home"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/about"
            label="about"
            exact
          />
          <q-btn-dropdown
            class="text-weight-medium"
            style="color: black"
            label="Our Businesses"
            exact
          >
            <q-list>
              <q-item to="/our" exact clickable v-close-popup>
                <q-item-section>
                  <q-item-label class="text-weight-bold"
                    >DAWIB INVESTMENT RESOURCES</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item to="/farms" exact clickable v-close-popup>
                <q-item-section>
                  <q-item-label class="text-weight-bold"
                    >DAWIB FARM LIMITED</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item to="/rima" exact clickable v-close-popup>
                <q-item-section>
                  <q-item-label class="text-weight-bold"
                    >RIMA GUARDS
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/our"
            label="Our Businesses"
          /> -->
          <!-- <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/services"
            label="Our Services"
          /> -->

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/projects"
            label="Projects"
            exact
          />
          <q-route-tab
            label="Contact Us"
            ripple
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/contactUs"
            exact
          />

          <!-- <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/blog"
            label="blog"
          /> -->
        </div>
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
.logo {
  padding-top: 0.6rem;
}
.logo img {
  width: 80%;
}
.nav__links ul,
.right {
  display: flex;
  gap: 0.65rem;
  align-items: center;
}
.nav__links ul {
  text-transform: capitalize;
}

.nav__toggler {
  display: none;
}

.contact {
  background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
  border-radius: 100px;
}
.page-col {
  display: flex;
  flex-direction: column;
}

.addbor {
  border: 1px solid #f4f4f4;
  padding: 0.55rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.socials {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.socials i {
  font-size: 3rem;
}
@media (max-width: 850px) {
  .menu {
    display: block;
  }

  .pages {
    display: none;
  }
  /* .logo {
    width: 160px;
  } */
}
@media (max-width: 1100px) {
  .nav__toggler {
    display: flex;
  }
  .nav__links {
    display: none;
  }
}
@media (max-width: 600px) {
  .contact {
    background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
    border-radius: 100px;
    width: 80px;
    font-size: 8px;
    display: none;
  }

  .logo > div {
    font-size: 25px;
  }
  .logo {
    padding-top: 0.6rem;
  }
}
</style>
