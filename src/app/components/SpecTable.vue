<script setup lang="ts">
defineProps<{
  title: string
  rows: { parameter: string; specification: string }[]
}>()
</script>

<template>
  <div class="mb-12">
    <h2 class="text-[16px] font-semibold mb-4" style="font-family: Inter">
      {{ title }}
    </h2>
    <div class="border border-[#E5E7EB] rounded-lg overflow-hidden">
      <table class="w-full">
        <thead>
          <tr class="bg-white border-b border-[#E5E7EB]">
            <th class="text-left px-6 py-4 text-[14px] font-medium" style="font-family: Inter; height: 48px">
              Parameter
            </th>
            <th class="text-left px-6 py-4 text-[14px] font-medium" style="font-family: Inter; height: 48px">
              Specification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in rows"
            :key="index"
            :class="index % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'"
            style="height: 48px"
          >
            <td class="px-6 py-3 text-[14px] border-b border-[#E5E7EB]" style="font-family: Inter">
              {{ row.parameter }}
            </td>
            <td class="px-6 py-3 text-[14px] border-b border-[#E5E7EB]" style="font-family: Inter">
              {{ row.specification }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
