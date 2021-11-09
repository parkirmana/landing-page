<template>
  <div>
    <Navbar />
    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-5 py-8 md:py-20 px-8 md:px-20 mx-auto"

    >
      <div
        class="flex items-center justify-center"
      >
        <div class="lg:px-">
          <h1 class="font-bold text-lg md:text-4xl lg:text-3xl text-gray-700">
            Single Platform for
          </h1>
          <h1 class="font-bold text-blue-500 text-2xl lg:text-5xl mt-1 lg:mt-3">
            CONNECTED MOBILITY
          </h1>
          <p class="md:text-xl mt-1 lg:mt-3 font-semibold">
            Make it easy for you to find and pay for parking and book the best spot for you before you go.
          </p>
        </div>
      </div>  
      <div class="flex justify-center">
        <img
          src="~/assets/hero-illustration.png"
          class="rounded-lg"
          alt=""
        >
      </div>    
    </section>
    <section
      class="bg-parkir-blue-600 grid grid-cols-1 gap-5 py-8 md:py-12 px-8 md:px-20 mx-auto lg:grid-cols-3"
    >
      <div
        class="flex items-center justify-center"
      >
        <h1
          class="text-3xl text-white text-center"
        >
          Supported By
        </h1>
      </div>
      <div
        class="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <div class="flex items-center justify-center">
          <img src="~/assets/support-1.png" alt="">
        </div>
        <div class="flex items-center justify-center">
          <img src="~/assets/support-2.png" alt="">
        </div>
        <div class="flex items-center justify-center">
          <img src="~/assets/support-3.png" alt="">
        </div>
      </div>
    </section>
    <section
      class="py-12 px-8 md:px-20 mx-auto"
    >
      <h1
        class="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-700 leading-10 text-center"
      >
        Our Products
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8 text-center"
      >
        <div
          class="p-4 md:p-12 rounded-xl border border-gray-700 grid grid-cols-1 gap-8"
        >
          <h2
            class="font-bold text-4xl text-gray-700"
          >
            ParkirMana Mobile
          </h2>
          <img src="~/assets/parkir-mobile.png" alt="" class="mx-auto">
          <p class="text-xl">
            Make the parking system easier and more effective from the palm of your hand.
          </p>
          <NuxtLink
            to="/mobile"
            class="bg-blue-600 rounded-md py-3 px-4 font-bold text-white"
          >
            Explore!
          </NuxtLink>
        </div>
        <div
          class="p-4 md:p-12 rounded-xl border border-gray-700 grid grid-cols-1 gap-8"
        >
          <h2
            class="font-bold text-4xl text-gray-700"
          >
            Next Parking Analytics
          </h2>
          <img src="~/assets/parkir-analytics.png" alt="" class="mx-auto">
          <p class="text-xl">
            We provide seamless parking services so you can make it easier than ever to keep people moving.
          </p>
          <NuxtLink
            to="/analytics"
            class="bg-blue-600 rounded-md py-3 px-4 font-bold text-white"
          >
            Explore!
          </NuxtLink>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>

</script>
