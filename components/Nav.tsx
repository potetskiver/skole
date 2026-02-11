export default function Nav() {
    return (
        <nav style={{ background: "#333", color: "#fff", padding: "8px 0" }}>
            <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 16px", display: "flex", gap: "16px" }}>
                <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Hjem</a>
                <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Om oss</a>
                <a href="/gallery" style={{ color: "#fff", textDecoration: "none" }}>Galleri</a>
                <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Kontakt</a>
            </div>
        </nav>
    )
}