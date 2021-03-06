import getColorApp from "../../../utils/colorApp";

const colorApp = getColorApp();

const customScreenOptions = {
    headerShown: false,
    drawerStyle: {
        backgroundColor: colorApp.backgroundMain,
    },
    drawerActiveBackgroundColor: colorApp.backgroundDrawerMenuAction,
    drawerActiveTintColor: colorApp.colorTextDrawerMenuAction,
    drawerInactiveTintColor: colorApp.light,
    drawerLabelStyle: {
        padding: -4,
        paddingLeft: 0,
        marginLeft: -12,
        borderRadius: 50,
    },
    drawerItemStyle: {
        paddingLeft: 4,
        borderRadius: 0,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
};
export default customScreenOptions;
