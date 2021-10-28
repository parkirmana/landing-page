<template>
    <section>
        <Navbar />
        <section
            class="grid grid-cols-1 md:grid-cols-2 gap-16 py-12 md:py-32 px-8 md:px-32"
        >
            <div>
                <h1
                    class="text-3xl font-bold text-gray-700"
                >
                    Next Parking System & Analytics
                </h1>
                <p
                    class="mt-5 text-xl"
                >
                    We partner with companies, university, and <br/> municipalities of all kinds to provide seamless <br/> parking services so you can make it easier than ever <br/> to keep people moving.
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
            <div class="flex items-center md:justify-center md:p-8">
                <img src="~/assets/analytics-feature-1.png" class="w-20 mx:w-28" alt="">
                <h1 class="text-2xl font-bold text-gray-700 ml-12">
                    Scheduled Reports
                </h1>
            </div>
            <div class="flex items-center md:justify-center md:p-8">
                <img src="~/assets/analytics-feature-2.png" class="w-20 mx:w-28" alt="">
                <h1 class="text-2xl font-bold text-gray-700 ml-12">
                    Future Predictions
                </h1>
            </div>
        </section>
        <section class="px-8 md:px-32 py-20 md:flex flex-items-center justify-between">
            <h1 class="text-3xl font-bold text-gray-700">Interested to become our partner?</h1>
            <button
                class="bg-blue-500 rounded-md py-3 px-4 font-bold text-white mt-4 md:mt-0 md"
            >
                Apply Here!
            </button>
        </section>
        <section
            class="grid grid-cols-1 md:grid-cols-3 py-12 px-8 md:px-32 gap-24 bg-parkir-blue-100"
        >
            <div class="md:col-span-3 text-center">
                <h1 class="text-3xl font-bold text-gray-700">Implementations</h1>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-gray-700">
                    Universities
                </h1>
                <p>
                    University face unique challenges as they have to manage large volumes of students moving around in campus.
                </p>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-gray-700">
                    Shopping Mall
                </h1>
                <p>
                    ParkirMana can assist you with better parking management so that you can optimize parking income while offering a great parking experience to your visitors.
                </p>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-gray-700">
                    Events Vanues
                </h1>
                <p>
                    ParkirMana makes it easier than ever to discover and pay for parking. This translates to more payments, reduced traffic, and happier customers.
                </p>
            </div>
        </section>
        <Footer />
    </section>
</template>