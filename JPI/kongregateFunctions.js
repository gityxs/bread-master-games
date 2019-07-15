window.kongregateFunctions = {

    getUsername:function() {
        // You can now access the Kongregate API with:
        // kongregate.services.getUsername(), etc
        // Proceed with loading your game...
        
        if (window.kongregate.services.isGuest()) {
            return "You are a guest.";
        } else {
            return window.kongregate.services.getUsername();
        }
    },
    getUserID: function () {
        // You can now access the Kongregate API with:
        // kongregate.services.getUsername(), etc
        // Proceed with loading your game...

        if (window.kongregate.services.isGuest()) {
            return "You are a guest.";
        } else {
            return window.kongregate.services.getUserId();
        }
    },
    updateTotalLevelScore: function (totalLevel) {
        window.kongregate.stats.submit("Total Level", totalLevel);
    },
    updatePensionTotal: function (pensionTotal) {
        window.kongregate.stats.submit("Total Pension", pensionTotal);
        return pensionTotal;
    },
    createSortableList: function (listElement) {
        Sortable.create(listElement, {});
    },
    getToken: function () {
        if (window.kongregate.services.isGuest()) {
            return "";
        }
        else {
            return windowkongregate.services.getGameAuthToken();
        }
    },
    LoginWithKongregateID: function () {
        loginInUsingPlayFab();
    }


};