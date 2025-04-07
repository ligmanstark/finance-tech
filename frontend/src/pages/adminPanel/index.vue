<template>
  <!--  <section-content>-->
  <!--    <template #header>-->
  <!--      <h1 class="text-3xl">Панель Администрирования</h1>-->
  <!--    </template>-->
  <!--    <template #content>-->
  <!--      <DataTable :value="usersData" tableStyle="min-width: 50rem">-->
  <!--        <Column field="email" header="Почта"></Column>-->
  <!--        <Column field="password" header="Пароль"></Column>-->
  <!--        <Column field="role" header="Роль"></Column>-->
  <!--        <Column field="delete" header="Удаление">-->
  <!--          <Button type="primary" size="sm" color="primary">-->
  <!--            <i class="pi pi-times" />-->
  <!--          </Button>-->
  <!--        </Column>-->
  <!--      </DataTable>-->
  <!--    </template>-->
  <!--  </section-content>-->
  <div>
    {{ usersData }}
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { Auth } from '@/entities/store/auth.store.js'
import SectionContent from '@/pages/adminPanel/_ui/sectionContent.vue'
import { UsersApi } from '@/entities/store/users.store.js'

export default {
  name: 'adminPanel',
  components: { SectionContent },
  data() {
    return {
      usersData: [],
    }
  },
  methods: {
    ...mapActions(Auth, ['autoRefreshToken']),
    ...mapActions(UsersApi, ['getUsers']),
    async getUsersData() {
      try {
        await this.getUsers()
      } catch (error) {
        console.log(error)
      }
    },
  },

  mounted() {
    this.autoRefreshToken()
    this.usersData = this.getUsersData()
  },
}
</script>
