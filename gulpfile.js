const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {

    mix.sass(
        "app.scss"
    );

    mix.scripts(
        [
            "../../../node_modules/jquery/dist/jquery.js",
            "../../../node_modules/ssd-select/src/jquery.ssd-select.js",
            "app.js"
        ],
        "public/js/app.js"
    );

    mix.version(['css/app.css', 'js/app.js']);
});
