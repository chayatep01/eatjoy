<template>
  <div class="flex-center">
    <div class="flex-center">
      <img src="../assets/ed4.png" alt="Eatjoy logo" style="width:20%;height:20%;margin:auto;display:block;">

      <h1>Eatjoy order</h1>
    </div>

  <div class="row flex-center">
    <div class="col sm-6">
      <div class="form-group">
        <label for="paperInputs2">ชื่อ-นามสกุล</label>
        <input class="input-block" type="text" id="paperInputs2" placeholder="ชื่อ-นามสกุล">
      </div>
    </div>
  </div>

  <div class="row flex-center">
    <div class="col sm-3">
      <div class="form-group">
        <label for="paperInputs2">โปรตีน(ต่อวัน)</label>
        <input class="input-block" type="text" id="paperInputs2" placeholder="หน่วย/กรัม">
      </div>
    </div>
    <div class="col sm-3">
      <div class="form-group">
        <label for="paperInputs2">คาร์บ(ต่อวัน)</label>
        <input class="input-block" type="text" id="paperInputs2" placeholder="หน่วย/กรัม">
      </div>
    </div>
   
  </div>

  <div class="row flex-center">
     <div class="col sm-3">
      <div class="form-group">
        <label for="paperInputs2">ไขมัน(ต่อวัน)</label>
        <input class="input-block" type="text" id="paperInputs2" placeholder="หน่วย/กรัม">
      </div>
    </div>

    <div class="col sm-1">
      <div class="form-group">
       <label for="paperSelects1">มื้ออาหาร</label>
        <select id="paperSelects1">
          <option value="1">3</option>
          <option value="2">4</option>
          <option value="3">5</option>
        </select>
      </div>
    </div>
  </div>

  <div class="row flex-center">
    <div class="col sm-6">
      <div class="form-group">
        <label for="paperInputs2">ที่อยู่จัดส่ง</label>
        <textarea id="large-input" placeholder="ที่อยู่จัดส่ง จังหวัด, อำเภอ, ตำบล และ รหัสไปรษณีย์" style="width:100%;height:30%"></textarea>
      </div>
    </div>
    <div class="col sm-3">
      <div class="form-group">
        <label for="paperInputs2">เบอร์ติดต่อ</label>
        <input class="input-block" type="text" id="paperInputs2" placeholder="เบอร์ติดต่อ">
      </div>
    </div>
  </div>

  <div class="row flex-center">
    <div class="col sm-6">
      <div class="form-group">
        <label for="paperInputs2">วันที่จัดส่ง</label>
        <input class="input-block" type="date" id="paperInputs2">
      </div>
    </div>
  </div>

  <div class="row flex-center">
  <div class="col-4 col">
    <button class="paper-btn btn-primary-outline">สั่งซื้ออาหาร</button>
  </div>
</div>


</div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
</style>
