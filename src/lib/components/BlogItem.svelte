<script>
    export let mode = "full";
    export let link;
    export let title;
    export let summary;
    export let author;
    export let date;
    export let topic;
    export let imageSrc;
    export let authorImg;
    export let text;
</script>

{#if mode === "full"}
    <div class="flex w-full">
        <img
            src={imageSrc}
            alt={title}
            class="w-[691px] h-[456px] rounded-[20px]"
        />
        <div class="flex flex-col ml-[60px] pt-[63px]">
            <span
                class="uppercase font-semibold text-[14px] leading-[16px] text-nuv-orange"
            >
                {topic}
            </span>
            <span
                class="text-nuv-blue text-[40px] leading-[47px] font-medium mt-[13px]"
            >
                {title}
            </span>
            <span class="text-[20px] leading-[23px] font-normal mt-[10px]">
                {summary} 
                <br><br><a href={link}>Read more...</a>
            </span>
            <div class="mt-[30px] flex">
                <img
                    src={authorImg}
                    alt={author}
                    class="w-[64px] h-[64px] rounded-[32px]"
                />
                <div class="flex flex-col ml-[10px] justify-center">
                    <span class="text-[16px] leading-[19px] font-semibold">
                        {author}
                    </span>
                    <span
                        class="text-[#4D4D4D] text-[14px] leading-[16px] font-semibold"
                    >
                        {date}
                    </span>
                </div>
            </div>
        </div>
    </div>
{:else if mode === "mobile"}
    <div class="flex w-full flex-col">
        <img src={imageSrc} alt={title} class="w-full rounded-[20px]" />
        <div class="flex flex-col pt-[28px]">
            <span
                class="uppercase font-semibold text-[14px] leading-[16px] text-nuv-orange"
            >
            {topic}
            </span>
            <span
                class="text-nuv-blue text-[20px] leading-[23px] font-medium mt-[13px]"
            >
                {title}
            </span>
            <span class="text-[14px] leading-[16px] font-normal mt-[10px] prose">
                {@html text}
            </span>
            <div class="mt-[30px] flex">
                <img
                    src={authorImg}
                    alt={author}
                    class="w-[32px] h-[32px] rounded-[16px]"
                />
                <div class="flex flex-col ml-[10px] justify-center">
                    <span class="text-[12px] leading-[14px] font-semibold"
                        >{author}
                    </span>
                    <span
                        class="text-[#4D4D4D] text-[10px] leading-[12px] font-semibold"
                    >
                        {date}
                    </span>
                </div>
            </div>
        </div>
    </div>
{:else if mode === "mobileCard"}
    <div
        class="flex w-full flex-col bg-nuv-card-background shadow-nuv-card-box-shadow mb-[24px]"
    >
        <img src={imageSrc} alt={title} class="w-full" />
        <div class="flex flex-col p-4">
            <span
                class="uppercase font-semibold text-[14px] leading-[16px] text-nuv-orange"
            >
                {topic}
            </span>
            <span
                class="text-nuv-blue text-[20px] leading-[23px] font-medium mt-[13px]"
            >
                {title}
            </span>
            <span class="text-[14px] leading-[16px] font-normal mt-[10px]">
                {summary}
                <br><br><a href={link}>Read more...</a>
            </span>
            <div class="mt-[30px] flex">
                <img
                    src={authorImg}
                    alt={author}
                    class="w-[32px] h-[32px] rounded-[16px]"
                />
                <div class="flex flex-col ml-[10px] justify-center">
                    <span class="text-[12px] leading-[14px] font-semibold"
                        >{author}
                    </span>
                    <span
                        class="text-[#4D4D4D] text-[10px] leading-[12px] font-semibold"
                    >
                        {date}
                    </span>
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="flex w-[50%] flex-col mt-[66px]">
        <img
            src={imageSrc}
            alt={title}
            class="w-[691px] h-[456px] rounded-[20px]"
        />
        <div class="flex flex-col mx-[30px] pt-[28px]">
            <span
                class="uppercase font-semibold text-[14px] leading-[16px] text-nuv-orange"
            >
                {topic}
            </span>
            <span
                class="text-nuv-blue text-[40px] leading-[47px] font-medium mt-[13px]"
            >
                {title}
            </span>
            <span class="text-[20px] leading-[23px] font-normal mt-[10px]">
                {text}
            </span>
            <div class="mt-[30px] flex">
                <img
                    src={authorImg}
                    alt={author}
                    class="w-[64px] h-[64px] rounded-[32px]"
                />
                <div class="flex flex-col ml-[10px] justify-center">
                    <span class="text-[16px] leading-[19px] font-semibold"
                        >{author}
                    </span>
                    <span
                        class="text-[#4D4D4D] text-[14px] leading-[16px] font-semibold"
                    >
                        {date}
                    </span>
                </div>
            </div>
        </div>
    </div>
{/if}
