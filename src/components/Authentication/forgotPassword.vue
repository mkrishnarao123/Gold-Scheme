<script setup lang="js">
import AuthWrapper from "./AuthWrapper.vue"
import { useRouter } from 'vue-router'
import { useAlertsStore } from "@/stores";
import {validations} from "@/utils/validation"
import userSvc from "@/services/userSvc";
import { ref } from "vue";
const AlertStore=useAlertsStore()
const router = useRouter()
const loginModel = ref({
  user_name: "",
  password: "",
  // conform_password:"",
});
var showconfPassword=ref(false)
var showPassword=ref(false)
const togglePassword=()=>{
    showPassword= !showPassword
}
// const toggleconfPassword=()=>{
//     showconfPassword= !showconfPassword
// }
const passForm = ref();
 const forgotPassword=async()=>{
  const validate=await passForm.value?.validate()
  if(validate.valid){
    try {
      const responseData=await userSvc.forgotPassword(loginModel.value)
      if(responseData.data.status_code==200){
        AlertStore.showSuccessAlert(responseData.data.message)
        router.push("/")
        
      }else{
        AlertStore.showErrorAlert(responseData.data.message)
      }
      
    } catch (error) {
      console.log(error);
      AlertStore.showErrorAlert("Something Went wrong")
    }
    
  }
   
  
}
</script>

<template>
  <AuthWrapper>
    <v-card-text>
      <p class="text-center">
        <h3 class="font-weight-bold">Forgot Your Password?.</h3>
        Enter your email address below to reset your password.
      </p>
      <v-form ref="passForm">
      <v-text-field
        v-model="loginModel.user_name"
         :rules="validations.emailValidations"
        color="primary"
        label="Email"
        placeholder="Enter your Email"
      ></v-text-field>
      <v-text-field
        v-model="loginModel.password"
        :rules="validations.passwordValidations"
        color="primary"
        label="New Password"
        :append-inner-icon="showPassword ? 'fa-eye' : 'fa-eye'"
        :type="showPassword ? 'text' : 'password'"
        @click:append-inner="showPassword= !showPassword"
        placeholder="Enter your New password"
      ></v-text-field>
      <!-- <v-text-field
        v-model="loginModel.conform_password"
        color="primary"
        :append-inner-icon="showconfPassword ? 'fa-eye' : 'fa-eye'"
        :type="showconfPassword ? 'text' : 'password'"
        @click:append-inner="showconfPassword=!showconfPassword"
        label="Confirm Password"
        placeholder="Enter your confirm password"
      ></v-text-field> -->
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn  block @click="forgotPassword()">
          Update password
          <v-icon icon="fas fa-caret-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
      <v-divider></v-divider>
      <p class="text-center">
        Click <RouterLink to="/">here</RouterLink> to return to the login page.
      </p>
    </v-card-text>

  </AuthWrapper>
</template>

<style scoped></style>
