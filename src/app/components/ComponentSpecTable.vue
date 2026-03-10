<script setup lang="ts">
import type { ComponentSpec } from '@/app/types/product'

defineProps<{
  data: ComponentSpec
}>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-slate-50 border-b border-slate-200">
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            MPN
          </th>
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            Standards
          </th>
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            Technology
          </th>
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            Radiation-SEU
          </th>
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            Bands
          </th>
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            VSWR
          </th>
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            Polarization
          </th>
          <th class="px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider" style="font-family: Inter">
            LNA Gain
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        <tr class="bg-white hover:bg-slate-50/50 transition-colors">
          <td class="px-4 py-6 text-[14px] font-medium text-slate-900 text-center" style="font-family: Inter">
            {{ data.mpn }}
          </td>
          <td class="px-4 py-6 text-[14px] text-slate-600 text-center" style="font-family: Inter">
            <div v-for="(std, i) in data.standards" :key="i">{{ std }}</div>
          </td>
          <td class="px-4 py-6 text-[14px] text-slate-600 text-center" style="font-family: Inter">
            {{ data.technology }}
          </td>
          <td class="px-4 py-6 text-[14px] text-slate-600 text-center" style="font-family: Inter">
            {{ data.radiation }}
          </td>
          <td class="px-4 py-6 text-[14px] text-slate-600 text-center" style="font-family: Inter">
            <div v-for="(band, i) in data.bands" :key="i">{{ band }}</div>
          </td>
          <td class="px-4 py-6 text-[14px] text-slate-600 text-center" style="font-family: Inter">
            {{ data.vswr }}
          </td>
          <td class="px-4 py-6 text-[14px] text-slate-600 text-center" style="font-family: Inter">
            {{ data.polarization }}
          </td>
          <td class="px-4 py-6 text-[14px] text-slate-600 text-center" style="font-family: Inter">
            {{ data.lnaGain }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
