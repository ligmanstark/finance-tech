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
  </UiSection>
</template>
<script>
import UiSection from '@/shared/components/semantic/UiSection.vue'
import UiHeading from '@/shared/components/typografi/UiHeading.vue'
import UiParagraph from '@/shared/components/typografi/UiParagraph.vue'

export default {
  name: 'dailyApp',
  components: { UiParagraph, UiHeading, UiSection },
  computed: {
    currentDate() {
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(new Date())
    },
  },
}
</script>
