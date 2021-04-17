<template>
    <div>
      <div>
      <h2>Order Confirmation</h2>
      </div>
      <div class="card">
      <table>
        <thead>
          <tr>
            <th width="33%">Menu</th>
            <th width="33%">Amount</th>
            <th width="33%">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">  
              <img src="../assets/กระเพรา.jpeg" alt="Card example image" width="36%">
                ข้าวกะเพราไก่เต้าหู้ไข่ขาวล้วน
            </td>
            <td>10</td>
            <td>1,000</td>
          </tr>

          <tr>
            <td align="center">  
              <img src="../assets/ข้าวคลุกกะปิ.jpeg" alt="Card example image" width="33%">
               ข้าวคลุกกะปิ
            </td>
            <td>6</td>
            <td>600</td>
          </tr>

          <tr>
            <td align="center">  
              <img src="../assets/สลัดอกไก่.jpeg" alt="Card example image" width="36%">
                สลัดอกไก่
            </td>
            <td>4</td>
            <td>400</td>
          </tr>
        </tbody>
    </table>
    </div>

    <div style="padding-left:200px;">
      <h5><b>ยอดรวม</b> : 2,000</h5>
    </div>

    <div class="flex-center" style="text-align:center">
      <h5><b>อัพโหลดหลักฐานการชำระเงิน</b></h5>
      <p>ช่องทางการชำระเงิน</p>
      <p><b>Promtpay : 090909000</b></p>
      <input class="center-block" type="file" id="paperInputs2" placeholder="ชื่อ-นามสกุล">
    </div>

<div class="row flex-spaces child-borders" style="padding-top:30px;">
  <label class="paper-btn margin" for="modal-1">ยืนยันคำสั่งซื้อ</label>
</div>

<input class="modal-state" id="modal-1" type="checkbox">
<div class="modal" style="text-align:center">
  <label class="modal-bg" for="modal-1"></label>
  <div class="modal-body">
    <label class="btn-close" for="modal-1">X</label>
    <h4 class="modal-title">สั่งซื้อสำเร็จ !</h4>
    <img src="../assets/ed4.png" alt="Eatjoy logo" style="width:20%;height:20%;margin:auto;display:block;">
    <p style="padding-top:10px;">ขอบคุณที่ใช้บริการ</p>
    <hr/>
  </div>
</div>

    </div>
    
</template>

<script>
export default {
  name: 'OrderConfirm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
th{
  text-align: center;
}
.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>
