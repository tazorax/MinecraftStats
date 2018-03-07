mcstats.showPlayerList = function() {
    mcstats.viewContent.empty();

    mcstats.playerIdsByName.forEach(function(uuid) {
        var player = mcstats.players[uuid];

        var widget = mcstats.playerWidget(uuid);
        var last = mcstats.lastOnlineWidget(player.last);

        mcstats.viewContent.append(`
            <div class="p-1 mb-1 mcstats-entry">
                <div class="d-flex p-1 round-box">
                    <div class="">
                        ${widget}
                    </div>
                    <div class="ml-auto">
                        Last online: ${last}
                    </div>
                </div>
            </div>
        `);
    });

    // show
    mcstats.showView('Player List', false, false, false);
}
