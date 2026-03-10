<script setup lang="ts">
import type { SpecRow } from '@/app/types/product'

defineProps<{
  title: string
  rows: SpecRow[]
}>()
</script>

<template>
  <div class="flex-1 bg-[#F6F7F9] rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-[15px] font-bold text-slate-800 mb-4 flex items-center gap-2" style="font-family: Inter">
      <span class="w-1 h-4 bg-orange-500 rounded-full inline-block"></span>
      {{ title }}
    </h3>
    <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <table class="w-full">
        <tbody>
          <tr
            v-for="(row, index) in rows"
            :key="index"
            class="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors"
          >
            <td class="px-4 py-3 text-[13px] font-medium text-slate-500 border-r border-slate-100 bg-slate-50/50" style="font-family: Inter; width: 45%">
              {{ row.label }}
            </td>
            <td class="px-4 py-3 text-[13px] font-semibold text-slate-900" style="font-family: Inter; width: 55%">
              {{ row.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
