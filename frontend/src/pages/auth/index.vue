<template>
  <section class="flex justify-center items-center">
    <Form
      v-slot="$form"
      :initialValues
      :resolver
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full sm:w-60"
    >
      <div class="flex flex-col gap-1">
        <InputText
          name="username"
          v-model="credentials.username"
          type="text"
          placeholder="Username"
          fluid
        />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
          $form.username.error.message
        }}</Message>
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
        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
          <ul class="my-0 px-4 flex flex-col gap-1">
            <li v-for="(error, index) of $form.password.errors" :key="index">
              {{ error.message }}
            </li>
          </ul>
        </Message>
      </div>
      <Button type="submit" severity="secondary" label="Submit" />
    </Form>
  </section>
</template>
<script>
import router from '@/app/router/index.js'

export default {
  name: 'AuthApp',
  data() {
    return {
      credentials: [
        {
          username: '',
          password: '',
        },
      ],
    }
  },
  beforeMount() {
    localStorage.removeItem('auth')
  },
  methods: {
    onFormSubmit() {
      console.log(this.credentials.username)
      console.log(this.credentials.password)

      if (
        this.credentials.username === import.meta.env.VITE_APP_LOGIN &&
        this.credentials.password === import.meta.env.VITE_APP_PASSWORD
      ) {
        localStorage.setItem('auth', true)
        router.push('/')
      } else {
        console.log('error')
      }
    },
  },
}
</script>
