<template>
  <div>
    <Navbar />
    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-5 py-8 md:py-20 px-8 md:px-20 mx-auto"

    >
      <div
        class="flex items-center justify-center"
      >
        <div class="lg:px-20">
          <h1
            class="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-700 leading-10"
          >
            Single Platform for Connected Mobility
          </h1>
          <p
            class="py-3 md:text-xl lg:mt-3"
          >
            Make it easy for you to find and pay for parking and book the best spot for you before you go.
          </p>
        </div>
      </div>  
      <div>
        <img
          src="~/assets/parkir-hero.png"
          class="rounded-lg"
          alt=""
        >
      </div>    
    </section>
    <section
      class="logos-gradation grid grid-cols-1 gap-5 py-8 md:py-12 px-8 md:px-20 mx-auto lg:grid-cols-3"
    >
      <div
        class="flex items-center justify-center"
      >
        <h1
          class="font-bold text-3xl text-gray-700 text-center"
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
          class="p-4 md:p-12 rounded-xl border border-gray-700 grid grid-cols-1 gap-4"
        >
          <h2
            class="font-bold text-2xl text-gray-700"
          >
            ParkirMana Mobile
          </h2>
          <img src="~/assets/parkir-mobile.png" alt="" class="mx-auto">
          <p class="text-xl">
            Make the parking system easier and more effective from the palm of your hand.
          </p>
          <a
            href="/mobile"
            class="bg-blue-500 rounded-md py-3 px-4 font-bold text-white"
          >
            Explore!
          </a>
        </div>
        <div
          class="p-4 md:p-12 rounded-xl border border-gray-700 grid grid-cols-1 gap-4"
        >
          <h2
            class="font-bold text-2xl text-gray-700"
          >
            Next Parking Analytics
          </h2>
          <img src="~/assets/parkir-analytics.png" alt="" class="mx-auto">
          <p class="text-xl">
            We provide seamless parking services so you can make it easier than ever to keep people moving.
          </p>
          <a
            href="/analytics"
            class="bg-blue-500 rounded-md py-3 px-4 font-bold text-white"
          >
            Explore!
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>

</script>
