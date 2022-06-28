<template>
  <div class="bg-white shadow-lg border rounded-md max-w-md w-1/3 p-4">
    <div>
      <label class="relative text-gray-400 focus-within:text-gray-600 block">
        <font-awesome-icon
          class="absolute top-1/2 transform -translate-y-1/2 left-3"
          icon="fa-solid fa-magnifying-glass"
        />

        <input
          type="text"
          name="channel"
          id="channel"
          placeholder="Add channel"
          class="
            form-input
            border
            py-3
            px-4
            pl-8
            rounded-full
            bg-white
            placeholder-gray-400
            text-gray-500
            appearance-none
            w-full
            block
            focus:outline-none
          "
          v-model="entry"
          @keypress.enter="addChannel"
        />
      </label>
    </div>

    <div class="mt-4">
      <draggable
        class="bg-white rounded-lg text-gray-900 list-none"
        @start="drag = true"
        @end="drag = false"
        handle=".handle"
        :list="tempChannels"
        @change="onSortChanged"
      >
        <template v-if="entry">
          <li
            v-for="channel in filteredChannels"
            :key="channel.name"
            class="px-6 py-2 w-full hover:border rounded hover:cursor-pointer"
          >
            <channel-item :channel="channel" @on-click-remove="removeChannel" />
          </li>
        </template>
        <template v-else>
          <li
            v-for="channel in tempChannels"
            :key="channel.name"
            class="px-6 py-2 w-full hover:border rounded hover:cursor-pointer"
          >
            <channel-item :channel="channel" @on-click-remove="removeChannel" />
          </li>
        </template>
      </draggable>
    </div>
    <div v-if="isDataChanged || isSortChanged" class="flex justify-end mt-4">
      <button
        type="button"
        class="
          text-black
          bg-white
          border
          hover:bg-black hover:text-white
          focus:ring-4 focus:ring-blue-300
          font-normal
          rounded-full
          text-xs
          px-5
          py-2.5
          mr-2
          mb-2
        "
        @click="cancelChanges"
      >
        Cancel
      </button>

      <button
        type="button"
        class="
          text-white
          bg-black
          border
          hover:bg-white hover:text-black
          focus:ring-4 focus:ring-blue-300
          font-normal
          rounded-full
          text-xs
          px-5
          py-2.5
          mr-2
          mb-2
        "
        @click="saveChanges"
      >
        Apply
      </button>
    </div>
  </div>
</template>

<script>
import ChannelItem from "./ChannelItem.vue";
import draggable from "vuedraggable";

export default {
  props: {},
  components: {
    ChannelItem,
    draggable,
  },
  computed: {
    isDataChanged: function () {
      return this.channels.length !== this.tempChannels.length;
    },
  },

  watch: {
    entry: function (value) {
      if (value) {
        this.filteredChannels = this.tempChannels.filter((item) =>
          item.name.toLowerCase().includes(value)
        );
      }
    },
  },

  data() {
    return {
      channels: [
        { name: "Trengo Customer Care", icon: "fa-phone" },
        { name: "Trengo HR", icon: "fa-users" },
        { name: "Design", icon: "fa-pallet" },
      ],
      tempChannels: [],
      filteredChannels: [],
      entry: "",
      isSortChanged: false,
    };
  },
  created() {
    this.tempChannels = [...this.channels];
  },
  methods: {
    addChannel() {
      if (!this.entry) {
        return;
      }
      const channel = {
        name: this.entry,
        icon: this.getRandomIcon(),
      };

      this.tempChannels = [channel, ...this.tempChannels];
      this.entry = "";
    },
    removeChannel(channel) {
      let filtered = this.tempChannels.filter((item) => {
        return item.name != channel.name;
      });
      this.tempChannels = filtered;
    },
    saveChanges() {
      this.channels = [...this.tempChannels];
      this.entry = "";
      this.isSortChanged = false;
    },
    cancelChanges() {
      this.tempChannels = [...this.channels];
      this.entry = "";
      this.isSortChanged = false;
    },
    getRandomIcon() {
      const icons = [
        "fa-grip-vertical",
        "fa-magnifying-glass",
        "fa-wine-glass",
        "fa-users",
        "fa-cog",
        "fa-pallet",
        "fa-dashboard",
        "fa-globe",
        "fa-phone",
      ];

      return icons[Math.floor(Math.random() * icons.length)];
    },
    isEqual(first, second) {
      return JSON.stringify(first) === JSON.stringify(second);
    },
    onSortChanged() {
      this.isSortChanged = true;
    },
  },
};
</script>


<style>
</style>