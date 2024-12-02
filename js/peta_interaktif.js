document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.getElementById("peta");
    const locations = [
        { name: "Aceh", x: "20%", y: "30%" },
        { name: "Jakarta", x: "50%", y: "60%" },
        { name: "Papua", x: "90%", y: "80%" }
    ];

    locations.forEach(location => {
        const point = document.createElement("div");
        point.className = "map-point";
        point.style.left = location.x;
        point.style.top = location.y;
        point.title = location.name;

        point.addEventListener("click", () => {
            alert(`Anda mengklik: ${location.name}`);
        });

        mapContainer.appendChild(point);
    });
});
