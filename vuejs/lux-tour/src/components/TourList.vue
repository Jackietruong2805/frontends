<template>
  <section class="card">
    <h1>TOUR NỔI BẬT BA MIỀN</h1>
    <div class="card__list">
      <tour-item :TourList="TourList"></tour-item>
    </div>
  </section>
</template>

<script>
import TourItem from "./TourItem.vue";
import img1 from "../assets/images/tour-sapa-4-ngay-3-dem.jpg";
import img2 from "../assets/images/sapa-haiphong.jpg";
import img3 from "../assets/images/sapa-tphcm.jpg";
import img4 from "../assets/images/sapa-21.jpg";
export default {
  components: {
    TourItem,
  },
  data() {
    return {
      TourList: [
        {
          location: "Sapa",
          link: "/sapa4day",
          image: img1,
          timeline: "Tour du lịch Sapa 4 ngày 3 đêm",
          fromto: "Hà Nội - Sapa",
          timedetail: "4 ngày 3 đêm",
          decprice: "6.590.000",
          price: "3.950.000",
          sale: "-40%",
        },
        {
          location: "Sapa",
          link: "/sapahaiphong",
          image: img2,
          timeline: "Tour du lịch từ Hải Phòng 3 ngày 2 đêm",
          fromto: "Hải Phòng - Sapa",
          timedetail: "3 ngày 2 đêm",
          decprice: "4.590.000",
          price: "2.450.000",
          sale: "-20%",
        },
        {
          location: "Sapa",
          link: "/sapahainoi",
          image: img3,
          timeline: "Tour du lịch Sapa từ TP HCM 3 ngày 2 đêm",
          fromto: "Tp HCM - Sapa",
          timedetail: "3 ngày 2 đêm",
          decprice: "8.590.000",
          price: "5.690.000",
          sale: "-10%",
        },
        {
          location: "Sapa",
          link: "/sapatphcm",
          image: img4,
          timeline: "Tour du lịch Sapa 2 ngày 1 đêm",
          fromto: "Hà Nội - Sapa",
          timedetail: "2 ngày 1 đêm",
          decprice: "3.150.000",
          price: "1.590.000",
          sale: "-25%",
        },
      ],
    };
  },
};
</script>

<style>
.card {
  width: 77%;
  margin: 0 auto;
  padding: 20px 0;
}

.card h1 {
  font-family: Helvetica;
  font-weight: 500;
  font-size: 22px;
}

.card__list {
  display: flex;
  justify-content: space-between;
}
</style>