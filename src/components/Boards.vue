<template>
  <div>
    <div class="text-h3 text-center q-pt-xl header__text">Our Board</div>
    <div class="grid container">
      <!-- {{ boardData }} -->

      <div
        v-for="members in boardData"
        :key="members.id"
        class="grid-card my-font-poppins-light"
      >
        <figure class="effect-zoe">
          <div class="top-img">
            <img :src="members.img" alt="img25" />
            <span class="badge"></span>
          </div>

          <figcaption>
            <div class="movie">
              <q-btn @click="viewMember(members)" class="view"
                >View Profile</q-btn
              >
            </div>
          </figcaption>
        </figure>

        <div class="holert">
          <div class="det">
            <strong>{{ members.name }}</strong>
            <!-- <small>{{ members.position }}</small> -->
          </div>

          <p class="lead q-my-md">
            {{ members.desc }}
          </p>
          <!-- <span class="prev">Previously At</span>

        <img :src="members.previous" alt="" /> -->
        </div>

        <q-btn @click="viewMember(members)" class="profile">View Profile</q-btn>
      </div>

      <q-dialog full-width v-model="fixed">
        <q-card style="height: 60%">
          <div class="delp">
            <q-card-section>
              <!-- <div class="text-h6">{{ profile.name }}</div> -->
              <img :src="profile.img" alt="" class="imgg" />
            </q-card-section>

            <!-- <q-separator /> -->

            <q-card-section class="scroll">
              <div class="detr">
                <h5 class="text-weight-bold">{{ profile.name }}</h5>
                <!-- <small>{{ profile.position }}</small> -->
              </div>
              <p class="mk-lead">
                {{ profile.longerDesc }}
              </p>
            </q-card-section>
          </div>

          <!-- <q-separator /> -->

          <q-card-actions class="absolute-top" align="right">
            <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
            <q-btn
              class="bg-green q-pa-sm text-white"
              flat
              label="Close"
              color="primary"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  data() {
    return {
      fixed: false,
      profile: [],
      boardData: [
        {
          id: 1,
          name: "Alhaji Danjuma Ibrahim",
          position:
            "President and Chief Executive Officer (CEO) of Dawib Investment Resources and Dawib Farms Limited",
          desc: "Alh. Danjuma Ibrahim is an astute businessman and investor with over 30 years of practical work experience. He is currently the president and CEO of Dawib Investment Resources limited and Dawib Farms Limited. Dawib Investment Resources Limited is a national investment and general contracting company with operations cutting across an array of sectors from construction, construction management and consultancy to general contracts of supply and services.",
          longerDesc:
            "Alh. Danjuma Ibrahim is an astute businessman and investor with over 30 years of practical work experience. He is currently the president and CEO of Dawib Investment Resources limited and Dawib Farms Limited. Dawib Investment Resources Limited is a national investment and general contracting company with operations cutting across an array of sectors from construction, construction management and consultancy to general contracts of supply and services. The company has been in operations for nearly 2 decades now and has partnered on numerous occasions in the past with both the Federal Government and State governments as well as various MDA’s and other private companies to deliver on several mega projects and contracts that includes but not limited to Construction of office spaces to mass housing programs and contracts of supplies. The company has participated in several competitive contract bidding process and won on areas of construction and supplies. Dawib Investment Resources Limited has managed to record a sustainable growth in its operations over the years which has led to the company delivering exponential positive returns year on year. Valuable lesson learnt from the management of Dawib Investment Resources Limited and in an effort invest more in the Nigerian economy by keying into the federal government agenda of diversification through agriculture led Alh. Danjuma Ibrahim to expand his portfolio by setting up and integrated agricultural company known as Dawib Farms Limited. Dawib Farms Limited’s operations include farming, transportation, storage, processing and packaging of  vegetables and grains. A significant part of its farming operations is that of onions in which it is measured to be among the top 3 producers of onions in entire country helping to serve the need of several supply chains across the country. The Farm was able to achieve this in just two years of its operations. With still room for growth, the integrated farm intends to serve both local and international markets with its processed and packaged produce in the near future. Alh. Danjuma Ibrahim is an alma mater of the prestigious Ahmadu Bello University (ABU), Zaria. After his national youth service (NYSC) he worked in banking for nearly a decade before leaving the banking and financial industry to start his business. Alh. Danjuma Ibrahim is married with children.",
          state: "Ile de France",
          img: "/images/ceo.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157686/previous_company_logo-a7152901e4945b193313d5a80f9ff0d0.svg",
        },
        {
          id: 2,
          name: "SURAJ B. YAKUBU, FBR, FIoD",
          position:
            "Senior Partner (Chief Responsibility Officer, GSCL Consulting)",
          desc: "A Lawyer, investment Banker, and Management/HR Consultant, Suraj is a graduate from Ahamadu Bello University,Zaria( with post-graduate qualifications in law, management and finance from the International Development Law Institute (IDLI),Rome, and Oxford University. He has served as consultant and Adviser on Legal and Regulatory Reforms of State Owned Enterprises(SoEs) under the defunct TCPC and its successor, NCP/BPE.",
          longerDesc: `A Lawyer, investment Banker, and Management/HR Consultant, Suraj is a graduate
          from Ahamadu Bello University,Zaria( with post-graduate qualifications in law,
          management and finance from the International Development Law Institute (IDLI),
          Rome, and Oxford University. He has served as consultant and Adviser on Legal and
          Regulatory Reforms of State Owned Enterprises(SoEs) under the defunct TCPC and its
          successor, NCP/BPE. He also led teams that consulted for such bodies like the United
          Nations Commission For Trade & Development (UNCTAD), Webb Fontain, National
          Council On Privatization (NCP), Petroleum Equalisation Fund (PEF), Petroleum
          Products Price Regulatory Agency (PPPRA),Nigeria Petroleum Investment Management
          Services (NAPIMS),Department of Petroleum Resources(DPR), Nigeria Petroleum
          Development Company Ltd(NPDC),Federal Airports Authority of Nigeria (FAAN),
          Nigerian Ports Authority (NPA) to mention but a few. He was also the lead Consultant
          on Legal Framework for the Nigerian Financial System Strategy, Vision 2020, of the
          Central Bank of Nigeria (CBN)

          Suraj started out as the Board Secretary/Legal Adviser of the Nigeria Mining
          Corporation, Jos and subsequently became the Group Legal Adviser New Nigeria
          Development Company Limited, Kaduna, where he established himself in the mastery
          of loan syndication and securitisation. Based on this experience, he moved on to become
          the General Counsel/Head Trustees Department of Icon (Merchant Bank) Ltd.
          He served as the Commissioner for Agriculture and Natural Resources and member of
          the Kaduna State Executive Council from 1990 -1992. At the end of his tenure at the
          State Government level, he was appointed Assistant General Manager, Legal Services of
          Union Bank Plc and was later seconded to the then Technical Committee on
          Privatisation and Commercialisation (TCPC).
          Suraj has also availed the Federal Government of Nigeria his wealth of experience by
          serving in various committees and Extra- Ministerial set-ups including the following
          among others: - Member, Study Group on Diagnostic Review of Nigerian Railway
          Corporation 1992; Chairman, Railway Rehabilitation Implementation Committee

          Pg. 2 of 2
          1992-1994; Secretary, Honorary Presidential Advisory Council on Investment in
          Nigeria. He was the Executive Director/CEO of the Nigerian Investment Promotion
          Council (NIPC) from 2001 - 2004
          He has led teams that consulted for such bodies like the United Nations Commission
          For Trade & Development (UNCTAD), Webb Fontain, Petroleum Equalisation Fund
          (PEF), United Nations Commission For Trade & Development (UNCTAD), Petroleum
          Products Price Regulatory Agency (PPPRA), Federal Airports Authority of Nigeria
          (FAAN), Nigerian Ports Authority (NPA) to mention but a few. He also led the team that
          consulted for RUSAL in the acquisition of Aluminium Smelter Company of Nigeria
          (ALSCON). He served as the lead Consultant to the Central bank of Nigeria on Legal
          Framework for the Nigerian Financial System Strategy, Vision 2020.
          Suraj is a Fellow
          • Institute of Directors(IOD)
          • Business Recovery and Insolvency Practitioners Association of
          Nigeria(BRIPAN)
          Life Member
          • International Federation of Training & Development Organisation(IFTDO)
          Member
          • Nigerian Institute of Management(NIM)
          • International Bar Association(IBA)
          • Nigerian Bar Association(NBA)
          • International Society for Performance Improvement(ISPI), USA
          • Society for Human Resource Management(SHRM), USA
          • Learning And Development Network International (LDNI)

          Suraj is the founder, Senior Partner, and Chief Executive Officer of GSCL Consulting
          and holds the revered and exalted traditional title of Santuraki Babba, Zazzau of
          Zazzau Emirate, Kaduna State, Nigeria. June, 2023`,
          state: "Ile de France",
          img: "/images/yak.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157722/previous_company_logo-a2e4bba7a9d3357f6581c2ad6e72f0a1.svg",
        },
        {
          id: 3,
          name: "Aliyu Bello, ACCA",
          position: "Chartered Certified Accountant",
          desc: "Aliyu Bello Ibrahim is Chartered Certified Accountant with over 6 years of experience in the areas of accounting, taxation, and finance. He possesses strong professional accounting, finance, and information technology knowledge and skill. His core competencies include financial analysis, financial/corporate reporting (IFRS), taxation, negotiation, data analysis, investment appraisal and equity valuation, and the use of innovative tools to solve organizational challenges.",
          longerDesc: `Aliyu Bello Ibrahim is Chartered Certified Accountant with over 6 years of experience
          in the areas of accounting, taxation, and finance. He possesses strong professional
          accounting, finance, and information technology knowledge and skill. His core
          competencies include financial analysis, financial/corporate reporting (IFRS), taxation,
          negotiation, data analysis, investment appraisal and equity valuation, and the use of
          innovative tools to solve organizational challenges.
          Born 14th March 1992 in Sokoto State, Aliyu attended Sokoto State Primary School
          (SCPS) for his primary education, and Secondary School Education for Junior and
          Senior level at Federal Government College, Keffi, Nasarawa State and Essence
          International School, Kaduna State respectively. Aliyu attended AIMST University,
          Malaysia for his tertiary education where he graduated with a Bachelor of Science with
          Honors in Management Information Systems and right after that a Master of Business
          Administration specializing in oil and gas management from Coventry University at its
          London Campus in the United Kingdom.
          Aliyu Bello Ibrahim is a Member of the Association of Chartered Certified Accountants
          (ACCA), United Kingdom. He is also a recipient of several other professional
          development certificates in the areas of finance, accounting, taxation, and information
          technology from notable institutions like the United Nations Institute for Training and
          Research (UNITAR) & The World Bank Group.`,
          state: "Ile de France",
          img: "/images/aliyu.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },

        {
          id: 4,
          name: "AMINA IBRAHIM",
          position: "position",
          desc: `Amina Ibrahim is a corporate lawyer with 5 years of experience in business, corporate
          compliance, and investment law. She has proven experience of being an effective
          team member with strong drive and ability to respond quickly and accurately to
          evolving corporate regulatory and compliance issues.`,
          longerDesc: `Amina Ibrahim is a corporate lawyer with 5 years of experience in business, corporate
          compliance, and investment law. She has proven experience of being an effective
          team member with strong drive and ability to respond quickly and accurately to
          evolving corporate regulatory and compliance issues. She is well versed in multi-state
          business regulations, corporate compliance, and complex business transactions with
          the ability to negotiate commercial and business-related documents for cutting-edge
          business transactions.
          Amina Ibrahim was awarded an LLB at Baze University Abuja. She later was trained
          at the Nigerian Law School where she became a Barrister and Solicitor of the Supreme
          Court of Nigeria. She also holds an LLM from Baze University Abuja and is also a
          member of the prestigious Institute of Chartered Mediators and Conciliators.
          `,
          state: "Ile de France",
          img: "/images/ami.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },
      ],
    };
  },

  methods: {
    viewMember(member) {
      this.fixed = true;
      //   console.log("first", member);
      this.profile = member;
      console.log(this.profile);
    },
  },
};
</script>

<style scoped>
.header__text {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 30px;
  margin: 2.5rem 0 1.5rem;
  border-radius: 10px;
  /* background: #005be3; */
  color: #005be3;
  /* margin-bottom: 1rem; */
  padding: 0.75rem;
}
.delp {
  display: grid;
  gap: 1rem;
  background: #ffff;
  padding: 1rem;
  grid-template-columns: 1fr 3fr;
  align-items: center;
}
.delp p {
  font-size: 1.1rem;
  line-height: 1.5;
  height: 300px;
  overflow: scroll;
}

.delp img {
  width: 100%;
  /* height: 100%; */
  height: 300px;
  object-fit: contain;
}
.grid {
  position: relative;
  margin: 0 auto;
  padding: 1.5em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 2rem;
}
.grid-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background-color: #fff;
  color: #2f3238;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  width: 100%;
}

