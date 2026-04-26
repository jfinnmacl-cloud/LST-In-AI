#!/bin/bash
echo "Building LST Public App for production..."
npm run build

echo ""
echo "Build complete! Files ready in /dist:"
ls -la dist/

echo ""
echo "Upload the CONTENTS of the dist folder (not the folder itself) to your web host."
echo "See DEPLOYMENT.md for detailed instructions."
