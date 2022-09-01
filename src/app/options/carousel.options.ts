export const CAROUSEL_OPTIONS = {
  centerMode: true,
  centerPadding: '350px',
  slidesToShow: 1,
  dots: true,
  infinite: false,
  prevArrow: '<span class="slick-prev"><</span>',
  nextArrow: '<span class="slick-next">></span>',
  autoplaySpeed: 0,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        centerPadding: '250px'
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '220px'
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '220px'
      }
    }
  ]
};
