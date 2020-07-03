<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class OptionValue extends Model
{
    protected $table = 'option_value';

    public $timestamps = false;

    protected $primaryKey = 'option_value_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['sort_order', 'option_id'];

    public function description()
    {
        return $this->hasOne('App\OptionValueDescription', 'option_value_id', 'option_value_id');
    }

}
