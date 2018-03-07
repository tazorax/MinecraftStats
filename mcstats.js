// Initialize
var mcstats = {
    loader: $('#loader'),

    info: $('#info'),
    content: $('#content'),
    footer: $('#footer'),

    view: $('#view'),
    viewTitle: $('#view-title'),
    viewSubtitle: $('#view-subtitle'),
    viewDesc: $('#view-desc'),
    viewIcon: $('#view-icon'),
    viewContent: $('#view-content'),

    awards: {},
    awardKeysByTitle: new Array(),
    players: {},
    playerIdsByName: new Array(),
};

// Initialize client
mcstats.init = function() {
    mcstats.info.css('display', 'block');
    mcstats.content.css('display', 'block');
}

// Show loader and nothing else
mcstats.showLoader = function() {
    mcstats.content.hide();
    mcstats.loader.show();
}

// Show view - content shall be prepared before calling this
mcstats.showView = function(title, subtitle, desc, iconUrl) {
    mcstats.viewTitle.html(title);

    if(subtitle) {
        mcstats.viewSubtitle.html(subtitle);
        mcstats.viewSubtitle.show();
    } else {
        mcstats.viewSubtitle.hide();
    }

    if(desc) {
        mcstats.viewDesc.html(desc);
        mcstats.viewDesc.show();
    } else {
        mcstats.viewDesc.hide();
    }

    if(iconUrl) {
        mcstats.viewIcon.attr('src', iconUrl);
        mcstats.viewIcon.show();
    } else {
        mcstats.viewIcon.hide();
    }

    mcstats.loader.hide();
    mcstats.content.show();
}

// Register navigation event handler
window.onhashchange = function() {
    window.scrollTo(0, 0);
    mcstats.showLoader();

    var hash = window.location.hash;
    if(hash.startsWith('#award:')) {
        // open award view
        var id = hash.substr(7);
        mcstats.showAward(id);
    } else if(hash.startsWith('#player:')) {
        // open player view
        var uuid = hash.substr(8);
        mcstats.showPlayer(uuid);
    } else if(hash == '#players') {
        // go to player list
        mcstats.showPlayerList();
    } else {
        // go to awards list (default)
        mcstats.showAwardsList();
    }
};


