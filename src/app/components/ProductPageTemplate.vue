<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ExternalLink } from 'lucide-vue-next'
import ComponentSpecTable from '@/app/components/ComponentSpecTable.vue'
import DetailedSpecColumn from '@/app/components/DetailedSpecColumn.vue'
import ImageWithFallback from '@/app/components/figma/ImageWithFallback.vue'
import type { ProductPageData } from '@/app/types/product'
import { tabColorClasses } from '@/app/types/product'
import 'flag-icons/css/flag-icons.min.css'

const props = defineProps<{
  data: ProductPageData
}>()

const activeTab = ref(props.data.defaultTab || props.data.tabs[0]?.name || 'Aviation')

const descriptionParagraphs = computed(() =>
  props.data.manufacturerInfo.description.map((p, i) => ({
    text: p,
    boldPrefix: i === 0 ? props.data.manufacturerInfo.name : null,
    rest: i === 0 ? p.replace(props.data.manufacturerInfo.name, '') : p,
  }))
)
</script>

<template>
  <div class="min-h-screen bg-slate-50" style="font-family: Inter">
    <!-- Hero Header -->
    <div class="relative bg-slate-900 border-b border-white/10 shadow-2xl">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          :src="data.heroBackground"
          alt="Background"
          class="w-full h-full object-cover opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
      </div>

      <div class="relative max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-0">
        <!-- Back Button -->
        <button class="flex items-center gap-2 mb-8 text-blue-300 text-[14px] font-medium hover:text-white transition-colors group" style="font-family: Inter">
          <ChevronLeft :size="16" class="group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>

        <!-- Product Title and Info -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="px-2 py-0.5 bg-blue-500/20 text-blue-200 border border-blue-500/30 rounded text-[12px] font-medium tracking-wide uppercase" style="font-family: Inter">
                {{ data.productCategory }}
              </span>
              <span class="text-slate-400 text-[14px]">Ref: {{ data.productReference }}</span>
            </div>
            <h1 class="text-[28px] md:text-[40px] font-bold text-white tracking-tight drop-shadow-sm" style="font-family: Inter">
              {{ data.productTitle }}
            </h1>
            <p class="text-slate-300 mt-2 max-w-xl text-[14px] md:text-[15px] leading-relaxed">
              {{ data.productDescription }}
            </p>
          </div>

          <!-- Tabs - Docked at bottom -->
          <div class="flex gap-1 bg-white/5 p-1 rounded-lg backdrop-blur-md border border-white/10 overflow-x-auto max-w-full">
            <button
              v-for="tab in data.tabs"
              :key="tab.name"
              @click="activeTab = tab.name"
              :class="[
                'px-4 md:px-5 py-2 md:py-2.5 rounded-md text-[13px] font-semibold whitespace-nowrap transition-all duration-200',
                activeTab === tab.name
                  ? tabColorClasses[tab.color]
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              ]"
              style="font-family: Inter"
            >
              {{ tab.name }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10 space-y-6 md:space-y-8">

      <!-- Product Highlights Card -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-8 relative overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">

          <!-- Left: Actions -->
          <div class="space-y-6 order-2 md:order-1">
            <div class="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-4">
              <div class="flex items-center gap-2 mb-0 md:mb-1 text-slate-500 text-[12px] font-medium uppercase tracking-wider">
                Origin
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[18px] font-semibold text-slate-900" style="font-family: Inter">{{ data.origin.country }}</span>
                <span :class="`fi fi-${data.origin.flagCode} text-[24px] shadow-sm rounded-sm`"></span>
              </div>
            </div>

            <div class="pt-2 w-full">
              <button class="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-[14px] font-semibold shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0" style="font-family: Inter">
                Request Loan or Sample
              </button>
              <div v-if="data.datasheetUrl" class="mt-4 flex items-center justify-center md:justify-start gap-2">
                <a :href="data.datasheetUrl" class="text-[13px] text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
                  <ExternalLink :size="12" />
                  View Datasheet
                </a>
              </div>
            </div>
          </div>

          <!-- Center: Logo -->
          <div class="flex justify-center py-4 md:py-0 border-y md:border-y-0 md:border-x border-slate-100 order-1 md:order-2">
            <img
              :src="data.manufacturerLogo"
              alt="Manufacturer Logo"
              class="max-w-[180px] md:max-w-[225px] h-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <!-- Right: Product Image -->
          <div class="flex justify-center relative group order-3">
            <div class="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <ImageWithFallback
              :src="data.productImage"
              :alt="data.productTitle"
              class="relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
              :style="{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }"
            />
          </div>
        </div>
      </div>

      <!-- Component Specifications -->
      <div>
        <h2 class="text-[18px] font-bold text-slate-900 mb-4 flex items-center gap-2" style="font-family: Inter">
          <span class="w-1.5 h-5 bg-blue-600 rounded-full"></span>
          Component Specifications
        </h2>
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <ComponentSpecTable :data="data.componentSpec" />
        </div>
      </div>

      <!-- Detailed Specs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DetailedSpecColumn title="Electrical" :rows="data.electricalSpecs" />
        <DetailedSpecColumn title="Mechanical" :rows="data.mechanicalSpecs" />
        <DetailedSpecColumn title="Environmental" :rows="data.environmentalSpecs" />
      </div>

      <!-- Manufacturer Info -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h3 class="text-[16px] font-bold text-slate-900 mb-6 flex items-center gap-2" style="font-family: Inter">
          <span class="w-1.5 h-5 bg-slate-600 rounded-full"></span>
          Manufacturer Information
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="space-y-4">
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
              <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Website</div>
              <a
                :href="data.manufacturerInfo.website.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[13px] text-blue-600 hover:text-blue-700 font-medium break-all block hover:underline"
              >
                {{ data.manufacturerInfo.website.displayText }}
              </a>
            </div>
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
              <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Quality System</div>
              <div class="text-[13px] text-slate-900 font-medium flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                {{ data.manufacturerInfo.qualitySystem }}
              </div>
            </div>
          </div>

          <div class="md:col-span-2">
            <div class="prose prose-sm max-w-none text-slate-600 text-[14px] leading-relaxed">
              <p
                v-for="(p, i) in descriptionParagraphs"
                :key="i"
                :class="i < descriptionParagraphs.length - 1 ? 'mb-4' : ''"
              >
                <template v-if="p.boldPrefix">
                  <span class="font-bold text-slate-900">{{ p.boldPrefix }}</span>{{ p.rest }}
                </template>
                <template v-else>{{ p.text }}</template>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
