import './banner.css';
export default function Banner() {
	const currentSlide = () => {

	}

	return (
		<div class="bg-[linear-gradient(180deg,#19191900_0%,#191919_100%)] relative banner">
			<div class="slideshow-container">
				<div class="mySlides fade ">
					<div class="numbertext">1 / 3</div>
					<img src="https://s3-alpha-sig.figma.com/img/54e4/9301/f0bf9da5c33086e415f1bcb5428c5995?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iW1UgQx9E~cp3oQSCXcZu2FIlZmXenz9EuHINOsDSWAHr3sqgwSwwFu64FNXGu6A9ZKdtkxyO0hkodQzZuS-d1FIzOaxVP9cOot2DwC2khgtWjHtMKkaa8isMHyKvBCjbxG833dgzomabmBCq-2mtFL2gnDao2wXPHSkdNxbzIDGA-hPCBrZwuYQ5z1Z7ZzsLVNWw4K~AXH~evKQZpWwZkty8pF6Mf61-JOG1WG6Y8eYOrMhPBJRSkuoJu9fj0Wo0j7o213tZ~TgbwYeEbopYNCiHybdeY8aW9Oiu9PxgZ1TB4Iuvc20Qzhbu6Q8GLy0BrQg0lK3rmmqll334fxRsg__" />
				</div>

			</div>

			<div class="px-[48px] py-[50px] flex justify-between absolute bottom-0 z-10">
				<div class="w-[max-content] grid gap-[24px] max-w-[552.25px] ">
					<span class="w-[max-content] text-[#FFFFFF] font-big-shoulders font-bold text-[120px] leading-[100%] tracking-[0] shadow-[0px_0px_10px_0px_#00000040]">
						GO-KARTS
					</span>
					<div class="grid grid-cols-[auto_max-content] gap-[12px]">
						<span class="pr-7 font-space-grotesk font-normal text-[14px] leading-[100%] tracking-[0] text-[#D9D9D9] text-left">
							Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts
						</span>
						<div class="button-custom h-[49px] w-[max-content] relative border-[1px] border-solid border-[#D9D9D9] px-[24px]">
							<div class="text-[#D9D9D9] font-space-grotesk font-medium text-[16px] leading-[100%] tracking-[0]">
								Find out more
							</div>
						</div>
					</div>
					<div class="flex gap-[8px] w-[max-content] items-center">
						<div class="w-[16px] h-[16px] gap-2 rounded-full border border-[1px] flex justify-center items-center dot-number-active">
							<div class="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]" />
						</div>
						<div class="w-[12px] h-[12px] gap-2 rounded-full border border-[1px] dot-number">
						</div>
						<div class="w-[12px] h-[12px] gap-2 rounded-full border border-[1px] dot-number">
						</div>
						<div class="w-[12px] h-[12px] gap-2 rounded-full border border-[1px] dot-number"></div>
						<div class="w-[12px] h-[12px] gap-2 rounded-full border border-[1px] dot-number"></div>
					</div>
				</div>
				<div class="w-[max-content] max-w-[382px]">
					b
				</div>
			</div>
			<div class="z-20 absolute left-1/2 top-full w-[240px] h-[240px] transform -translate-x-1/2 -translate-y-1/2">
				<svg width="240" height="240" viewBox="0 0 440 410" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_f_1_585)">
						<circle cx="150" cy="150" r="50" fill="url(#paint0_radial_1_585)" />
					</g>
					<g filter="url(#filter1_f_1_585)">
						<circle cx="256" cy="226" r="84" fill="url(#paint1_radial_1_585)" fill-opacity="0.5" />
					</g>
					<defs>
						<filter id="filter0_f_1_585" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_585" />
						</filter>
						<filter id="filter1_f_1_585" x="72" y="42" width="368" height="368" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_585" />
						</filter>
						<radialGradient id="paint0_radial_1_585" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150 150) rotate(90) scale(50)">
							<stop stop-color="#E30613" />
							<stop offset="1" stop-color="#009FE3" />
						</radialGradient>
						<radialGradient id="paint1_radial_1_585" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(256 226) rotate(90) scale(84)">
							<stop stop-color="#009FE3" />
							<stop offset="1" stop-color="#E30613" />
						</radialGradient>
					</defs>
				</svg>

			</div>
			<a href='https://booking.funarenacheb.cz/' target="_blank"
				class="absolute w-[250px] h-[65px] left-1/2 transform -translate-x-1/2 bottom-[-10px] z-15">
				<div class="button-custom bg-[#E30613] h-[64px] w-full relative items-center justify-center">
					<div class="button-custom bg-[#009FE3] absolute h-[64px] w-1/2 items-center left-0"
						style={{ transform: "skew(0deg)" }} />
					<span class="font-big-shoulders-display font-bold text-[32px] leading-[32px] tracking-[0%] text-[#D9D9D9] ">
						RESERVE NOW!
					</span>
				</div>
			</a>

		</div>
	);
}