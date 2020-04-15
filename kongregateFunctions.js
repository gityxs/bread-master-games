window.kongregateFunctions = {
    
    getUsername: function () {
        console.log("Getting username...");
        if (window.kongregate.services.isGuest()) {
            console.log("Player is guest.");
            return "";
        } else {
            console.log("Player is logged in.");
            return window.kongregate.services.getUsername();
        }
    },
	getUserID: function () {

    if (window.kongregate.services.isGuest()) {
        return "";
    } else {
        return window.kongregate.services.getUserId();
    }
    },
	getToken: function () {
        if (window.kongregate.services.isGuest()) {
            return "";
        }
        else {
            return window.kongregate.services.getGameAuthToken();
        }
    },
    showRegistration: function (dotNetInstance) {
        window.dotNet = dotNetInstance;
        window.kongregate.services.showRegistrationBox();
        window.kongregate.services.addEventListener("login", window.kongregateFunctions.onKongregatePageLogin);
    },
    onKongregatePageLogin: function () {
        window.dotNet.invokeMethodAsync('RefreshUI');
    }
    
};