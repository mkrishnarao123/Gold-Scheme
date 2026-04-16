<script setup lang="js">
import { onMounted } from "vue";
import html2pdf from "html2pdf.js";
import { defineProps } from "vue";

onMounted(() => {
  // I've not fine tuned these values.
  setTimeout(() => exportToPDF(), 1000);
});
const props=defineProps(["client_details",'selected_item'])
function exportToPDF() {
  html2pdf(document.getElementById("pdf"), {
    filename: "PaymentReciept.pdf",
  });
}
</script>

<template>
  <v-card
    id="pdf"
    width="800px"
    flat
    class="card-with-watermark m-auto"
    height="1120px"
  >
    <v-card-text>
      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col
            ><span class="float-right"
              >Payment Pin No: <strong>{{ props.selected_item.payment_number }}</strong></span
            ></v-col
          >
        </v-row>
        <v-row class="ms-4">
          <v-col cols="4" class="text-center">
            <img
              src="@/assets/images/goldLogo.png"
              alt="Title Logo"
              class="gold_logo_avatar"
              height="85"
              width="85"
            />
          </v-col>
          <v-col cols="6" class="text-left">
            <h2>ANAND'S JWELERY</h2>
            <h5>
              Anand jwelery 12-345, Gold Tower Sarvodaya Nagar, Nellore Andhra
              Pradesh, 524001 India
            </h5>
          </v-col>
        </v-row>
        <v-divider class="mb-4"></v-divider>
        <!-- Customer Details -->
        <v-row>
          <v-col cols="12" sm="6">
            <h2 class="mb-2">Customer Details</h2>
            <div class="detail">
              <span class="key">Full Name:</span>
              <span class="value">{{ props.client_details.full_name }}</span>
            </div>
            <div class="detail">
              <span class="key">Mobile Number:</span>
              <span class="value">{{
                props.client_details.mobile_number
              }}</span>
            </div>
            <div class="detail">
              <span class="key">Aadhaar Number:</span>
              <span class="value">{{
                props.client_details.adhaar_number
              }}</span>
            </div>
            <div class="detail">
              <span class="key">Address:</span>
              <span class="value">{{ props.client_details.address }}</span>
            </div>
          </v-col>
        </v-row>

        <!-- Transaction Details -->
        <v-row>
          <v-col cols="12">
            <h2>Transaction Details</h2>
            <v-table class="transparent-table" density="compact">
              <template v-slot:default>
                <thead></thead>
                <tbody>
                  <tr>
                    <td style="width: 50%">Amount</td>
                    <td style="width: 50%" class="font-weight-bold">
                      RS.{{ props.selected_item.amount }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 50%">Rate</td>
                    <td style="width: 50%" class="font-weight-bold">{{ props.selected_item.rate }}/gm</td>
                  </tr>
                  <tr>
                    <td style="width: 50%">Gold Obtained</td>
                    <td style="width: 50%" class="font-weight-bold">{{ props.selected_item.gold }}gm</td>
                  </tr>
                  <tr>
                    <td style="width: 50%">Date</td>
                    <td style="width: 50%" class="font-weight-bold">
                      {{ props.selected_item.date_of_payment }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-table>
          </v-col>
        </v-row>

        <v-divider class="mb-4"></v-divider>

        <!-- Message -->
        <v-row class="mt-6">
          <v-col cols="12">
            <p class="text-center">
              Thank you for choosing Anand's jwelery ! Your exquisite taste is
              reflected in your purchase. We're here for all your future jewelry
              needs!
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.card-with-watermark {
  position: relative;
  font-weight: bold;
}

.card-with-watermark::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 100%;
  background-image: url("@/assets/images/goldLogo.png"); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  opacity: 0.10; /* Adjust the opacity value as needed */
  z-index: -1; /* Ensure the pseudo-element is behind the card content */
}
.gold_logo_avatar {
  border-radius: 50%;
  border: 4px solid rgba(255, 217, 0, 0.596);
}
.detail {
  margin-bottom: 10px;
  margin-left: 18px;
}

.key {
  max-width: 100px;
}

.value {
  margin-left: 10px;
  font-weight: bold;
}
.transparent-table {
  background-color: transparent !important;
}
</style>
