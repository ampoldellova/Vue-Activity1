<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import vector from '../assets/vector.png'
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'
import circle3 from '../assets/circle3.png'
import { ref } from 'vue'
import '../styles/login.css'
import { RouterLink } from 'vue-router'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="container">
    <div class="inner-container">
      <div>
        <el-input
          v-model="username"
          class="input-container"
          size="large"
          placeholder="USERNAME"
          :prefix-icon="User"
          input-style="font-family:regular; color:white"
        />
      </div>
      <div class="margin-top-20">
        <el-input
          v-model="password"
          class="input-container"
          type="password"
          size="large"
          placeholder="PASSWORD"
          show-password
          :prefix-icon="Lock"
          input-style="font-family:regular; color:white"
        />
        <div class="forgot-password">
          <el-text class="forgot-password-text">Forgot Password?</el-text>
        </div>
      </div>
      <div class="login">
        <el-button size="large" class="button"> LOGIN </el-button>
      </div>
      <div class="signup">
        <RouterLink to="/signup">
          <el-text class="signup-text">Don't have an account? Signup</el-text>
        </RouterLink>
      </div>
    </div>
    <div class="image-container">
      <el-image :src="vector" class="vector-image" />
      <el-image :src="circle3" class="circle3-image" />
      <el-image :src="circle2" class="circle2-image" />
      <el-image :src="circle1" class="circle1-image" />
    </div>
  </div>
</template>

<style scoped></style>