.grid-card p,
.mk-lead {
  text-align: left;
  color: #455065;
  flex: 1 0 auto;
  font-size: 14px;
  line-height: 21px;
  max-height: 400px;
  overflow: hidden;
  /* padding-top: 14px; */
}

.imgg {
  width: 100%;
}

.top-img,
.delp img {
  -webkit-clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  background-color: #fff;
  position: relative;
}
.grid-card .det {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.holert {
  display: flex;
  position: relative;
  flex: 1 0 auto;
  flex-direction: column;
  font-weight: 400;
  text-align: left;
  padding: 24px;
}

.holert img {
  height: 36px;
  width: 148px;
}

.holert .prev {
  color: #94989e;
  display: block;
  margin: 1rem 0;
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
}
.detr h5 {
  margin: 1rem 0;
  color: #262d3d;
  font-size: 28px;
  font-weight: 700;
  line-height: 1em;
}
/* .lead {
  color: #455065;
  flex: 1 0 auto;
  font-size: 14px;
  line-height: 21px;
  max-height: 400px;
  overflow: hidden;
  padding-top: 14px;
  text-align: left;
  white-space: pre-wrap;
} */

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  /* margin: 10px 1%; */
  margin: 0;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  /* background: #3085a3; */
  text-align: center;
  cursor: pointer;
}

