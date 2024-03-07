<template>
  <div id="block" v-if="showModal" @click="$emit('close')"></div>
  <div :class="`modal position-absolute ${showModal ? 'd-block' : ''}`">
    <div class="modal-dialog">
      <div class="modal-content blueBorder">
        <div class="modal-header noBorder">
          <h5 class="modal-title">Add a new city</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body row">
          <div class="col-12">
            <div class="mb-3">
              <label for="citySearch" class="form-label">Search for city</label>
              <input
                id="citySearch"
                class="form-control"
                placeholder="Ex: Lond"
                v-model="searchStr"
                @keyup="searchCity"
              />
            </div>
          </div>
          <div class="col-9">
            <div class="mb-3">
              <label for="citySelect" class="form-label">City</label>
              <select
                id="citySelect"
                class="form-select"
                :disabled="cityOptions.length === 0"
                v-model="selectedCityId"
              >
                <option
                  v-for="city in cityOptions"
                  :value="city.id"
                  :key="city.id"
                >
                  {{ `${city.name} (${city.country})` }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-3">
            <label for="citySelect" class="form-label">Icon</label>
            <select id="iconSelect" class="form-select" v-model="selectedIcon">
              <option
                v-for="(icon, index) in iconsOptions"
                :selected="index === 2"
                :value="icon"
                :key="index"
              >
                {{ icon }}
              </option>
            </select>
          </div>
        </div>
        <div class="modal-footer noBorder d-flex justify-content-around">
          <SmallButton color="lightgrey" @clicked="$emit('close')">
            Close
          </SmallButton>
          <SmallButton color="green" @clicked="addNewCity"> Add </SmallButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { debounce } from "lodash";
import { useStore } from "../store";
import { IconList } from "../utils/constants";
import requester from "../requester";
import SmallButton from "./layout/SmallButton.vue";

interface CityOption {
  id: number;
  name: string;
  country: string;
}

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});
const store = useStore();

// modal
const emit = defineEmits(["close"]);
const showModal = computed(() => props.showModal);

// city search
const searchStr = ref<string>("");
const searchCityDebounced = async function () {
  cityOptions.value = [];
  if (searchStr.value.length === 0) return;
  const data: CityOption[] = await requester.search(searchStr.value);
  if (data.length > 0) {
    cityOptions.value = (data as CityOption[]).map((city) => {
      return {
        id: city.id,
        name: city.name,
        country: city.country,
      };
    });
  }
};
const searchCity = debounce(searchCityDebounced, 250);

// city selection
const cityOptions = ref<CityOption[]>([]);
const selectedCityId = ref(0);

// icon selection
const iconsOptions = ref<string[]>(IconList);
const selectedIcon = ref(iconsOptions.value[0]);

// city addition
const addNewCityDebounced = async function () {
  const selectedCity = cityOptions.value.find(
    (city) => city.id === selectedCityId.value,
  );
  if (!selectedCity || selectedIcon.value.length === 0) {
    return;
  }
  store.addCity(selectedCity.id, selectedCity.name, selectedIcon.value);
  emit("close");
};
const addNewCity = debounce(addNewCityDebounced, 150);

watch(cityOptions, () => {
  if (cityOptions.value.length > 0) {
    nextTick(() => {
      selectedCityId.value = cityOptions.value[0].id;
    });
  }
});
</script>

<style scoped>
.blueBorder {
  border: 1px #c3e0fb solid !important;
}
.noBorder {
  border-width: 0px;
}
.modal {
  animation: createBox 0.25s;
}
@keyframes createBox {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
#block {
  background: rgb(175, 177, 181, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
