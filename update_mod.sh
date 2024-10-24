mod="$@"
if [ -z "$mod" ]; then
    cd mods && \
    mod=$(
        fd pw.toml | sed 's/.pw.toml//' | fzf
    ) && \
    cd - || exit 1
fi
echo "updating for modinth"
packwiz update "$mod"

echo "updating for curseforge"
cd curseforge && packwiz update "$mod"
