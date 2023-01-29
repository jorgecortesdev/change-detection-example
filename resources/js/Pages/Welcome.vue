<script setup>
import { reactive } from "vue";
import useChangeDetector from "../Composables/useChangeDetector";

const form = reactive({
    first_name: 'jorge',
    last_name: 'cortes',
    email: 'jorge@test.com',
})

const detector = useChangeDetector(form);

const cancel = () => {
    if (detector.hasChanged()) {
        console.log('Alert! Something has changed!');
        return;
    }
    console.log('Canceled!');
}

const restore = () => {
    detector.restore();
}

const submit = () => {
    console.log('Submitting form!')
}
</script>

<template>
    <div class="max-w-3xl mx-auto mt-60">
        <div class="bg-gray-50 border border-gray-200 p-8 rounded-lg">
            <form @submit.prevent="submit" class="space-y-4">
                <div class="flex flex-col space-y-2">
                    <label class="text-md" for="first_name">First name:</label>
                    <input class="w-full px-1 py-2 border border-gray-200 rounded-lg" id="first_name" v-model="form.first_name" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="text-md" for="last_name">Last name:</label>
                    <input class="w-full px-1 py-2 border border-gray-200 rounded-lg" id="last_name" v-model="form.last_name" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="text-md" for="email">Email:</label>
                    <input class="w-full px-1 py-2 border border-gray-200 rounded-lg" id="email" v-model="form.email" />
                </div>
                <div class="flex justify-between">
                    <div>
                        <button class="bg-green-500 text-white tracking-wide font-bold px-6 py-3 rounded" type="button" @click="restore">Restore</button>
                    </div>
                    <div class="flex justify-end space-x-4">
                        <button class="bg-blue-500 text-white tracking-wide font-bold px-6 py-3 rounded" type="submit">Submit</button>
                        <button class="bg-red-500 text-white tracking-wide font-bold px-6 py-3 rounded" type="button" @click="cancel">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

