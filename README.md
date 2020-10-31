# GOAL

This is a demo to show-case how to implement a map with `MapBox` and the [`geocoder` gem](https://github.com/alexreisner/geocoder#geocoding-objects).

This demo was created from [this boilerplate](https://github.com/andrerferrer/geocoder-gem#goal).

[You can also check my other demos](https://github.com/andrerferrer/dedemos/blob/master/README.md#ded%C3%A9mos).

## What needs to be done?

### 1. [Have geocoder ready](https://github.com/andrerferrer/geocoder-gem#goal)

### 2. Grab a MapBox API key

Go to the [MapBox page](https://account.mapbox.com/) and grab your token.

It's something like this: `pk.eyJ1IjoiZXBlbXMiLCJhIjoiY2tmZ3F0MjN3MHJnNTMzbG0zOGRkYThidCJ9.Jnqn12r0ZMWSV5YujMpJPQ`

Put your API-key in the `.env` file as the `MAPBOX_API_KEY`. Like this:
```
MAPBOX_API_KEY=pk.eyJ1IjoiZXBlbXMiLCJhIjoiY2tmZ3F0MjN3MHJnNTMzbG0zOGRkYThidCJ9.Jnqn12r0ZMWSV5YujMpJPQ
```

> For this to work, you need to have the gem `dotenv-rails` in your `Gemfile`

> If you don't, just add it and run `bundle install`

### 3. Add a marker to show in your map
In `app/controllers/restaurants_controller.rb`:

```ruby
  def show
    set_restaurant
    @review = Review.new
    @marker = {
      lat: @restaurant.latitude,
      lng: @restaurant.longitude
    }
  end
```

### 4. Add a map to your app

For example, let's add a map on `Restaurants#Show` to see the location of a given map.

In `app/views/restaurants/show.html.erb`:
```erb
<div id="map"
     style="width: 100%; height: 25vh;"
     data-marker="<%= @marker.to_json %>"
     data-mapbox-api-key="<%= ENV['MAPBOX_API_KEY'] %>"></div>
```

### 5. Add [`mapbox-gl`](https://www.npmjs.com/package/mapbox-gl) to your app

In the terminal: `yarn add mapbox-gl`.








And we're good to go 🤓

Good Luck and Have Fun
