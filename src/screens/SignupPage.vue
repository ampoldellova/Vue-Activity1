<script lang="ts" setup>
import { User, Location, Notebook } from '@element-plus/icons-vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import vector from '../assets/vector.png'
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'
import circle3 from '../assets/circle3.png'
import { reactive, ref, watch } from 'vue'
import '../styles/signup.css'

const validDetails = ref(false)
const createAccountModal = ref(false)
const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()

const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 9)
}

const form = reactive({
  id: generateRandomId(),
  firstName: '',
  middleName: '',
  lastName: '',
  birthDate: '',
  age: '',
  address: '',
  course: '',
})

const firstName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input your first name'))
  } else {
    callback()
  }
}

const middleName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input your middle name'))
  } else {
    callback()
  }
}

const lastName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input your last name'))
  } else {
    callback()
  }
}

const age = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input your age'))
  } else if (!Number.isInteger(value)) {
    callback(new Error('Please input digits'))
  } else if (value < 18) {
    callback(new Error('Age must be greater than 18'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  firstName: [{ validator: firstName, trigger: 'change' }],
  middleName: [{ validator: middleName, trigger: 'change' }],
  lastName: [{ validator: lastName, trigger: 'change' }],
  birthDate: [
    { type: 'date', required: true, message: 'Please input your birth date', trigger: 'change' },
  ],
  age: [{ validator: age, trigger: 'change' }],
  address: [{ required: true, message: 'Please input your address', trigger: 'change' }],
  course: [{ required: true, message: 'Please select your course', trigger: 'change' }],
})

const options = [
  {
    value: 'BSIT',
    label: 'Bachelor of Science in Information and Technology',
  },
  {
    value: 'BCS',
    label: 'Bachelor in Computer Science',
  },
  {
    value: 'BST',
    label: 'Bachelor of Science in Tourism',
  },
  {
    value: 'BSHRM',
    label: 'Bachelor of Science in Hotel and Restaurant Management',
  },
  {
    value: 'BSN',
    label: 'Bachelor of Science in Nursing',
  },
]

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      validDetails.value = true
      createAccountModal.value = true
      console.log(form)
      console.log(createAccountModal.value)
    } else {
      validDetails.value = false
      console.log('error submit!', fields)
      console.log(validDetails)
      console.log(createAccountModal.value)
    }
  })
}

watch(
  () => form.birthDate,
  (newVal) => {
    if (newVal) {
      const birthDate = new Date(newVal)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      form.age = age
    }
  },
)
</script>

<template>
  <div class="container">
    <div class="inner-container">
      <el-form ref="ruleFormRef" :model="form" :rules="rules" :size="formSize" status-icon>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="firstName">
              <el-input
                v-model="form.firstName"
                style="width: 100%"
                size="large"
                placeholder="First Name"
                :prefix-icon="User"
                input-style="font-family:regular; color:white"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item prop="middleName">
              <el-input
                v-model="form.middleName"
                style="width: 100%"
                size="large"
                placeholder="Middle Name"
                :prefix-icon="User"
                input-style="font-family:regular; color:white"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item prop="lastName">
              <el-input
                v-model="form.lastName"
                style="width: 100%"
                size="large"
                placeholder="Last Name"
                :prefix-icon="User"
                input-style="font-family:regular; color:white"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item prop="age">
              <el-input
                v-model.number="form.age"
                style="width: 100%"
                size="large"
                placeholder="Age"
                :prefix-icon="User"
                input-style="font-family:regular; color:white"
              />
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item prop="birthDate">
              <el-date-picker
                v-model="form.birthDate"
                type="date"
                placeholder="Birthdate"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item prop="address">
              <el-input
                v-model="form.address"
                style="width: 100%"
                size="large"
                placeholder="Address"
                :prefix-icon="Location"
                input-style="font-family:regular; color:white"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item prop="course">
              <div style="display: flex; align-items: center; width: 100%">
                <el-icon :size="20" style="position: absolute; left: 15px">
                  <Notebook />
                </el-icon>
                <el-select
                  v-model="form.course"
                  placeholder="Course"
                  size="large"
                  style="width: 100%"
                  :prefix-icon="Notebook"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    style="font-family: regular"
                  />
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="submit">
          <el-button @click="submitForm(ruleFormRef)" size="large" class="button">
            CONFIRM
          </el-button>
        </div>
      </el-form>
    </div>
    <div class="image-container">
      <el-image :src="vector" class="vector-image" />
      <el-image :src="circle3" class="circle3-image" />
      <el-image :src="circle2" class="circle2-image" />
      <el-image :src="circle1" class="circle1-image" />
    </div>
  </div>

  <CreateAccountModal v-model="createAccountModal" :profileId="form.id" />
</template>

<style scoped></style>
