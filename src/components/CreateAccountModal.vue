<script setup lang="ts">
import { Lock, Unlock, User } from '@element-plus/icons-vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  createAccountModal: Boolean,
  profileId: String,
})

const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 9)
}

const emit = defineEmits(['update:createAccountModal'])
const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const form = reactive({
  id: generateRandomId(),
  profileId: props.profileId,
  username: '',
  password: '',
  confirmPassword: '',
})

const username = (rule: any, value: any, callback: any) => {
  const capitalLetterRegex = /[A-Z]/

  if (value === '') {
    callback(new Error('Please input your username'))
  } else if (!capitalLetterRegex.test(value)) {
    callback(new Error('Username must contain at least one capital letter'))
  } else {
    callback()
  }
}

const password = (rule: any, value: any, callback: any) => {
  const capitalLetterRegex = /[A-Z]/
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>_]/

  if (value === '') {
    callback(new Error('Please input your password'))
  } else if (!capitalLetterRegex.test(value)) {
    callback(new Error('Password must contain at least one capital letter'))
  } else if (!specialCharacterRegex.test(value)) {
    callback(new Error('Password must contain at least one special character'))
  } else {
    if (form.password !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('password')
    }
    callback()
  }
}

const confirmPassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please confirm your password'))
  } else if (value !== form.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [{ validator: username, trigger: 'change' }],
  password: [{ validator: password, trigger: 'change' }],
  confirmPassword: [{ validator: confirmPassword, trigger: 'change' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const existingData = localStorage.getItem('studentAccounts')

      let studentAccounts = existingData ? JSON.parse(existingData) : []

      studentAccounts.push(form)

      localStorage.setItem('studentAccounts', JSON.stringify(studentAccounts))

      router.push('/')
      console.log(form)
    } else {
      console.log(form)
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-dialog
    @close="emit('update:createAccountModal', false)"
    :model-value="createAccountModal"
    title="Register your account"
    width="400"
    align-center
    style="
      background-color: #2148c0;
      border-radius: 15px;
      z-index: 100;
      background-size: cover;
      background-repeat: no-repeat;
    "
  >
    <el-form ref="ruleFormRef" :model="form" :rules="rules" :size="formSize" status-icon>
      <!-- Username -->
      <el-row style="margin-top: 30px; z-index: 50">
        <el-col :span="24">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              style="width: 100%"
              size="large"
              placeholder="USERNAME"
              :prefix-icon="User"
              input-style="font-family:regular; color:white"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- Password -->
      <el-row style="z-index: 50">
        <el-col :span="24">
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="form.password"
              style="width: 100%"
              size="large"
              placeholder="PASSWORD"
              :prefix-icon="Unlock"
              input-style="font-family:regular; color:white"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- Confirm Password -->
      <el-row style="z-index: 50">
        <el-col :span="24">
          <el-form-item prop="confirmPassword">
            <el-input
              type="password"
              v-model="form.confirmPassword"
              style="width: 100%"
              size="large"
              placeholder="CONFIRM PASSWORD"
              :prefix-icon="Lock"
              input-style="font-family:regular; color:white"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-button
        @click="submitForm(ruleFormRef)"
        style="
          background-color: white;
          color: #2148c0;
          margin-top: 20px;
          width: 100%;
          margin-bottom: 20px;
          font-family: semiBold;
        "
        size="large"
      >
        SUBMIT
      </el-button>
    </el-form>
  </el-dialog>
</template>

<style scoped></style>
