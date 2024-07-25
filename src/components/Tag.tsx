export default function Tag({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-blue-400/20">
			<span className="text-blue-300 shadow-xl">{children}</span>
		</div>
	);
}
