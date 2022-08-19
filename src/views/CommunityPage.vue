<template>
  <main class="mt-3">
    <div class="container">
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품명</label>
        <div class="col-md-9">
          <input
            type="text"
            class="form-control"
            v-model="product.product_name"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <ul>
          <input @change="upload" accept="image/*" multiple type="file" id="file" class="inputfile" />
          <label for="file" class="input-button">클릭 시 사진 업로드</label>
          </ul>
          
        <h3>이미지 미리보기</h3>
        <div class="upload-image">
          <img src="${url1}">
        </div>

       <div class="mb-3 row">
        <label class="col-md-3 col-form-label">경매 날짜 선택</label>
        <div class="col-md-9">
          <input
            type="date"
            class="form-control"
            v-model="product.product_date"
          />
        </div>
      </div>

  
  <div v-if="url1"> 
	<img :src="url1" class="image-input" />  		
  </div>
</div>

      </div>


      <div class="mb-3 row">
            <button
              type="button"
              @click="productInsert"
            >
              SAVE
            </button>
      </div>
  </main>
</template>

<script>
export default {

data() {
    return {
      product: {
        product_name: '',
        uploadImageFileimage:'',
        image:'',
        product_date:'',
      },
    };
  },
  methods: {
    upload(e){
      let a = e.target.files;
      console.log(a);
      let url1 = URL.createObjectURL(a[0]);
      this.image = url1;
      console.log(url1);

    },
  
    productInsert() {
      this.$swal
        .then(async (result) => {
          if (result.isConfirmed) {
            await this.$api("/api/productInsert", { param: [this.product] }); // product data를 파라미터로 보내고, sql productInsert를 통해 data Insert
            this.$swal.fire("Saved.", "", "success");
            this.$router.push({ path: "/artworks" });
          }
        });
    },
  },
}
</script>

<style>
.inputfile {
  display: none;
}
.input-button {
  cursor: pointer;
}
.upload-image{
width: 200px;
height: 200px;
background: cornflowerblue;
background-size : cover;
}

</style>