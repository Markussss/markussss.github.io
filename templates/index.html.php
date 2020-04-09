<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="mvp.css">
        <title>bookmarklets</title>
    </head>
    <body>
        <header>
            <h1>bookmarklets</h1>
        </header>
        <hr>
        <main>
            <header>
                <h2>Just a small collection of my bookmarklets</h2>
            </header>
            <section>
                <ul>
                    <li>
                        <a href='javascript:(()=>{<?= str_replace("'", '`', file_get_contents('build/recommendskill.js')); ?>})()'>Get reccommended Duolingo skill</a>
                        -
                        <small>created for: duolingo.com</small>
                        -
                        <small>
                            <a href="https://github.com/Markussss/markussss.github.io/blob/master/bookmarklets/recommendskill.js" target="_blank">
                                source on github.com
                            </a>
                        </small>
                    </li>
                    <li>
                        <a href='javascript:(()=>{<?= str_replace("'", '`', file_get_contents('build/removeseen.js')); ?>})()'>Remove watched videos on youtube</a>
                        -
                        <small>created for: youtube.com</small>
                        -
                        <small>
                            <a href="https://github.com/Markussss/markussss.github.io/blob/master/bookmarklets/removeseen.js" target="_blank">
                                source on github.com
                            </a>
                        </small>
                    </li>
                    <li>
                        <a href='javascript:(()=>{<?= str_replace("'", '`', file_get_contents('build/videospeed.js')); ?>})()'>Set video playback speed</a>
                        -
                        <small>created for: all sites with videos</small>
                        -
                        <small>
                            <a href="https://github.com/Markussss/markussss.github.io/blob/master/bookmarklets/videospeed.js" target="_blank">
                                source on github.com
                            </a>
                        </small>
                    </li>
                    <li>
                        <a href='javascript:(()=>{<?= str_replace("'", '`', file_get_contents('build/openvideos.js')); ?>})()'>Open videos in new tab</a>
                        -
                        <small>created for: all sites with videos</small>
                        -
                        <small>
                            <a href="https://github.com/Markussss/markussss.github.io/blob/master/bookmarklets/openvideos.js" target="_blank">
                                source on github.com
                            </a>
                        </small>
                    </li>
                </ul>
            </section>
            <hr>
            <section>
                <header>
                    <h2>How to use?</h2>
                </header>
                <main>
                    <ol>
                        <li>Drag the link from the list into your bookmarks toolbar</li>
                        <li>Visit the site where you want to use the bookmarklet</li>
                        <li>Click the bookmarklet</li>
                    </ol>
                </main>
            </section>
            <hr>
            <section>
                <header>
                    <h2>Source code</h2>
                </header>
                <main>
                    <p>
                        <a href="https://github.com/Markussss/markussss.github.io" target="_blank"><i>All code is available on github</i></a>
                    </p>
                </main>
            </section>
        </main>
        <hr>
        <footer>
            <section>
                <p>
                    <b>created by <a href="https://github.com/Markussss" target="_blank">Markus Igeland</a></b>
                </p>
            </section>
            <section>
                <p>
                    stylesheet from <a href="https://github.com/andybrewer/mvp/" target="_blank">mvp css</a>
                </p>
            </section>
        </footer>
    </body>
    <script src="build/app.js"></script>
</html>
