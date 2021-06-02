# Node version manager

## About

- Version manager for node.js

## Installing

open shell or terminal and pass following code  

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

or

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

open profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc) and add following code

```node
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

** More information in [https://github.com/nvm-sh/nvm#readme](https://github.com/nvm-sh/nvm#readme)

## Usage

### Install Node

For the latest version

```
nvm install node
```

For specific version

```
nvm install x.xx.x
```

### Switch Node version

To change current usage node version

```
nvm use x.xx.x
```
