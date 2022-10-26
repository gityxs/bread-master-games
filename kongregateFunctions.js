window.kongregateFunctions = {
    
    getUsername: function () {
        if (window.kongregate.services.isGuest()) {
            return "";
        } else {
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