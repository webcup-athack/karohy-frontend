export default function EntryLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="min-h-screen bg-[conic-gradient(from_29.73deg_at_61.67%_117.13%,_#ED254E_-1.6deg,_#000000_164.31deg,_#ED254E_358.4deg,_#000000_524.31deg)]">{children}</div>
  );
}
