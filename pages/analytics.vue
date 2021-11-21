<template>
    <section>
        <SubscribeForm v-if="subscribeModal" @close="subscribeModal = !subscribeModal" image="analytics-subs-form.png" type="analyticsSubscriber" />
        <PartnershipForm v-if="partnershipModal" @close="partnershipModal = !partnershipModal" />
        <Navbar />
        <section
            class="grid grid-cols-1 md:grid-cols-2 gap-16 py-12 md:py-32 px-8 md:px-32"
        >
            <div>
                <h1
                    class="text-5xl font-bold text-gray-700"
                >
                    Next Parking System & Analytics
                </h1>
                <p
                    class="mt-5"
                >
                    We partner with companies, university, and municipalities of all kinds to provide seamless parking services so you can make it easier than ever to keep people moving.
                </p>
                <button
                    class="bg-blue-500 rounded-md py-3 px-8 mt-5 text-white lg:w-1/2"
                    @click="subscribeModal = true"
                >
                    Try our demo
                </button>
            </div>
            <div class="flex justify-center">
                <img
                    src="~/assets/analytics-hero.png"
                    class="rounded-lg w-100"
                    alt=""
                >
            </div>
        </section>
        <section
            class="grid grid-cols-1 py-12 px-8 md:px-32 gap-12"
        >
            <div class="text-center">
                <h1 class="text-3xl lg:text-5xl font-bold text-gray-700">Our Features</h1>
            </div>
            <div class="md:p-8">
                <img src="~/assets/analytics-feature-2.png" class="mx-auto" alt="">
                <h1 class="text-3xl mt-5 text-center font-bold text-gray-700">
                    Scheduled Reports
                </h1>
            </div>
            <div class="md:p-8">
                <img src="~/assets/analytics-feature-1.png" class="mx-auto" alt="">
                <h1 class="text-3xl mt-5 text-center font-bold text-gray-700">
                    Future Predictions
                </h1>
            </div>
        </section>
        <section class="px-8 md:px-32 py-20 md:flex flex-items-center justify-between bg-parkir-blue-700">
            <h1 class="text-3xl font-bold text-white">Interested to become our partner?</h1>
            <button
                class="bg-blue-500 rounded-md py-3 px-8 font-bold text-white mt-4 md:mt-0 md"
                @click="partnershipModal = true"
            >
                Apply Here!
            </button>
        </section>
        <section
            class="grid grid-cols-1 md:grid-cols-3 py-12 px-8 md:px-32 gap-24 bg-white"
        >
            <div class="md:col-span-3 text-center">
                <h1 class="text-3xl lg:text-5xl font-bold text-gray-700">Use Case</h1>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-gray-700">
                    Universities
                </h1>
                <p class="mt-4">
                    University face unique challenges as they have to manage large volumes of students moving around in campus.
                </p>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-gray-700">
                    Shopping Mall
                </h1>
                <p class="mt-4">
                    ParkirMana can assist you with better parking management so that you can optimize parking income while offering a great parking experience to your visitors.
                </p>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-gray-700">
                    Events Vanues
                </h1>
                <p class="mt-4">
                    ParkirMana makes it easier than ever to discover and pay for parking. This translates to more payments, reduced traffic, and happier customers.
                </p>
            </div>
        </section>
        <Footer />
    </section>
</template>

<script>
export default {
    data() {
        return {
            subscribeModal: false,
            partnershipModal: false,
        }
    }
}
</script>