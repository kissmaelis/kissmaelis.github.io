FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067

ENTRYPOINT ["/bin/bash", "-l", "-c"]
WORKDIR /app/


COPY .nixpacks/nixpkgs-23f9169c4ccce521379e602cc82ed873a1f1b52b.nix .nixpacks/nixpkgs-23f9169c4ccce521379e602cc82ed873a1f1b52b.nix
RUN nix-env -if .nixpacks/nixpkgs-23f9169c4ccce521379e602cc82ed873a1f1b52b.nix && nix-collect-garbage -d
RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2t64 libpangocairo-1.0-0 libxss1 libgtk-3-0 libxshmfence1 libglu1 chromium

ARG CI NIXPACKS_METADATA NODE_ENV NPM_CONFIG_PRODUCTION
ENV CI=$CI NIXPACKS_METADATA=$NIXPACKS_METADATA NODE_ENV=$NODE_ENV NPM_CONFIG_PRODUCTION=$NPM_CONFIG_PRODUCTION

# setup phase
# noop

# install phase
ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
COPY . /app/.
RUN --mount=type=cache,id=hCTskGE41oA-/root/npm,target=/root/.npm npm ci

# build phase
COPY . /app/.
RUN --mount=type=cache,id=hCTskGE41oA-node_modules/cache,target=/app/node_modules/.cache npm run build


RUN printf '\nPATH=/app/node_modules/.bin:$PATH' >> /root/.profile


# start
COPY . /app

CMD ["npm run start"]

