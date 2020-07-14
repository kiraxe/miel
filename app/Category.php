<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Category extends Model
{

    use NodeTrait;

    protected $table = 'category';

    protected $primaryKey = 'category_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id', 'image', 'link'
    ];

    public function parentAttributes(): array
    {
        return $this->parent ? $this->parent->allAttributes() : [];
    }

    public function allAttributes(): array
    {
        $attributes = $this->getAttributes();

        $attributes['attributes'] = current($this->attributes()->getModels());

        return $attributes;
    }

    public function getAllAttribute(): array {
        return array_merge($this->allAttributes(), $this->parentAttributes());
    }

    public function attributes() {
        return $this->hasOne(CategoryDescription::class, 'category_id', 'category_id');
    }

    public function getAllParentNameAndId(): array {

        $parents = collect([]);
        $links = collect([]);

        $attr = $this->attributes;

        $parent = $this->parent;

        while(!is_null($parent)) {
            $attributes = current($parent->attributes()->getModels());
            $parents->push($attributes->name);
            $links->push($parent->link);
            $parent = $parent->parent;
        }

        return ['id' => $attr['category_id'], 'parent' => array_reverse($parents->all()), 'link' => array_reverse($links->all())];
    }

}
