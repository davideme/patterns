<?php

function twice($f) {
    return function($x) use ($f) { return $f($f($x)); };
}

function plusThree($i) {
    return $i + 3;
}

$plusSix = twice('plusThree');

echo $plusSix(7);  // 13
