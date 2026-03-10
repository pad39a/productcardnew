<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div class="bg-[#F6F7F9] rounded-[12px] p-4">
    <div class="text-[12px] font-medium text-[#6B7280] uppercase mb-2" style="font-family: Inter">
      {{ label }}
    </div>
    <div class="text-[18px] font-semibold text-[#111827]" style="font-family: Inter">
      {{ value }}
    </div>
  </div>
</template>
