<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Sliders extends Model
{
    protected $table = 'sliders';

    protected $primaryKey = 'slider_id';

    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['product_id'];

    public function images() {
        return $this->hasMany(SliderImg::class, 'slider_id', 'slider_id');
    }

    public function deleteImg() {
        $this->images()->delete();
    }

}


