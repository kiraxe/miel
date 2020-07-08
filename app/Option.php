<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use App\OptionValue;

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
        return $this->hasMany('App\OptionValueDescription', 'option_id', 'option_id');
    }

    public function optionValue() {
        return $this->hasMany('App\OptionValue', 'option_id', 'option_id');
    }

    public function valueDescriptionDelete() {
        $this->optionValue()->delete();
    }

    public function deleteValueDescription($optionVal) {
        $this->valueDescription()->whereNotIn('name', $optionVal)->delete();
    }

    public function addOptionValueDescription($option_id, $optionval) {
        $optionValue = [];
        $optionVal = explode(',', $optionval);
        $this->valueDescriptionDelete();

        foreach ($optionVal as $key => $value) {
            $optionValue[$key] = $this->optionValue()->create(['option_id' => (int)$option_id]);
            $optionValue[$key]->description()->create(['option_id' => (int)$option_id, 'name' => $value]);
            $optionValue[$key]->push();
            $optionValue[$key]->name = $value;
        }

        //$this->deleteValueDescription($optionVal);

        return $optionValue;

    }

}
