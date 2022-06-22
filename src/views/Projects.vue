<template>
  <article class="">
    <ul class="d-flex text-decoration-none d-">
      <li class="">view all</li>
      <li class="">completed</li>
      <li class="">ongoing</li>
    </ul>
    <div class="card w-50 text-left">
      <div class="card-body text-left">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text bg-success text-left">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  text-decoration: none;
  text-transform: uppercase;
  list-style: none;
  article {
    position: relative;
    border-color: red;
    top: 2rem;
    left: 15rem;

    ul {
      list-style: none;
      margin-left: 0;

      padding-left: 0;

      li {
        margin: 2rem;
        margin-left: 0.5rem;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }
  }
}
.card-body {
  text-align: start;
}
</style>
