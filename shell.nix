{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  # nativeBuildInputs is usually what you want -- tools you need to run
  nativeBuildInputs = with pkgs.buildPackages; [
    nodejs_20 # using nvm in nixos is not really recommended https://discourse.nixos.org/t/how-to-install-nvm-node-version-manager-in-nixos/20644
    postman
  ];

  shellHook = ''
    '';
}
