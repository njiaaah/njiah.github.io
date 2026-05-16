<template>
  <span class="inline-flex items-center gap-1">
    <span
      v-if="imgUrl"
      class="ds-resource-icon-wrap shrink-0"
    >
      <img
        class="object-contain"
        :src="imgUrl"
        :alt="resource"
        width="16"
        height="16"
      />
    </span>
    <span v-if="showResourceName">{{ resource }}</span>
    {{ amount }}
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    resource: string
    amount: number
    imgUrl?: string
    showResourceName?: boolean
  }>(),
  { showResourceName: true },
)
</script>

<style scoped>
.ds-resource-icon-wrap {
  --size: 1rem;
  display: inline-block;
  width: var(--size);
  height: var(--size);
  position: relative;
  z-index: 2;
}

.ds-resource-icon-wrap::before {
  content: '';
  display: block;
  position: absolute;
  width: var(--size);
  height: var(--size);
  background-color: rgba(0, 212, 255, 0.65);
  filter: blur(5px);
  top: 0;
  z-index: -1;
}
</style>
