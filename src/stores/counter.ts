import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('students', {
  state: () => {
    return {
      studentList: [],
    }
  },
  actions: {},
})
