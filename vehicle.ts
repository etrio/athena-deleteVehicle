    @command('dv', '/dv - delete vehicle that you are currently sitting in', PERMISSIONS.ADMIN)
    private static deleteVehicle(player: alt.Player, model: string): void {
        if (player.vehicle !== null) {
            player.vehicle.destroy();
        }
    };
