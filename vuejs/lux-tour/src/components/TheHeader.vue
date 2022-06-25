<template>
  <section class="header__cover--top">
    <div class="container">
      <div class="header__top">
        <div class="header__social">
          <ul class="header__icon">
            <li>
              <a
                class="icon-item"
                href="https://www.facebook.com/Vietpowerteambuilding"
                target="_blank"
                ><i class="fab fa-facebook icon"></i
              ></a>
            </li>
            <li>
              <a class="icon-item" href=""
                ><i class="fab fa-instagram icon"></i
              ></a>
            </li>
            <li>
              <a class="icon-item" href=""
                ><i class="fab fa-youtube icon"></i
              ></a>
            </li>
          </ul>
          <p class="header__mail">info@luxtour.com.vn</p>
        </div>
        <div class="header__contact">
          <p class="header__number">0372.66.7666</p>
          <p class="header__call">Liên Hệ</p>
        </div>
      </div>
    </div>
  </section>
  <section class="header__cover--bottom">
    <div class="container">
      <div class="bottom-cover">
        <img :src="luxlogo" alt="luxlogo" />
        <ul class="header__menu">
          <li class="header__item">
            <router-link to="/"
              >TOUR DU LỊCH <span><i class="fa fa-chevron-down"></i></span>
            </router-link>
          </li>
          <li class="header__item">
            <router-link to="/">VÉ MÁY BAY</router-link>
          </li>
          <li class="header__item">
            <router-link to="/">BOOK KHÁCH SẠN</router-link>
          </li>
          <li class="header__item">
            <router-link to="/">DỊCH VỤ VISA</router-link>
          </li>
          <li class="header__item">
            <router-link to="/">THUÊ XE</router-link>
          </li>
          <li class="header__item">
            <router-link to="/">TIN TỨC</router-link>
          </li>
          <div class="header__search">
            <i class="fa fa-search"></i>
          </div>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import luxlogo from "../assets/images/main-logo.jpg";

export default {
  data() {
    return {
      luxlogo: luxlogo,
    };
  },
};
</script>

<style>
.header__cover--top {
  background-color: rgb(16, 109, 106);
}

.header__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(16, 109, 106);
}
.header__icon {
  list-style: none;
  display: flex;
  width: 70px;
  justify-content: space-between;
  color: white;
  padding: 0 20px 0 0;
  margin: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.header__icon .icon-item {
  color: unset;
}
.header__mail {
  color: white;
  margin: 0;
  margin-left: 15px;
}
.header__social {
  display: flex;
}
.header__contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  color: white;
}
.header__number {
  margin: 0;
  padding: 0px 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.header__call {
  margin: 0;
  padding: 0 10px;
}

/* header bottom */
.header__cover--bottom {
  background-color: white;
  padding: 10px 0;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
}
.bottom-cover {
  display: flex;
}
.header__bottom {
  background-color: white;
}
.header__menu {
  display: flex;
  list-style: none;
}
.header__item {
  padding: 0 20px;
}
.header__item:hover {
  cursor: pointer;
}
.header__item a {
  text-decoration: none;
  color: unset;
}
</style>