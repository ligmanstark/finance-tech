<template>
  <UiSection class="group is-dark">
    <template #heading>
      <UiHeading size="600" tag="H1"> Курс валют </UiHeading>
    </template>
    <template #description>
      <UiParagraph class="group-[.is-dark]:text-white" size="600">
        Актуальный курс валют на текущую дату - {{ currentDate }}
      </UiParagraph>
    </template>
    <UiSection>
      <DataTable class="mt-5" :value="dailyData" tableStyle="min-width: 50rem">
        <Column header="Валюта">
          <template #body="slotProps">
            <img
              :src="getFlagUrl(slotProps.data.CharCode)"
              :alt="slotProps.data.CharCode"
              class="w-6 h-4 inline-block mr-2"
            />
            {{ slotProps.data.Name }}
          </template>
        </Column>
        <Column header="Курс">
          <template #body="slotProps">
            <span> {{ slotProps.data.Value.toFixed(1) }}&nbsp;₽ </span>
          </template>
        </Column>
        <Column class="text-center" header="Изменение курса">
          <template #body="slotProps">
            <span :class="delta(slotProps.data.Previous, slotProps.data.Value)">
              {{ (slotProps.data.Value - slotProps.data.Previous).toFixed(3) }}&nbsp;₽
            </span>
          </template>
        </Column>
      </DataTable>
    </UiSection>
  </UiSection>
</template>

<script>
import UiSection from '@/shared/components/semantic/UiSection.vue'
import UiHeading from '@/shared/components/typografi/UiHeading.vue'
import UiParagraph from '@/shared/components/typografi/UiParagraph.vue'
import { mapActions, mapState } from 'pinia'
import { useDaily } from '@/entities/store/daily.store.js'
import { countrys } from '@/shared/const.js'
import { Auth } from '@/entities/store/auth.store.js'

export default {
  name: 'DailyApp',
  components: { UiParagraph, UiHeading, UiSection },
  computed: {
    ...mapState(useDaily, ['dailyData']),

    currentDate() {
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(new Date())
    },
  },
  methods: {
    ...mapActions(useDaily, ['getDaily']),
    ...mapActions(Auth, ['postRefreshToken']),
    async fetchData() {
      try {
        await this.getDaily()
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    },
    delta(prev, current) {
      if (current - prev > 0) {
        return 'text-green-600'
      } else {
        return 'text-red-600'
      }
    },
    getCountryCode(currencyCode) {
      return countrys[currencyCode] || 'un'
    },
    getFlagUrl(currencyCode) {
      return `https://flagcdn.com/w40/${this.getCountryCode(currencyCode)}.png`
    },
  },
  mounted() {
    this.fetchData()
  },
  updated() {
    setTimeout(() => {
      this.methods.postRefreshToken()
    }, 1000)
  },
}
</script>
