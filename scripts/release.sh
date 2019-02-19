#!/bin/bash
set -e

if [[ -z $1 ]]; then
  echo "Please choose release: "
  options=("patch" "minor" "major" "skip")
  select opt in "${options[@]}"
  do
      case "$REPLY" in
          "patch")
              RELEASE_TYPE="patch"
              break
              ;;
          "minor")
              RELEASE_TYPE="minor"
              break
              ;;
          "major")
              RELEASE_TYPE="major"
              break
              ;;
          "skip")
              break
              ;;
          *) echo invalid option;;
      esac
  done
else
  RELEASE_TYPE=$1
fi

read -p "Releasing $RELEASE_TYPE - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $RELEASE_TYPE ..."

  # get current branch
  GIT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

  # reset local changes
  git reset --hard

  # pull latest changes
  git pull

  # get new tags from remote
  git fetch --tags

  # get latest tag name released
  LAST_PUBLISHED_TAG=$(git describe --tags `git rev-list --tags --max-count=1`)

  # pluck version number from tag
  LAST_VERSION=${LAST_PUBLISHED_TAG//v}

  # bump version
  VERSION=$(./scripts/semver.sh -${RELEASE_TYPE} ${LAST_VERSION})
 
  # bump version
  git tag -a v"$VERSION" -m "release(v${VERSION}): build `date +%d-%m-%Y`"

  # publish
  git push origin refs/tags/v"$VERSION"
fi