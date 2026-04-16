<template>
  <ViewsWrapper>
    <v-data-table
      :headers="headersData"
      :items="desserts"
      :search="search"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar color="rgb(255 245 193)" flat>
          <v-toolbar-title>Client Summary:</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            class="me-2 mt-4"
            label="Search"
            density="compact"
            prepend-inner-icon="fas fa-search"
          ></v-text-field>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn variant="tonal" color="primary" dark v-bind="props">
                Client
              </v-btn>
            </template>
            <v-card width="800px">
              <v-toolbar color="rgb(255 245 193)" flat>
                <span class="ms-3 text-h5">{{ "New Client" }}</span>
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-form ref="clientForm">
                    <v-row>
                      <!-- First Name -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.first_name"
                          label="First Name"
                          :rules="FieldRequired('First Name')"
                          placeholder="Enter First Name"
                        ></v-text-field>
                      </v-col>

                      <!-- Last Name -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.last_name"
                          label="Last Name"
                          :rules="FieldRequired('Last Name')"
                          placeholder="Enter Last Name"
                        ></v-text-field>
                      </v-col>

                      <!-- Gender -->
                      <v-col cols="12" md="6" sm="12">
                        <v-select
                          v-model="editedItem.gender"
                          :items="['Male', 'Female']"
                          :rules="FieldRequired('Gender')"
                          label="Gender"
                          placeholder="Enter Gender"
                        ></v-select>
                      </v-col>

                      <!-- Date of Birth -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.dob"
                          label="Date of Birth"
                          type="date"
                          placeholder="Enter Date of Birth"
                        ></v-text-field>
                      </v-col>

                      <!-- Martial Status -->
                      <v-col cols="12" md="6" sm="12">
                        <v-select
                          v-model="editedItem.martial_status"
                          label="Martial Status"
                          :rules="FieldRequired('Martial Status')"
                          :items="['Single', 'Married']"
                          placeholder="Enter Martial Status"
                        ></v-select>
                      </v-col>

                      <!-- Marriage Date -->
                      <v-col
                        cols="12"
                        md="6"
                        sm="12"
                        v-if="editedItem.martial_status == 'Married'"
                      >
                        <v-text-field
                          v-model="editedItem.marriage_date"
                          label="Marriage Date"
                          type="date"
                          placeholder="Enter Marriage Date"
                        ></v-text-field>
                      </v-col>

                      <!-- Spouse Name -->
                      <v-col
                        cols="12"
                        md="6"
                        sm="12"
                        v-if="editedItem.martial_status == 'Married'"
                      >
                        <v-text-field
                          v-model="editedItem.spouse_name"
                          :rules="FieldRequired('Spouse Name')"
                          label="Spouse Name"
                          placeholder="Enter Spouse Name"
                        ></v-text-field>
                      </v-col>

                      <!-- Spouse Mobile Number -->
                      <v-col
                        cols="12"
                        md="6"
                        sm="12"
                        v-if="editedItem.martial_status == 'Married'"
                      >
                        <v-text-field
                          v-model="editedItem.spouse_mobile_number"
                          label="Spouse Mobile Number"
                          type="tel"
                          placeholder="Enter Spouse Mobile Number"
                        ></v-text-field>
                      </v-col>

                      <!-- Spouse Adhaar Number -->
                      <v-col
                        cols="12"
                        md="6"
                        sm="12"
                        v-if="editedItem.martial_status == 'Married'"
                      >
                        <v-text-field
                          v-model="editedItem.spouse_adhaar_number"
                          label="Spouse Adhaar Number"
                          type="number"
                          placeholder="Enter Spouse Adhaar Number"
                        ></v-text-field>
                      </v-col>

                      <!-- Email ID -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.email_id"
                          label="Email ID"
                          placeholder="Enter Email ID"
                        ></v-text-field>
                      </v-col>

                      <!-- Mobile Number -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.mobile_number"
                          label="Mobile Number"
                          :rules="FieldRequired('Mobile Number')"
                          type="tel"
                          placeholder="Enter Mobile Number"
                        ></v-text-field>
                      </v-col>

                      <!-- Alternate Mobile Number -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.alter_mobile_number"
                          label="Alternate Mobile Number"
                          type="tel"
                          placeholder="Enter Alternate Mobile Number"
                        ></v-text-field>
                      </v-col>

                      <!-- Adhaar Number -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.adhaar_number"
                          label="Adhaar Number"
                          :rules="FieldRequired('Adhaar Number')"
                          type="number"
                          placeholder="Enter Adhaar Number"
                        ></v-text-field>
                      </v-col>

                      <!-- Address -->
                      <v-col cols="12" md="6" sm="12">
                        <v-text-field
                          v-model="editedItem.address"
                          :rules="FieldRequired('Address')"
                          label="Address"
                          placeholder="Enter Address"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="error"
                  width="130px"
                  class="text-black"
                  variant="tonal"
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  width="130px"
                  color="success"
                  variant="tonal"
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this Client?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.spouse_name="{ item }">
        <p>
          {{ item.spouse_name }} <br />
          {{ item.spouse_mobile_number }}<br />
        </p>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          size="small"
          color="warning"
          small
          variant="tonal"
          @click="routeClinet(item)"
        >
          <v-icon size="small" icon="fas fa-file-invoice" class="me-2"></v-icon>
          View
        </v-btn>
        <v-icon
          icon="fas fa-pencil"
          class="me-2"
          size="x-small"
          @click="editItem(item)"
        >
        </v-icon>
        <!-- <v-icon size="x-small" icon="fas fa-trash" @click="deleteItem(item)">
        </v-icon> -->
      </template>
    </v-data-table>
  </ViewsWrapper>
