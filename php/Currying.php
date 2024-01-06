<?php

function add($a) {
    return function($b) use ($a) {
        return $a + $b;
    };
}

$addFive = add(5);
echo $addFive(3);  // 8
