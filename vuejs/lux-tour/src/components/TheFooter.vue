<template>
  <section class="footer">
    <div class="footer__contact">
      <div class="footer__img">
        <img src="../assets/images/LUX-TOUR.png" alt="" />
      </div>
      <div class="footer__item">
        <p>Hotline Liên Hệ</p>
        <p>0372.667.666</p>
      </div>
      <div class="footer__item">
        <p>Email cho chúng tôi</p>
        <p>info@luxtour.com.vn</p>
      </div>
      <div class="footer__item">
        <p>Địa Chỉ Văn Phòng</p>
        <p>14 Hàng Mành, Hoàn Kiếm, Hà Nội</p>
      </div>
    </div>
    <div class="footer__vehicle">
      <h2>Dịch Vụ LuxTour</h2>
      <p>Tour Du Lịch</p>
      <p>Vé Máy Bay</p>
      <p>Book Khách Sạn</p>
      <p>Dịch vụ Visa</p>
      <p>Thuê Xe</p>
    </div>
    <div class="footer__vehicle" style="margin-left: 100px">
      <h2>Hỗ trợ LuxTour</h2>
      <p>Về Chúng Tôi</p>
      <p>Tin tức - Blog</p>
      <p>Sự Kiện</p>
      <p>Điều Khoản</p>
      <p>Liên Hệ</p>
    </div>
    <div class="footer__vehicle" style="margin-left: 200px">
      <h2>Hỗ trợ LuxTour</h2>
      <p>Về Chúng Tôi</p>
      <p>Tin tức - Blog</p>
      <p>Sự Kiện</p>
      <p>Điều Khoản</p>
      <p>Liên Hệ</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: flex;
  color: white;
  padding: 30px 0;
}
.footer__contact {
  display: flex;
  flex-direction: column;
}
.footer__img {
  width: 170px;
}
.footer__img img {
  max-width: 100%;
}
.footer__item {
  border-left: 3px solid rgb(27, 179, 174);
  padding-left: 20px;
  margin-bottom: 20px;
  text-align: left;
}
.footer__item p {
  margin: 10px 0;
  padding: -2px;
  font-size: 17px;
  font-family: Helvetica;
  font-weight: 400;
}
.footer__vehicle {
  margin-left: 30px;
  font-family: Helvetica;
}
.footer__vehicle p {
  margin: 30px 0;
  font-size: 17px;
}
.footer__vehicle p:nth-of-type(1) {
  margin-top: 10px;
}
</style>