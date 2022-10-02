<template>
  <section>
    <div class="h-screen w-screen relative flex flex-col justify-center items-center">
      <img class="bg-img" src="/cover.jpg">
      <div class="flex flex-col gap-8 text-center bg-slate-400 p-20">
        <!-- <img class="sml-img" src="/astronaught.png"> -->
        <h1 class="z-50 relative text-7xl text-white">AstroTribe</h1>
        <h4 class="z-50 relative text-xl text-white">Connecting, inspiring and guiding the next generation of astronomers </h4>
        <h4 class="z-50 relative text-2xl text-red-900 font-bold">ARRIVING DECEMBER 2022</h4>
      </div>
    </div>
  </section>
</template>

<style>

.bg-img {
  top: 0;
  left: 0;
  position: absolute;
  min-height: 100%;
  object-fit: cover;
  z-index: 0;
}

</style>