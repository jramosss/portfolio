import Link from "next/link";

export default function Contact() {
	return (
		<section className="flex flex-col gap-20">
			<section className="flex justify-center">
				<div className="w-[750px]">
					<h2 className="text-5xl font-bold text-center">CONTACT</h2>
					<p className="text-center text-xl mt-4">
						If you would like to contact me, please send me an email at{" "}
						<Link href="mailto:jramostod@gmail.com" className="text-blue-500" />
					</p>
				</div>
			</section>
		</section>
	);
}
