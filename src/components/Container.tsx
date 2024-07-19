export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-solid border-white border-2 p-4 opacity-80">
      {children}
    </div>
  );
}
