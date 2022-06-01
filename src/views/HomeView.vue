<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center py-10">
          人員清單
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" v-for="i in 9" :key="i">
        <v-card height="150px" class="px-5 py-3 d-flex flex-column rounded-lg">
          <div class="d-flex align-center flex-grow-0">
            <h3 class="primary--text">
              <strong>{{user.name}}</strong>
            </h3>
            <h4 class="gray--text ml-auto" >
              <strong>{{user.gender}}</strong>
            </h4>
          </div>
          <div class="flex-grow-0">
            <span class="gray--text">
              <strong>{{user.UID}}</strong>
            </span>
          </div>
          <div class="d-flex align-end flex-grow-1">
            <v-icon left color="secondary">
              mdi-gmail
            </v-icon>
            <span class="secondary--text">
              <strong>{{user.email}}</strong>
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12">
        <v-pagination 
          :value="1" 
          :length="6"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data() {
    return {
      user: {
        name: '王小明',
        UID: "2021062012003739",
        SID: "ROOT",
        CID: "",
        name: "Am",
        phone: "0987654334",
        gender: "M",
        email: "Takming014@takming.edu.tw",
        zip: 300,
        address: "新竹縣湖口鄉德和路228號",
        createTime: "2021-06-20 12:00:37",
        updateTime: "2021-06-20 12:00:37",
        isDelete: null
      }
    };
  }
};
</script>
<style scoped>
</style>