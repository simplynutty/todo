# Getting Started

## Install

### 1. Clone the project
```bash
git clone git@github.com:simplynutty/todo.git && cd todo
```

### 2. Install [nvm](https://github.com/creationix/nvm#installation)
``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

### 3. Install node
``` bash
nvm install
nvm use
```

### 4. Install yarn
``` bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### 5. Install dependencies
``` bash
yarn install
```

## Development Build
``` bash
yarn dev
```
## Production Build
``` bash
yarn build && yarn start
```
Note: If you receive `EACCESS` error you might need to use `sudo`. i.e. `sudo yarn prod`
