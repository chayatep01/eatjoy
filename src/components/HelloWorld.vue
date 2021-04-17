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
       <label for="paperSelects1">มื้อ</label>
        <select id="paperSelects1">
          <option value="1">3</option>
          <option value="2">4</option>
          <option value="3">5</option>
        </select>
      </div>
    </div>

     <div class="col sm-1">
      <div class="form-group">
       <label for="paperSelects1">วัน</label>
        <select id="paperSelects1">
          <option value="1">3</option>
          <option value="2">5</option>
          <option value="3">7</option>
        </select>
      </div>
    </div>
  </div>

  <div class="row flex-center">
    <div class="col sm-6">
      <div class="form-group">
        <label for="paperInputs2">ที่อยู่จัดส่ง</label>
        <textarea  v-model="message" id="large-input" placeholder="ที่อยู่จัดส่ง จังหวัด, อำเภอ, ตำบล และ รหัสไปรษณีย์" style="width:100%;height:30%"/>
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


 <div class="row flex-spaces child-borders">
  <label class="paper-btn margin" for="modal-1">สั่งซื้ออาหาร !</label>
</div>
<input class="modal-state" id="modal-1" type="checkbox">
<div class="modal">
  <label class="modal-bg" for="modal-1"></label>
  <div class="modal-body">
    <label class="btn-close" for="modal-1">X</label>
    <h4 class="modal-title">Confirm order</h4>
    <h5 class="modal-subtitle">ยืนยันคำสั่งซื้อ</h5>
    <p>Address is: {{ address }}</p>
    <p class="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>
    <label for="modal-1">Nice!</label>
  </div>
</div>


</div>
</template>

<script>
export default {
  name: 'HelloWorld',
   data :function(){
        return {
            address:'ตำแหน่ง',
        }
    },
   methods :{
      formSubmit(e){
            console.log("Hello")
            this.$emit('formSubmit',this.address)
            e.preventDefault();
        }
   },
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
.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>
