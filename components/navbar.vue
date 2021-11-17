<template>
    <nav class="py-5 px-8 bg-parkir-purple-500 flex items-center justify-between z-10 sticky top-0">
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
        <button class="md:hidden text-white w-8 h-8 flex items-center justify-center pb-2 text-3xl rounded-sm" v-bind:class="{'bg-indigo-900' : isOpen}" v-on:click="toggleNavbar">
            ☰
        </button>
        <div class="md:hidden w-screen py-5 px-8 bg-parkir-purple-500 absolute top-16 -ml-8" v-if="isOpen">
            <div class="text-white text-sm grid grid-cols-1 text-center">
                <a href="#" class="py-2 px-3">
                    PRODUCTS
                </a>
                <NuxtLink to="/contact" class="py-2 px-8 border rounded-full border-white">
                    CONTACT US
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
                subscribeModal: false,
            }
        },
        methods: {
            toggleNavbar() {
                return this.isOpen = !this.isOpen
            }
        }
    }
</script>