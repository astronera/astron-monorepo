<template>
  <section>
    <div class="h-screen w-screen relative flex flex-col justify-center items-center overflow-hidden">
      <img class="bg-img" src="/cover.jpg">
      <div class="flex flex-col gap-8 text-center p-20 z-10">
        <!-- <img class="sml-img" src="/astronaught.png"> -->
        <div class="flex flex-row h-40 items-center">
          <img class="shadow-sm mt-2 mb-2 h-[100%]" src="/astron.png">
          <div class="flex flex-col gap-2 text-left">
            <h1 class="z-50 relative text-7xl text-white left-0 m-0">AstroTribe</h1>
            <h4 class="z-50 relative text-2xl text-[#b97310] font-bold m-0">WEBSITE ARRIVING DECEMBER 2022</h4>
          </div>
        </div>
        <!-- <h4 class="z-50 relative text-xl text-white">Connecting, inspiring and guiding the next generation of astronomers </h4> -->
        <!-- <h3 class="z-50 relative text-2xl text-white font-bold mt-6">CURRENTLY WORKING ON </h3> -->
        <img class="rounded-xl shadow-sm mt-2 mb-2" src="/lunar-crater-india.webp">
        <a href="https://www.astrocapsule.in/lonar-analog-expedition-program-22">
          <button class=" bg-[#b97310] rounded-md text-[#F3F3F3] pt-2 pb-2 pr-6 pl-6 w-auto text-xl m-0">Lonar Analog Expedition Program 22</button>
        </a>
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

.button {
  padding: .4rem 1.5rem;
  border-radius: .6rem;
}

.button.primary {
  background-color: #540505;
  color: #fff;
}

</style>