<template>
  <Topnav :currentCity="currentCity ? currentCity : 'Any where'" :currentType="currentType ? currentType : 'Any type'"
    :onChooseCity="letChooseCity" :onChooseType="letChooseType" />
  <!-- <Modal v-if="showModal" :onResponse="onResp" :description="modalDescription" :title="modalTitle" :options="options" /> -->
  <SearchModal v-if="showModal" :onClose="searchClosed"/>
  <Container>
    <FlexContainer :onLoadMore="loadmorelatest" id="latest" class="flex flex-row flex-wrap">
      <div v-for="item in latest" :key="item.id" class="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1  ">
        <div class="overflow-hidden relative">
          <img :src="item.image" loading="lazy" class="w-full aspect-square  object-cover rounded-md shadow-md mb-2" :alt="item.title">
          <div class="text-sm font-bold mb-1">{{item.title}}</div>
          <div class="text-sm text-gray-600 text-ellipsis overflow-hidden whitespace-nowrap">{{item.description}}</div>
          <div class=" absolute top-2 right-2 text-xs font-bold bg-gray-900/60 rounded-full px-2 text-white">{{item.price}}</div>
        </div>
      </div>
    </FlexContainer>
    <div class="w-full font-bold ">Browse to find Your Dream House </div>
    <div class="w-full text-gray-700 ">In the bellow you can search for your desired property in our database. this database is divided type by type and city by city so you can reach your desired property faster .</div>
    <Tabs :tabs="cities"/>


  </Container>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TopNav from '../components/TopNav.vue'