.badge::before {
  content: "\f4d6";
  /* background: url("/c9f029bcf4d7f03d94f59c8d85d49168.svg") no-repeat center
    center/cover; */
  z-index: 2000;
  width: 15px;
  height: 15px;
  bottom: 0%;
  left: 0;

  position: absolute;
  bottom: 4%;
  left: 1%;
  padding: 1rem;
  font-family: "FontAwesome";
  /* background-color: #00cc83; */
  background: #21ba45;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid figure img {
  position: relative;
  display: block;
  width: 100%;
  object-fit: cover;
  height: 300px;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption i {
  margin: 1rem;
  color: #00cc83;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Individual effects */

/*---------------*/
/***** Zoe *****/
/*---------------*/

figure.effect-zoe figcaption {
  top: auto;
  bottom: 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 3.75em; */
  height: 100%;
  opacity: 0.55;
  background: rgba(32, 78, 207, 0.55);
  color: #3c4a50;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

figure.effect-zoe .view {
  border: none;
  /* background-color: #051622; */
  padding: 1rem;
  color: #fff;
  border-radius: 8px;
  position: relative;
  z-index: 10000;
  cursor: pointer;
}
.profile {
  background-color: #3498db;
  border: none;
  padding: 1rem;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-weight: 800;
  background: #21ba45;
  border-color: #00cc83;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

.movie {
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.det strong {
  color: #204ecf;
}
.det small {
  color: #8f96a3;
  margin: 0.55rem 0;
}

.lead {
  color: #455065;
}
figure.effect-zoe h2 {
  float: left;
}

figure.effect-zoe p.icon-links a {
  float: right;
  color: #3c4a50;
  font-size: 1.4em;
}

figure.effect-zoe:hover p.icon-links a:hover,
figure.effect-zoe:hover p.icon-links a:focus {
  color: #252d31;
}

figure.effect-zoe p.description {
  position: absolute;
  bottom: 8em;
  padding: 2em;
  color: #fff;
  text-transform: none;
  font-size: 90%;
  opacity: 0;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
  -webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
}

figure.effect-zoe h2,
figure.effect-zoe p.icon-links a {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
}

figure.effect-zoe p.icon-links a span::before {
  display: inline-block;
  padding: 8px 10px;
  font-family: "feathericons";
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-eye::before {
  content: "\e000";
}

.icon-paper-clip::before {
  content: "\e001";
}

.icon-heart::before {
  content: "\e024";
}

figure.effect-zoe h2 {
  display: inline-block;
}

figure.effect-zoe:hover p.description {
  opacity: 1;
}
figure.effect-zoe:hover figcaption .movie {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}

figure.effect-zoe:hover figcaption,
figure.effect-zoe:hover h2,
figure.effect-zoe:hover p.icon-links a {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.mk {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-zoe:hover h2 {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(3) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(2) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

figure.effect-zoe:hover p.icon-links a:first-child {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

@media screen and (max-width: 50em) {
  .content {
    padding: 0 10px;
    text-align: center;
  }
  .grid figure {
    display: inline-block;
    float: none;
    margin: 10px auto;
    width: 100%;
  }
}
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

body {
  /* background: #2f3238; */
  color: #fff;
  font-weight: 400;
  font-size: 1em;
  font-family: "Raleway", Arial, sans-serif;
}

a {
  outline: none;
  color: #3498db;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #528cb3;
}

section {
  padding: 1em;
  text-align: center;
}

.content {
  margin: 0 auto;
  max-width: 1000px;
}

.content > h2 {
  clear: both;
  margin: 0;
  padding: 4em 1% 0;
  color: #484b54;
  font-weight: 800;
  font-size: 1.5em;
}

.content > h2:first-child {
  padding-top: 0em;
}

/* Header */
.codrops-header {
  margin: 0 auto;
  padding: 4em 1em;
  text-align: center;
}

.codrops-header h1 {
  margin: 0;
  font-weight: 800;
  font-size: 4em;
  line-height: 1.3;
}

.codrops-header h1 span {
  display: block;
  padding: 0 0 0.6em 0.1em;
  color: #74777b;
  font-weight: 300;
  font-size: 45%;
}

/* Demo links */
.codrops-demos {
  clear: both;
  padding: 1em 0 0;
  text-align: center;
}

.content + .codrops-demos {
  padding-top: 5em;
}

.codrops-demos a {
  display: inline-block;
  margin: 0 5px;
  padding: 1em 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}

.codrops-demos a:hover,
.codrops-demos a:focus,
.codrops-demos a.current-demo {
  background: #3c414a;
  color: #fff;
}

/* To Navigation Style */
.codrops-top {
  width: 100%;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.69em;
  line-height: 2.2;
}

.codrops-top a {
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  letter-spacing: 1px;
}

.codrops-top span.right {
  float: right;
}

.codrops-top span.right a {
  display: block;
  float: left;
}

.codrops-icon:before {
  margin: 0 4px;
  text-transform: none;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  font-family: "codropsicons";
  line-height: 1;
  speak: none;
  -webkit-font-smoothing: antialiased;
}

.codrops-icon-drop:before {
  content: "\e001";
}

.codrops-icon-prev:before {
  content: "\e004";
}

/* Related demos */
.related {
  clear: both;
  padding: 6em 1em;
  font-size: 120%;
}

.related > a {
  display: inline-block;
  margin: 20px 10px;
  padding: 25px;
  border: 1px solid #4f7f90;
  text-align: center;
}

.related a:hover {
  border-color: #39545e;
}

.related a img {
  max-width: 100%;
  opacity: 0.8;
}

.related a:hover img,
.related a:active img {
  opacity: 1;
}

.related a h3 {
  margin: 0;
  padding: 0.5em 0 0.3em;
  max-width: 300px;
  text-align: left;
}

/* Demo ad design */
body #cdawrap {
  background: none;
  top: 50px;
  border: none;
}

body #cdawrap a {
  color: #fff !important;
}

body #cda-remove {
  color: #fff;
}

@media screen and (max-width: 25em) {
  .codrops-header {
    font-size: 75%;
  }
  .codrops-icon span {
    display: none;
  }
}
@media (max-width: 700px) {
  .delp {
    grid-template-columns: 1fr;
  }
  .delp img {
    height: 200px;
  }
}
@media (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
