<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $table = 'option';

    public $timestamps = false;

    protected $primaryKey = 'option_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['type'];

    public function description()
    {
        return $this->hasOne('App\OptionDescription', 'option_id', 'option_id');
    }

    public function valueDescription() {
        return $this->hasMany('App\OptionValue', 'option_id', 'option_id')->with('description');
    }

}
