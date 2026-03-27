#!/usr/bin/env bash
# Pack all publishable @cobalt packages into tarballs for local testing.
#
# Usage:
#   pnpm pack:local                    # build + pack into ./local-packs/
#   pnpm pack:local --skip-build       # pack only (if you already ran pnpm build)
#
# Then in your external app:
#   npm install /path/to/cobalt/local-packs/*.tgz
#
# Re-run this script after making changes, then reinstall in your app.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT_DIR/local-packs"

# Parse flags
SKIP_BUILD=false
for arg in "$@"; do
  case $arg in
    --skip-build) SKIP_BUILD=true ;;
  esac
done

# Build all packages first (unless skipped)
if [ "$SKIP_BUILD" = false ]; then
  echo "Building all packages..."
  pnpm --dir "$ROOT_DIR" build
  echo ""
fi

# Clean and recreate output directory
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

# Publishable packages (skip docs since it is internal)
PACKAGES=(tokens icons components react vue angular)

echo "Packing @cobalt packages into $OUT_DIR/"
echo ""

for pkg in "${PACKAGES[@]}"; do
  pkg_dir="$ROOT_DIR/packages/$pkg"
  if [ -d "$pkg_dir" ]; then
    tarball=$(cd "$pkg_dir" && pnpm pack --pack-destination "$OUT_DIR" 2>/dev/null)
    basename=$(basename "$tarball")
    echo "  $basename"
  fi
done

# Rewrite inter-package dependencies from version numbers to file: references.
# pnpm pack converts workspace:* to the package version (e.g., "0.0.1"), but
# npm can't resolve those from the registry. We rewrite them to point at the
# sibling tarballs so a single `npm install ./local-packs/*.tgz` just works.
echo ""
echo "Rewriting inter-package dependencies to file: references..."

TEMP_DIR="$OUT_DIR/.repack"

for tgz in "$OUT_DIR"/*.tgz; do
  pkg_name=$(basename "$tgz" .tgz)

  # Extract
  rm -rf "$TEMP_DIR"
  mkdir -p "$TEMP_DIR"
  tar -xzf "$tgz" -C "$TEMP_DIR"

  pkg_json="$TEMP_DIR/package/package.json"

  # Rewrite @cobalt/* dependencies to file: references
  needs_repack=false
  for dep_pkg in "${PACKAGES[@]}"; do
    dep_scope="@cobalt/$dep_pkg"
    dep_tgz=$(ls "$OUT_DIR"/cobalt-"$dep_pkg"-*.tgz 2>/dev/null | head -1)
    if [ -n "$dep_tgz" ] && grep -q "\"$dep_scope\"" "$pkg_json" 2>/dev/null; then
      dep_basename=$(basename "$dep_tgz")
      # Replace the version with a file: reference to the sibling tarball
      sed -i '' "s|\"$dep_scope\": \"[^\"]*\"|\"$dep_scope\": \"file:$dep_basename\"|g" "$pkg_json"
      needs_repack=true
    fi
  done

  # Repack if modified
  if [ "$needs_repack" = true ]; then
    tar -czf "$tgz" -C "$TEMP_DIR" package
  fi
done

rm -rf "$TEMP_DIR"

echo ""
echo "Done! Install in your app with:"
echo ""
echo "  npm install $OUT_DIR/*.tgz"
echo ""
