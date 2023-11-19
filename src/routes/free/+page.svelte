<script>
    import { page } from "$app/stores";

    $: form = $page.form;
</script>

<div class="flex items-center justify-center w-screen h-screen">
    <div class="flex flex-col p-8">
        <p class="text-xl my-4 font-black text-[#3D4152]">Let me make you a website for FREE.</p>
        <p class="my-2 text-[#797979]">Input your email below and I will reach out to you with the offer.</p>
        <form
            class="flex flex-col"
            method="POST"
        >
            <div class="mt-4">
                {#if form?.success}
                    <p class="text-green-400 text-sm">We will get back to you soon :)</p>
                {:else if form?.error}
                    <p class="text-red-500 text-sm">There was an error: {form.error}</p>
                {/if}
            </div>
            <input
                class="w-full my-1 px-4 py-2.5 rounded-md bg-inherit border border-dashed border-black border-opacity-30 placeholder:text-sm max-sm:w-full max-sm:text-sm max-sm:placeholder:text-xs"
                placeholder="johndoe@gmail.com"
                name="email"
                type="text"
                required
            />
            <button
                class="bg-black py-2 rounded-md mt-2 text-white font-black"
                type="submit"
            >
                Submit
            </button>
        </form>
        <p class="text-xs mt-2 text-[#6366F1] opacity-70 font-black">Hurry, I am only able to take on up to 5 clients.</p>
    </div>
</div>