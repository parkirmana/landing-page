<template>
    <nav class="py-5 px-8 bg-parkir-purple-500 flex items-center justify-between">
        <NuxtLink to="/">
            <img
                src="~/assets/parkirmana-logo.svg"
                class="w-32 md:w-40"
            />
        </NuxtLink>
        <div class="text-white text-sm md:grid grid-cols-2 text-center hidden">
            <a href="#" class="py-2 px-3">
                PRODUCTS
            </a>
            <NuxtLink to="/contact" class="py-2 px-8 border rounded-full border-white">
                CONTACT US
            </NuxtLink>
        </div>
    </nav>
</template>

<script>

</script>