export const server = (done) => {
    console.log(done);
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 8085,
    });
}