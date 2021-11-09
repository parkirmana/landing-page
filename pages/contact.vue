<template>
    <div>
        <Navbar />
        <section
            class="py-8 px-8 md:px-32 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
            <div class="md:px-20">
                <h1 class="font-bold text-5xl text-gray-700 leading-relaxed">WANT TO TALK<br/> TO US?</h1>
                <p class="my-4 text-gray-500 leading-loose">We open the opportunity for anyone who wants to speak directly to our team to submit suggestions, feedback or offer to work together! Fill out this form and we will contact you shortly.</p>
                <h2 class="text-lg font-bold">Or send us email on:</h2>
                <div class="flex items-center mt-3">
                    <img src="~/assets/envelope.png" alt="" class="mx-4">
                    <span>hello@parkirmana.com</span>
                </div>
            </div>
            <div class="md:px-20">
                <form action="">
                    <div class="flex flex-col mb-3">
                        <label for="" class="font-bold">NAME</label>
                        <input type="text" name="" id="" placeholder="Enter your full name" class="border-b border-gray-900 py-3">
                    </div>
                    <div class="flex flex-col mb-3">
                        <label for="" class="font-bold">EMAIL</label>
                        <input type="text" name="" id="" placeholder="Enter your email address" class="border-b border-gray-900 py-3">
                    </div>
                    <div class="flex flex-col mb-3">
                        <label for="" class="font-bold">COMPANY / ORGANIZATION</label>
                        <input type="text" name="" id="" placeholder="Enter your company name" class="border-b border-gray-900 py-3">
                    </div>
                    <div class="flex flex-col mb-3">
                        <label for="" class="font-bold">MESSAGES</label>
                        <textarea name="" id="" cols="30" rows="5" class="border-b border-gray-900 py-3"></textarea>
                    </div>
                </form>
                <button class="rounded-md mt-4 bg-blue-600 w-full py-3 text-white">Send</button>
            </div>
        </section>
        <Footer />
    </div>
</template>