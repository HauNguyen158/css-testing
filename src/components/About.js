export default function About() {
	return (
		<div clas="px-[24px]">
			<div className="max-w-[1280px] grid gap-[48px] m-auto w-full">
				<div className="flex justify-end w-full">
					<div className="grid xs:grid-cols-1 md:grid-cols-[auto_auto] items-end justify-between max-w-[1047px] w-full">
						<div className="text-left grid grid-cols-1 gap-[32px] text-[#D9D9D9] min-w-[max-content] w-full">
							<div className="font-big-shoulders text-[72px] leading-[100%] font-bold uppercase max-w-[578px]">
								New entertainment centre near Cheb
							</div>
							<div className="font-space-grotesk text-[16px] leading-[150%] font-normal max-w-[365px]">
								We have been entertaining children and adults in western Bohemia for more than 10 years!
							</div>
						</div>
						<div className="font-space-grotesk text-[16px] leading-[150%] font-normal text-[#D9D9D9]">
							<span>Find more about us</span>
							<svg className="float-right ml-[12px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
							</svg>
						</div>
					</div>
				</div>
				<div className="image-about relative max-h-[567px] rounded-[24px] relative overflow-hidden">
					<img width="100%" alt="" height="auto" src="https://s3-alpha-sig.figma.com/img/d63b/e1c5/ceaeb9ad7bd86f8ece75610b5cdc54b3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rqn3-7wGzHLFxEYazyd-6Jd8ARRTZBUhv3pKlceJue4QBoALUCGjr7NHwYdEsPxfFbkckU91x~w0b6UADEHazEHd7a-~TRwt8iRpgLR3Ni5Gkmmi76ZQ1T4OpgSBJ56J4h433qLr33ob69NkVO9ogLKnYEignXerqsFfNn1nZ1Wy4KbT47rpM88vus7Vpnf84Q2UqO5IO9OFLkVkEFc7K-yw2ca4h7-4MhHXgvjGTTdbNPyW1etuC4vgAPRBXDVJPMAEVROAGB9FyC2gNbg3M3zykliRth1Jx4rgpBCfmK1AZowUaDTZiZi81MiBWxnm4NbZzgcwnEiCliKAXUF2Sw__"></img>
					<svg className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
						<rect x="5" y="5" width="90" height="90" rx="15" ry="15" fill="#009FE3" />
						<polygon points="40,30 70,50 40,70" fill="#FFFFFF" />
					</svg>
				</div>
			</div>
		</div>
	);
}
