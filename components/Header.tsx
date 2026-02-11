export default function Header() {
  const name = "Gjest";

  return (
    <header style={{ background: "#000", color: "#fff", padding: "12px 0" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ margin: 0, lineHeight: 1 }}>Skole Header</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <h2 style={{ margin: 0, lineHeight: 1 }}>Velkommen {name}</h2>
        </div>
      </div>
    </header>
  );
}
