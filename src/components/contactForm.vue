<template>
    <div>
        <form class="w-full" @submit.prevent="sendEmail">
            <!-- Email Input -->
            <div class="relative z-0 w-full mb-5 group">
                <input v-model="email" type="email" name="floating_email" id="floating_email"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                    address</label>
            </div>

            <!-- Name Input -->
            <div class="relative z-0 w-full mb-5 group">
                <input v-model="name" type="text" name="name" id="name"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="" required />
                <label for="name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>

            <!-- Message Textarea -->
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea v-model="message" id="message" rows="4"
                class="block h-36 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..." required></textarea>

            <!-- Submit Button -->
            <button type="submit"
                class="text-white mt-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Send
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

// Define refs for form inputs
const email = ref('');
const name = ref('');
const message = ref('');

// EmailJS configuration
const serviceID = 'service_qnsudgt'; // Your Gmail service ID from EmailJS
const templateID = 'template_de7kzhw'; // Your template ID from EmailJS
const publicKey = '-TDsIY_EQ9f2TkaSE'; // Your public key from EmailJS

const sendEmail = async () => {
    const templateParams = {
        to_name: 'Recipient Name', // Change this to the recipient's name or dynamic value
        from_name: name.value, // Sender's name (from form input)
        message: message.value, // Message content (from form input)
        user_email: email.value, // User's email (from form input)
    };

    try {
        // Send email via EmailJS
        const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
        console.log('Email sent successfully:', response);
        alert('Message sent successfully!');
        // Clear form fields after submission
        email.value = '';
        name.value = '';
        message.value = '';
    } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again later.');
    }
};
</script>
