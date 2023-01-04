import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachValue => (
          <MovieItem key={eachValue.id} movieItem={eachValue} />
        ))}
      </Slider>
    </>
  )
}
export default MovieSlider
