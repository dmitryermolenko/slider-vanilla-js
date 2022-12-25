const FORWARD_DIRECTION = -1;
const BACK_DIRECTION = 1;
const INITIAL_SCROLLED_POSITION = 0;

export const slider = (root) => {
  // узлы, необходимые для работы
  const sliderRoot = root;
  const sliderPrevButton = sliderRoot.querySelector(".slider__button--prev");
  const sliderNextButton = sliderRoot.querySelector(".slider__button--next");
  const sliderList = sliderRoot.querySelector(".slider__list");
  const sliderItem = sliderList.querySelector(".slider__item");

  // кол-во слайдов, на которорое перелистывается слайдер за одно нажатие по кнопке Вперед/Назад
  const slidesToScroll = 1;

  // ширина одного слайда
  const slideWidth = sliderItem.offsetWidth;

  // расстояние, на которое перелистывается слайдер за одно нажатие по кнопке Вперед/Назад
  // равняется произведению ширины одного слайда и кол-во слайдов
  const slidesToScrollWidth = slideWidth * slidesToScroll;

  // текущее значение прокрутки слайдера
  // изначально равно начальному состоянию прокрутки
  let currentScrolledPosition = INITIAL_SCROLLED_POSITION;

  const setTransform = (position) => {
    return (sliderList.style.transform = `translateX(${position}px)`);
  };

  const setCurrentScrolledPosition = (position) =>
    (currentScrolledPosition = position);

  const calculateScrolledPosition = (direction) => {
    return currentScrolledPosition + slidesToScrollWidth * direction;
  };

  // обработчик события клика по кнопке Назад
  sliderPrevButton.addEventListener("click", () => {
    const currentPosition = calculateScrolledPosition(BACK_DIRECTION);
    setTransform(currentPosition);
    setCurrentScrolledPosition(currentPosition);
  });

  // обработчик события клика по кнопке Вперед
  sliderNextButton.addEventListener("click", () => {
    const currentPosition = calculateScrolledPosition(FORWARD_DIRECTION);
    setTransform(currentPosition);
    setCurrentScrolledPosition(currentPosition);
  });
};
