<template>
    <div>
        <Navbar />
        <section
            class="grid grid-cols-1 md:grid-cols-2 gap-16 py-12 md:py-32 px-8 md:px-32"
        >
            <div class="flex flex-col justify-center">
                <div
                    class="text-3xl lg:text-5xl font-bold text-gray-700"
                >
                    <span class="text-blue-500">Parkir</span><span class="text-parkir-orange-500">Mana</span> Mobile
                </div>
                <p
                    class="mt-5 text-xl"
                >
                    Make the parking system easier and more effective from the palm of your hand.
                </p>
                <button
                    class="bg-blue-500 rounded-md py-3 px-8 mt-5 text-white lg:w-1/2"
                >
                    Request Demo
                </button>
            </div>
            <div class="flex justify-center">
                <img
                    src="~/assets/parkir-mobile-heading.png"
                    class="rounded-lg w-96"
                    alt=""
                >
            </div>
        </section>
        <section>
            <div class="md:col-span-2 text-center my-5">
                <h1 class="text-3xl lg:text-5xl font-bold text-gray-700">Our Features</h1>
            </div>
            <div class="flex justify-center">
                <img
                    src="~/assets/parkir-mobile-feature-1.png"
                    class="rounded-lg"
                    alt=""
                >
            </div>
            <div class="md:col-span-2 text-center my-5">
                <h1 class="text-xl lg:text-3xl font-bold text-gray-700">Integrated Payment System</h1>
            </div>
            <div class="flex justify-center">
                <img
                    src="~/assets/parkir-mobile-feature-2.png"
                    class="rounded-lg"
                    alt=""
                >
            </div>
            <div class="md:col-span-2 text-center my-5">
                <h1 class="text-xl lg:text-3xl font-bold text-gray-700">Online Booking Slot</h1>
            </div>
            <div class="flex justify-center">
                <img
                    src="~/assets/parkir-mobile-feature-3.png"
                    class="rounded-lg"
                    alt=""
                >
            </div>
            <div class="md:col-span-2 text-center my-5">
                <h1 class="text-xl lg:text-3xl font-bold text-gray-700 mb-12">Know Nearest Parking Location</h1>
            </div>
        </section>
        <Footer />
    </div>
</template>