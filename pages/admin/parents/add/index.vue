<template>
  <main>
    <div class="admin-page-wrapper">
      <div class="default-form-wrapper">
        <h1>Add Parent</h1>

        <form class="default-form">
          <div class="default-input">
            <label for="name">User Name</label>
            <input type="text" />
          </div>

          <div class="default-input">
            <label for="name">Password</label>
            <input type="password" />
          </div>
          <div class="default-button">
            <span>Add Parent</span>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "admin"
};
</script>
