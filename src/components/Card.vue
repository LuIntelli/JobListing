<template>
  <div :class="bg + ' p-6 rounded-lg shadow-md'">
    <slot></slot>

    <!-- The slot includes the children of the card component -->
  </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        bg:{
            type:String,
            default:"bg-gray-100"
        }
    })
</script>
