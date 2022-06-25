<template>
  <div v-for="(tour, index) in TourList" :key="index" class="cart__item">
    <div class="cart__img">
      <router-link :to="tour.link">
        <img :src="tour.image" alt="" style="max-width: 100%" />
      </router-link>
    </div>
    <div class="cart__detail">
      <p class="cart__location">
        <span class="locate-icon"><i class="fa fa-map-marker-alt"></i></span>
        {{ tour.location }}
      </p>
      <p class="cart__time">
        <router-link :to="tour.link">
          {{ tour.timeline }}
        </router-link>
      </p>
      <div class="cart__info">
        <span class="cart__fromto">{{ tour.fromto }}</span>
        <span class="cart__decprice">{{ tour.decprice }}</span>
      </div>
      <div class="cart__info">
        <span class="cart__timedetail">{{ tour.timedetail }}</span>
        <span>{{ tour.price }}</span>
      </div>
    </div>
    <div class="cart__sale">
      <span class="sale-detail">{{ tour.sale }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    TourList: {
      type: Array,
    },
  },
};
</script>

<style>
.cart__item {
  border: 1px solid #ddd;
  padding-bottom: 20px;
  position: relative;
  width: calc(100%/4.2);
}

.cart__img {
  overflow: hidden;
}

.cart__img img {
  transform: scale(1);
  transition: 0.5s;
}

.cart__img img:hover {
  transform: scale(1.1);
}

a {
  text-decoration: none;
  color: unset;
}

.locate-icon {
  color: gray;
}

.cart__detail {
  padding: 0 10px;
}

.cart__info {
  display: flex;
  justify-content: space-between;
}

.cart__fromto {
  color: gray;
}

.cart__decprice {
  color: red;
  text-decoration: rgba(0, 0, 0, 0.847) line-through;
}

.cart__timedetail {
  color: rgba(128, 128, 128, 0.1);
  font-size: 5px;
}

.cart__sale {
  width: 0;
  height: 0;
  border-top: 40px solid red;
  border-left: 40px solid transparent;
  position: absolute;
  top: 0;
  right: 0;
}

.sale-detail {
  display: inline-block;
  transform: rotateZ(45deg);
  position: absolute;
  top: -31px;
  right: -1px;
  font-size: 12px;
  color: white;
  font-weight: 700;
}
</style>