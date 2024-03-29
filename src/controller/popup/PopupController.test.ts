import FontSliderView from "../../view/popup/FontSliderView";
import TextColorPickerView from "../../view/popup/TextColorPickerView";
import LanguageSelectView from "../../view/popup/LanguageSelectorView";
import TranslatingSwitchView from "../../view/popup/TranslatingSwitchView";
import LanguageSelectorButtonView from "../../view/popup/LanguageSelectorButtonView";

import PopupModel from "../../model/popup/PopupModel";

import PopupController from "./PopupController";

const DEFAULT_RANGE_VALUE = "25";
const DEFAULT_RANGE_MIN = "10";
const DEFAULT_RANGE_MAX = "30";

describe("Popup Controller Test", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="popup_wrapper">
        <div class="translate_controller">
          <div class="wrapper">
            <div class="container">
              <div class="tag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      fill="#ffffff"
                      d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14zM7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z"
                      data-original="#ffffff"
                    ></path>
                  </g>
                </svg>
                <span>Subtitle</span>
              </div>
              <label class="switch">
                <input id="translate" type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="wrapper">
            <div class="container">
              <div class="tag">
                <?xml version="1.0" encoding="UTF-8" standalone="no"?>

                <svg
                  version="1.1"
                  id="svg789"
                  xml:space="preserve"
                  width="20"
                  height="20"
                  viewBox="0 0 682.66669 682.66669"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:svg="http://www.w3.org/2000/svg"
                >
                  <defs id="defs793">
                    <clipPath clipPathUnits="userSpaceOnUse" id="clipPath803">
                      <path d="M 0,512 H 512 V 0 H 0 Z" id="path801" />
                    </clipPath>
                  </defs>
                  <g
                    id="g795"
                    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
                  >
                    <g id="g797">
                      <g id="g799" clip-path="url(#clipPath803)">
                        <path
                          d="M 90.925,421.075 H 15 V 497 h 75.925 z"
                          style="
                            fill: none;
                            stroke: #ffffff;
                            stroke-width: 30;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                            stroke-dasharray: none;
                            stroke-opacity: 1;
                          "
                          id="path805"
                        />
                        <path
                          d="M 497,421.075 H 421.075 V 497 H 497 Z"
                          style="
                            fill: none;
                            stroke: #ffffff;
                            stroke-width: 30;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                            stroke-dasharray: none;
                            stroke-opacity: 1;
                          "
                          id="path807"
                        />
                        <path
                          d="M 90.925,15 H 15 v 75.925 h 75.925 z"
                          style="
                            fill: none;
                            stroke: #ffffff;
                            stroke-width: 30;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                            stroke-dasharray: none;
                            stroke-opacity: 1;
                          "
                          id="path809"
                        />
                        <path
                          d="M 497,15 H 421.075 V 90.925 H 497 Z"
                          style="
                            fill: none;
                            stroke: #ffffff;
                            stroke-width: 30;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                            stroke-dasharray: none;
                            stroke-opacity: 1;
                          "
                          id="path811"
                        />
                        <g id="g813" transform="translate(459.0376,421.0752)">
                          <path
                            d="M 0,0 V -330.15"
                            style="
                              fill: none;
                              stroke: #ffffff;
                              stroke-width: 30;
                              stroke-linecap: butt;
                              stroke-linejoin: round;
                              stroke-miterlimit: 10;
                              stroke-dasharray: none;
                              stroke-opacity: 1;
                            "
                            id="path815"
                          />
                        </g>
                        <g id="g817" transform="translate(90.9248,459.0376)">
                          <path
                            d="M 0,0 H 330.15"
                            style="
                              fill: none;
                              stroke: #ffffff;
                              stroke-width: 30;
                              stroke-linecap: butt;
                              stroke-linejoin: round;
                              stroke-miterlimit: 10;
                              stroke-dasharray: none;
                              stroke-opacity: 1;
                            "
                            id="path819"
                          />
                        </g>
                        <g id="g821" transform="translate(52.9624,90.9248)">
                          <path
                            d="M 0,0 V 330.15"
                            style="
                              fill: none;
                              stroke: #ffffff;
                              stroke-width: 30;
                              stroke-linecap: butt;
                              stroke-linejoin: round;
                              stroke-miterlimit: 10;
                              stroke-dasharray: none;
                              stroke-opacity: 1;
                            "
                            id="path823"
                          />
                        </g>
                        <g id="g825" transform="translate(421.0752,52.9624)">
                          <path
                            d="M 0,0 H -330.15"
                            style="
                              fill: none;
                              stroke: #ffffff;
                              stroke-width: 30;
                              stroke-linecap: butt;
                              stroke-linejoin: round;
                              stroke-miterlimit: 10;
                              stroke-dasharray: none;
                              stroke-opacity: 1;
                            "
                            id="path827"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="g829" transform="translate(363.4976,305.2935)">
                      <path
                        d="M 0,0 V 54.544 H -214.995 V 0"
                        style="
                          fill: none;
                          stroke: #ffffff;
                          stroke-width: 30;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                          stroke-dasharray: none;
                          stroke-opacity: 1;
                        "
                        id="path831"
                      />
                    </g>
                    <g id="g833" transform="translate(256,359.8379)">
                      <path
                        d="M 0,0 V -209.676"
                        style="
                          fill: none;
                          stroke: #ffffff;
                          stroke-width: 30;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                          stroke-dasharray: none;
                          stroke-opacity: 1;
                        "
                        id="path835"
                      />
                    </g>
                    <g id="g837" transform="translate(213.0493,150.1621)">
                      <path
                        d="M 0,0 H 85.901"
                        style="
                          fill: none;
                          stroke: #ffffff;
                          stroke-width: 30;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                          stroke-dasharray: none;
                          stroke-opacity: 1;
                        "
                        id="path839"
                      />
                    </g>
                  </g>
                </svg>

                <span>Text Size</span>
              </div>
              <input
                min=${DEFAULT_RANGE_MIN}
                max=${DEFAULT_RANGE_MAX}
                value=${DEFAULT_RANGE_VALUE}
                type="range"
                id="font-size-range"
              />
            </div>
          </div>
          <div class="wrapper">
            <div class="container">
              <div class="tag">
                <?xml version="1.0" encoding="UTF-8"?>
                <svg
                  fill="#000000"
                  width="20"
                  height="20"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                >
                  <path
                    d="M1846.308 1476.923V1920H74v-443.077h1772.308Zm-147.693 147.692H221.692v147.693h1476.923v-147.693ZM1109.751.06l509.391 1227.028-136.468 56.566-164.972-397.588H602.576l-164.972 397.588-136.468-56.566L810.526.059h299.225Zm-98.658 147.692h-101.76L663.868 738.373h592.542L1011.093 147.75Z"
                    fill-rule="evenodd"
                    fill="#ffffff"
                  />
                </svg>
                <span>Text Color</span>
              </div>
              <input id="text-color-picker" type="color" />
            </div>
          </div>
          <div class="wrapper">
            <div class="container">
              <div class="tag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  fill="#ffffff"
                >
                  <g>
                    <g>
                      <path
                        d="M195.708,268.059c-0.821-4.11-29.103-145.52-30-150.001C164.307,111.047,158.15,106,151,106h-30
            c-7.15,0-13.307,5.047-14.708,12.058c-0.911,4.557-29.222,146.111-30,150c-1.625,8.124,3.644,16.026,11.767,17.65
            c8.123,1.625,16.026-3.644,17.65-11.767L115.297,226h41.406l9.588,47.942c1.625,8.127,9.531,13.392,17.65,11.767
            C192.064,284.084,197.333,276.182,195.708,268.059z M121.297,196l12-60h5.406l12,60H121.297z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M436,226h-45v-15c0-8.284-6.716-15-15-15s-15,6.716-15,15v15h-45c-8.284,0-15,6.716-15,15s6.716,15,15,15h3.63
            c8.547,27.612,21.415,48.806,35.575,65.79c-11.525,10.542-23.187,19.187-33.575,27.497c-6.469,5.175-7.518,14.614-2.342,21.083
            c5.178,6.472,14.618,7.515,21.083,2.342c10.446-8.357,22.967-17.644,35.629-29.264c12.671,11.628,25.215,20.932,35.629,29.264
            c6.469,5.176,15.909,4.126,21.083-2.342c5.175-6.469,4.126-15.909-2.342-21.083c-10.361-8.291-22.038-16.945-33.575-27.497
            c14.16-16.984,27.028-38.178,35.575-65.79H436c8.284,0,15-6.716,15-15S444.284,226,436,226z M376,299.745
            c-9.575-12.02-18.189-26.367-24.683-43.845h49.365C394.189,273.378,385.575,287.725,376,299.745z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M467,91H250.599l-6.43-51.582C241.36,16.946,222.164,0,199.517,0H45C20.187,0,0,20.187,0,45v331c0,24.813,20.187,45,45,45
            h126.483l6.348,51.582c2.804,22.427,22,39.418,44.653,39.418H467c24.813,0,45-20.187,45-45V136C512,111.187,491.813,91,467,91z
            M45,391c-8.271,0-15-6.729-15-15V45c0-8.271,6.729-15,15-15h154.517c7.549,0,13.948,5.648,14.883,13.134
            c2.174,17.436,41.208,330.57,43.364,347.866H45z M206.724,461.75L201.709,421h40.244L206.724,461.75z M482,467
            c0,8.271-6.729,15-15,15H228.874l57.104-66.053c2.923-3.297,4.233-7.674,3.629-12.024L254.339,121H467c8.271,0,15,6.729,15,15V467
            z"
                      />
                    </g>
                  </g>
                </svg>
                <span>Language</span>
              </div>
              <button id="language-select-button" class="language_button">
                Korean
              </button>
            </div>
          </div>
        </div>
        <div id="language-controller" class="language_controller hidden">
          <div data-lang="en" class="language_wrapper">
            <p>English</p>
            <svg
              class="hidden"
              fill="#ffffff"
              height="15"
              viewBox="0 0 24 24"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
                fill="#ffffff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div data-lang="ko" class="language_wrapper">
            <p>Korean</p>
            <svg
              class="hidden"
              height="15"
              viewBox="0 0 24 24"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
                fill="#ffffff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div data-lang="ja" class="language_wrapper">
            <p>Japanese</p>
            <svg
              class="hidden"
              height="15"
              viewBox="0 0 24 24"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
                fill="#ffffff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div data-lang="zh" class="language_wrapper">
            <p>Chinese</p>
            <svg
              class="hidden"
              height="15"
              viewBox="0 0 24 24"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
                fill="#ffffff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div data-lang="de" class="language_wrapper">
            <p>German</p>
            <svg
              class="hidden"
              height="15"
              viewBox="0 0 24 24"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
                fill="#ffffff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div data-lang="es" class="language_wrapper">
            <p>Spanish</p>
            <svg
              class="hidden"
              height="15"
              viewBox="0 0 24 24"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
                fill="#ffffff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    `;
  });

  it("The default value is set when the controller initial setting function is executed", async () => {
    const fontSliderView = new FontSliderView();
    const textColorPickerView = new TextColorPickerView();
    const languageSelectorView = new LanguageSelectView();
    const translatingSwitchView = new TranslatingSwitchView();
    const languageSelectorButtonView = new LanguageSelectorButtonView();

    const popupModel = new PopupModel();

    const mockSwitchCallback = jest.fn();
    const mockTextColorCallback = jest.fn();
    const mockFontRangeCallback = jest.fn();
    const mockSelectorButtonCallback = jest.fn();

    const popupController = new PopupController(
      fontSliderView,
      textColorPickerView,
      languageSelectorView,
      translatingSwitchView,
      languageSelectorButtonView,
      popupModel,
      mockSwitchCallback,
      mockTextColorCallback,
      mockFontRangeCallback,
      mockSelectorButtonCallback
    );

    await popupController.setInitialSwitchState();
    await popupController.setInitialFontRangeSlider();
    await popupController.setInitialLanguageSelectorAndButton();

    const currentSwitchValue = translatingSwitchView.getValue();
    const currentFontRangeValue = fontSliderView.getValue();
    const currentSelectorValue = languageSelectorButtonView.getValue();

    expect(mockSwitchCallback).toBeCalledTimes(1);
    expect(mockFontRangeCallback).toBeCalledTimes(1);
    expect(mockSelectorButtonCallback).toBeCalledTimes(1);

    expect(currentSwitchValue).toBe(false);
    expect(currentFontRangeValue).toBe(DEFAULT_RANGE_VALUE);
    expect(currentSelectorValue).toBe("Korean");
  });

  it("The value changes when the translation switch is clicked", async () => {
    const fontSliderView = new FontSliderView();
    const textColorPickerView = new TextColorPickerView();
    const languageSelectorView = new LanguageSelectView();
    const translatingSwitchView = new TranslatingSwitchView();
    const languageSelectorButtonView = new LanguageSelectorButtonView();

    const popupModel = new PopupModel();

    const mockSwitchCallback = jest.fn();
    const mockTextColorCallback = jest.fn();
    const mockFontRangeCallback = jest.fn();
    const mockSelectorButtonCallback = jest.fn();

    new PopupController(
      fontSliderView,
      textColorPickerView,
      languageSelectorView,
      translatingSwitchView,
      languageSelectorButtonView,
      popupModel,
      mockSwitchCallback,
      mockTextColorCallback,
      mockFontRangeCallback,
      mockSelectorButtonCallback
    );

    const SwitchElement = translatingSwitchView.getElement();

    SwitchElement.click();

    const currentSwitchValueOfView = translatingSwitchView.getValue();
    const currentSwitchValueOfModel = await popupModel.getSwitchValue();

    expect(currentSwitchValueOfView).toBe(true);
    expect(currentSwitchValueOfModel).toBe(true);
  });

  it("Select button wrapper opens when clicking the translation settings button", () => {
    const fontSliderView = new FontSliderView();
    const textColorPickerView = new TextColorPickerView();
    const languageSelectorView = new LanguageSelectView();
    const translatingSwitchView = new TranslatingSwitchView();
    const languageSelectorButtonView = new LanguageSelectorButtonView();

    const popupModel = new PopupModel();

    const mockSwitchCallback = jest.fn();
    const mockTextColorCallback = jest.fn();
    const mockFontRangeCallback = jest.fn();
    const mockSelectorButtonCallback = jest.fn();

    new PopupController(
      fontSliderView,
      textColorPickerView,
      languageSelectorView,
      translatingSwitchView,
      languageSelectorButtonView,
      popupModel,
      mockSwitchCallback,
      mockTextColorCallback,
      mockFontRangeCallback,
      mockSelectorButtonCallback
    );

    const LanguageSelectorButtonElement =
      languageSelectorButtonView.getElement();

    LanguageSelectorButtonElement.click();

    const LanguageSelectorElement = languageSelectorView.getElement();

    expect(LanguageSelectorElement.className).not.toBe(
      "language_controller hidden"
    );
    expect(LanguageSelectorElement.className).toBe("language_controller");
  });

  it("Select button wrapper opens when clicking the translation settings button", () => {
    const SELECTED_LANGUAGE = "en";

    const fontSliderView = new FontSliderView();
    const textColorPickerView = new TextColorPickerView();
    const languageSelectorView = new LanguageSelectView();
    const translatingSwitchView = new TranslatingSwitchView();
    const languageSelectorButtonView = new LanguageSelectorButtonView();

    const popupModel = new PopupModel();

    const mockSwitchCallback = jest.fn();
    const mockTextColorCallback = jest.fn();
    const mockFontRangeCallback = jest.fn();
    const mockSelectorButtonCallback = jest.fn();

    new PopupController(
      fontSliderView,
      textColorPickerView,
      languageSelectorView,
      translatingSwitchView,
      languageSelectorButtonView,
      popupModel,
      mockSwitchCallback,
      mockTextColorCallback,
      mockFontRangeCallback,
      mockSelectorButtonCallback
    );

    const LanguageSelectorButtonElement =
      languageSelectorButtonView.getElement();

    LanguageSelectorButtonElement.click();

    const TargetLanguageElement = document.querySelector(
      `[data-lang="${SELECTED_LANGUAGE}"]`
    ) as HTMLDivElement;

    TargetLanguageElement.click();

    const LanguageSelectorButtonValue = languageSelectorButtonView.getValue();

    expect(LanguageSelectorButtonElement.className).not.toBe(
      "language_controller hidden"
    );
    expect(LanguageSelectorButtonValue).toBe("English");
  });

  it("Modify the font size input to change the value", () => {
    const fontSliderView = new FontSliderView();
    const textColorPickerView = new TextColorPickerView();
    const languageSelectorView = new LanguageSelectView();
    const translatingSwitchView = new TranslatingSwitchView();
    const languageSelectorButtonView = new LanguageSelectorButtonView();

    const popupModel = new PopupModel();

    const mockSwitchCallback = jest.fn();
    const mockTextColorCallback = jest.fn();
    const mockFontRangeCallback = jest.fn();
    const mockSelectorButtonCallback = jest.fn();

    new PopupController(
      fontSliderView,
      textColorPickerView,
      languageSelectorView,
      translatingSwitchView,
      languageSelectorButtonView,
      popupModel,
      mockSwitchCallback,
      mockTextColorCallback,
      mockFontRangeCallback,
      mockSelectorButtonCallback
    );

    const FontSliderElement = fontSliderView.getElement();
    const event = new Event("input", { bubbles: true, cancelable: true });

    FontSliderElement.value = "30";
    FontSliderElement.dispatchEvent(event);

    const FontSliderValue = fontSliderView.getValue();

    expect(FontSliderValue).toBe("30");
  });
});
