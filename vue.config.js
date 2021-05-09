module.export = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/https://github.com/clawsonofre/pokeapi.github.io.git'
        : '/'
}