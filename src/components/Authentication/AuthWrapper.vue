<script setup lang="js">
import logo from "@/assets/images/goldLogo.png"
</script>

<template>
  <v-card flat class="background-img m-auto" height="850px">
    <v-container class="container">
      <v-card
        rounded="xl"
        tonal
        class="transparent-card pa-8"
        width="500px"
        height="600px"
      >
        <v-card-title class="d-flex justify-center align-center">
          <div>
            <v-img
              :src="logo"
              class="gold_logo_avatar mx-auto"
              height="130"
              width="130"
            ></v-img>
          </div>
        </v-card-title>
        <slot></slot>
      </v-card>
    </v-container>
  </v-card>
</template>

<style scoped>
.gold_logo_avatar {
  border-radius: 50%;
  border: 4px solid rgba(255, 217, 0, 0.596);
}
.container {
  display: grid;
  place-items: center; /* Centers both horizontally and vertically */
  height: 850px; /* Adjust as needed */
}
.transparent-card {
  background-color: rgba(
    255,
    255,
    255,
    0.87
  ); /* Adjust the alpha value to control transparency */
  backdrop-filter: blur(0.3px); /* Apply a blur effect */
  border: 25px;
  margin: auto;
}
.background-img {
  background-image: url("@/assets/images/backgroundAuth.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 950px;
}
</style>
