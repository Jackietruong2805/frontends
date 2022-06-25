<template>
  <section class="banner">
    <div class="container">
      <div class="banner__intro">
        <h1 class="intro-first">TÌM ĐỊA ĐIỂM TIẾP THEO ĐỂ GHÉ THĂM</h1>
        <p class="intro-second">
          ĐẶT NHỮNG ĐIỀU ĐÁNG KINH NGẠC ĐỂ LÀM TRÊN KHẮP THẾ GIỚI
        </p>
      </div>
      <div class="banner__inputgroup">
        <form class="banner__location">
          <input class="input-location toCapitalFirst" type="text" placeholder="Từ Hà Nội" />
          <span class="search-icon"><i class="fa fa-search"></i></span>
        </form>
        <form class="banner__search">
          <input class="input-search toCapitalFirst" type="text" placeholder="Điểm Đến" v-model="Destination" />
          <span class="location-icon"><i class="fa-solid fa-location-dot"></i></span>
        </form>
        <form action="" class="banner__find">
          <input type="submit" value="Tìm kiếm" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Destination: "",
    }
  },
  methods: {
    onInput() {

    }
  }



};
</script>

<style>
.toCapitalFirst {
  text-transform: capitalize;
  color: gray;
}

.banner {
  background-image: url("../assets/images/banner-luxtour.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  color: white;
}

.banner__intro {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-first {
  font-family: Helvetica;
  font-weight: bold;
  font-size: 35px;
}

.intro-second {
  font-family: Helvetica;
  font-weight: 400;
  font-style: italic;
  margin: 0;
}

.banner__inputgroup {
  display: flex;
  justify-content: center;
  padding: 50px;
  width: 700px;
  margin: 0 auto;
}

.banner__location {
  justify-content: space-between;
  border-radius: 5px 0 0 5px;
}

.banner__search {
  justify-content: space-between;
  flex-grow: 1;
}

.banner__find {
  border-radius: 0 5px 5px 0;
  background-color: rgb(27, 179, 174) !important;
}

.banner__find input[value] {
  color: white;
}

.banner__inputgroup input {
  border: 0;
  background-color: transparent;
}

.banner__inputgroup input:focus {
  outline: none;
}

.banner__inputgroup form {
  background-color: white;
  margin: 0 2px;
  padding: 2px 5px;
  height: 38px;
  display: flex;
  align-items: center;
}

.search-icon {
  color: #ddd;
}

.location-icon {
  color: #ddd;
}

.banner__search {
  background-color: white;
}
</style>