</template>

<script setup lang="js">
import ViewsWrapper from "@/views/ViewsWrapper.vue"
import {ref,watch,onMounted} from "vue"
import { FieldRequired } from "@/utils/validation";
import { useRouter } from 'vue-router'
import userSvc from "@/services/userSvc";
import { useAlertsStore } from "@/stores";
const router = useRouter()
const AlertStore=useAlertsStore()
const dialog = ref(false);
const search=ref("")
const dialogDelete = ref(false);
const headersData = ref([
{
    title: 'Client Id',
    align: 'start',
    sortable: false,
    key: 'client_id',
  },
  {
    title: 'Full Name',
    align: 'start',
    sortable: false,
    key: 'full_name',
  },
  { title: 'contact Details', key: 'mobile_number' },
  { title: 'Adhaar Number', key: 'adhaar_number' },
  { title: 'Address', key: 'address' ,width:"300px"},
  { title: 'Martial Status', key: 'martial_status' },
  { title: 'Spouse Details', key: 'spouse_name', sortable: false },
  { title: 'Hold Gold', key: 'total_gold', sortable: false },
  { title: 'Paid Amount', key: 'total_amount', sortable: false },
  { title: 'No of payments', key: 'no_of_payments', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]);
const editedIndex = ref(-1);
const editedItem = ref({
      first_name: '',
      last_name: '',
      gender: 'Male',
      dob: '',
      martial_status: 'Single',
      marriage_date: null,
      spouse_name: '',
      spouse_mobile_number: '',
      spouse_adhaar_number: '',
      email_id: '',
      mobile_number: '',
      alter_mobile_number: '',
      adhaar_number: '',
      address: ''
    });

const defaultItem = ref({
      first_name: '',
      last_name: '',
      gender: 'Male',
      dob: '',
      martial_status: 'Single',
      marriage_date: null,
      spouse_name: '',
      spouse_mobile_number: '',
      spouse_adhaar_number: '',
      email_id: '',
      mobile_number: '',
      alter_mobile_number: '',
      adhaar_number: '',
      address: ''
    });
const desserts=ref([]);
onMounted(()=>{
  getclients()
})
const clientForm = ref();
 const addCleint=async()=>{



}
const getclients=async()=>{
    try {
      const responseData=await userSvc.getclients()
      if(responseData.data.status_code==200){
        desserts.value=responseData.data.data
      }else{
        AlertStore.showErrorAlert(responseData.data.message)
      }

    } catch (error) {
      console.log(error);
    }
}
watch(dialog,(val)=>{
    val || close()
})
watch(dialogDelete,(val)=>{
    val || closeDelete()
})
const routeClinet=(item)=>{
  router.push({
    path:"/client-details",
    query:{
      client_id:item.client_id,
      id:item.id
    }
  })
}
const editItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = { ...item };
  dialog.value = true;
};

const deleteItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = { ...item };
  dialogDelete.value = true;
};

const deleteItemConfirm = () => {
  desserts.value.splice(editedIndex.value, 1);
  closeDelete();
};

const close = () => {
  dialog.value = false;
  editedItem.value = { ...defaultItem.value };
  editedIndex.value = -1;
};

const closeDelete = () => {
  dialogDelete.value = false;
  editedItem.value = { ...defaultItem.value };
  editedIndex.value = -1;
};

const save = async () => {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value);
    const validate=await clientForm.value?.validate()
  if(validate.valid){
    try {
      const responseData=await userSvc.updateCleint(editedItem.value)
      if(responseData.data.status_code==200){
        AlertStore.showSuccessAlert(responseData.data.message)
        close();
        getclients()
      }else{
        AlertStore.showErrorAlert(responseData.data.message)
      }

    } catch (error) {
      console.log(error);
      AlertStore.showErrorAlert("Something Went wrong")
    }

  }
  } else {
    const validate=await clientForm.value?.validate()
  if(validate.valid){
    try {
      const responseData=await userSvc.addCleint(editedItem.value)
      if(responseData.data.status_code==200){
        AlertStore.showSuccessAlert(responseData.data.message)
        close();
        getclients()
      }else{
        AlertStore.showErrorAlert(responseData.data.message)
      }

    } catch (error) {
      console.log(error);
      AlertStore.showErrorAlert("Something Went wrong")
    }

  }
  }
};
</script>
<style scoped></style>
