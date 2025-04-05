<template>
  <section class="flex flex-col gap-4 mt-40 justify-center items-center">
    <Form
      v-slot="$form"
      :initialValues
      :resolver
      @submit="onLogin"
      class="flex flex-col gap-4 w-full sm:w-60"
    >
      <div class="flex flex-col gap-1">
        <InputText
          name="email"
          v-model="credentials.email"
          type="email"
          placeholder="email"
          fluid
        />
        <Message
          v-if="$form.credentials?.email?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.credentials.email.error.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1">
        <Password
          name="password"
          v-model="credentials.password"
          placeholder="Password"
          :feedback="false"
          toggleMask
          fluid
        />
        <Message
          v-if="$form.credentials?.password?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          <ul class="my-0 px-4 flex flex-col gap-1">
            <li v-for="(error, index) of $form.credentials.password.errors" :key="index">
              {{ error.message }}
            </li>
          </ul>
        </Message>
      </div>
      <Button type="submit" severity="secondary" label="Войти" />
      <Button
        @click.stop="onRegistration"
        type="button"
        severity="secondary"
        label="Зарегистрироваться"
      />
    </Form>
  </section>
</template>
<script>
import { mapActions } from 'pinia'
import { Auth } from '@/entities/store/auth.store.js'
import router from '@/app/router/index.js'

export default {
  name: 'AuthApp',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    }
  },
  beforeMount() {
    localStorage.removeItem('auth')
  },
  methods: {
    ...mapActions(Auth, ['postLogin', 'postRegistration', 'autoRefreshToken']),
    async onLogin() {
      try {
        await this.postLogin(this.credentials)
        this.credentials.email = ''
        this.credentials.password = ''
        this.autoRefreshToken()
        await router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async onRegistration() {
      try {
        await this.postRegistration(this.credentials)
        this.onLogin()
        this.credentials.email = ''
        this.credentials.password = ''
        await router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
