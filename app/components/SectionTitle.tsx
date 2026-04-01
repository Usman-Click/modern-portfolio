export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-[52px] md:text-[64px] font-semibold tracking-tight">
      <span className="bg-gradient-to-b from-white via-white/80 to-white/30 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
  );
}