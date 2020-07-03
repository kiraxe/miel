<?php


namespace App\Services;


class SelectForm
{

    public static function getSelectCategory($queryGet) {

        $category = collect([]);

        foreach ($queryGet as $value) {
            $category->push(['category_id' => $value->category_id, 'name' => $value->attributes->name]);
        }

        return $category;
    }
}
