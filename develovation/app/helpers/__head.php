<?php

/**
 * Get Page Title
 */
function __get_title()
{
    $__titles = require(TITLE_CONFIG_FILE);

    echo
        isset(
            $__titles
                [BASE_DIR_NAME]
                [NOW_REQUEST_FILE_NAME]
        ) ?
        $__titles
            [BASE_DIR_NAME]
            [NOW_REQUEST_FILE_NAME] :
        "404 Not Found"
    ;
}
