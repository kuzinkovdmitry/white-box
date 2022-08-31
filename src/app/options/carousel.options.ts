export const CAROUSEL_OPTIONS = {
  centerMode: true,
  centerPadding: '350px',
  slidesToShow: 1,
  dots: true,
  infinite: false,
  prevArrow: '<img class="slick-prev" src="../../../assets/img/arrow-left.png" alt="Arrow left">',
  nextArrow: '<img class="slick-next" src="../../../assets/img/arrow-right.png" alt="Arrow right">',
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
