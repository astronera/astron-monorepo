<template>
  <section>
    <div class="h-screen w-screen relative flex flex-col justify-center items-center">
      <img class="bg-img" src="/cover.jpg">
      <div class="flex flex-col gap-2 text-center">
        <h1 class="z-50 relative text-5xl text-white">We're not alone...</h1>
        <h1 class="z-50 relative text-2xl text-white">Astro Tribe coming soon</h1>
      </div>
    </div>
  </section>
</template>

<style>

.bg-img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

</style>