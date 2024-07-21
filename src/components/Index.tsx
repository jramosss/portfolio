type IndexItemProps = {
	label: string;
	onClick: () => void;
};

function Item({ label, onClick }: IndexItemProps) {
	return (
		<div className="flex gap-2 items-center hover:scale-110">
			<div className="border-t border-gray-500 border-y-2 w-full" />
			<button type="button" onClick={onClick} className="text-gray-100 hover:text-gray-300">
				{label}
			</button>
		</div>
	);
}

export default function Index() {
	return (
		<div className="flex flex-col gap-2">
			<Item label="About" onClick={() => console.log("About")} />
			<Item label="Experience" onClick={() => console.log("Experience")} />
			<Item label="Projects" onClick={() => console.log("Projects")} />
			<Item label="Contact" onClick={() => console.log("Contact")} />
		</div>
	);
}
