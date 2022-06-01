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
      <v-col md="4">
        <v-card height="150px" class="px-5 py-3 d-flex flex-column rounded-lg">
          <div class="d-flex align-center flex-grow-0">
            <h3 class="primary--text">
              王小明
            </h3>
            <h4 class="gray--text ml-auto" >
              男
            </h4>
          </div>
          <div class="flex-grow-0">
            <span class="gray--text">
              2021062011493428
            </span>
          </div>
          <div class="d-flex align-end flex-grow-1">
            <v-icon left color="secondary">
              mdi-gmail
            </v-icon>
            <span class="secondary--text">
              Takmig001@takming.edu.tw
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>