<script>
    import { page } from "$app/stores";

    $: form = $page.form;
</script>

<div class="section mb-32">
    <h1 class="title">Chat With Us</h1>
    <div class="mt-4">
        {#if form?.success}
            <p class="text-green-400 text-sm">We received your message! We will get back to you soon :)</p>
        {:else if form?.error}
            <p class="text-red-500 text-sm">There was an error sending your message: {form.error}</p>
        {/if}
    </div>
    <form 
        class="contact-form flex flex-col mt-4"
        method="POST"
    >
        <div>
            <label 
                class="label"
                for="name"
            >
                Your Name
            </label>
            <input
                class="input"
                placeholder="John Doe"
                name="name"
                type="text"
            />
        </div>
        <div class="mt-4">
            <label 
                class="label flex flex-row"
                for="email"
            >
                Your Email Address <p class="text-red-400 ml-0.5 mt-1 text-xs">*</p>
            </label>
            <input
                class="input"
                placeholder="johndoe@gmail.com"
                name="email"
                type="text"
                required
            />
        </div>
        <div class="mt-4">
            <label
                class="label flex flex-row"
                for="message"
            >
                Your Message <p class="text-red-400 ml-0.5 mt-1 text-xs">*</p>
            </label>
            <textarea
                class="input min-h-[120px]"
                name="message"
                placeholder="I would like a website for my business..."
                required
            />
        </div>
        <button class="w-full rounded-md mt-2 py-2 bg-black text-white transition-all max-sm:w-full hover:opacity-80 disabled:opacity-50 max-sm:text-sm">
            Submit
        </button>
    </form>
    <p class="text-sm text-title-text mt-4">Or talk to us on <a class="link" href="https://twitter.com/oscarfalll" target="_blank">twitter</a> or send us an <a class="link" href="mailto:oscarfal2006@gmail.com">email</a></p>
</div>

<style lang="postcss">
    .contact-form .input {
        @apply w-full my-1 px-4 py-2.5 rounded-md border border-dashed border-black border-opacity-30 placeholder:text-sm max-sm:w-full max-sm:text-sm max-sm:placeholder:text-xs;
    }

    .contact-form .label {
        @apply my-1 text-black text-opacity-60 max-sm:text-sm;
    }

    .title {
        @apply text-xl font-extrabold text-title-text max-sm:text-lg max-[380px]:text-base;
    }

    .section {
        @apply flex flex-col mt-8;
    }

    .link {
        @apply font-black text-accent;
    }
</style>