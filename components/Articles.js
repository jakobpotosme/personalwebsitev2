import React from 'react'

const Articles = ({title, description, url, cover_img, published_at, comments_count, page_views_count,reading_time_minutes}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{url}</h1>
        <h1>{cover_img}</h1>
        <h1>{published_at}</h1>
        <h1>{comments_count} </h1>
        <h1>{page_views_count}</h1>
        <h1>{reading_time_minutes}</h1>
        

    </div>
  )
}

export default Articles