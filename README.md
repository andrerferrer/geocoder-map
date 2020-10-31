# GOAL

This is a demo to show-case how to implement the [`geocoder` gem](https://github.com/alexreisner/geocoder#geocoding-objects) in a model, adding the coordinates according to the address.

[You can also check my other demos](https://github.com/andrerferrer/dedemos/blob/master/README.md#ded%C3%A9mos).

## What needs to be done?

### 1. Add the gem
```ruby
# Gemfile
gem 'geocoder'
```

Remember to `bundle install`.

### 2. Add the latitude and longitude to the model

`rails g migration AddCoordinatesToModel latitude:float longitude:float`

Run the migration

`rails db:migrate`

### 3. Add `geocoder` to the model

```ruby
  # In the model
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
```


And we're good to go 🤓

Good Luck and Have Fun
