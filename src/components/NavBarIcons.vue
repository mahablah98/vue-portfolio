<template>
  <div>
    <div v-if="selectedIcon === 'burgerMenu'">
      <button class="">
        <div class="border-black border-2 rounded-md p-[0.48rem] -mt-[1px]">
          <div class="bg-black h-[0.15rem] w-[1.5rem]"></div>
          <div class="bg-black h-[0.15rem] w-[1.5rem] mt-2"></div>
          <div class="bg-black h-[0.15rem] w-[1.5rem] mt-2"></div>
        </div>
      </button>
    </div>

    <div v-else-if="selectedIcon === 'gitSource'">
      <a href="https://github.com/mahablah98" target="_blank" rel="noreferrer noopener">
        <button class="border-black border-2 rounded-md p-[0.35rem]">
          <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              class="inline min-w-[25px] min-h-[25px]"
              width="20px"
              height="20px"
          />
        </button>
      </a>
    </div>

    <div v-else-if="selectedIcon === 'linkedIn'">
      <a href="https://linkedin.com/in/mahatir-said-b84429189" target="_blank" rel="noreferrer noopener">
        <button class="border-black border-2 rounded-md p-[0.35rem]">
          <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              class="inline min-w-[25px] min-h-[25px]"
              width="20px"
              height="20px"
          />
        </button>
      </a>
    </div>

    <div v-else-if="selectedIcon === 'twitter'">
      <a href="https://x.com/SaidMahatir" target="_blank" rel="noreferrer noopener">
        <button class="border-black border-2 rounded-md p-[0.35rem]">
          <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              class="inline min-w-[25px] min-h-[25px]"
              width="20px"
              height="20px"
          />
        </button>
      </a>
    </div>

    <div v-else-if="selectedIcon === 'stackOverflow'">
      <a href="https://stackoverflow.com/users/8726446/mahatir-said" target="_blank" rel="noreferrer noopener">
        <button class="border-black border-2 rounded-md p-[0.35rem]">
          <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stackoverflow/stackoverflow-original.svg"
              class="inline min-w-[25px] min-h-[25px]"
              width="20px"
              height="20px"
          />
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedIcon: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style>
</style>
