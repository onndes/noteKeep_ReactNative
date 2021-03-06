export default function getColorApp(theme = "dark") {
    if (theme === "dark") {
        return {
            backgroundMain: "#181c1f",
            backgroundAction: "rgba(31,40,45, 1)",
            backgroundActionOpacity: "rgba(31,40,45, .6)",
            light: "#eeeff1",
            lightTwo: "#73777a",
            selected: "#69d5ff",
            pressIn: "#2d3134",
            backgroundDrawerMenu: "#1d2528",
            backgroundDrawerMenuAction: "#40474d",
            colorTextDrawerMenuAction: "#85cbef",
        };
    } else if (theme === "light") {
        return {};
    }
    return {};
}
