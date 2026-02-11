import Map from "@/components/Map";

export default function MapPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
            <h1 style={{ textAlign: "center", marginTop: "16px", marginBottom: "16px" }}>Kart</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Map />
            </div>
        </div>
    )
}