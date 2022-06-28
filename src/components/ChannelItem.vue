<template>
 
    <div class="flex justify-between">
      <div class="flex space-x-2 justify-center items-center">
        <font-awesome-icon
          icon="fa-solid fa-grip-vertical"
          class="text-gray-300 hover:cursor-grab handle"
        />
        <span
          class="
            w-6
            h-6
            bg-gray-100
            p-4
            rounded-md
            flex
            justify-center
            items-center
          "
        >
          <font-awesome-icon :icon="'fa-solid ' + channel.icon" />
        </span>
        <p>{{channel.name}}</p>
      </div>
      <div class="flex items-center cursor-pointer">
        <p class="text-sm font-semibold text-gray-400" @click="removeChannel">Remove</p>
      </div>
    </div>
  
</template>

<script>
export default {
  props: {
    channel: Object,
  },
  data() {
    return {};
  },
  methods:{
      removeChannel() {
          this.$emit("on-click-remove", this.channel)
      }
  }
};
</script>



<style>
</style>