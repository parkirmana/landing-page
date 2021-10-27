<template>
    <div>
        <Navbar />
        <section
            class="grid grid-cols-1 md:grid-cols-2 gap-16 py-12 md:py-32 px-8 md:px-32"
        >
            <div>
                <h1
                    class="text-3xl font-bold text-gray-700"
                >
                    ParkirMana Mobile
                </h1>
                <p
                    class="mt-5 text-xl"
                >
                    Make the parking system easier <br/> and more effective from the <br/> palm of your hand.
                </p>
                <button
                    class="bg-blue-500 rounded-md py-3 px-8 mt-5 text-white"
                >
                    Try our demo
                </button>
            </div>
        </section>
        <section
            class="grid grid-cols-1 md:grid-cols-2 py-12 px-8 md:px-32 gap-24 bg-parkir-blue-100"
        >
            <div class="md:col-span-2 text-center">
                <h1 class="text-3xl font-bold text-gray-700">Our Features</h1>
            </div>
            <div class="flex items-center md:p-8">
                <img src="~/assets/mobile-feature-1.png" class="w-20 mx:w-28" alt="">
                <h1 class="text-2xl font-bold text-gray-700 ml-12">
                    Integrated Payment System
                </h1>
            </div>
            <div class="flex items-center md:p-8">
                <img src="~/assets/mobile-feature-2.png" class="w-20 mx:w-28" alt="">
                <h1 class="text-2xl font-bold text-gray-700 ml-12">
                    Online Booking System
                </h1>
            </div>
            <div class="flex items-center md:p-8">
                <img src="~/assets/mobile-feature-3.png" class="w-20 mx:w-28" alt="">
                <h1 class="text-2xl font-bold text-gray-700 ml-12">
                    Subscriptions Based Payment
                </h1>
            </div>
            <div class="flex items-center md:p-8">
                <img src="~/assets/mobile-feature-4.png" class="w-20 mx:w-28" alt="">
                <h1 class="text-2xl font-bold text-gray-700 ml-12">
                    1 Tap to Complete the Transaction
                </h1>
            </div>
        </section>
        <Footer />
    </div>
</template>