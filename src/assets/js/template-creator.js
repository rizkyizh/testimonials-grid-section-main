

const renderCard = ({
  cardColor,
  imgSrc,
  gridOption,
  name,
  descName,
  title,
  descTitle,
  colorName,
  colorTitle
}) => `
      <div class="${gridOption} ${cardColor} p-9 rounded-lg">
        <div class="flex flex-col">
          <div class="flex flex-row mb-4 gap-2">
            <img
              class="rounded-full w-10 border-LightGray-50"
              src="${imgSrc}"
              alt="profile picture"
            />
            <div class="pl-2">
              <p class="font-bold ${colorName}">${name}</p>
              <p class="text-LightGray">${descName}</p>
            </div>
          </div>
          <div>
            <p class="font-bold mb-4 text-2xl leading-none ${colorTitle}">
              ${title}
            </p>
          </div>
          <div class="font-medium text-lg text-LightGray leading-none">
            ${descTitle}
          </div>
        </div>
`


export default renderCard;