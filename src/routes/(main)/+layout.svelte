<script>
	import { scale, slide } from "svelte/transition";

    $: isFreeBannerVisible = false;

    setTimeout(() => isFreeBannerVisible = true, 2000);
</script>

<div class="flex flex-col items-center py-32 max-xl:px-48 max-xl:py-24 max-md:p-24 max-sm:p-16 max-[380px]:p-12">
    <div class="flex flex-col w-[768px] max-md:w-full">
        <slot />
        <div class="flex flex-row items-center w-full p-5 rounded-md bg-black text-white max-sm:flex-col">
            <div class="flex flex-row">
                <a
                    class="w-4 mt-0.5"
                    href="https://x.com/oscarfalll"
                    target="_blank"
                >
                    <img
                        src="x.svg"
                        alt="X"
                        width=18
                        height=18
                    />
                </a>
                <a
                    class="w-[18px] h-[18px] ml-4"
                    href="https://github.com/thereal-atom"
                    target="_blank"
                >
                    <img
                        src="github.svg"
                        alt="github"
                        width=18
                        height=18
                    />
                </a>
            </div>
            <div class="h-[16px] w-[1px] mx-4  bg-white opacity-50 max-sm:w-full max-sm:my-4 max-sm:h-[1px] max-sm:opacity-10"></div>
            <div class="flex flex-row">
                <a
                    class="text-sm"
                    href="/"
                >
                    Home
                </a>
                <a
                    class="text-sm ml-4"
                    href="/contact"
                >
                    Contact
                </a>
                <a
                    class="text-sm ml-4"
                    href="/about"
                >
                    About Us
                </a>
            </div>
        </div>
    </div>
</div>

{#if isFreeBannerVisible}
    <div class="sticky bottom-4 left-0 flex flex-col items-center px-4">
        <div
            class="banner flex flex-row items-center w-fit rounded-md text-white text-xl text-center bg-accent border-2 border-indigo-800 max-md:text-base max-sm:text-xs"
            transition:scale={{ duration: 200 }}
        >
            <a
                class="glow pl-6 py-6"
                href="/contact"
                on:click={() => isFreeBannerVisible = false}
            >
                Crafting five <span class="font-black neon">FREE</span> websites for a limited time - seize this opportunity to launch your online presence!!
            </a>
            <button
                class="font-black text-3xl pr-6 pl-4 mt-0.5"
                on:click={() => isFreeBannerVisible = false}
            >
                <img
                    class="w-8"
                    src="/icons/x.svg"
                    alt="x"
                />
            </button>
        </div>
    </div>
{/if}

<style>
    @keyframes in {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(1deg);
        }
        50% {
            transform: rotate(0deg);
        }
        75% {
            transform: rotate(-1deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    .banner {
        animation: in 1.5s linear 0s infinite normal;
    }
    
    .neon {
        color: rgb(238, 255, 0);
        text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px rgb(238, 255, 0),
            0 0 82px rgb(238, 255, 0),
            0 0 92px rgb(238, 255, 0),
            0 0 102px rgb(238, 255, 0),
            0 0 151px rgb(238, 255, 0);
    }
</style>