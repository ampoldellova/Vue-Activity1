<script setup lang="ts">
import vector from '../assets/vector.png'
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'
import circle3 from '../assets/circle3.png'
import { ref } from 'vue'
import StudentCards from '@/components/StudentCards.vue'

const students = ref([])
const loadedStudents = localStorage.getItem('studentInfos')
students.value = JSON.parse(loadedStudents)
</script>

<template>
  <div class="container">
    <div class="cards">
      <StudentCards v-for="student in students" :key="student.id" :student="student" />
    </div>
    <div class="image-container">
      <el-image :src="vector" class="vector-image" />
      <el-image :src="circle3" class="circle3-image" />
      <el-image :src="circle2" class="circle2-image" />
      <el-image :src="circle1" class="circle1-image" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.images {
  position: relative;
}

@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>