import Container from '../components/Container.vue'
import Tabs from '../components/Tabs.vue'
import FlexContainer from '../components/FlexContainer.vue'
import Modal from '../components/Modal.vue'
import SearchModal from '../components/SearchModal.vue'
import Footer from '../components/Footer.vue'
@Options({
  data() {
    return {
      latest: [
        {
          id: 1,
          title: 'Celia Heights Apartments',
          description: 'Celia Heights Apartments at Majan, Dubailand are luxurious properties in Dubai, located amidst a tranquil setting. These flats not only present an unparalleled lifestyle, but also come with incredible investment value. The investment potential is the result of affordable prices and 1% monthly installments that are payable in 4 years. This project boasts special features. Below, the details of this project are provided.',
          image: 'items/1.jpeg',
          stars: 4,
          price: 'AED 440,246'
        },
        {
          id: 2,
          title: 'Armani Beach Residences',
          description: 'Armani Beach Residences at Palm Jumeirah are brand-new homes in Dubai that perfectly epitomize luxury living. This project offers sophisticated flats in Dubai that are beautifully surrounded with stunning waters. So, your home in this collection will provide you with breathtaking views of the waters. In addition to this, the Armani Beach Apartments boast modern amenities, thoughtful interiors and many more. To know about the details of this project, read on to the end.',
          image: 'items/2.jpg',
          stars: 5,
          price: 'AED 25,000,000'
        },
        {
          id: 3,
          title: 'The Haven Apartments',
          description: 'Experience a tranquil haven amidst the bustling cityscape at The Haven Apartments at Majan, Dubailand. Nestled in a serene, nature-inspired setting, these apartments in Dubai redefine urban living by offering a lifestyle that seamlessly blends modern comforts with the tranquility of nature. Residents enjoy a peaceful ambiance surrounded by lush greenery, scenic landscapes, and thoughtfully designed spaces that evoke a sense of calm and relaxation. More details over The Haven by Meraki are provided below.',
          image: 'items/3.jpg',
          stars: 4.5,
          price: 'AED 540,000'
        },
        {
          id: 4,
          title: 'Park Gate Villas',
          description: 'Park Gate Villas at Dubai Hills Estate give you the perfect harmony of a strategic investment and a prestigious home. Being developed by Emaar Properties, the Park Gate project is a collection of limited 4BR and 5BR houses in Dubai. These villas boast a unique address in the green heart of Dubai, abundant modern facilities, a sophisticated design and many more. To know what make the Park Gate project by Emaar so special, do not miss the rest of the text.',
          image: 'items/4.jpeg',
          stars: 5,
          price: 'AED 10,400,000'
        },
        {
          id: 5,
          title: 'Vela Viento Apartments',
          description: 'Vela Viento Apartments at Business Bay are part of a new architectural marvel by Omniyat in the very heart of Dubai. This project offers classy waterfront flats in Dubai in which you’ll have the pleasure of waterfront living on one side, and the allure of luxury urban living on the other. The ultra-prestigious location, breathtaking views, amazing amenities and other incredible features of these properties make them homes in Dubai that are unlike any other. Keep reading to find out why these properties are incredibly special!',
          image: 'items/5.webp',
          stars: 4,
          price: 'AED 19,000,000'
        },
        {
          id: 6,
          title: 'Royal Regency Apartments',
          description: 'Royal Regency Apartments at Business Bay are those homes in Dubai giving you the pinnacle of cosmopolitan lifestyle. These flats boast a prestigious location in the Business Bay area which is the heart of the city. So, by investing in this project, you’ll have the chance to live close to Burj Khalifa and Dubai Mall. Besides, your home will be surrounded with the city’s most important business and entertainment facilities. To know more about the lifestyle and investment potential of these properties in Dubai, read on to the end.',
          image: 'items/6.jpg',
          stars: 4,
          price: 'AED 1,200,000'
        },
        {
          id: 7,
          title: 'Jouri Hills Villas and Townhouses',
          description: "Arada Developer's newest project, Jouri Hills in Jumeirah Golf Estates, has a distinctive variety of three and four-bedroom townhouses, five-bedroom villas, and six-bedroom mansions. You will be able to live in an amazing community with enough creativity to make life fun, as well as the best facilities and amenities that have been professionally designed to satisfy every need and expectation you have. The project is anticipated to be turned over in 2025. The sort of luxury that, all in one place, somehow elevates outstanding living to a whole new level and fundamentally changes the way you live. We’ll talk more about Jouri Hills villas and townhouses by Arada on this page",
          image: 'items/7.jpg',
          stars: 4,
          price: 'AED 5,008,000'
        },        {
          id: 8,
          title: 'Royal Regency Apartments',
          description: 'Royal Regency Apartments at Business Bay are those homes in Dubai giving you the pinnacle of cosmopolitan lifestyle. These flats boast a prestigious location in the Business Bay area which is the heart of the city. So, by investing in this project, you’ll have the chance to live close to Burj Khalifa and Dubai Mall. Besides, your home will be surrounded with the city’s most important business and entertainment facilities. To know more about the lifestyle and investment potential of these properties in Dubai, read on to the end.',
          image: 'items/6.jpg',
          stars: 4,
          price: 'AED 1,200,000'
        },
      ],
      currentCity: null,
      currentType: null,
      showModal: false,
      modalDescription: '',
      modalTitle: '',
      options: null,
      cities: ['Any where', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Istanbul', 'Nicosia', 'Bodrum'],
      types: ['Any type', 'Apartment', 'Townhouse', 'Villa', 'Shop', 'Office', 'Hotel Apartment', 'Land'],
      action: null
    }
  },
  components: {
    Topnav: TopNav,
    Container,
    FlexContainer,
    Modal,
    Footer,
    Tabs,
    SearchModal
  },
  methods: {
    loadmorelatest(){
      alert("load more")
    },
    letChooseCity() {
      this.modalTitle = "Choose a city";
      this.modalDescription = "Choose your desired city bellow : ";
      this.options = this.cities
      this.action = "City";
      this.showModal = true;
    },
    letChooseType() {
      this.modalTitle = "Choose a type";
      this.modalDescription = "Choose your desired type bellow : ";
      this.options = this.types
      this.action = "Type";
      this.showModal = true;
    },
    onResp(data: String) {
      if (this.action == "City") {
        this.onCityChosen(data)
      } else {
        this.onTypeChosen(data)

      }
    },
    searchClosed(){
      this.showModal = false;

    },
    onCityChosen(city: String) {
      this.showModal = false;
      this.currentCity = city;
    },
    onTypeChosen(type: String) {
      this.showModal = false;
      this.currentType = type
    }
  }
})
export default class HomeView extends Vue { }
</script>
