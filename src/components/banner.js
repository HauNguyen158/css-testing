import { useEffect, useState } from 'react';

export default function Banner() {
	const items = [
		{
			img: "https://s3-alpha-sig.figma.com/img/54e4/9301/f0bf9da5c33086e415f1bcb5428c5995?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iW1UgQx9E~cp3oQSCXcZu2FIlZmXenz9EuHINOsDSWAHr3sqgwSwwFu64FNXGu6A9ZKdtkxyO0hkodQzZuS-d1FIzOaxVP9cOot2DwC2khgtWjHtMKkaa8isMHyKvBCjbxG833dgzomabmBCq-2mtFL2gnDao2wXPHSkdNxbzIDGA-hPCBrZwuYQ5z1Z7ZzsLVNWw4K~AXH~evKQZpWwZkty8pF6Mf61-JOG1WG6Y8eYOrMhPBJRSkuoJu9fj0Wo0j7o213tZ~TgbwYeEbopYNCiHybdeY8aW9Oiu9PxgZ1TB4Iuvc20Qzhbu6Q8GLy0BrQg0lK3rmmqll334fxRsg__",
			text: "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts",
			title: "GO-KARTS"
		},
		{
			img: "https://s3-alpha-sig.figma.com/img/c2d6/9365/2c00e5c2284b12ad67d57b88b6a54568?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aVD38M~w452RXtACUoK3hoMfGMYjE214eJ4T28qK0ME~o5AhCdj4NtK3T0Ckz0zeqBV4G5DPVrvG9u1-86oyzWnEMOfDVkOwqlK9ahnuyi~bL9jU74XkeHwzujtE3TgLyLsba~BVPs4ZNcFZkWC-XIe-lfQPv2uX1ltXDwVIm89yhZIVqfGHXmdrWzhrCc5qsrVeg5RawHc0rgJayqVm2aBUc930pzNslj1-Z-X1gq3lEjOvwhmnUrhGFx20WhUY4noTgdFRbyR8PMlOgLKVjdgUZ9xWRd2c9lDBeRonHBJodUKedZMdwxeIErD-AViGpn-nMlX4L5fEMyaIkwYyWQ__",
			text: "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
			title: "GO-JUMPARENA"
		},
		{
			img: "https://s3-alpha-sig.figma.com/img/5b1b/4b26/305574ff353805d79e149d71a71067f4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q63eGIwQ172j9rKYvnmm92EwTt~05AK~lCWWDEqZRCOZPG2OVLjO61lP8iyWiKMhhApIw9ttUEdsMwBQwcyU8w41juwAqXHVpvPg-9uzuNPZFGNh1wW6kmwluGCIoeQgQ9PRlsyKQYW4AX8tYXg3YIXRAdLCk97wFhFr8Oe8QKNIGrOgV4PvWmdIRNA-uteT-zdtLfjpnc5Y9qQzRmCxFrWlIbAAryrPvfJFT3DTXdQ1OT8qMp7BYfltITtGqEMDSfjOnvcGTWP22b-uXs3fEQa0GS3lujTXipj9gAATAUV6olAakptwNaHzJYMAwsukeROzsolO941IIm18GHklLA__",
			text: "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
			title: "Virtuální realita"
		},
		{
			img: "https://s3-alpha-sig.figma.com/img/80fb/99cc/16540bc84ecfe7262c11089cd569da0a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AeFVhtAsomBYKJ8DM7yrNLm2vyXPlEyv4-0I4uWcWYZbMkK2gw-RvX8ksdLBis5OFTUzeWvqcACkvWFq~dTEC4g~XP6htsjFlIChugHJHx5NF7OdBg4MprXJEDqqBGFM1aCsQKJj8fjJdSKM-sLZra-zCsgs67PCnycMre4c8KGbClhxAib7Hw~QgGTUpXUaVtcgx6cSpZa7cs5~OrkRN5Vpls7-hX7uqG4HYdEvoR8S7U2LdKDUBFkcf7tWEZAvTRjnxWI1UduhvZO4nNSJiFo-o7bYPd6A5FSP0N0oXmkxvayS8YuuHgCsLAC~-ELnbavvZV~IF6p5RpW0px3sZA__",
			text: "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
			title: "MULTIBALL"
		},
		{
			img: "https://s3-alpha-sig.figma.com/img/413e/f063/07a9d4374c7d4a170531501fe7535445?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P4qHnH4Ux5lVOPKYMHCGbfDAR-uxfEk0mfywv4aXOS6IU9pBbawuD4a58rlnL2eiOH6EypXV4CywARcF6xUuWi28l-Gga0Lc6gf5AZKYpmQQEpJh7fijCjI~oJ053So4t93cbARC8UKIs5NbEqrwsg0TgX10XzFaEUDCcMQZzbbhbb9zEL60URHprKBMUxu7RSgPnNrBO1fJwKnLXLTojO77SQTz2iLymy648oet~UM7QmO0pK1XoGxtxUI5uYM1iK26VlCCc89LLv~dViSqu~6Y61o8uclf0eSMgvRyjA-OBCwGUP04QT1PtnK419uLq6dWECZE5WKNmbw9rXPD4Q__",
			text: "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
			title: "Laserová střelnice"
		}
	]

	const [indexItem, setIndexItem] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndexItem((prevIndex) => (prevIndex + 1) % items.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [items.length]);

	function currentSlide(index) {
		setIndexItem(index);
	}

	return (
		<div className="bg-[linear-gradient(180deg,#19191900_0%,#191919_100%)] relative banner">
			<div className="relative m-auto">
				<img src={items[indexItem].img} alt="" className="max-h-[720px]" width="100%" />
			</div>

			<div className="px-[48px] py-[50px] flex justify-between absolute bottom-0 z-10 w-full">
				<div className="w-[max-content] grid gap-[24px] max-w-[552.25px]">
					<span className="w-[max-content] text-[#FFFFFF] font-big-shoulders font-bold text-[120px] leading-[100%] tracking-[0] shadow-[0px_0px_10px_0px_#00000040]">
						{items[indexItem].title}
					</span>
					<div className="grid grid-cols-[auto_max-content] gap-[12px] justify-start">
						<span className="w-[347px] font-space-grotesk font-normal text-[14px] leading-[100%] tracking-[0] text-[#D9D9D9] text-left">
							{items[indexItem].text}
						</span>
						<div className="button-custom h-[49px] w-[max-content] relative border-[1px] border-solid border-[#D9D9D9] px-[24px]">
							<div className="text-[#D9D9D9] font-space-grotesk font-medium text-[16px] leading-[100%] tracking-[0] pl-2">
								Find out more
							</div>
						</div>
					</div>
					<div className="flex gap-[8px] w-[max-content] items-center">
						{
							items.map((_, index) => {
								return index === indexItem ? (
									<div key={index} className="w-[16px] h-[16px] gap-2 rounded-full border border-[1px] flex justify-center items-center">
										<div className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]" />
									</div>
								) : (
									<div key={index} className="w-[12px] h-[12px] gap-2 rounded-full border border-[1px] dot-number"
										onClick={() => currentSlide(index)} />
								)
							})
						}
					</div>
				</div>
				<div className="w-[max-content] max-w-[382px]">
					b
				</div>
			</div>
			<div className="z-20 absolute left-1/2 top-full w-[240px] h-[240px] transform -translate-x-1/2 -translate-y-1/2">
				<svg width="240" height="240" viewBox="0 0 440 410" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_f_1_585)">
						<circle cx="150" cy="150" r="50" fill="url(#paint0_radial_1_585)" />
					</g>
					<g filter="url(#filter1_f_1_585)">
						<circle cx="256" cy="226" r="84" fill="url(#paint1_radial_1_585)" fillOpacity="0.5" />
					</g>
					<defs>
						<filter id="filter0_f_1_585" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_585" />
						</filter>
						<filter id="filter1_f_1_585" x="72" y="42" width="368" height="368" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_585" />
						</filter>
						<radialGradient id="paint0_radial_1_585" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150 150) rotate(90) scale(50)">
							<stop stopColor="#E30613" />
							<stop offset="1" stopColor="#009FE3" />
						</radialGradient>
						<radialGradient id="paint1_radial_1_585" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(256 226) rotate(90) scale(84)">
							<stop stopColor="#009FE3" />
							<stop offset="1" stopColor="#E30613" />
						</radialGradient>
					</defs>
				</svg>

			</div>
			<a href='https://booking.funarenacheb.cz/' target="_blank" rel="noreferrer"
				className="absolute w-[250px] h-[65px] left-1/2 transform -translate-x-1/2 bottom-[-10px] z-20">
				<div className="button-custom bg-[#E30613] h-[64px] w-full relative items-center justify-center">
					<div className="button-custom bg-[#009FE3] absolute h-[64px] w-[55%] items-center left-0"
						style={{ transform: "skew(0deg)" }} />
					<span className="font-big-shoulders-display font-bold text-[32px] leading-[32px] tracking-[0%] text-[#D9D9D9] ">
						RESERVE NOW!
					</span>
				</div>
			</a>

		</div>
	);
}