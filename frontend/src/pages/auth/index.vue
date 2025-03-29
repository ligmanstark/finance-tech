<template>
  <section>
    <Form
      v-slot="$form"
      :resolver="resolver"
      :initialValues="initialValues"
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full sm:w-64"
    >
      <div class="flex flex-col gap-1">
        <Password name="password" placeholder="Password" :feedback="false" fluid />
        <template v-if="$form.password?.invalid">
          <Message
            v-for="(error, index) of $form.password.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >{{ error.message }}</Message
          >
        </template>
      </div>
      <Button type="submit" severity="secondary" label="Submit" />
    </Form>
  </section>
</template>
<script>
export default {
  name: 'AuthApp',
}
</script>
