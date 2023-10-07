<template>
	<Component></Component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Component from "./components/Component.vue";

export default defineComponent({
	name: "App",
	components: { Component },
});
</script>

<style scoped></style>
