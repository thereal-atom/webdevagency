<!-- <a
    class="flex flex-row bg-accent bg-opacity-80 p-4 rounded-md text-white border border-solid border-accent max-sm:text-xs max-sm:p-3"
    href="/free"
>
    Click here if you want a FREE website.
</a> -->

<div class="flex flex-col">
    <div class="flex flex-col mt-8">
        <h1 class="title">The Web Development Agency</h1>
        <div class="flex flex-col mt-4">
            <p class="paragraph">Whether you're a <span class="font-3">start-up with a limited budget</span></p>
            <p class="paragraph">Or an <span class="font-3">individual who wants a good website</span></p>
            <p class="paragraph">We can create you <span class="font-3">a website that makes you money</span> for as little as <span class="font-3">$100</span>.</p>
            <p class="paragraph">Using our technical specialty, we will craft <span class="font-3">an experience that your users will fall in love with</span>.</p>
        </div>
    </div>
    <a
        class="mt-8 bg-accent px-8 py-2 rounded-md w-fit text-white font-black max-sm:text-sm max-sm:px-4 max-sm:mt-4"
        href="/contact"
    >
        Contact Us
    </a>
</div>
<hr />
<div class="flex flex-col">
    <h1 class="title">What Can We Do For You</h1>
    <div class="flex flex-col mt-4">
        <p class="paragraph">We tailor our service to each client's needs at <span class="font-3">any stage of business</span></p>
        <ul class="ml-4">
            <li class="paragraph">Front-end website</li>
            <li class="paragraph">Back-end API</li>
            <li class="paragraph">Infrastructure and hosting</li>
            <li class="paragraph">Database provisioning</li>
            <li class="paragraph">Monitoring and observability</li>
        </ul>
        <p class="paragraph"><span class="font-3">These are just some of the services we offer to take your business from start-up to a tech unicorn.</span></p>
    </div>
</div>
<hr />
<div class="flex flex-col">
    <h1 class="title">How much does it cost </h1>
    <p class="paragraph">We offer flexible pricing options, ensuring <span class="font-3">our services align with diverse budgets and goals</span>.</p>
    <p class="paragraph">So whether you want a one-off website, or you want to work with us long-term, we have something for you.</p>
    <p class="paragraph"><span class="font-3">And we will work hard to offer the lowest price possible while still delivering a high quality product.</span></p>
</div>
<hr/>

<style lang="postcss">
    .title {
        @apply text-2xl font-extrabold mb-4 text-title-text max-sm:text-lg max-[380px]:text-base;
    }

    .paragraph {
        @apply text-paragraph-text my-4 max-sm:text-sm max-[380px]:text-xs;
    }

    li {
        @apply list-disc;
    }

    hr {
        @apply my-16 max-sm:my-8;
    }

    .font-3 {
        @apply text-xl mt-2;
    }
</style>