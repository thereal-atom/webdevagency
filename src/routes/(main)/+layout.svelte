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