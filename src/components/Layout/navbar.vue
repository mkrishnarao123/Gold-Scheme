<template>
  <v-app-bar flat :image="backbg" density="prominent">
    <template v-slot:prepend>
      <v-img
        :src="logo"
        class="gold_logo_avatar mx-auto"
        height="80"
        width="80"
      ></v-img>
      <h2 class="font-weight-bold text-center ms-3">Anand's Jewelry</h2>
    </template>

    <template v-slot:append>
      <h4 class="font-weight-bold">{{ returnuserName }}</h4>
      <v-btn icon @click="logoutdialog = true">
        <v-icon title="Logout" icon="fas fa-power-off"></v-icon>
      </v-btn>
    </template>

    <v-app-bar-title></v-app-bar-title>
    <v-dialog v-model="logoutdialog" width="auto">
      <v-card max-width="400">
        <v-toolbar color="rgb(255 245 193)" flat density="compact">
          <v-icon
            class="ms-2"
            size="small"
            title="Logout"
            icon="fas fa-power-off"
          ></v-icon
          ><span class="ms-2 text-h5">Logout</span>
        </v-toolbar>
        <v-card-text>
          <p class="font-weight-bold">Are you sure you want to Logout</p>
        </v-card-text>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="No"
            @click="logoutdialog = false"
          ></v-btn>
          <v-btn class="ms-auto" text="Yes" @click="logout()"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
<script setup lang="js">
import backbg from "@/assets/images/back.jpg"
import logo from "@/assets/images/goldLogo.png"
import { useRouter } from "vue-router";
import { getSessionStItem ,clearSessionStItem} from "@/utils/SessionStorage";
import {computed,ref} from "vue"
const router=useRouter()
const logoutdialog=ref(false)
const returnuserName=computed(()=>{
  if(getSessionStItem("user_details")){
    return getSessionStItem("user_details")[0].email_id
  }
})
const logout=()=>{
  clearSessionStItem()
  router.push("/")
}
</script>
<style scoped>
.gold_logo_avatar {
  border-radius: 50%;
  border: 4px solid rgba(255, 217, 0, 0.596);
}
</style>
