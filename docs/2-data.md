```
{
  urlResolver(url: "/women/tops-women/tees-women.html") {
		id
    canonical_url
    type
  }
}
```

```
{
  category (id: 2) {
    name
    url_key
    url_path
    position
    level
    breadcrumbs {
      category_id
      category_name
      category_level
      category_url_key
    }
  }
}
```

```
{
  storeConfig {
    base_media_url
  }
}
```

```
{
  storeConfig {
    base_media_url
  }

  products(filter: {category_id: {eq: "2"}}) {
    total_count
    page_info {
      page_size
      current_page
    }
    items {
      name
      image
      small_image
      thumbnail
      swatch_image
      url_key
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
      special_price
    }
    filters {
      name
      request_var
      filter_items_count
      filter_items {
        label
        value_string
        items_count
      }
    }
  }
}
```
