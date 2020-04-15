window.kongregateFunctions = {
    
    getUsername: function () {
        // You can now access the Kongregate API with:
        // kongregate.services.getUsername(), etc
        // Proceed with loading your game...

        if (window.kongregate.services.isGuest()) {
            return "";
        } else {
            return window.kongregate.services.getUsername();
        }
    },
	    getUserID: function () {
        // You can now access the Kongregate API with:
        // kongregate.services.getUsername(), etc
        // Proceed with loading your game...

        if (window.kongregate.services.isGuest()) {
            return "";
        } else {
            return window.kongregate.services.getUserId();
        }
    },
    getUsername: function () {
        if (window.kongregate.services.isGuest()) {
            return "";
        }
        else {
            return window.kongregate.services.getUsername();
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