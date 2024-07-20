export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="border-solid border-blue-400 border-2 p-4 opacity-70 hover:opacity-100 ">
			{children}
		</div>
	);
}
