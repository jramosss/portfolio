type IndexItemProps = {
	label: string;
	onClick: () => void;
	active: boolean;
};

type IndexProps = {
	activeSection: string | null;
};

function Bar() {
	return <div className="flex-grow border-t rounded-xl border-gray-500 border-y-2" />;
}

function Item({ label, onClick, active }: IndexItemProps) {
	return (
		<div
			className={`flex gap-4 items-center transition-transform duration-200 ease-in-out ${active ? "scale-125 font-bold" : "hover:scale-125"}`}
		>
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

export default function Index({ activeSection }: IndexProps) {
	const items = [
		{ label: "About", onClick: () => console.log("About") },
		{ label: "Experience", onClick: () => console.log("Experience") },
		{ label: "Projects", onClick: () => console.log("Projects") },
		{ label: "Contact", onClick: () => console.log("Contact") },
	];

	return (
		<div className="flex w-48 flex-col gap-2">
			{items.map((item) => (
				<Item key={Math.random() * 1000} {...item} active={activeSection?.toLowerCase() === item.label.toLowerCase()} />
			))}
		</div>
	);
}
