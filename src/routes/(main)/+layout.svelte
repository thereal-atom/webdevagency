<div class="flex flex-col items-center py-32 max-xl:px-48 max-xl:py-24 max-md:p-24 max-sm:p-16 max-[380px]:p-12">
    <div class="flex flex-col w-[768px] max-md:w-full">
        <slot />
        <div class="flex flex-row items-center w-full p-5 rounded-md bg-black text-white max-[380px]:flex-col">
            <a
                class="w-4"
                href="https://x.com/oscarfalll"
                target="_blank"
            >
                <img
                    src="x.svg"
                    alt="X"
                />
            </a>
            <div class="h-[16px] w-[1px] mx-4  bg-white opacity-50 max-[380px]:w-full max-[380px]:my-4 max-[380px]:h-[1px] max-[380px]:opacity-10"></div>
            <div class="flex flex-row">
                <a
                    class="text-sm"
                    href="/"
                >
                    Home
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