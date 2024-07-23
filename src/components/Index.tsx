type IndexItemProps = {
	label: string;
	onClick: () => void;
};

function Bar() {
	return <div className="flex-grow border-t rounded-xl border-gray-500 border-y-2" />;
}

function Item({ label, onClick }: IndexItemProps) {
	return (
		<div className="flex gap-4 items-center transition-transform duration-200 ease-in-out hover:scale-110">
			<Bar />
			<div className="w-[60%]">
				<button
					type="button"
					onClick={onClick}
					className="text-gray-100 transition-colors duration-200 ease-in-out hover:text-gray-300 text-left"
				>
					<span className="text-xl">{label}</span>
				</button>
			</div>
		</div>
	);
}

export default function Index() {
	return (
		<div className="flex w-48 flex-col gap-2">
			<Item label="About" onClick={() => console.log("About")} />
			<Item label="Experience" onClick={() => console.log("Experience")} />
			<Item label="Projects" onClick={() => console.log("Projects")} />
			<Item label="Contact" onClick={() => console.log("Contact")} />
		</div>
	);
}
