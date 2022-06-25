<template>
  <section class="service">
    <div class="service__item">
      <div class="service__img">
        <img src="../assets/images/tvicon2.1.jpg" alt="tvicon2" />
      </div>
      <div class="service__detail">
        <h2>GIÁ CẠNH TRANH</h2>
        <p>chúng tôi có các tour du lịch với giá tốt nhất</p>
      </div>
    </div>
    <div class="service__item">
      <div class="service__img">
        <img src="../assets/images/tvicon3-copy.jpg" alt="tvicon2" />
      </div>
      <div class="service__detail">
        <h2>HỖ TRỢ 24/7</h2>
        <p>Luôn nhiệt tình tư vấn cho bạn</p>
      </div>
    </div>
    <div class="service__item">
      <div class="service__img">
        <img src="../assets/images/Layer-5.jpg" alt="tvicon2" />
      </div>
      <div class="service__detail">
        <h2>UY TÍN</h2>
        <p>10+ năm kinh nghiệm với hàng ngàn review tốt</p>
      </div>
    </div>
    <div class="service__item">
      <div class="service__img">
        <img src="../assets/images/ico_maps.jpg" alt="tvicon2" />
      </div>
      <div class="service__detail">
        <h2>HIỆN ĐẠI</h2>
        <p>Dễ Dàng tìm tour. dễ dàng kết nối</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.service {
  display: flex;
  align-items: center;
  width: 77%;
  margin: 0 auto;
  padding: 20px 0;
}
.service__img {
  display: flex;
  align-items: center;
}
.service__item {
  display: flex;
}
.service__detail {
  font-size: 14px;
  font-weight: 400;
  font-family: Helvetica;
  padding: 0 15px;
  text-align: left;
}
.service__detail h2 {
  font-weight: 500;
}
</style>