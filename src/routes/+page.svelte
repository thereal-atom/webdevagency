<script>
    import { page } from "$app/stores";

    $: form = $page.form;
</script>

<div class="flex flex-col items-center py-32 max-xl:px-48 max-xl:py-24 max-md:p-24 max-sm:p-16 max-[380px]:p-12">
    <div class="flex flex-col w-[768px] max-md:w-full">
        <a
            class="flex flex-row bg-[#6366F1] bg-opacity-80 p-4 rounded-md text-white border border-solid border-[#6366F1] max-sm:text-xs max-sm:p-3"
            href="/free"
        >
            Click here if you want a FREE website.
        </a>
        <div class="flex flex-col mt-8">
            <h1 class="title">The Web Development Agency</h1>
            <div class="flex flex-col mt-4">
                <p class="paragraph">I get it.</p>
                <p class="paragraph">You're trying to run a start-up with a low budget and you need a website.</p>
                <p class="paragraph">We can help you with that.</p>
                <p class="paragraph">We specialize in creating budget-friendly websites for start-ups, empowering you to convert prospects into loyal customers. Let us help you transform your leads into revenue-generating relationships.</p>
            </div>
        </div>
        <div class="section">
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
                <label 
                    class="label"    
                    for="message"
                >
                    Your Message
                </label>
                <textarea
                    class="input min-h-[120px]"
                    name="message"
                    placeholder="I would like a website for my business..."
                    required
                />
                <button class="w-[500px] rounded-md mt-2 py-2 bg-black text-white transition-all max-sm:w-full hover:opacity-80 disabled:opacity-50 max-sm:text-sm">
                    Submit
                </button>
            </form>

            <style lang="postcss">
                .contact-form .input {
                    @apply w-[500px] my-1 px-4 py-2.5 rounded-md border border-dashed border-black border-opacity-30 placeholder:text-sm max-sm:w-full max-sm:text-sm max-sm:placeholder:text-xs;
                }

                .contact-form .label {
                    @apply my-1 text-black text-opacity-60 max-sm:text-sm;
                }
            </style>
            <p class="text-sm text-[#3D4152] mt-4">Or talk to us on <a class="opacity-60 font-black text-[#6366F1]" href="https://twitter.com/oscarfalll" target="_blank">twitter</a> or send us an <a class="opacity-60 font-black text-[#6366F1]" href="mailto:oscarfal2006@gmail.com">email</a></p>
        </div>
        <hr class="mt-8 mb-4"/>
        <div class="section">
            <h1 class="title">What Can We Do For You</h1>
            <p class="paragraph">Transforming businesses online, our agency creates websites for every stage, no matter the starting point.</p>
            <ul class="ml-4">
                <li class="paragraph">Front-end website</li>
                <li class="paragraph">Back-end API</li>
                <li class="paragraph">Infrastructure and hosting</li>
                <li class="paragraph">Database provisioning</li>
                <li class="paragraph">Monitoring and observability</li>
            </ul>
            <p class="paragraph">There are just some of the services we offer in order to take your business from start-up to a tech unicorn.</p>
            <p class="paragraph">We offer flexible pricing options, ensuring our services align with diverse budgets and goals.</p>
        </div>
    </div>
    <!-- <div class="flex flex-row py-8">
        <a href="https://twitter.com/oscarfalll">
            <img
                class="w-4"
                src="/x.svg"
                alt="X"
            />
        </a>
    </div> -->
</div>

<style lang="postcss">

    .title {
        @apply text-xl font-extrabold text-[#3D4152] max-sm:text-lg max-[380px]:text-base;
    }

    .paragraph {
        @apply text-[#797979] my-2 max-sm:text-sm max-[380px]:text-xs;
    }

    .contact-form .input {
        @apply w-[500px] my-1 px-4 py-2.5 rounded-md border border-dashed border-black border-opacity-30 placeholder:text-sm max-sm:w-full max-sm:text-sm max-sm:placeholder:text-xs;
    }

    .contact-form .label {
        @apply my-1 text-black text-opacity-60 max-sm:text-sm;
    }

    .section {
        @apply flex flex-col mt-8;
    }

    li {
        @apply list-disc;
    }
</style>