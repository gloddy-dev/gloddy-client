interface LocationSectionProps {
  location: string;
}

export default function LocationSection({ location }: LocationSectionProps) {
  return (
    <section>
      <div className="mb-10">
        <h2 className="text-14 text-black">모임 위치</h2>
      </div>
      <div className="rounded-8 bg-gray6 p-16">
        <div className="mb-8 h-100 rounded-8 bg-black"></div>
        <p className="text-14 text-black">{location}</p>
      </div>
    </section>
  );
}
