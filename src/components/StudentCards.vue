<script setup lang="ts">
import { defineProps } from 'vue'
import studentImage from '../assets/student.png'
import schoolLogo from '../assets/tupt.png'

const props = defineProps({
  student: Object,
})
</script>

<template>
  <el-card class="card">
    <el-image :src="schoolLogo" class="background-logo" fit="cover" />
    <div class="content">
      <el-row>
        <el-text
          style="
            width: 100%;
            font-family: regular;
            font-size: 7px;
            color: white;
            text-align: center;
          "
        >
          Republic of the Philippines
        </el-text>
      </el-row>

      <el-row>
        <el-text
          style="
            font-family: semiBold;
            font-size: 7px;
            color: white;
            width: 100%;
            text-align: center;
          "
        >
          TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES
        </el-text>
      </el-row>

      <el-row>
        <el-text
          style="
            width: 100%;
            font-family: regular;
            font-size: 7px;
            color: white;
            text-align: center;
          "
        >
          Taguig Campus
        </el-text>
      </el-row>

      <el-row>
        <el-text
          style="
            width: 100%;
            font-family: regular;
            font-size: 7px;
            color: white;
            text-align: center;
          "
        >
          Km. 14 East Service Road Western Bicutan Taguig City 1630
        </el-text>
      </el-row>

      <el-row>
        <el-text
          style="
            width: 100%;
            font-family: regular;
            font-size: 7px;
            color: white;
            text-align: center;
          "
        >
          Tel No. 823-2457
        </el-text>
      </el-row>

      <el-row style="margin-top: 10px; justify-content: space-between">
        <el-image :src="schoolLogo" style="width: 45%; height: 45%" fit="cover" />
        <el-image :src="studentImage" class="student-image" fit="cover" />
        <el-text
          style="
            font-family: bold;
            position: absolute;
            bottom: -8px;
            color: black;
            text-transform: uppercase;
            font-size: 12px;
          "
          >TUPT - {{ student.id }}</el-text
        >
      </el-row>

      <el-row style="margin-top: 10px">
        <el-text
          style="
            width: 100%;
            font-family: semiBold;
            font-size: 8px;
            color: black;
            text-align: justify;
            padding-left: 1px;
            padding-right: 1px;
          "
        >
          The Technological University of the Philippines shall be a premier state university with
          recognized excellence in engineering and technology education at par with the leading
          universities in the ASEAN region
        </el-text>
      </el-row>

      <div style="background-color: #2148c0; border-radius: 10px; padding: 5px; margin-top: 10px">
        <el-row>
          <el-text
            style="
              width: 100%;
              font-family: bold;
              font-size: 12px;
              color: white;
              text-align: center;
              text-transform: uppercase;
            "
          >
            {{ student.firstName + ' ' + student.middleName[0] + '.' + ' ' + student.lastName }}
          </el-text>
        </el-row>

        <el-row>
          <el-text
            style="
              width: 100%;
              font-family: regular;
              font-size: 9px;
              text-align: center;
              color: white;
              padding-bottom: 3px;
            "
          >
            {{ student.course }}
          </el-text>
        </el-row>
      </div>

      <el-row>
        <el-text
          style="
            width: 100%;
            font-family: regular;
            font-size: 9px;
            text-align: center;
            color: black;
            padding-bottom: 3px;
            margin-top: 5px;
          "
        >
          Address: {{ student.address }}
        </el-text>
      </el-row>
    </div>
  </el-card>
</template>

<style scoped>
.card {
  max-width: 250px;
  height: 350px;
  width: 100%;
  padding: 0;
  z-index: 100;
  border-radius: 10px;
  background: linear-gradient(to bottom, #2148c0, white);
  position: relative;
}

.background-logo {
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 1;
  opacity: 0.3;
  bottom: 10%;
  right: -60%;
}

.content {
  position: relative;
  z-index: 2;
}

.student-image {
  width: 50%;
  height: auto;
}
</style>
