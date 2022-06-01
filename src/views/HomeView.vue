<template>
<div>
   <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center py-10">
          人員清單
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" cols="12" v-for="user in currentUsers" :key="user.UID">
        <v-card height="150px" class="px-5 py-3 d-flex flex-column rounded-lg">
          <div class="d-flex align-center flex-grow-0">
            <h3 class="primary--text">
              <strong>{{user.name}}</strong>
            </h3>
            <h4 class="gray--text ml-auto" >
              <strong>{{handleGender(user.gender)}}</strong>
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
        <v-pagination v-model="page" :length="totalPages" />
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog" width="535">

  </v-dialog>
</div>
 
</template>
<script>
import admin from'../assets/admin.json';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  created() {
  this.getUsers();
  },
  methods: {
    getUsers() {
      this.users = admin.data.user;
    },
    handleGender(type) {
      if (type === "M") return "男";
      if (type === "W") return "女";
      return "其他";
    }
  },
  computed: {
  //計算總頁數
    totalPages() {
      return Math.ceil(this.users.length / 9);
    },
    //計算目前頁面使用者們
    currentUsers() {
      const begin = (this.page - 1) * 9;
      const end = begin + 9;
      return this.users.slice(begin, end);
    }
  }

};
</script>
<style scoped>
</style>