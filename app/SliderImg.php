<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class SliderImg extends Model
{
    protected $table = 'slider_img';

    protected $primaryKey = 'slider_img_id';

    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['image'];

}



