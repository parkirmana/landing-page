<template>
    <div>
        <Navbar />
        <section
            class="py-8 px-8 md:px-32"
        >
            <div class="rounded-lg border border-gray-700 bg-parkir-blue-100 max-w-2xl mx-auto">
                <div class="border-b border-gray-700 p-4 text-center">
                    <h1 class="text-xl font-bold">Contact Us</h1>
                </div>
                <div class="p-4 text-center md:px-20">
                    <h2>You can also email us directly to hello@parkirmana.com!</h2>
                    <form action="" class="mt-3">
                        <div>
                            <input type="text" name="name" id="name" placeholder="Full Name" class="p-2 w-full text-gray-500 rounded-md border border-gray-500">
                        </div>
                        <div class="mt-3">
                            <input type="email" name="email" id="email" placeholder="Email Address" class="p-2 w-full text-gray-500 rounded-md border border-gray-500">
                        </div>
                        <div class="mt-3">
                            <input type="phone" name="phone" id="phone" placeholder="Phone Number" class="p-2 w-full text-gray-500 rounded-md border border-gray-500">
                        </div>
                        <div class="mt-3">
                            <input type="text" name="organization" id="organization" placeholder="Company/Organization" class="p-2 w-full text-gray-500 rounded-md border border-gray-500">
                        </div>
                        <div class="mt-3">
                            <textarea name="message" id="" cols="30" rows="5" placeholder="Message" class="p-2 w-full text-gray-500 rounded-md border border-gray-500"></textarea>
                        </div>
                        <button
                            class="bg-blue-500 rounded-md py-3 px-4 font-bold text-white md:mt-0 mt-3 w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>