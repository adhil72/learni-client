#!/bin/bash

# Get all commit hashes
commits=($(git rev-list --all))

# Loop through the commits backwards
for commit in "${commits[@]}"
do
    # Checkout the commit
    git checkout "$commit"
    
    # Print the commit details
    git log -1 --pretty=oneline

    # Wait for the user to press Enter
    read -p "Press Enter to checkout the next commit..."
done

echo "Reached the first commit."
